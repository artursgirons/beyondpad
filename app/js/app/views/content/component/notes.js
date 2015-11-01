app.view.content.component.notes = app.lib.element({
    displayName: 'content.component.notes',
    defaults: {
        lazyLoadTimeout: 0, // Set to null to disable lazyLoad (all notes are mounted already pre inflated)
        initialBatchSize: 30,
        lazyBatch: null,
        noteWidth: 300,
        spacer: 15
    },
    componentWillMount: function () {
        this.collection = this.props.collection;

        this.collection.on('add', this.onNewNoteAdded, this);
        this.collection.on('remove update batch:collection', this.forceUpdate.bind(this, null), this);

        app.events.on('resize:window resize:content', this.forceUpdate.bind(this, null), this);

        this.selection = app.lib.selection({
            collection: this.collection,
            selectAll: this.selectAllNotes
        });

        app.events.trigger('contextbar:initialize', this.selection);
    },

    componentWillUnmount: function () {
        app.events.trigger('contextbar:dispose');

        this.lazyLoadDisable();

        this.collection.off(null, null, this);
        app.events.off(null, null, this);

        $(this.getDOMNode()).off();
        $(this.getDOMNode()).removeData();

        this.items = null;
        this.currentDraggable = null;
    },

    componentDidMount: function () {
        var self = this;

        $(this.getDOMNode()).on('mouseover', '.note.sortable', function () {
            if (self.currentDraggable !== this && !$(self.currentDraggable).hasClass('ui-draggable-dragging')) {
                if (self.currentDraggable) {
                    if ($(self.currentDraggable).hasClass('ui-draggable')) {
                        $(self.currentDraggable).draggable('destroy');
                    }
                    self.currentDraggable = null;
                }

                $(this).draggable({
                    distance: 5,
                    delay: 30,
                    scroll: true,
                    scrollSensitivity: 30,
                    scrollSpeed: 20,
                    start: function (event, ui) {
                        var element = $(event.target);
                        element.data("startingScrollTop", element.parent().parent().scrollTop());
                    }.bind(self),
                    stop: function (event, ui) {
                        self.updateNotePosition(event.target);
                    }.bind(self),
                    drag: function (event, ui) {
                        var element = $(event.target);
                        ui.position.top += element.parent().parent().scrollTop() - parseInt(element.data("startingScrollTop"));

                        self.alignNotesOnDrag(event.target, {
                            top: ui.position.top + (event.pageY - ui.offset.top),
                            left: ui.position.left + (event.pageX - ui.offset.left)
                        });
                    }.bind(self)
                });

                self.currentDraggable = this;
            }
        });
        
        this.componentDidMountOrUpdate();
        this.lazyLoadEnable();
    },

    componentDidUpdate: function () {
        this.componentDidMountOrUpdate();
    },

    componentDidMountOrUpdate: function () {
        this.items = $.makeArray($('.note', this.getDOMNode()));
        this.alignAllNotes();
    },

    selectAllNotes: function () {
        var children = app.lib.getChildren(this);
        _.each(children, function (noteComponent) {
            noteComponent.setSelected(true);
        }.bind(this));
    },

    lazyLoadEnable: function () {
        if (this.defaults.lazyLoadTimeout !== null) {
            this.lazyNotes = this.lazyNotes || _.sortBy(_.keys(this.refs), function (ref) { return this.refs[ref].props.index; }, this);
            this.lazyBatchSize = this.defaults.initialBatchSize;
            this.lazyLoad();
        }
    },

    lazyLoad: function () {
        if (this.defaults.lazyBatch !== null) {
            // TODO: issue with layzBatch reordering

            if (this.items.length > this.lazyBatchSize) {
                this.lazyBatchSize += this.defaults.lazyBatch;
                this.forceUpdate(function () {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                }.bind(this));
            } else {
                this.lazyLoadTimeout = null;
            }
        } else {
            if (this.lazyNotes && this.lazyNotes.length > 0) {
                var note = this.refs[this.lazyNotes.shift()];
                if (note && !note.state.inflated) {
                    note.inflate(function () {
                        this.addNoteToAlignment(note.getDOMNode());
                        this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                    }.bind(this));
                } else {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, 0);
                }
            } else {
                this.lazyLoadTimeout = null;
            }
        }
    },

    lazyLoadDisable: function () {
        this.lazyNotes = null;
        app.lib.clearTimeout(this.lazyLoadTimeout);
    },

    onNewNoteAdded: function (model) {
        model.newlyAdded = true;
        this.forceUpdate(function () {
            this.alignAllNotes();
        }.bind(this));
    },

    onNoteSizeChange: _.debounce(function (note) {
        this.alignAllNotes();
    }, 10),

    onNoteUnmount: function (note) {
        var $note = $(note.getDOMNode());
        if($note.hasClass('ui-draggable')){
            $note.draggable('destroy');
        }
    },

    alignNotesOnDrag: function (drag, pos, fix) {
        var dragBoxSize = $(drag).data('noteSize');
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== drag && !$(item).hasClass('stamp')) {
                var size = $(item).data('noteSize');
                var position = $(item).data('notePosition');

                if (position.top < pos.top && (position.top + Math.min(dragBoxSize.height, size.height) > pos.top) && position.left < pos.left && (position.left + size.width > pos.left)) {

                    var indexDrag = this.items.indexOf(drag);
                    var indexDrop = this.items.indexOf(item);

                    this.items.splice(indexDrag, 1);
                    this.items.splice(this.items.indexOf(item) + (indexDrag > indexDrop ? 0 : 1), 0, drag);

                    this.alignAllNotes(drag);

                    if (!fix) {
                        this.alignNotesOnDrag(drag, pos, true);
                    }

                    break;
                }
            }
        }
    },

    updateNotePosition: function (drag) {
        var order;
        var items = _.filter(this.items, function (item) { return !$(item).hasClass('stamp'); });
        var index = items.indexOf(drag);

        if (items.length > 1) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model').data() : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model').data() : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev[this.props.context].order - (dataPrev[this.props.context].order - dataNext[this.props.context].order) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev[this.props.context].order - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext[this.props.context].order + 100000;
                    }
                }
            }

            if (order) {
                $(items[index]).data('model').updatePosition(this.props.context, order);
                this.forceUpdate();
            }
        } else {
            this.forceUpdate();
        }
    },

    clearAlignSpacer: function () {
        var containerWidth = $(this.getDOMNode()).outerWidth();
        var count = Math.floor((containerWidth + this.defaults.spacer) / (this.defaults.noteWidth + this.defaults.spacer)) || 1;
        count = Math.min(count, app.data.account.getOptions('maxColumnCount') || 100);

        this.spaces = [];
        this.spacesActual = [];
        this.spacesRowHeight = {};

        for (var i = 0; i < count; i++) {
            var x = this.defaults.noteWidth * i + this.defaults.spacer * i;
            this.spaces.push({
                x: x,
                y: 0,
                rows:0
            });
            this.spacesActual.push({
                x: x,
                y: 0,
                rows: 0
            });
        }
    },

    addNoteToAlignment: function (element) {
        this.items.push(element);
        this.alignNote(element);
    },

    alignNote: function (element) {
        var masonry = app.data.account.getOptions('noteLayout')==='masonry';

        if (masonry) {
            var space = _.min(this.spaces, function (space) { return space.y; });
        } else {
            var space = _.min(this.spaces, function (space) { return space.rows; });
        }

        var spaceIndex = this.spaces.indexOf(space);

        var $note = $(element);

        var size = $note.data('noteSize');
        var sizeActual = $note.data('noteSizeActual');
        
        if (masonry) {
            var top = this.spacesActual[spaceIndex].y;
        } else {
            var top = this.spacesRowHeight[space.rows] || 0;
        }

        $note.data('notePosition', {
            top: top,
            left: space.x
        });

        $note.css({
            'top': top + 'px',
            'left': space.x + 'px'
        });

        space.rows += 1;
        this.spacesActual[spaceIndex].rows += 1;
        
        //TODO: Cannot read property 'height' of undefined
        if (masonry) {
            space.y += size.height + this.defaults.spacer;
            this.spacesActual[spaceIndex].y += sizeActual.height + this.defaults.spacer;
        } else {
            space.y = top + size.height + this.defaults.spacer;
            this.spacesActual[spaceIndex].y = top + sizeActual.height + this.defaults.spacer;
        }

        this.spacesRowHeight[space.rows] = Math.max(this.spacesRowHeight[space.rows] || 0, this.spacesActual[spaceIndex].y);
    },

    alignAllNotes: function (target) {
        this.clearAlignSpacer();
        for (var i = 0; i < this.items.length; i++) {
            this.alignNote(this.items[i]);
        }
    },

    render: function () {
        return (
            React.DOM.div({ id: 'notesblock' },
                this.props.showNew ?
                    app.view.note.main({
                        focus: true,
                        key: 'new',//this.props.model.key,
                        inflated: true,
                        view: 'edit',
                        model: this.props.model,
                        className: 'stamp',
                        context: this.props.context,
                        selection: this.selection,
                        onResize: this.onNoteSizeChange,
                        onUnmount: this.onNoteUnmount
                    }) :
                    null,
                _.map(this.collection.models, function (model, index) {
                    return app.view.note.main({
                        key: model.key,
                        inflated: model.newlyAdded || this.defaults.lazyLoadTimeout === null || index < this.lazyBatchSize || index < this.defaults.initialBatchSize,
                        ref: model.key,
                        index: index + 1,
                        view: 'view',
                        model: model,
                        className: 'sortable',
                        context: this.props.context,
                        selection: this.selection,
                        force: this.force,
                        onResize: this.onNoteSizeChange,
                        onUnmount: this.onNoteUnmount
                    });

                    delete model.newlyAdded;
                }, this)
            )
        );
    }
});