app.view.item.list = app.view.item.list || {};
app.view.item.list.edit = app.lib.element({
    displayName: 'item.list.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
        this.choice = this.props.data.type === 'choice';
    },

    componentDidMount: function () {
        //TODO: this creates deattacehd dom leaks (minor)

        $('.notelistitems', this.getDOMNode()).sortable({
            containment: "parent",
            items: '.notelistitem',
            tolerance: 'pointer',
            cursor: 'ns-resize',
            axis: 'y',
            handle: ".lihandle",
            update: this.reorderFinished,
            scroll: false,
            delay: 100,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            helper: this.getHelper,
            appendTo: 'parent'
        });
    },

    getHelper: function (event, element) {
        var helper = element.clone();
        helper.removeAttr('data-reactid');
        helper.find('[data-reactid]').removeAttr('data-reactid');
        return helper;
    },

    componentWillUnmount: function () {
        $('.notelistitems', this.getDOMNode()).sortable("destroy");
    },

    reorderFinished: function (event, ui) {
        var indexArray = $('.notelistitems', this.getDOMNode()).sortable("toArray", { attribute: 'data-index' });
        var orderedItems = _.map(indexArray, function (index) {
            return this.props.data.data.items[parseInt(index)];
        }, this);

        orderedItems = orderedItems.concat(_.difference(this.props.data.data.items, orderedItems));

        $('.notelistitems', this.getDOMNode()).sortable("cancel");

        this.props.data.data.items = orderedItems;

        this.forceUpdate();
    },

    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    nextItem: function (index) {
        if (index >= this.props.data.data.items.length - 1) {
            this.newItem();
        } else {
            this.focusItem(index + 1);
        }
    },
    newItem: function (focus) {
        var newItem = {
            text: '',
            uid: app.lib.uid()
        };

        if (this.choice) {
            newItem.tags = [];
        }

        this.props.data.data.items.push(newItem);

        this.forceUpdate(function () {
            if (focus !== false) {
                this.focusItem(this.props.data.data.items.length - 1);
            }
        }.bind(this));
    },

    batchAdd: function (arr) {
        _.each(arr, function (text) {
            text = text.trim();
            var textOriginal = text;
            var text = (text.length < 151 ? text : text.substring(0, 147));

            if(textOriginal.length!==text.length){
                text+='...';
            }

            var newItem = {
                text: text,
                uid: app.lib.uid()
            };

            if (this.choice) {
                newItem.tags = [];
            }

            this.props.data.data.items.push(newItem);
        }, this);

        this.forceUpdate(function () {
            this.focusItem(this.props.data.data.items.length - 1);
        }.bind(this));
    },

    focusItem: function (index) {
        if (index < 0) {
            index = 0;
        }

        if (index > this.props.data.data.items.length - 1) {
            index = this.props.data.data.items.length - 1;
        }

        if (this.refs['item-' + index]) {
            this.refs['item-' + index].focus();
        }
    },
    removeItem: function (index) {
        if (this.props.data.data.items.length === 1 && !this.props.data.data.items[0].text) {
            this.props.remove(this.props.data);
            return;
        }

        this.props.data.data.items.splice(index, 1);
        if (this.props.data.data.items.length === 0) {
            this.newItem(false);
        } else {
            this.forceUpdate();
        }
    },
    singleChoice: function () {
        this.props.data.data.combo = !this.props.data.data.combo;

        if (this.props.data.data.combo) {
            var checkCount = 0;
            _.each(this.props.data.data.items, function (item) {
                item.checked = item.checked && checkCount === 0;
                if (item.checked) { checkCount++; }
            });
        }

        this.forceUpdate();
    },
    hasTags: function () {
        this.props.data.data.hasTags = !this.props.data.data.hasTags;

        if (!this.props.data.data.hasTags) {
            _.each(this.props.data.data.items, function (item) {
                item.tags = [];
            });
        }

        this.forceUpdate();
    },

    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: "notelist hascontrols" },
                React.DOM.div({ className: "notelistitems" },
                    _.map(this.props.data.data.items, function (item, index) {
                        return app.view.item.listitem.edit({
                            key: index,
                            ref: 'item-' + index,
                            index: index,
                            item: item,
                            rootParent: this.props.rootParent,
                            nextItem: this.nextItem,
                            removeItem: this.removeItem,
                            checkItem: this.props.checkItem,
                            focusItem: this.focusItem,
                            batchAdd: this.batchAdd,
                            mode: this.props.mode || 'list',
                            context: this.props.context,
                            model: this.props.model,
                            choice: this.choice,
                            hasTags: this.props.data.data.hasTags
                        });
                    }, this)
                ),
                React.DOM.div({ className: 'newlistitem', onClick: this.newItem },
                    React.DOM.div({ className: 'newicon icon-plus' })
                ),
                this.choice ? (
                    this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                        React.DOM.i({ className: 'icon-tags' + (!data.hasTags ? ' inactive' : ''), onClick: this.hasTags, title: 'Toggle items to have tags' }),
                        React.DOM.i({ className: 'icon-align-justify' + (!data.combo ? ' inactive' : ''), onClick: this.singleChoice, title: 'Toggle block to be added in note as dropdown list' })
                    ) : null
                ) : (
                    this.props.showOptions ? React.DOM.div({ className: 'itemoptions blank' }) : null
                )
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: false
    }
});