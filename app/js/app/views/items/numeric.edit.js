app.view.item.numeric = app.view.item.numeric || {};
app.view.item.numeric.edit = app.lib.element({
    displayName: 'item.numeric.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
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
    onChange: function (event) {
        var value = event.target.value;

        var regex = /^([\+-])?(\d+)?([,\.])?(\d+)?$/gi

        if (regex.test(value)) {
            this.props.data.data.value = value;
            this.forceUpdate();
        }
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();

            event.preventDefault();
            event.stopPropagation();
        }
    },
    onIncrement: function (dir) {
        value = (this.props.data.data.value || '0').replace(',', '.');
        var dec = app.lib.decimals(value);
        var value = parseFloat(value);
        value += dir * Math.pow(10, -dec);
        value = Math.round(value * Math.pow(10, dec)) / Math.pow(10, dec);
        this.props.data.data.value = value.toFixed(dec);

        this.forceUpdate();
    },
    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: 'numeric' + (data.controls ? ' hasControls' : '') },
                React.DOM.div({ className: 'block' },
                    React.DOM.input({
                        className: 'value',
                        value: data.value,
                        onChange: this.onChange,
                        onKeyDown: this.keyPress,
                        placeholder:'Blank value'
                    })
                ),
                data.controls ?
                    React.DOM.div({ className: 'commands' },
                        React.DOM.div({ className: 'left', onClick: this.onIncrement.bind(this, +1) }, React.DOM.i({ className: 'icon-plus' })),
                        React.DOM.div({ className: 'right', onClick: this.onIncrement.bind(this, -1) }, React.DOM.i({ className: 'icon-minus' }))
                    ) : null,

                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    React.DOM.i({ className: 'icon-sort' + (!data.controls ? ' inactive' : ''), onClick: this.toggleControls, title: 'Toggle controls' })
                ) : null
            )
        );
    },
    update: function () {
        this.forceUpdate();
    },
    toggleControls: function () {
        this.props.data.data.controls = !this.props.data.data.controls;
        this.update();
    },
    getMenuItems: function () {
        var items = [];

        items.push({
            icon: 'icon-sort',
            text: this.props.data.data.controls ? 'Remove controls' : 'Add controls',
            callback: this.toggleControls
        });

        return items;
    },
    statics: {
        hasOptions: true
    }
});