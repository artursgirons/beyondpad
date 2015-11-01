/// <reference path="../../../lib/react.js" />

app.view.item.body = app.view.item.body || {};
app.view.item.body.view = app.lib.element({
    displayName: 'item.body.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        switch (this.props.context) {
            case 'note':
            case 'tracker':
                return app.view.item.container.view({
                    model: this.props.model,
                    context: this.props.context,
                    rootParent: this.props.rootParent
                });
            case 'tag':
                return app.view.item.tagbody.view({
                    model: this.props.model,
                    context: this.props.context,
                    rootParent: this.props.rootParent
                });
        }
    }
});