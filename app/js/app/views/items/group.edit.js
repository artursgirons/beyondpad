app.view.item.group = app.view.item.group || {};
app.view.item.group.edit = app.lib.element({
    displayName: 'item.group.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    render: function () {

        var items = _.filter(this.props.model.data('note').items, function (item) {
            return item.group === this.props.data.uid;
        }, this);

        return (
            React.DOM.div(null,
                _.map(items, function (item, index) {
                    return app.view.item.wrapper.view({
                        ref: app.lib.cid(),
                        index: index,
                        key: item.uid,
                        data: item,
                        model: this.props.model,
                        context: 'note',
                        itemMode: 'edit',
                        events: this.props.events,
                        rootParent: this.props.rootParent
                    });
                }, this),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    null
                ) : null
            )
        );
    },
    focus: function () { },
    statics: {
        hasOptions:false
    }
});