app.view.context.components = app.view.context.components || {};
app.view.context.components.retagmenu = app.lib.element({
    displayName: 'context.components.retagmenu',
    componentWillMount: function () {
        this.selectionHash = this.getSelectionHash(this.props.data.selection);
        this.selectionHashDefault = _.clone(this.selectionHash);

        app.data.tags.on('add remove change sync', this.forceUpdate.bind(this, null), this);

        this.newTag = new app.model.tag();
        this.newTag.setDefaults('tag');
        this.newTag.reset();
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
    },
    getInitialState: function () {
        return {
            filter: null
        };
    },
    apply: function () {
        var result = {
            push: [],
            pull: []
        };

        _.each(_.keys(this.selectionHash), function (tag) {
            if (typeof (this.selectionHash[tag]) !== 'undefined' && this.selectionHash[tag] !== null) {
                if (this.selectionHash[tag] === true) {
                    result.push.push(tag);
                }
                if (this.selectionHash[tag] === false) {
                    result.pull.push(tag);
                }
            }
        }, this);

        this.props.data.callback(result);

        this.props.hide(true);
    },
    getSelectionHash: function (selection) {
        var hash = {};
        this.hasNotes = true;

        var arr = _.reduce(selection.selected, function (memo, selected) {
            this.hasNotes = this.hasNotes && selected.props.context === 'note';

            memo.push(_.pluck(selected.props.model.data('tags'), '_id'));
            return memo;
        }, [], this);

        var common = _.intersection.apply(null, arr);
        var different = _.difference(_.flatten(arr), common);

        _.each(common, function (checkedTag) {
            hash[checkedTag] = true;
        });

        _.each(different, function (uncheckedTag) {
            hash[uncheckedTag] = null;
        });

        return hash;
    },

    onSearchChanged: function (filter) {
        this.newTag.update('tag', {
            name: { $set: 'Create tag "' + filter + '"' }
        }, true);


        var createNew = filter && !_.find(app.data.tags.models, function (tag) {
            return tag.data('tag').name.toLocaleLowerCase() === filter.toLocaleLowerCase();
        }, this);


        this.setState({
            filter: filter,
            createNew: createNew
        });
    },

    createNew: function () {
        var createTag = this.newTag.clone();
        createTag.update('tag', {
            name: { $set: this.state.filter }
        }, true);

        createTag.save();
        this.onSearchChanged(null);
    },

    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu sidepane retagmenu', ref: 'contextmenu' },
                app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: false,
                    placeholder: 'Filter tags'
                }),
                this.state.createNew ?
                    React.DOM.div({ className: 'createNew' },
                        app.view.components.tag({
                            tag: this.newTag,
                            onClickTag: this.createNew
                        })
                    ) :
                    null,
                app.view.context.components.retagitem({
                    tree: app.data.tags.reduceTree(app.data.tags[this.hasNotes ? 'getTreeTags' : 'getTree']()),
                    selectionHash: this.selectionHash,
                    selectionHashDefault: this.selectionHashDefault,
                    filter: this.state.filter,
                    hasNotes: this.hasNotes,
                    active: true
                }),
                React.DOM.div({ className: 'retagApply', onClick: this.apply },
                    React.DOM.i({ className: 'icon-enter' }),
                    'Apply'
                )
            )
        );
    }
});