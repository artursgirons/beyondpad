app.view.item.tags = app.view.item.tags || {};
app.view.item.tags.view = app.lib.element({
    displayName: 'item.tags.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.resolveTags();
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidBlur: function (event) {
    },
    componentWillReceiveProps: function () {
        this.resolveTags();
    },
    resolveTags: function () {

        var tags = _.difference(_.pluck(this.props.model.tags(),'_id'), this.rootParent().getTagsToHide());

        var selected = _.map(tags, function (tag) {
            return app.data.tags.get(tag);
        });

        this.setState({
            selected: selected
        });
    },
    getInitialState: function () {
        return {
            selected: []
        };
    },
    render: function () {
        var showInboxTag = app.navigation.view !== 'inbox' && this.props.model.data('status') === 'inbox';

        if (!showInboxTag && this.state.selected.length === 0) {
            return null
        }

        return (
            React.DOM.div({ className: "notefooter" },
                React.DOM.div({ className: 'tags' },
                    showInboxTag ?
                        app.view.components.tag({
                            tag: app.data.misc.inboxTag,
                        }) : null,
                    _.map(this.state.selected, function (tag) {
                        return app.view.components.tag({
                            key: app.lib.uidmap(tag.get('_id')),
                            tag: tag,
                            onClickTag: this.onClickTag
                        });
                    }, this)
                )
            )
        );
    },
    replaceTag: function (prev, next) {
        this.props.model.deleteTag(prev, this.props.context);
        this.props.model.appendTag(next, this.props.context);

        this.resolveTags();
        this.props.model.save(this.props.context);
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
    }
});