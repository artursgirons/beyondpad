/// <reference path="../../../lib/react.js" />

app.view.item.tagbody = app.view.item.tagbody || {};
app.view.item.tagbody.edit = app.lib.element({
    displayName: 'item.tagbody.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:tag.name', this.forceUpdate.bind(this, null), this);
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    changeText: function (text) {
        this.props.model.update({ tag: { name: { $set: text } } });
    },
    render: function () {

        return (
            React.DOM.div({ className: 'container' },
                React.DOM.div({ className: 'wrapper' },
                    React.DOM.div({ className: 'itemgroup' },
                        app.view.item.text.edit({
                            ref: app.lib.cid(),
                            model: this.props.model,
                            data: {
                                data: {
                                    text: this.props.model.data().tag.name
                                }
                            },
                            changed: this.changeText,
                            context: 'tag',
                            events: this.props.events,
                            rootParent: this.props.rootParent
                        })
                    )
                )
            )
        );
    }
});