app.view.content.component.listtags = app.lib.element({
    displayName: 'content.component.listtags',
    mixins: [app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:tags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.data('tags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.update({
            tags: {
                $push: [tag]
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.data('tags');

        this.props.model.update({
            tags: {
                $splice: [[tags.indexOf(tag), 1]]
            }
        });
    }
});