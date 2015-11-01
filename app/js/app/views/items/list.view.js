app.view.item.list = app.view.item.list || {};
app.view.item.list.view = app.lib.element({
    displayName: 'item.list.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.choice = this.props.data.type === 'choice';
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
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
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    render: function () {
        return (
            React.DOM.div({ className: "notelist" },
                React.DOM.div({ className: "notelistitems" },
                    _.map(this.props.data.data.items, function (item, index) {
                        return app.view.item.listitem.view({
                            key: index,
                            ref: 'item-' + index,
                            index: index,
                            item: item,
                            rootParent: this.props.rootParent,
                            focusItem: this.focusItem,
                            checkItem: this.props.checkItem,
                            mode: this.props.mode || 'list',
                            context: this.props.context,
                            model: this.props.model,
                            choice: this.choice,
                            viewMode: this.props.viewMode,
                            save: this.save
                        });
                    }, this)
                )
            )
        );
    },
    validate: function (focus) {
        return true;
    }
});