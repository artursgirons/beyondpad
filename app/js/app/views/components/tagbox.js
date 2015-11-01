
app.view.components.tagbox = app.lib.element({
    displayName: 'components.tagbox',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
        this.events.on('add', this.addTag, this);

        $(document).on('mouseup', this.componentDidBlur);
        this.temp = {
            backspacecount: 0,
            timeout: null
        };
        this.resolveTags(this.props.tags);
    },
    componentWillUnmount: function () {
        this.events.off(null, null, this);

        $(document).off('mouseup', this.componentDidBlur);
        app.lib.clearTimeout(this.temp.timeout);
    },
    componentDidBlur: function (event) {
        if (this.state.showLookup) {
            var container = $(this.getDOMNode());
            if (!container.is(event.target) && container.has(event.target).length === 0) {
                app.lib.clearTimeout(this.temp.timeout);
                app.lib.focus.clear();
                this.setState({ showLookup: false });
            }
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.resolveTags(nextProps.tags);
    },
    onResize: function () {
        // This makes tagbox to work as rootparent for resize if needed
    },
    resolveTags: function (tags) {
        tags = _.filter(tags, function (tag) {
            var tagModel = app.data.tags.get(tag);
            return tagModel && tagModel.isVisible();
        });

        var selected = _.map(tags, function (tag) {
            return app.data.tags.get(tag);
        });

        this.setState({
            text: '',
            selected: selected
        });
    },
    getInitialState: function () {
        return {
            showLookup: false,
            text: '',
            selected: []
        };
    },
    focus: function () {
        this.refs.input.getDOMNode().focus();

        this.onFocus();

        return true;
    },
    onFocus: function () {
        app.lib.clearTimeout(this.temp.timeout);

        this.__scroll = this.__scroll || _.debounce(this.scroll, 5);
        this.__scroll();

        this.setState({
            showLookup: true,
        });
    },
    blur: function (event) {
        //$("..").is(":focus")

        var target = event.target;
        this.temp.timeout = setTimeout(function () {
            if (app.lib.isMounted(this) && target !== document.activeElement) {
                //app.lib.focus.clear();
                this.setState({
                    showLookup: false
                });
            }
        }.bind(this), 250);
    },
    textChanged: function (event) {
        this.temp.backspacecount = 0;
        this.setState({
            showLookup: true,
            text: event.target.value
        });
    },
    keyDown: function (event) {
        if (_.contains(['PageUp', 'PageDown', 'ArrowUp', 'ArrowDown'], event.key)) {
            var key = event.key;
            if (!this.state.showLookup) {
                this.setState({ showLookup: true });
            } else {
                this.events.trigger('navigate', key);
            }

            event.preventDefault();
            event.stopPropagation();
        } else {
            switch (event.key) {
                case 'Enter':
                    if (this.state.showLookup) {
                        this.events.trigger('select', 'keyboard');
                    }
                    else {
                        this.setState({ showLookup: true });
                    }
                    event.preventDefault();
                    event.stopPropagation();

                    break;
                case 'Backspace':
                    if (this.state.text.length === 0 && ((++this.temp.backspacecount) > 0 || !this.state.showLookup)) {
                        if (this.state.showLookup) {
                            this.setState({ showLookup: false });
                        }
                        else {
                            //this.props.removeTag(this.props.tags[this.props.tags.length - 1]);
                            this.removeTag();
                        }
                    }

                    break;
                case 'Escape':
                    this.setState({ showLookup: false });
                    break;
            }
        }
    },
    // Remove last visible tag, if tag is invissible skip in and atempt to delete next
    removeTag: function (index) {
        index = (index || this.props.tags.length) - 1;

        if (index >= 0) {
            var tag = this.props.tags[index];
            var model = app.data.tags.get(tag);

            if (model && model.isVisible()) {
                this.props.removeTag(tag);
            } else {
                this.removeTag(index);
            }
        }
    },
    //keyUp: function (event) { },
    addTag: function (item, source) {
        if (item.isNew()) {
            switch (item.get('_temp')._command) {
                case 'add': {
                    var self = this;
                    var newTag = item.clone();
                    newTag.update('tag', { name: { $set: newTag.get('_temp')._name } });
                    newTag.unset('_temp');

                    newTag.save().done(function () {
                        this.addTag(newTag, source);
                    }.bind(this));

                    item.update('color', { $set: app.lib.randomColor() });
                    //item.set('color', app.lib.randomColor());

                    break;
                }
                case 'save': {
                    this.props.events.trigger('save');
                    break;
                }
            }
          
        }
        else {
            this.props.addTag(item.get('_id'));

            if (source === 'keyboard') {
                this.setState({
                    showLookup: false
                });
            } else {
                this.focus();
            }
        }
    },
    getDefaultProps: function () {
        return {
            addTag: null,
            removeTag: null
        }
    },
    render: function () {
        return (
            React.DOM.div({
                className: 'tags',
                onClick: this.clickComponent
            },
                _.map(this.state.selected, function (tag) {
                    return app.view.components.tag({
                        key: app.lib.uidmap(tag.get('_id')),
                        tag: tag,
                        onClickTag: this.props.onClickTag,
                        onRemoveTag: this.onRemoveTag,
                        onReplaceTag: this.props.replaceTag
                    });
                }, this),
                React.DOM.input({
                    ref: 'input',
                    onFocus: this.onFocus,
                    onBlur: this.blur,
                    onChange: this.textChanged,
                    //onClick: this.clickComponent,
                    onKeyDown: this.keyDown,
                    //onKeyUp: this.keyUp,
                    value: this.state.text,
                    placeholder: ' + Add or create tags'
                }),
                app.view.components.taglookup({
                    events: this.events,
                    filter: this.state.text,
                    selected: this.state.selected,
                    show: this.state.showLookup,
                    save: this.props.save,
                    create: true,
                    rootParent: this.props.rootParent,
                    exclude: this.props.exclude
                })
            )
        );
    },
    clickComponent: function (event) {
        this.focus();
        //this.refs.input.getDOMNode().focus();
    },
    onRemoveTag: function (event, tagModel) {
        this.props.removeTag(tagModel.get('_id'));
    },
    componentDidUpdate: function () {
        //app.lib.focus.restore();
    },
    scroll: function () {
        if (this.isMounted()) {
            $(this.getDOMNode()).scrollintoview({
                direction: 'y',
                duration: 100
            });
        }
    }
});