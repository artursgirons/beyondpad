app.view.note.view = app.lib.element({
    displayName: 'note.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.props.model.on('change', this.forceUpdate.bind(this, null), this);
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidUpdate: function () {
        this.props.onResize(this);
    },
    getInitialState: function () {
        return {
            context: this.props.context || 'note',
            selected: false
        };
    },
    changeView: function () {
        this.props.changeView('edit');
    },
    switchContext: function (context) {
        this.setState({
            context: context
        });
    },
    render: function () {
        return (
            React.DOM.div({
                onDoubleClick: this.changeView,
                ref: 'container'
            },
                app.view.item.tag.view({
                    model: this.props.model,
                    context: this.state.context,
                    switchContext: this.switchContext,
                    rootParent: this.props.rootParent
                }),
                app.view.item.body.view({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                }),
                app.view.item.timestamp.view({
                    model: this.props.model,
                    rootParent: this.props.rootParent
                }),
                app.view.note.menu.quick({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                }),
                app.view.item.tags.view({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                })
            )
        );
    }
});