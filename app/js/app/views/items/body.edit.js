/// <reference path="../../../lib/react.js" />

app.view.item.body = app.view.item.body || {};
app.view.item.body.edit = app.lib.element({
    displayName: 'item.body.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        switch(this.props.context){
            case 'note':
            case 'tracker':
                return app.view.item.container.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.props.context,
                    events: this.props.events,
                    rootParent: this.props.rootParent
                });
            case 'tag':
                return app.view.item.tagbody.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.props.context,
                    events: this.props.events,
                    rootParent: this.props.rootParent
                });
        }
    }
});