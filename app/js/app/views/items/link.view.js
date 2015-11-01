app.view.item.link = app.view.item.link || {};
app.view.item.link.view = app.lib.element({
    displayName: 'item.link.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var data = this.props.data.data;

        if (data.hasImage) {
            var size = {
                width: 0,
                height: 0
            };
            var koef = Math.min(268 / data.size.width, 1);

            size.width = data.size.width * koef;
            size.height = data.size.height * koef;
        }

        var link = app.lib.getUrl(data.link);

        return (
            React.DOM.div({ className: 'linkitem' },
                !data.hasImage ?
                    React.DOM.div({ className: 'linkLink' },
                        React.DOM.a({ target: '_blank', href: link || '#' }, data.title || data.link || 'Empty link')
                    ):
                    React.DOM.img({ src: data.link, width: size.width, height: size.height })
            )
        );
    }
});