app.view.content.component.board = app.lib.element({
    displayName: 'content.component.board',
    mixins: [],
    getInitialState: function () {
        return {
            mode: this.props.mode || 'view',
            placeholder: true
        };
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
        $(this.getDOMNode()).data('model', this.props.model);
        this.focus();
    },
    focus: function () {
        if (this.refs.input) {
            this.refs.input.getDOMNode().focus();
            return true;
        }

        return false;
    },

    isEdit: function () {
        return this.state.mode === 'edit';
    },
    edit: function () {
        this.setState({
            mode: 'edit',
            placeholder: false
        });
    },
    remove: function () {
        this.props.model.destroy();
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.save();
        }
    },
    save: function () {
        if (this.props.model.get('name')) {
            if (this.props.model.isNew()) {
                var board = this.props.model.clone();
                this.props.model.collection.unshift(board);
                this.props.model.collection.sort();
                board.save();
                this.props.model.clear();
                this.props.model.set(this.props.model.defaults());
                this.setState({ placeholder: true });
            } else {
                this.props.model.save();
                this.setState({ mode: 'view' });
            }
        }
    },
    updateName: function (event) {
        this.props.model.set('name', event.target.value);
        this.forceUpdate();
    },
    openBoard: function () {
        if (!this.isEdit()) {
            app.router.navigate('boards/' + this.props.model.get('_id'), { trigger: true });
        }
    },
    more: function (event) {
        event.preventDefault();
        event.stopPropagation();

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit board',
            callback: this.edit
        });

        menu.items.push({
            icon: 'icon-trash-alt',
            text: 'Remove board',
            callback: this.remove
        });

        app.events.trigger('contextmenu', event.target, menu);
    },
    removePlaceholder: function () {
        this.setState({ placeholder: false });
    },
    render: function () {
        var lists = this.props.model.get('lists');

        switch (this.state.mode) {
            case 'view': {
                return (
                    React.DOM.div({ className: 'boarditem view', onDoubleClick: this.openBoard },
                        React.DOM.div({ className: 'title' },
                            React.DOM.div({ className: 'value' },
                                this.props.model.get('name')
                            )
                        ),
                        React.DOM.div({ className: 'list' },
                            lists.length > 0 ? (
                                _.map(lists.models, function (listModel, index) {
                                    return React.DOM.div({ key:index, className: 'item' }, listModel.data('name'));
                                })
                            ) : (
                                React.DOM.div({ className: 'item', dangerouslySetInnerHTML: { __html: '&nbsp;' } })
                            )
                        ),
                        React.DOM.div({ className: 'more icon-ellipsis', onClick: this.more, title:'More' })
                    )
                );
            }
            case 'edit': {

                switch (this.state.placeholder) {
                    case true: {
                        return (
                            React.DOM.div({ className: 'boarditem edit placeholder', onClick: this.removePlaceholder },
                                React.DOM.div({ className: 'text' },
                                    '+ New board'
                                )
                            )
                        );
                    }
                    case false: {
                        return (
                            React.DOM.div({ className: 'boarditem edit', onClick: this.openBoard },
                                React.DOM.div({ className: 'title' },
                                    React.DOM.textarea({
                                        rows: 1,
                                        className: 'value',
                                        value: this.props.model.get('name'),
                                        onChange: this.updateName,
                                        placeholder: 'New board name',
                                        ref: 'input',
                                        onKeyDown: this.keyPress
                                    })
                                ),
                                React.DOM.div({ className: 'list' },
                                    lists.length > 0 ? (
                                        _.map(lists.models, function (listModel, index) {
                                            return React.DOM.div({ key: index, className: 'item' }, listModel.data('name'));
                                        })
                                    ) : (
                                        React.DOM.div({ className: 'item', dangerouslySetInnerHTML: { __html: '&nbsp;' } })
                                    )
                                ),
                                React.DOM.div({ className: 'more icon-enter', onClick: this.save, title: 'Save board' })
                            )
                        );
                    }
                }
            }
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.mode !== prevState.mode || this.state.placeholder !== prevState.placeholder) {
            this.focus();
            this.props.onResize();
        }
    }
});