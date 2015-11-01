app.view.layout.sidepane = app.lib.element({
    displayName: 'layout.sidepane',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    getInitialState: function () {
        return {
            page: null,
            navigation: null
        };
    },
    onNavigate: function (navigation) {
        this.setState({
            page: navigation.page,
            navigation: navigation
        });
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    render: function () {
        return (
            React.DOM.div({ id: "sidepane" },
                (app.view.sidepane[this.state.page] || app.view.sidepane.notfound)({ navigation: this.state.navigation })
            )
        );
    }
});