app.view.item.text = app.view.item.text || {};
app.view.item.text.edit = app.lib.element({
    displayName: 'item.text.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
        this.resizeTextareaLogic();
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.text !== prevState.text) {
            this.resizeTextarea();
        }
    },
    update: function () {
        this.forceUpdate(function () {
            this.resizeTextarea();
        });
    },
    getInitialState: function () {
        return {
            text: this.props.data.data.text
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({ text: nextProps.data.data.text });
    },
    resizeTextarea: function () {
        this.resizeTextareaThrottled = this.resizeTextareaThrottled || _.throttle(this.resizeTextareaLogic, 150);
        this.resizeTextareaThrottled();
    },
    resizeTextareaLogic: function () {
        var element = this.refs.textarea.getDOMNode();

        element.style.height = '0px';
        var newHeight = Math.max(element.scrollHeight, element.clientHeight) + 'px';

        element.style.height = newHeight;
        this.refs.wrapper.getDOMNode().style.height = newHeight;
    },
    paste: function (event) {
        if (!this.props.data.data.text) {
            if (event.clipboardData.getData) {
                event.preventDefault();
                this.changeTextLogic(event.clipboardData.getData('Text').trim());
            }
        }
    },
    changeTextLogic: function (text) {
        if (text.length < app.config.maxNoteLength+1) {
            this.props.data.data.text = text;
        } else {
            this.props.data.data.text = text.substring(0, app.config.maxNoteLength);
        }

        if (this.props.changed) {
            this.props.changed(text);
        }

        this.setState({
            text: this.props.data.data.text
        });
    },
    changeText: function (event) {
        this.changeTextLogic(event.target.value)
    },
    fontStyle: function () {
        var length = this.state.text && this.state.text.length || 0;
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

        return style;
    },
    keyPress: function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            app.lib.focus.next();

            event.preventDefault();
            event.stopPropagation();
        }
    },
    render: function () {
        var placeholder = (this.props.context === 'tag' && this.props.model.tags().length > 0) ?
            'Sub tag name' :
            app.config.context[this.props.context].placeholder.blockValue;

        var data = this.props.data.data;

        return (
            React.DOM.div({ className: "text inputwrapper" },
                React.DOM.div({ ref: 'wrapper' },
                    React.DOM.textarea({
                        ref: 'textarea',
                        className: "textarea",
                        onChange: this.changeText,
                        onPaste: this.paste,
                        value: this.state.text,
                        style: this.fontStyle(),
                        onFocus: this.onFocus,
                        placeholder: placeholder,
                        onKeyDown: this.keyPress
                    })
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    React.DOM.i({ className: 'icon-bold' + (!data.bold ? ' inactive' : ''), onClick: this.toggleBold, title: 'Toggle bold' }),
                    React.DOM.i({ className: 'icon-underline' + (!data.underline ? ' inactive' : ''), onClick: this.toggleUnderline, title: 'Toggle underline' }),
                    React.DOM.i({ className: 'icon-italic' + (!data.italic ? ' inactive' : ''), onClick: this.toggleItalic, title: 'Toggle italic' }),
                    React.DOM.i({ className: 'icon-align-center' + (!data.center ? ' inactive' : ''), onClick: this.toggleCenter, title: 'Toggle center alignment' }),
                    React.DOM.i({ className: 'icon-fontsize' + (data.size !== 17 ? ' inactive' : ''), onClick: this.toggleSize, title: 'Toggle force small font size' })
                ) : null
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    onFocus: function () {
        this.focus();
    },
    focus: function () {
        this.refs.textarea.getDOMNode().focus();
        return true;
    },
    toggleBold: function () {
        this.props.data.data.bold = !this.props.data.data.bold;
        this.update();
    },
    toggleUnderline: function () {
        this.props.data.data.underline = !this.props.data.data.underline;
        this.update();
    },
    toggleItalic: function () {
        this.props.data.data.italic = !this.props.data.data.italic;
        this.update();
    },
    toggleCenter: function () {
        this.props.data.data.center = !this.props.data.data.center;
        this.update();
    },
    toggleSize: function () {
        this.props.data.data.size = this.props.data.data.size ? null : 17;
        this.update();
    },
    getMenuItems: function () {
        var items = [];

        items.push({
            icon: 'icon-bold',
            text: this.props.data.data.bold ? 'Remove bold' : 'Make bold',
            callback: this.toggleBold
        });

        return items;
    },
    statics: {
        hasOptions: true
    }
});