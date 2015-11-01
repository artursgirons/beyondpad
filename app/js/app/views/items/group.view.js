app.view.item.group = app.view.item.group || {};
app.view.item.group.view = app.lib.element({
    displayName: 'item.group.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
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
    render: function () {

        var items = _.filter(this.props.model.data('note').items, function (item) {
            return item.group === this.props.data.uid;
        }, this);

        return (
            React.DOM.div(null,
                _.map(items, function (item, index) {
                    return app.view.item.wrapper.view({
                        index: index,
                        key: item.uid,
                        context: this.props.context,
                        data: item,
                        model: this.props.model,
                        rootParent: this.props.rootParent
                    });
                }, this)
            )
        );
    }
});