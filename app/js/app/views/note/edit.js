app.view.note.edit = app.lib.element({
    displayName: 'note.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    getInitialState: function () {
        return {
            context: this.props.context || 'note'
        };
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
        this.events.on('save', this.saveNote, this);
    },
    componentWillUnmount: function () {
        this.events.off();
        this.events = null;
    },
    componentDidMount: function () {
        this.events.on('focus:set', this.focusSet, this);
        this.events.on('focus:remove', this.focusRemove, this);
        //this.focus();
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.item.tag.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    switchContext: this.switchContext,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                app.view.item.body.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                app.view.item.timestamp.edit({
                    model: this.props.model,
                    rootParent: this.props.rootParent
                }),

                app.view.note.menu[this.state.context]({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                React.DOM.div({ className: "notefooter" },
                    app.view.item.tags.edit({
                        ref: app.lib.cid(),
                        model: this.props.model,
                        events: this.events,
                        context: this.state.context,
                        rootParent: this.props.rootParent
                    }),
                    React.DOM.div({ className: 'enter', onClick: this.saveNote, title: 'Save item' },
                        React.DOM.i({ className: 'icon-enter' }),
                        React.DOM.span({className:'savetext'}, 'save')
                    )
                )
            )
        );
    },
    saveNote: function () {
        this.save();
    },
    save: function (pure) {
        var isValid = true;
        var focusIfInvalid = !pure;

        var children = app.lib.findChildren(this);
        for (var i = 0; i < children.length; i++) {
            if (children[i].validate && !children[i].validate(focusIfInvalid)) {
                isValid = false;
                break;
            }
        }

        if (this.props.context !== 'tag') {
            if (this.props.model.data(this.props.context).items.length <= 0) {
                isValid = false;
            }
        }

        if (isValid) {
            if (this.props.model.isNew()) {
                var note = this.props.model.clone();
                this.props.model.collection.unshift(note);
                note.save(this.state.context);
                this.props.model.reset();
            } else {
                if (!pure) {
                    this.props.changeView('view');
                }
                this.props.model.save(this.state.context);
            }

            if (!pure) {
                if (this.props.onSaved) {
                    this.props.onSaved();
                }
            }
        }
    },
    switchContext: function (context) {
        if (context === 'note' || context === 'tracker') {
            if (!this.props.model.data(context)) {
                var items = {};
                items[context] = { $set: app.model.note.defaults[context]()._data[context] };
                this.props.model.update(items);
            }
        }

        this.setState({
            context: context
        });
    },
    focus: function () {
        //TODO: this construct for some reason leaks DOM
        var elementToFocus = $(':focusable:first', this.getDOMNode());
        if (elementToFocus.parents('.notefooter').length === 0) {
            elementToFocus.focus();

            if (!this.props.model.isNew() && this.props.model.data('tag') && this.props.model.data('tag').name.length > 0) {
                app.lib.focus.next();
            }
        }

        this.rootParent().setActive(true);

        return true;
    },
    focusSet: function (component) {
        if (component) {
            if (component.focus) {
                component.focus();
            }
        }
        else {
            this.focus();
        }
    },
    focusRemove: function (component) {
        if (component) {
            if (component.focus) {
                component.focus();
                app.lib.focus.next();
            }
        }
        else {
            this.focus();
        }
    }
});