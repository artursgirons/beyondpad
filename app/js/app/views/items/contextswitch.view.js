app.view.item.contextswitch = app.view.item.contextswitch || {};
app.view.item.contextswitch.view = app.lib.element({
    displayName: 'item.contextswitch.view',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    switchContext: function (context, event) {
        this.refs['contextswitch'].getDOMNode().style.display = 'none';
        setTimeout(function () {
            if (app.lib.isMounted(this)) {
                this.refs['contextswitch'].getDOMNode().style.display = null;
            }
        }.bind(this), 0);

        if (this.props.switchContext) {
            this.props.switchContext(context);
        }
    },
    render: function () {
        var color = { 'color': app.lib.color(this.props.model.data().color) };
        var contextList = _.filter(app.config.contextList, function (context) { return !!this.props.model.data(context.name); }, this);

        var colorBG = app.lib.color(this.props.model.data().color);


        if (contextList.length > 1) {
            return (
                React.DOM.div({ className: 'contextswitch view', ref: 'contextswitch' },
                    React.DOM.div({ className: 'currenctcontext' },
                        React.DOM.i({ className: app.config.context[this.props.context].icon, style: color }),

                        React.DOM.div({ className: 'contextindicator' },
                            _.map(contextList, function (context) {
                                return React.DOM.div({ className: 'item', key: context.name, style: (context.name === this.props.context ? { 'backgroundColor': colorBG } : {}) });
                            }, this)
                        )
                    ),
                    React.DOM.div({ className: 'switchcontext' },
                        _.map(_.sortBy(contextList, function (context) { return context.name === this.props.context ? 0 : 1; }, this), function (context) {
                            return React.DOM.i({ className: context.icon, style: color, key: context.name, onClick: this.switchContext.bind(this, context.name) });
                        }, this)
                    )
                )
            );
        } else {
            return app.view.item.contextswitch.edit(this.props);
        }
    }
});