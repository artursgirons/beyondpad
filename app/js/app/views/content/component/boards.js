app.view.content.component.boards = app.lib.element({
    displayName: 'content.component.boards',
    componentWillMount: function () {
        this.newBoard = new app.model.board(null, { collection: app.data.boards });

        app.data.boards.on('add remove sort', this.forceUpdate.bind(this, null), this);
        app.events.on('resize:component resize:window resize:content', this.reposition, this);
    },
    reposition: _.debounce(function (element) {
        if (element) {
            var $element = $(element).parents('.note');

            var size = {
                height: $element.outerHeight(),
                width: $element.outerWidth()
            };

            var prev = $element.data('size');
            $element.data('size', size);

            //TODO:fix and optimize reposition
            /*
            if (prev && prev.width === size.width && prev.height === size.height) {
                return;
            }
            */
        } else {
        }

        this.alignDOM();
    }, 50),
    componentWillUnmount: function () {
        app.data.boards.off(null, null, this);
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
        this.initializeDraggable();
    },
    componentDidUpdate: function () {
        this.initializeDraggable();
    },
    changeOrder: function (drag) {
        var order;

        //var items = $.makeArray($('.boarditem', this.getDOMNode()).filter(":visible :not(.placeholder)"));
        var items = _.filter(this.items, function (item) { return !$(item).hasClass('placeholder'); });
        var index = items.indexOf(drag);

        if (items.length > 1) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model') : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model') : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev.get('order') - (dataPrev.get('order') - dataNext.get('order')) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev.get('order') - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext.get('order') + 100000;
                    }
                }
            }

            if (order) {
                $(items[index]).data('model').updatePosition(order);
                this.reposition();
            }
        }
    },
    initializeDraggable: function () {
        $('.boarditem.ui-draggable', this.getDOMNode()).draggable('destroy');
        this.items = $.makeArray($('.boarditem', this.getDOMNode()));
        $('.boarditem.view', this.getDOMNode()).draggable({
            distance: 10,
            delay: 50,
            scroll: true,
            start: function (event, ui) {
                $(event.target).removeClass('animate');
                $(event.target).addClass('drag');
            }.bind(this),
            stop: function (event, ui) {
                $(event.target).removeClass('drag');
                this.alignDOM();
                this.changeOrder(event.target);
            }.bind(this),
            drag: function (event, ui) {
                this.reorderDOM(event.target, {
                    top: ui.position.top + (event.pageY - ui.offset.top),
                    left: ui.position.left + (event.pageX - ui.offset.left)
                });
            }.bind(this)
        });
        this.alignDOM();
    },
    reorderDOM: function (drag, pos, fix) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== drag && !$(item).hasClass('edit')) {
                var bbox = $(item).data('bbox');

                if (bbox.top < pos.top && (bbox.top + Math.min($(drag).outerHeight(), bbox.height) > pos.top) && bbox.left < pos.left && (bbox.left + bbox.width > pos.left)) {

                    var indexDrag = this.items.indexOf(drag);
                    var indexDrop = this.items.indexOf(item);

                    this.items.splice(indexDrag, 1);
                    this.items.splice(this.items.indexOf(item) + (indexDrag > indexDrop ? 0 : 1), 0, drag);

                    this.alignDOM(drag);

                    if (!fix) {
                        this.reorderDOM(drag, pos, true);
                    }

                    break;
                }
            }
        }
    },

    onBoardSizeChange: _.debounce(function (note) {
        this.alignDOM();
    }, 10),

    alignDOM: function (target) {
        if (this.isMounted()) {
            var container = $(this.getDOMNode());
            container.css({ 'width': 'auto' });

            var spacer = 15;
            var itemWidth = 300;
            var containerWidth = container.outerWidth();
            var i;

            var count = Math.floor((containerWidth + spacer) / (itemWidth + spacer)) || 1;
            count = Math.min(count, app.data.account.getOptions('maxColumnCount') || 100);

            var spaces = [];

            container.css({ 'width': count * itemWidth + (count - 1) * spacer });

            for (i = 0; i < count; i++) {
                spaces.push({
                    x: itemWidth * i + spacer * i,
                    y: 0
                });
            }

            var space = spaces[0];
            for (i = 0; i < this.items.length; i++) {

                var $item = $(this.items[i]);

                $item.data('bbox', {
                    top: space.y,
                    left: space.x,
                    width: $item.outerWidth(),
                    height: $item.outerHeight()
                });

                if (!target || this.items[i] !== target) {
                    $(this.items[i]).addClass('animate');
                    $(this.items[i]).css({
                        'position': 'absolute',
                        'top': space.y + 'px',
                        'left': space.x + 'px'
                    });
                }

                space.y += $item.outerHeight() + spacer;
                space = _.reduce(spaces, function (first, space) { return first.y <= space.y ? first : space; }, space);
            }
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'boardoverview' },
                app.view.content.component.board({
                    onResize: this.onBoardSizeChange,
                    model: this.newBoard,
                    mode: 'edit'
                }),
                _.map(app.data.boards.models, function (model) {
                    return app.view.content.component.board({
                        onResize: this.onBoardSizeChange,
                        key: app.lib.uidmap(model.get('_id')),
                        model: model,
                        mode: 'view'
                    });
                }, this)
            )
        );
    }
});