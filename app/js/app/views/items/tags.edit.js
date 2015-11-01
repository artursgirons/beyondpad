app.view.item.tags = app.view.item.tags || {};
app.view.item.tags.edit = app.lib.element({
    displayName: 'item.tags.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:tags', this.forceUpdate.bind(this,null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: _.pluck(this.props.model.data('tags'), '_id'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events,
                onClickTag: this.onClickTag,
                save: true,
                rootParent: this.props.rootParent
            })
        );
    },
    replaceTag: function (prev, next) {
        this.props.model.deleteTag(prev, this.props.context);
        this.props.model.appendTag(next, this.props.context);
    },
    onClickTag: function (event, tag) {
        var id = tag.get('_id');
        var tags = app.data.account.tagLinkHash[id];

        if (tags) {
            var menu = {
                type: 'tagmenu',
                tags: tags,
                tag: id,
                onClick: this.replaceTag
            };

            app.events.trigger('contextmenu', event.target, menu, 'bottom');
        }
    },
    addTag: function (tag) {
        this.props.model.appendTag(tag, this.props.context);
    },
    removeTag: function (tag) {
        this.props.model.deleteTag(tag, this.props.context);
    }
});