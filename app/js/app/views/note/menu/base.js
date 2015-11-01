app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.base = {
    getInitialState: function () {
        return {
            active: (this.props.context === 'note' || this.props.context === 'tracker') ? 'add' : null,
            fullview: true // menu is always visible in edit mode
        };
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
    },
    componentDidMount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidUpdate: function () {
        //app.lib.focus.restore();
    },
    componentWillUnmount: function () {
    },

    itemClicked: function (event) {
        var type = $(event.target).data('type');

        this.setState({ active: null });

        switch (type) {
            case 'more':
                app.events.trigger('contextmenu', event.target, {
                    type: 'textmenu',
                    items: [
                        {
                            icon: 'icon-trash-alt',
                            text: 'Delete'
                        },
                        {
                            icon: 'icon-cog',
                            text: 'Settings'
                        }
                    ]
                });
                break;
            case 'archive':
                this.props.model.archiveNote();
                break;
            case 'remove':
                this.props.model.removeNote();
                break;
            case 'tag':
                if (!this.props.model.data().tag) {
                    this.props.model.setTag();
                }
                else {
                    this.props.model.removeTag();
                }
                break;
        }

        this.setState({ active: type });
    },

    render: function () {
        var content = this.renderItems(this.state.active);

        return (
            React.DOM.div({
                className: window.classnames({
                    'noselect': true,
                    'picker': true,
                    'active': this.state.active,
                    'fullview':this.state.fullview
                })
            },
                React.DOM.div({ className: 'hint', onClick: this.itemClicked },
                    React.DOM.i({ className: 'item icon-ellipsis' })
                ),
                React.DOM.div({ className: 'content' },
                    React.DOM.div({ className: 'root' },
                        this.renderItems('root', this.state.active)
                    ),
                    content ? React.DOM.div({ className: 'sub' },
                        content
                    ) : null
                )
            )
        );
    },
    renderItems: function (parent, active) {
        if (parent === 'options') {
            return app.view.note.options[this.props.context]({
                model: this.props.model,
                events: this.props.events
            });
            //return this['render.options.' + this.props.context]();
        }
        else {
            var items = this.commands[parent];
            return _.map(items, function (item, index) {
                return React.DOM.i({
                    key: index,
                    'className': item.icon + ' ' + window.classnames({
                        'item': true,
                        'active': active === item.value
                    }),
                    'data-type': item.value,
                    onClick: this.execute.bind(this, parent, item.value),
                    style: item.color ? { color: app.lib.color(item.color) } : {},
                    title: item.text
                });
            }, this);
        }
    },

    execute: function (parent, command, event) {
        if (this.commands[command] || command === 'options') {
            if (this.state.active === command) {
                this.setState({ active: null });
            }
            else {
                this.setState({ active: command });
            }
        }
        else {
            switch (parent) {
                case 'root': {
                    this.setState({ active: null });
                    switch (command) {
                        case 'more': {
                            this.menu(event);
                            //this['menu.' + this.props.context](event);
                            break;
                        }
                        case 'tag': {
                            this.tag();
                            break;
                        }
                    }
                    break;
                }
                case 'add': {
                    this.props.model.addItem(this.props.context, command);
                    break;
                }
                case 'color': {
                    this.props.model.updateColor(command);
                    break;
                }
            }
        }
    },
    clear: function () {
        //TODO: context avare reset
        this.props.model.reset();
    },
    moveToArchive: function () {
        this.props.model.setStatus(this.props.context, 'archive');
    },
    moveToTrash: function () {
        this.props.model.setStatus(this.props.context, 'trash');
    },
    moveToAll: function () {
        this.props.model.setStatus(this.props.context, 'all');
    },
    moveToInbox: function () {
        this.props.model.setStatus(this.props.context, 'inbox');
    },
    remove: function () {
        this.props.model.remove(this.props.context);
    },

    tag: function () {
        if (!this.props.model.data('tag')) {
            this.props.model.setTag();
        }
        else {
            this.props.model.removeTag();
        }
    },
    releseTag: function () {
        this.props.model.update({ tag: { $set: null } });
        delete this.props.model.data().tag;

        this.props.model.save(this.props.context);
    },
    releseAndDelete: function () {
        this.props.model.update({ tag: { $set: null } });
        delete this.props.model.data().tag;

        this.props.model.save(this.props.context).done(function () {
            this.props.model.collection.remove(this.props.model);
        }.bind(this));
    }
};