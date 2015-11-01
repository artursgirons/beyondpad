app.view.layout.main = app.lib.element({
    displayName: 'layout.main',
    componentDidMount: function () {
        app.data.state.on('change:controlTreeShow change:controlNavigationShow', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        app.data.state.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    render: function () {
        var containerClasses = window.classnames({
            'treeshow': app.data.state.get('controlTreeShow'),
            'navigationshow': app.data.state.get('controlNavigationShow')
        });

        return (
            React.DOM.div({ id: 'app', onFocus: this.focus},
                app.view.layout.header(),
                React.DOM.div({ id: 'body', className: containerClasses },
                    app.view.layout.contextmenu(),
                    app.view.layout.navigation(),
                    app.view.layout.sidepane(),
                    app.view.layout.content()
                )
            )
        );
    },
    focus: function (event) {
        app.lib.focus.save(event.target);
    },
    componentDidUpdate: function () {
        app.events.trigger('resize:content');
    }
});