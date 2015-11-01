/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.text = app.view.item.text || {};
app.view.item.text.view = app.lib.element({
    displayName: 'item.text.view',
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
    fontStyle: function () {
        var text = this.props.data.data.text;

        var length = text && text.length || 0;

        var size = this.props.data.data.size || app.lib.getFontSize(length);

        var style = {
            fontSize: size + 'px'
        };

        if (size < 22) {
            style['fontWeight'] = 300;
        }

        if (this.props.data.data.bold) {
            style['fontWeight'] = size < 22 ? 400 : 300;
        }

        if (this.props.data.data.underline) {
            style['textDecoration'] = 'underline';
        }

        if (this.props.data.data.italic) {
            style['fontStyle'] = 'italic';
        }

        if (this.props.data.data.center) {
            style['textAlign'] = 'center';
        }

        if (!this.props.data.data.text /*this.props.context === 'tracker'*/) {
            style['color'] = 'rgba(10, 10, 10, 0.40)';
        }

        return style;
    },
    render: function () {
        var text = (/*this.props.context === 'tracker' &&*/ !this.props.data.data.text) ?
            app.config.context[this.props.context].placeholder.blockValue :
            this.props.data.data.text;

        return (
            React.DOM.div({ className: 'text field' },
                React.DOM.div({ className: "value", style: this.fontStyle() }, text)
            )
        );
    }
});