app.view.context.components = app.view.context.components || {};
app.view.context.components.statusmenu = app.lib.element({
    displayName: 'context.components.statusmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (status, event) {
        this.props.data.callback(status);
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu statusmenu' },
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'all') },
                    React.DOM.i({ className: 'icon-folder-open' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'All'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Default state for active items (all manipulations aviable)')
                ),
                React.DOM.div({ className: 'statusmenusub', onClick: this.click.bind(this, 'inbox') },
                    React.DOM.div({ className: 'statusmenuitem' },
                        React.DOM.i({ className: 'icon-inbox' }),
                        React.DOM.div({ className: 'statusmenutitle' },
                            'Inbox'
                        ),
                        React.DOM.div({ className: 'statusmenudetails' }, 'State for incomming, new and important items')
                    )
                ),
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'archive') },
                    React.DOM.i({ className: 'icon-archive' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'Archive'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Recommended state for dismissed items (aviable in search and archive view only)')
                ),
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'trash') },
                    React.DOM.i({ className: 'icon-trash-alt' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'Trash'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Items in trash will be deleted in 30 days (aviable only in trash)')
                )
            )
        );
    }
});

/*
React.DOM.div({ className: '' }, '')
*/