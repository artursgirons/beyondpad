app.view.content.component.listnotes = app.lib.element({
    displayName: 'content.component.listnotes',
    defaults: {
        lazyLoadTimeout: 0, // Set to null to disable lazyLoad (all notes are mounted already pre inflated)
        initialBatchSize: 30,
        lazyBatch: null,
    },
    getInitialState: function () {
        return {
            showNewNote: this.props.listModel.getOptions('showNewNote')
        }
    },
    componentWillMount: function () {
        this.collection = this.props.collection;

        this.collection.on('add', this.onNewNoteAdded, this);
        this.collection.on('remove update batch:collection', this.forceUpdate.bind(this, null), this);
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },

    componentWillReceiveProps: function (nextProps) {
    },

    componentWillUnmount: function () {
        this.collection.off(null, null, this);

        this.lazyLoadDisable();

        var $sortable = $(this.getDOMNode());

        $sortable.sortable('destroy');
        $sortable.removeData();
    },

    componentDidMount: function () {
        var $sortable = $(this.getDOMNode());

        $sortable.sortable({
            appendTo: '.boardlistwrapper',
            containment: ".boardlistwrapper",
            items: '.note.sortable',
            tolerance: 'pointer',
            delay: 50,
            scroll: false,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            connectWith: '.view .body',
            zIndex: 100,
            helper: this.getSortableHelper,
            start: this.onStartSorting,
            update: this.updateNotePosition
        });

        $sortable.data('model', this.props.model);

        this.lazyLoadEnable();
    },

    onNewNoteAdded: function (model) {
        model.newlyAdded = true;
        this.forceUpdate();
    },

    onStartSorting: function (event, ui) {
        app.view.content.component.listnotes._source = this;
    },
    updateNotePosition: function (event, ui) {
        var order;
        var sourceList = ui.sender && ui.sender[0];
        var targetList = $(this.getDOMNode());

        var items = $.makeArray($('.note.sortable', targetList).filter(':visible'));
        var index = items.indexOf(ui.item[0]);

        if (items.length > 1 && index >= 0) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model').data() : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model').data() : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev.note.order - (dataPrev.note.order - dataNext.note.order) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev.note.order - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext.note.order + 100000;
                    }
                }
            }
        }

        var noteTags;
        var noteTagsOnly;

        if (sourceList && targetList) {
            var noteModel = ui.item.data('model');
            noteTags = noteModel.data('tags');

            if (!this.props.listModel.getOptions('appendOnly')) {
                var nonTargetTags = _.reduce(this.props.lists, function (array, list) {
                    if (list !== this.props.listModel) {
                        array.push(list.data('tags'));
                    }
                    return array;
                }, [], this);

                noteTagsOnly = _.pluck(noteTags, '_id');

                nonTargetTags = _.filter(nonTargetTags, function (tags) {
                    return _.intersection(tags, noteTagsOnly).length >= tags.length;
                });

                nonTargetTags = _.flatten(nonTargetTags);

                noteTags = _.filter(noteTags, function (tag) {
                    return !_.contains(nonTargetTags, tag._id);
                });
            }

            var targetListModel = targetList.data('model');

            var targetTags = targetListModel.data('tags');

            noteTags = noteTags.concat(targetTags);

            noteTags = _.uniq(noteTags, function (item) { return item._id });
        }

        if (noteTags || order) {
            if (app.view.content.component.listnotes._source) {
                if (noteTags) {
                    $(ui.item[0]).hide();
                }
                $(app.view.content.component.listnotes._source.getDOMNode()).sortable("cancel");
                app.view.content.component.listnotes._source = null;
            }

            var model = $(items[index]).data('model');

            if (noteTags) {
                var tagsPrev = _.pluck(noteModel.data('tags'), '_id');
                var tagsNext = _.pluck(noteTags, '_id');

                var remove = _.difference(tagsPrev, tagsNext);
                var add = _.difference(tagsNext, tagsPrev);

                _.each(remove, function (tag) {
                    model.deleteTag(tag, 'note', true);
                }, this);

                _.each(add, function (tag) {
                    model.appendTag(tag, 'note', true);
                }, this);
            }

            if (order) {
                model.update('note', { order: { $set: order } }, true);
            }

            // TODO: think of better way to pre update lists
            var json = model.toJSON();
            model.trigger('update:model', json);
            this.collection.trigger('update:model', json);

            model.save('note').done(function () {
                $(ui.item[0]).show();
            });
        }
    },

    getSortableHelper: function (event, element) {
        var helper = element.clone();

        helper.removeAttr('data-reactid');
        helper.find('[data-reactid]').removeAttr('data-reactid');

        return helper;
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
                if (!note.state.inflated) {
                    note.inflate(function () {
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

    addNewNote: function () {
        this.setState({
            showNewNote: !this.state.showNewNote
        });
    },

    onNoteSaved: function () {
        this.setState({
            showNewNote: this.getInitialState().showNewNote
        });
    },

    onNoteResize: function () { },

    selectAllNotes: function () {
        var children = app.lib.getChildren(this);
        _.each(children, function (noteComponent) {
            noteComponent.setSelected(true);
        }.bind(this));
    },

    getTagsToHide: function () {
        if (this.props.listModel.getOptions('hideTags')) {
            return this.props.listModel.data('tags');
        } else {
            return [];
        }
    },

    render: function () {
        return (
            React.DOM.div({ className: 'body scroll' },
                this.state.showNewNote ?
                app.view.note.main({
                    key: 'new',
                    focus: true,
                    view: 'edit',
                    model: this.props.model,
                    className: 'stamp',
                    context: 'note',
                    onSaved: this.onNoteSaved,
                    inflated: true,
                    onResize: this.onNoteResize,
                    selection: this.props.selection
                }) :
                null,
                _.map(this.collection.models, function (model, index) {
                    return app.view.note.main({
                        key: model.key,
                        ref: model.key,
                        view: 'view',
                        model: model,
                        context: 'note',
                        selection: this.props.selection,
                        inflated: model.newlyAdded || this.defaults.lazyLoadTimeout === null || index < this.lazyBatchSize || index < this.defaults.initialBatchSize,
                        onResize: this.onNoteResize,
                        index: index + 1,
                        className: 'sortable',
                        getTagsToHide: this.getTagsToHide
                    });

                    delete model.newlyAdded;
                }, this)
            )
        )
    }
});