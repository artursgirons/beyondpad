/// <reference path="../../../lib/react.js" />

app.view.item.tagbody = app.view.item.tagbody || {};
app.view.item.tagbody.view = app.lib.element({
    displayName: 'item.tagbody.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        return (
            React.DOM.div({ className: 'container' },
                React.DOM.div({ className: 'wrapper' },
                    React.DOM.div({ className: 'itemgroup' },
                        app.view.item.text.view({
                            data: {
                                data: {
                                    text: this.props.model.data().tag.name
                                }
                            },
                            rootParent: this.props.rootParent
                        })
                    )
                )
            )
        );
    }
});