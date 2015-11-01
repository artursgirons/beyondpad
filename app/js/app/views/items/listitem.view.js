app.view.item.listitem = app.view.item.listitem || {};
app.view.item.listitem.view = app.lib.element({
    displayName: 'item.listitem.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getDefaultProps: function () {
        return {
            item: {
                checked: false,
                text: '',
                tags: [],
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
    checkItem: function () {
        if (!this.props.choice) {
            this.props.item.checked = !this.props.item.checked;
            this.forceUpdate();
            this.props.save();
        } else {
            if (this.props.choice && this.props.viewMode === 'edit') {
                this.props.item.checked = !this.props.item.checked;

                if (this.props.checkItem) {
                    this.props.checkItem(this.props.index);
                }

                this.forceUpdate();
            }
        }
    },
    prevent: function (event) {
        if (!this.props.choice) {
            event.preventDefault();
            event.stopPropagation();
        }
    },
    render: function () {
        var checkClass = this.props.item.checked ? 'icon-ok-blank' : 'icon-blank-empty';

        var textStyle;

        if (this.props.mode === 'list') {
            var textStyle = this.props.item.checked ? 'item-list-checked' : 'item-list-unchecked';
        } else {
            var textStyle = this.props.item.checked ? 'item-combo-checked' : 'item-combo-unchecked';
        }

        var style = {};
        if (!this.props.item.text) {
            style['color'] = 'rgba(10, 10, 10, 0.40)';
        }

        var canCheck = !this.props.choice || (this.props.choice && this.props.viewMode === 'edit');

        return (
            React.DOM.div({ className: 'notelistitem ' + textStyle },
                React.DOM.i({ className: 'licheck ' + checkClass + (canCheck ? ' pointer' : ''), onClick: this.checkItem, onDoubleClick: this.prevent }),
                React.DOM.div({
                    style: style,
                    className: 'litext'
                }, this.props.item.text || 'List item')
            )
        );
    },
    focus: function () {
        return true;
    },
    validate: function (focus) {
        return true;
    }
});