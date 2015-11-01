
app.view.content.component.listexcludetags = app.lib.element({
    displayName: 'content.component.listexcludetags',
    mixins: [app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:excludeTags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.data('excludeTags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.update({
            excludeTags: {
                $push: [tag]
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.data('excludeTags');

        this.props.model.update({
            excludeTags: {
                $splice: [[tags.indexOf(tag), 1]]
            }
        });
    }
});