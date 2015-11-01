app.view.content.component.list = app.lib.element({
    displayName: 'content.component.list',
    getInitialState: function () {
        return {
            mode: this.props.mode,
            loaded: false
        }
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);

        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('update:model batch:collection', this.props.updateLists);

        this.resetDefaults();

        this.loadData();
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentDidMount: function () {
        if (this.state.mode === 'edit') {
            this.focus();
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (prevState.mode !== this.state.mode && this.state.mode === 'edit') {
            this.focus();
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    isEdit: function () {
        return this.state.mode === 'edit';
    },
    loadData: function () {
        this.collection.load('notes', 'all', this.getListQuery());
    },
    getListQuery: function () {
        var query = _.map(this.props.model.data('tags'), function (tag) {
            return {
                type: 'root',
                query: tag
            }
        }).concat(
            _.map(this.props.model.data('excludeTags'), function (tag) {
                return {
                    type: 'not',
                    query: tag
                }
            })
        );

        return $.extend(true, [], query.concat(app.navigation.query.all()));
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    resetDefaults: function () {
        var data;

        if (this.props.model.getOptions('addToInbox')) {
            data = {
                _data: {
                    status: 'inbox'
                }
            }
        }

        this.model.setDefaults('note', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var query = _.map(this.props.model.data('tags'), function (tag) {
            return {
                type: 'branch',
                query: tag
            }
        });

        if (query.length > 0) {
            return _.map(query, function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    },
    update: function () {
        this.forceUpdate();
    },
    changeName: function (event) {
        this.props.model.data().name = event.target.value;
        this.forceUpdate();
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next('.boardlist');
            event.preventDefault();
        }
    },
    focus: function () {
        $(':focusable:first', this.getDOMNode()).focus();
    },
    save: function () {
        if (!this.props.model.data().name) {
            this.props.model.update({ name: { $set: 'Unnamed' } });
        }

        if (this.props.model.isNew()) {
            var list = this.props.model.clone();
            this.props.add(list)
            this.setState({ mode: 'add' });
            this.props.model.reset();
        } else {
            this.props.save();
            this.toggleMode();
        }
    },
    toggleMode: function () {
        if (this.state.mode == 'add') {
            this.setState({
                mode: 'edit'
            });
        } else {
            if (this.isEdit()) {
                this.setState({
                    mode: 'view',
                    loaded: false
                }, function () {
                    this.resetDefaults();
                    this.loadData()
                }.bind(this));
            } else {
                this.setState({
                    mode: 'edit'
                });
            }
        }
    },
    showMenu: function (event) {
        event.preventDefault();
        event.stopPropagation();

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-ok-big',
            text: 'Select all notes',
            callback: this.selectAllNotes
        });

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit list',
            callback: this.editList
        });

        menu.items.push({
            icon: 'icon-trash-alt',
            text: 'Delete list',
            callback: this.deleteList
        });

        app.events.trigger('contextmenu', event.target, menu, 'bottom');
    },
    deleteList: function () {
        this.props.remove(this.props.model);
    },
    editList: function () {
        this.toggleMode();
    },
    newNote: function () {
        this.refs.notes.addNewNote();
    },
    optionsToggle: function (field, value, component) {
        this.props.model.data().options = this.props.model.data('options') || {};
        var options = this.props.model.data('options');
        if (typeof (options[field]) === 'undefined') {
            var update = {};
            update[field] = { $set: !app.config.defaultListOptions[field] };
            this.props.model.update('options', update);

            component.update(this.props.model.getOptions(field), false);
        } else {
            if (typeof (options[field]) !== 'undefined' && options[field] === app.config.defaultListOptions[field]) {
                var update = {};
                update[field] = { $set: undefined };
                this.props.model.update('options', update);
                delete this.props.model.data('options')[field];

                component.update(this.props.model.getOptions(field), true);

            } else {
                var update = {};
                update[field] = { $set: !options[field] };
                this.props.model.update('options', update);

                component.update(this.props.model.getOptions(field), false);
            }
        }
    },
    getOptionToggleProps: function (field, text) {
        this.props.model.data().options = this.props.model.data('options') || {};
        var options = this.props.model.data('options');
        var isDefault = typeof (options[field]) === 'undefined';
        var checked = isDefault ? app.config.defaultListOptions[field] : options[field];

        return {
            field: field,
            isDefault: isDefault,
            checked: checked,
            text: text,
            callback: this.optionsToggle
        }
    },
    selectAllNotes: function () {
        if (this.refs.notes) {
            this.refs.notes.selectAllNotes();
        }
    },
    render: function () {
        var background = (this.props.index % 2 == 1 ? ' bg light' : ' bg dark');

        var saved = !this.props.model.isNew() ? ' savedlist ' : '';

        switch (this.state.mode) {
            case 'edit':
                return (
                    React.DOM.div({ className: 'boardlist edit ' + saved + background, 'data-index': this.props.index },
                        React.DOM.div({ className: 'head' },
                            React.DOM.textarea({
                                ref: 'input',
                                className: 'value',
                                value: this.props.model.data('name'),
                                onChange: this.changeName,
                                onKeyDown: this.keyPress,
                                rows: 1,
                                placeholder: 'List name'
                            }),
                            React.DOM.div({ className: 'more icon-enter', onClick: this.save, title: 'Save list' })
                        ),
                        React.DOM.div({ className: 'options' },
                            app.view.components.group({ name: 'Tag to include (filter)', labelClassName: background },
                                app.view.content.component.listtags({
                                    model: this.props.model,
                                    events: this.events
                                })
                            ),
                            app.view.components.group({ name: 'Tags to exclude (optional)', labelClassName: background },
                                app.view.content.component.listexcludetags({
                                    model: this.props.model,
                                    events: this.events
                                })
                            ),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('addToInbox', 'Add note to inbox')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('showNewNote', 'Always show new note')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('hideTags', 'Don\'t show filter tags')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('appendOnly', 'Only append / don\'t remove source list tags')),
                            React.DOM.div({ className: 'seperator' }),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.button({
                                icon: 'icon-enter',
                                text: 'Save list',
                                onClick: this.save,
                                className: 'right'
                            })
                        )
                    )
                );
            case 'view':
                return (
                    React.DOM.div({ className: 'boardlist view ' + saved + background, 'data-index': this.props.index },
                        React.DOM.div({ className: 'head' },
                            React.DOM.div({ className: 'value', onDoubleClick: this.toggleMode },
                                this.props.model.data('name')
                            ),
                            React.DOM.div({ className: 'newnote icon-plus-alt', onClick: this.newNote, title:'Add new note' }),
                            React.DOM.div({ className: 'more icon-ellipsis', onClick: this.showMenu, title:'More' })
                        ),
                        this.state.loaded ?
                            app.view.content.component.listnotes({
                                ref: 'notes',
                                model: this.model,
                                collection: this.collection,
                                selection: this.props.selection,
                                listModel: this.props.model,
                                lists: this.props.lists
                            }) :
                            app.view.content.component.loading()
                    )
                );
                break;
            case 'add':
                return (
                    React.DOM.div({ className: 'newboardlist', 'data-index': this.props.index },
                        React.DOM.span({ onClick: this.toggleMode }, '+ New list')
                    )
                );
                break;
        }
    }
});