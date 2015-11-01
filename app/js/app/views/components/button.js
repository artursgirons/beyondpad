/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.components.button = app.lib.element({
    displayName: 'components.button',
    mixins: [React.addons.PureRenderMixin],
    getDefaultProps: function () {
        return {
            icon: 'icon-flash',
            text: 'Button',
            onClick: null,
            ticker: null
        }
    },
    render: function () {
        if (this.props.hidden) { return null; }

        return (
            React.DOM.div({
                className: 'button' + (this.props.dropdown ? ' drop' : '') + (!this.props.text ? ' textless' : '') + (this.props.ticker !== null ? ' tick' : '') + (this.props.inactive ? ' inactive' : '') + ' ' + this.props.className || '',
                onClick: this.props.inactive ? null : this.props.onClick,
                title: this.props.title || this.props.text
            },
                React.DOM.i({ className: this.props.icon }),
                React.DOM.span(null, this.props.text),
                this.props.dropdown ? React.DOM.i({ className: 'dropicon icon-down-dir' }) : null,
                this.props.ticker !== null ? React.DOM.div({ className: 'ticker' }, this.props.ticker) : null
            )
        );
    }
});