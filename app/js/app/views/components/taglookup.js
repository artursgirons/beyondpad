app.view.components.taglookup = app.lib.element({
    displayName: 'components.taglookup',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.events.on('navigate', this.navigate, this);
        this.props.events.on('select', this.select, this);
        app.data.tags.on('sync', this.filter, this);
    },
    componentWillUnmount: function () {
        this.props.events.off(null, null, this);
        app.data.tags.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.show;
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.filter !== this.props.filter || nextProps.selected !== this.props.selected) {
            var filtered = this.filtered(nextProps.filter, nextProps.selected);
            this.setState({
                items: filtered,
                active: nextProps.filter ? filtered[0] : null
            });
        }

        if (nextProps.show !== this.props.show) {
            if (this.state.items.length > 0) {
                this.setState({
                    active: this.state.items[0] || null
                });
            }
        }
    },
    onResize: function () {
        // This makes tagbox to work as rootparent for resize if needed
    },
    getInitialState: function () {
        this.newTag = new app.model.tag();
        this.newTag.setDefaults('tag');
        this.newTag.reset();
        this.newTag.set('_temp', {
            _icon: null,
            _name: null,
            _command: null
        });

        this.doneTag = new app.model.tag();
        this.doneTag.setDefaults('tag');
        this.doneTag.reset();
        this.doneTag.update({ color: { $set: '#666' } });
        this.doneTag.set('_temp', {
            _icon: 'icon-enter',
            _name: null,
            _command: null
        });

        return {
            items: this.filtered(this.props.filter, this.props.selected),
            active: null
        };
    },
    navigate: function (key) {
        var index = this.state.items.indexOf(this.state.active);

        if (key === 'PageUp') index -= 6;
        if (key === 'PageDown') index += 6;
        if (key === 'ArrowUp') index -= 1;
        if (key === 'ArrowDown') index += 1;

        this.setState({
            active: this.state.items[app.lib.validIndex(index, this.state.items)]
        });
    },
    select: function (source) {
        if (this.props.show) {
            if (this.state.active) {
                this.props.events.trigger('add', this.state.active, source);
                this.setState({
                    active: null
                });
            }
            else {
                if (this.state.items.length > 0) {
                    this.setState({
                        active: this.state.items[0]
                    });
                }
            }
        }
    },
    filter: function () {
        this.setState({
            items: this.filtered(this.props.filter, this.props.selected),
        });
    },
    filtered: function (filter, exclude) {
        var result = null;
        var items = app.data.tags.getVisible();
        var exact = false;

        //filter=(filter === null?'':filter);

        if (filter===null) {
            result = items;
        }
        else {
            result = _.filter(items, function (item) {
                exact = item.data('tag').name.toLowerCase()=== filter.toLowerCase() || exact;
                return _.contains(item.data('tag').name.toLowerCase(), filter.toLowerCase()) && !_.contains(this.props.exclude, item.get('_id'));
            }, this);
        }

        if (exclude) {
            result = _.difference(result, exclude);
        }

        if (filter.length > 0 && !exact) {

            this.newTag.update('tag', {
                name: { $set: 'Create tag "' + filter + '"' }
            }, true);
            this.newTag.set('_temp', {
                _name: filter,
                _command: 'add',
                _icon: 'icon-plus-squared'
            });

            result.push(this.newTag);
        }
        else {
            if (this.props.save) {
                if (filter.length === 0) {
                    this.doneTag.update('tag', {
                        name: { $set: 'Save note' }
                    }, true);

                    this.doneTag.set('_temp', {
                        _name: filter,
                        _command: 'save',
                        _icon: 'icon-enter'
                    });

                    result.unshift(this.doneTag);
                }
            }
        }

        return result;
    },
    mouseOverItem: function (event, item) {
        this.setState({ active: item });
    },
    mouseClickItem: function (event, item) {
        this.select('mouse');
    },
    render: function () {
        if (this.props.show && this.state.items.length > 0) {
            return (
                React.DOM.div({ className: 'lookup scroll noselect' },
                    _.map(this.state.items, function (item, index) {
                        var active = (this.state.active && this.state.active.get('_id') === item.get('_id'));
                        return app.view.components.tag({
                            key: item.key,
                            tag: item,
                            active: active,
                            onMouseOverTag: this.mouseOverItem,
                            onClickTag: this.mouseClickItem
                        });
                    }, this)
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});