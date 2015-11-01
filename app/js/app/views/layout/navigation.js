app.view.layout.navigation = app.lib.element({
    displayName: 'layout.navigation',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    getInitialState:function(){
        return {
            page: null
        };
    },
    onNavigate: function (navigation) {
        this.setState({
            page: navigation.page
        });
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return this.state.page !== nextState.page;
    },
    validate: function (event) {
        if (!app.lib.newNotes.validate()) {
            event.preventDefault();
            event.stopPropagation();

            return;
        }

        app.lib.newNotes.clear();
    },
    render: function () {
        return (
            React.DOM.div({ id: "navigation", className: 'noselect' },
                _.map(app.config.navigation, function (item, index) {
                    if (!item.children) {
                        return (
                            React.DOM.a({
                                key: index,
                                href: ('#' + item.page),
                                onClick: this.validate,
                                className: window.classnames({
                                    'item': true,
                                    'active': item.page === this.state.page
                                })
                            },
                                React.DOM.i({ className: item.icon }),
                                React.DOM.span(null, item.title)
                            )
                        );
                    } else {
                        return (
                            React.DOM.div({
                                key: index,
                                className: 'navswap'
                            },
                                React.DOM.div({ className: 'navswapplaceholder' },
                                    React.DOM.a({
                                        href: item.url || ('#' + item.page),
                                        onClick: this.validate,
                                        className: window.classnames({
                                            'item': true,
                                            'active': item.page === this.state.page
                                        })
                                    },
                                        React.DOM.i({ className: item.icon }),
                                        React.DOM.span(null, item.title)
                                    )
                                ),
                                React.DOM.div({ className: 'navswapcontent' },
                                    _.map(item.children, function (item, index) {
                                        return (
                                            React.DOM.a({
                                                key: index,
                                                href: item.page ? (item.url || '#' + item.page) : null,
                                                onClick: this.validate,
                                                className: window.classnames({
                                                    'item': true,
                                                    'active': item.page === this.state.page
                                                })
                                            },
                                                React.DOM.i({ className: item.icon }),
                                                React.DOM.span(null, item.title)
                                            )
                                        )
                                    }, this)
                                )
                            )
                        );
                    }
                }, this)
            )
        );
    }
});