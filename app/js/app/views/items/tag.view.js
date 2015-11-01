/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.tag = app.view.item.tag || {};
app.view.item.tag.view = app.lib.element({
    displayName: 'item.tag.view',
    mixins: [app.lib.mixins.rootParent],
    render: function () {
        if (!!this.props.model.data().tag) {
            return (
                React.DOM.div({ className: "notetag" },
                    app.view.item.contextswitch.view({
                        context: this.props.context,
                        switchContext: this.props.switchContext,
                        model: this.props.model
                    }),
                    React.DOM.div({ className: 'name' }, this.props.model.data().tag.name)
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});