app.view.item.choice = app.view.item.choice || {};
app.view.item.choice.view = app.lib.element({
    displayName: 'item.choice.view',
    render: function () {
        var props = _.clone(this.props);

        props.choice = true;
        props.mode = 'choice';

        if (this.props.context === 'tracker') {
            if (!this.props.data.data.combo) {
                return app.view.item.list.view(props);
            } else {
                return app.view.item.combo.view(props);
            }
        } else {
            if (!this.props.data.data.combo) {
                props.viewMode = 'view';
                return app.view.item.list.view(props);
            } else {
                props.viewMode = 'view';
                return app.view.item.combo.view(props);
            }
        }
    }
});