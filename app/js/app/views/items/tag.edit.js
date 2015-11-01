/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.tag = app.view.item.tag || {};
app.view.item.tag.edit = app.lib.element({
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.focus],
    displayName: 'item.tag.edit',
    toggle: function () {
        this.forceUpdate(this.refocus);
    },
    componentWillMount: function () {
        this.props.model.on('update:tag', this.toggle, this);
        this.props.model.on('update:tag.name', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    changeText: function (event) {
        this.props.model.update({ tag: { name: { $set: event.target.value } } });
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();
            event.preventDefault();
        }
    },
    render: function () {
        if (this.props.model.data('tag')) {
            var status = this.props.model.getStatus();
            var color = { 'color': app.lib.color(this.props.model.data().color) };

            var placeholder = (this.props.context==='tag' && this.props.model.tags().length > 0)?
                'Sub tag name':
                app.config.context[this.props.context].placeholder.header;

            return (
                React.DOM.div({ className: "notetag" },
                    app.view.item.contextswitch.edit({
                        context: this.props.context,
                        switchContext: this.props.switchContext,
                        model: this.props.model
                    }),
                    React.DOM.textarea({
                        ref: 'input',
                        rows: 1,
                        onKeyDown: this.keyPress,
                        placeholder: placeholder,
                        value: this.props.model.data().tag.name,
                        onChange: this.changeText
                    }),
                    React.DOM.div({ className: 'tagstatus' },
                        status === 'link' ? React.DOM.i({ className: 'link icon-link-alt', style: color }) : null,
                        status === 'error' ? React.DOM.i({ className: 'error icon-error' }) : null
                    )
                )
            );
        }
        else {
            return (
                React.DOM.div({className:'hide'})
            );
        }
    },
    focus: function () {
        if (this.props.model.data('tag')) {
            this.refs.input.getDOMNode().focus();
            return true;
        }
        return true;
    },
    validate: function (focus) {
        var status = this.props.model.getStatus();
        if (status === 'error') {
            if (focus) {
                this.focus();
            }
            return false;
        }
        if (this.props.model.data('tag')) {
            if (_.trim(this.props.model.data('tag').name).length === 0) {
                if (focus) {
                    this.focus();
                }
                return false;
            }
        }
        return true;
    },
    refocus: function () {
        this.props.events.trigger('focus:set');
    }
});