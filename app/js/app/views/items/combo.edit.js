app.view.item.combo = app.view.item.combo || {};
app.view.item.combo.edit = app.lib.element({
    displayName: 'item.combo.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    componentDidUpdate: function (prevProps, prevState) {
    },

    getInitialState: function () {
        return {};
    },

    componentWillReceiveProps: function (nextProps) {
    },

    onChange: function (index) {
        if (index >= 0) {
            this.props.data.data.items[index].checked = true;
            this.props.checkItem(index);
        } else {
            this.props.checkItem(index);
        }
    },

    onClick: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items = _.map(this.props.data.data.items, function (item, index) {
            return {
                icon: item.checked ? 'icon-dot-circled' : 'icon-circle-empty',
                text: item.text,
                callback: this.onChange.bind(this, index)
            }
        }, this);

        menu.items = _.filter(menu.items, function (item) {
            return item.text;
        });

        if (menu.items.length > 0) {
            menu.items.push({
                icon: 'icon-cancel',
                text: 'Unselect',
                callback: this.onChange.bind(this, -1)
            });
        }

        app.events.trigger('contextmenu', event.target, menu, 'bottom', 'middle');
    },

    render: function () {
        var selected = _.find(this.props.data.data.items, function (item) {
            return item.checked;
        });

        return (
            React.DOM.div({ className: 'combo', onClick: this.onClick },
                React.DOM.div({ className: 'combo-content' }, selected ? selected.text : '- Not selected -'),
                React.DOM.i({ className: 'combo-indicator icon-down-dir' })
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: false
    }
});