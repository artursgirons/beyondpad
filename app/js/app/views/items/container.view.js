/// <reference path="../../../lib/react.js" />

app.view.item.container = app.view.item.container || {};
app.view.item.container.view = app.lib.element({
    displayName: 'item.container.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    render: function () {
        var items = this.props.model.data(this.props.context) && this.props.model.data(this.props.context).items;
        if (items && items.length) {
            return (
                React.DOM.div({ className: "container" },
                    _.map(_.filter(items, function (item) { return !item.group; }, this), function (item, index) {
                        return app.view.item.wrapper.view({
                            key: item.uid,
                            data: item,
                            model: this.props.model,
                            context: this.props.context,
                            rootParent: this.props.rootParent
                        });
                    }, this)
                )
            );
        }
        else {
            return React.DOM.span();
        }
    },
    componentDidUpdate: function () {
    }
});