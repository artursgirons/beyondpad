app.view.layout.contextmenu = app.lib.element({
    displayName: 'layout.contextmenu',
    componentDidMount: function () {
        app.data.state.on('change:menuNavigationActive change:menuTreeActive change:menuTreeShow', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        app.data.state.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    menuNavigationToggle:function () {
        app.data.state.set('menuNavigationActive', !app.data.state.get('menuNavigationActive'));
    },
    menuTreeToggle : function () {
        app.data.state.set('menuTreeActive', !app.data.state.get('menuTreeActive'));
    },
    render: function () {
        var navigationClasses = window.classnames({
            'item': true,
            'active': app.data.state.get('menuNavigationActive')
        });

        var treeClasses = window.classnames({
            'item': true,
            'hide': !app.data.state.get('menuTreeShow'),
            'active': app.data.state.get('menuTreeActive')
        });

        return (
            React.DOM.div({ id: "contextmenu" },
                React.DOM.span({ className: navigationClasses, onClick: this.menuNavigationToggle },
                    React.DOM.i({ className: "icon-menu" })
                ),
                React.DOM.span({ className: treeClasses, onClick: this.menuTreeToggle },
                    React.DOM.i({ className: "icon-hash" })
                )
            )
        );
    }
});