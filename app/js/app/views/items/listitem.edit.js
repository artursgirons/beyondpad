app.view.item.listitem = app.view.item.listitem || {};
app.view.item.listitem.edit = app.lib.element({
    displayName: 'item.listitem.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
        if (this.props.choice && this.props.hasTags) {
            this.props.item.tags = this.props.item.tags || [];
        }
        this.resizeTextarea();
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resizeTextarea();
    },
    getDefaultProps: function () {
        return {
            item: {
                checked:false,
                text: '',
                tags:[],
                value: null
            },
            nextItem: null
        };
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    resizeTextarea: function () {
        this.resizeTextareaThrottled = this.resizeTextareaThrottled || _.throttle(this.resizeTextareaLogic, 150);
        this.resizeTextareaThrottled();
    },
    resizeTextareaLogic: function () {
        if (app.lib.isMounted(this)) {
            var element = this.refs.textarea.getDOMNode();
            element.style.height = '0px';
            element.style.height = Math.max(element.scrollHeight, element.clientHeight) + 'px';
        }
    },
    paste: function (event) {
        if (event.clipboardData.getData) {
            var text = event.clipboardData.getData("Text") || '';
            var arr = text.split('\n');
            if (arr.length > 0) {
                this.textChangedLogic((this.props.item.text || '') + (arr[0] || '').trim());
                arr.shift();
                if (this.props.batchAdd && arr.length > 0) {
                    this.props.batchAdd(arr);
                }

                event.preventDefault();
            }
        }
    },
    textChanged: function (event) {
        this.textChangedLogic(event.target.value);
    },
    textChangedLogic: function (text) {
        var textOriginal = text;
        var text = (text.length < 151 ? text : text.substring(0, 147));

        if (textOriginal.length !== text.length) {
            text += '...';
        }

        this.props.item.text = text;

        this.forceUpdate();
    },
    keyPress: function (event) {
    },
    keyDown: function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            if (this.props.item.text) {
                if (this.props.nextItem) {
                    this.props.nextItem(this.props.index);
                }
            } else {
                app.lib.focus.next();
                this.removeItem();
            }
        }

        if (event.key === 'ArrowDown') {
            if (this.props.focusItem) {
                event.preventDefault();
                event.stopPropagation();
                this.props.focusItem(this.props.index + 1);
            }
        }

        if (event.key === 'ArrowUp') {
            if (this.props.focusItem) {
                event.preventDefault();
                event.stopPropagation();
                this.props.focusItem(this.props.index - 1);
            }
        }

        if (event.key === 'Backspace' && !this.props.item.text) {
            event.preventDefault();
            event.stopPropagation();
            this.removeItem();
        }
    },
    removeItem: function () {
        if (this.props.removeItem) {
            this.props.removeItem(this.props.index);
        }
    },
    checkItem: function () {
        this.props.item.checked = !this.props.item.checked;

        if (this.props.checkItem) {
            this.props.checkItem(this.props.index);
        }

        this.forceUpdate();
    },
    render: function () {
        var checkClass = this.props.item.checked ? 'icon-ok-blank' : 'icon-blank-empty';

        var textStyle;
        
        if (this.props.mode === 'list') {
            var textStyle = this.props.item.checked ? 'item-list-checked' : 'item-list-unchecked';
        } else {
            var textStyle = this.props.item.checked ? 'item-combo-checked' : 'item-combo-unchecked';
        }

        return (
            React.DOM.div({
                className: 'notelistitem ' + textStyle,
                'data-index': this.props.index
            },
                React.DOM.i({ className: 'licheck pointer ' + checkClass, onClick: this.checkItem }),
                React.DOM.textarea({
                    ref: 'textarea',
                    className: 'litext',
                    rows: 1,
                    placeholder: 'List item',
                    onChange: this.textChanged,
                    //onKeyDown: this.keyPress,
                    onKeyDown: this.keyDown,
                    onPaste: this.paste,
                    value: this.props.item.text
                }),
                this.props.choice && this.props.hasTags ?
                    React.DOM.div({ className: 'lichoice' },
                        app.view.content.component.choicetags({
                            tags: this.props.item.tags
                        })
                    )
                    : null,
                React.DOM.i({ className: 'lihandle icon-menu' }),
                React.DOM.i({ className: 'liremove icon-cancel', onClick: this.removeItem })
            )
        );
    },
    focus: function () {
        this.refs.textarea.getDOMNode().focus();
        return true;
    },
    validate: function (focus) {
        return true;
    }
});