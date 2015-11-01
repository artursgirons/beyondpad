app.view.note.main = app.lib.element({
    displayName: 'note.main',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.isActive],
    getInitialState: function () {
        return {
            view: this.props.view,
            active: false,
            selected: false,
            inflated: this.props.inflated
        };
    },
    componentWillMount: function () {
        //TODO: Important, Dont force update from componentWillMount, this was the problem with this.reset()
        //this.reset();
        this.key = app.lib.uid();
        this.shouldFocus = this.props.focus;
    },

    inflate: function (callback) {
        this.callback = callback;
        this.setState({ inflated: true });
    },
    postInflate: function (callback) {
        this.props.model.on('reset', this.reset, this);
        this.props.model.on('update:color batch:model update:model', this.forceUpdate.bind(this, null), this);
        
        var $note = $(this.getDOMNode());
        $note.data('model', this.props.model);
        
        var size = {
            width: 300,
            height: $note.outerHeight()
        };

        $note.data('noteSize', size);
        $note.data('noteSizeActual', _.clone(size));

        if (callback) {
            callback();
        }
    },

    componentDidMount: function () {
        if (this.state.inflated) {
            this.postInflate();
        }

        if (this.shouldFocus) {
            setTimeout(function () {
                if (app.lib.isMounted(this)) {
                    this.focus();
                }
            }.bind(this), 0);
            this.shouldFocus = false;
        }
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (!prevState.inflated && this.state.inflated) {
            this.postInflate(this.callback);
        }

        if (prevState.view !== this.state.view) {
            this.focus();
        }

        if (this.shouldFocus) {
            setTimeout(function () {
                if (app.lib.isMounted(this)) {
                    this.focus();
                }
            }.bind(this), 0);
            this.shouldFocus = false;
        }
    },
    componentWillUnmount: function () {
        this.setSelected(false);
        this.setActive(false);

        this.callback = null;

        if (this.props.onUnmount) {
            this.props.onUnmount(this);
        }

        this.props.model.off(null, null, this);

        $(this.getDOMNode()).removeData();

        if (this.state.view === 'edit' && !this.props.model.isNew()) {
            if (this.refs.note.save) {
                this.refs.note.save(true);
            }
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextProps.force || nextState.view !== this.state.view || this.state.inflated !== nextState.inflated;
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.inflated && !this.state.inflated) {
            this.setState({
                inflated: true
            });
        }
    },

    focus: function () {
        if (this.refs.note.focus && this.state.view === 'edit') {
            this.refs.note.focus();
        }
    },

    reset: function () {
        this.key = app.lib.uid();
        this.shouldFocus = this.props.focus;
        this.forceUpdate();
    },
    changeView: function (view) {
        this.setState({ view: view});
    },

    toggleSelection: function (event) {
        if (event.ctrlKey || event.shiftKey) {
            this.setSelected(!this.state.selected);
            this.setActive(true);
        } else {
            this.setActive(true);
        }
    },

    setSelected: function (selected) {
        if (this.props.selection && this.state.view==='view') {
            if (selected) {
                this.props.selection.select(this);
            } else {
                this.props.selection.deselect(this);
            }
        }
    },
    setActive: function (active) {
        if (this.props.selection) {
            if (active) {
                this.props.selection.activate(this);
            } else {
                this.props.selection.deactivate(this);
            }
        }
    },

    onSetSelected: function (selected) {
        if (this.isActive() && selected !== this.state.selected) {
            this.setState({
                selected: selected
            });
            this.forceUpdate();
        }
    },
    onSetActive: function (active) {
        if (this.isActive() && active !== this.state.active) {
            this.setState({
                active: active
            });

            if (!active && this.state.view === 'edit' && !this.props.model.isNew()) {
                if (this.refs.note.save) {
                    this.refs.note.save();
                }
            } else {
                this.forceUpdate();
            }
        }
    },

    onResize: function () {
        this.onResizeLogicDebounced = this.onResizeLogicDebounced || _.throttle(this.onResizeLogic, 250, { leading: false });
        this.onResizeLogicDebounced();
    },
    onResizeLogic: function () {
        if (this.isActive()) {
            var $note = $(this.getDOMNode());

            if ($note.data('noteSize')) {
                var nextSize = {
                    width: $note.outerWidth(),
                    height: $note.outerHeight()
                }
                
                var prevSize = $note.data('noteSizeActual');
                
                if (nextSize.height !== prevSize.height || nextSize.width !== prevSize.width) {
                    
                    if (this.state.view === 'edit') {
                        $note.data('noteSizeActual', nextSize);
                    } else {
                        $note.data('noteSize', nextSize);
                        $note.data('noteSizeActual', _.clone(nextSize));
                    }
                    
                    this.props.onResize(this);
                }
            }
        }
    },

    getTagsToHide: function () {
        if (this.props.getTagsToHide) {
            return this.props.getTagsToHide();
        } else {
            return [];
        }
    },

    render: function () {
        if (!this.state.inflated) return null;

        var noteClasses = {};
        var noteStyles = {};

        noteClasses['note'] = true;
        noteClasses['animate'] = true;
        noteClasses[this.state.view] = true;
        noteClasses[this.props.className] = true;
        noteClasses['saved'] = !this.props.model.isNew();
        noteClasses['selected'] = this.state.selected;
        noteClasses['active'] = this.state.active;

        noteStyles['backgroundColor'] = app.lib.color(this.props.model.data().color);

        return (
            React.DOM.div({
                className: window.classnames(noteClasses),
                style: noteStyles,
                onClick: this.toggleSelection
            },
                app.view.note[this.state.view]({
                    ref: 'note',
                    key: this.key,
                    model: this.props.model,
                    changeView: this.changeView,
                    context: this.props.context,
                    onSaved: this.props.onSaved,
                    onResize: this.onResize,
                    rootParent: this
                }),
                React.DOM.div({ className: 'selectholder' },
                    React.DOM.i({ className: 'icon-ok-big' })
                )
            )
        );
    }
});