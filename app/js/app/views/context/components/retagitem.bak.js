app.view.context.components = app.view.context.components || {};
app.view.context.components.retagitem = app.lib.element({
    displayName: 'components.retag',
    componentWillMount: function () {
    },
    componentDidMount: function () {
        this.refreshExpander(this.props);
    },
    componentWillUnmount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    getInitialState: function () {
        return { };
    },
    toggle: function (_id, evant) {
        if (this.props.root) {
            this.props.root.toggle(_id, event);
        } else {
            event.preventDefault();
            event.stopPropagation();

            if (typeof (this.props.selectionHashDefault[_id]) === 'undefined') {
                if (typeof (this.props.selectionHash[_id]) === 'undefined') {
                    this.props.selectionHash[_id] = true;
                } else {
                    delete this.props.selectionHash[_id];
                }

                this.forceUpdate();
            } else {
                if (this.props.selectionHash[_id] === false) {
                    this.props.selectionHash[_id] = true;
                    this.forceUpdate();
                    return;
                }

                if (this.props.selectionHash[_id] === true) {
                    if (this.props.selectionHashDefault[_id]) {
                        this.props.selectionHash[_id] = false;
                    } else {
                        this.props.selectionHash[_id] = this.props.selectionHashDefault[_id];
                    }
                    this.forceUpdate();
                    return;
                }

                if (this.props.selectionHash[_id] === null) {
                    this.props.selectionHash[_id] = false;
                    this.forceUpdate();
                    return;
                }
            }
        }
    },

    isInactive: function (_id) {
        if (this.props.root) {
            return this.props.root.isInactive(_id);
        } else {
            //this will gray out all not checked
            return !(typeof (this.props.selectionHash[_id]) !== 'undefined');
            //this will gray out all unchanged
            return !(this.props.selectionHash[_id] !== this.props.selectionHashDefault[_id] && typeof (this.props.selectionHash[_id]) !== 'undefined');
        }
    },

    isToggle: function (id) {
        if (this.props.root) {
            return this.props.root.isToggle(id);
        } else {
            return (typeof (this.props.selectionHash[id]) !== 'undefined' ? this.props.selectionHash[id] : false);
        }
    },

    refreshExpander: function (props) {
        if (!props.root /*&& props.active*/) {
            this.setState({
                parents: app.data.tags.getParents(_.keys(this.props.selectionHash))
            });
        }
    },

    expand: function (id) {
        if (this.props.root) {
            return this.props.root.expand(id);
        } else {
            if (this.state.parents) {
                if (this.state.parents[id]) {
                    //TODO: this forces all to collapse
                    this.state.parents[id] = false;
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    },

    render: function () {
        var index = 0;
        return (
            React.DOM.div({className:'retag'},
                _.map(this.props.tree, function (treeItem) {
                    var tag = treeItem.tag;

                    var newTree = _.reduce(treeItem.down, function (memo, subTag) {
                        memo[subTag] = app.data.tags.getTree(false)[subTag];
                        return memo;
                    }, {});

                    newTree = app.data.tags.treeToArray(newTree);

                    var id = app.data.tags.get(tag).get('_id');
                    return app.view.sidepane.component.checkitem(
                        {
                            key: index++,
                            text: app.data.tags.get(tag).data('tag').name,
                            icon: 'icon-blank',
                            color: app.lib.color(app.data.tags.get(tag).data('color')),

                            click: this.toggle.bind(this, id),
                            //toggle: this.toggle.bind(this, id),

                            checked: this.isToggle(id),
                            expanded: this.expand(id),

                            selected: false,
                            visible: true,

                            inactive: this.isInactive(id)
                        },
                        treeItem.down.length > 0 ? app.view.context.components.retagitem({
                            tree: newTree,
                            root: this,
                            active: false
                        }) : null
                    );
                }, this)
            )
        );
    },
    componentDidUpdate: function () {
    }
});