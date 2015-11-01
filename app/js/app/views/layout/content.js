app.view.layout.content = app.lib.element({
    displayName: 'layout.content',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    componentDidUpdate: function () {
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
    showContextMenu: function (enable) {
        var $container = $(this.refs.container.getDOMNode());

        if (typeof (enable) === 'undefined') {
            if ($container.hasClass('showctx')) {
                $container.removeClass('showctx');
            } else {
                $container.addClass('showctx');
            }
        } else {
            if (!enable) {
                $container.removeClass('showctx');
            } else {
                $container.addClass('showctx');
            }
        }
    },
    render: function () {
        var canScroll = !_.contains(['board', 'board-search'], app.navigation && app.navigation.view);
        return (
            React.DOM.div({ id: 'container', className: 'scroll', ref: 'container' },
                React.DOM.div({ id: 'cont', className: 'animate scroll' + (canScroll ? ' scroll' : '') },
                    (app.view.content[this.state.page] || app.view.content.notfound)({ navigation: this.state.navigation, key: app.lib.cid() }),
                    app.view.context.contextmenu({
                        selector: '#cont'
                    })
                ),
                (app.view.context[this.state.page]
                    ? app.view.context[this.state.page]({
                        toggle: this.showContextMenu
                    })
                    : null)
            )
        );
    }
});