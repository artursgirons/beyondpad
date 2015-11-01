app.view.content.component.choicetags = app.lib.element({
    displayName: 'content.component.choicetags',
    mixins: [],
    componentWillMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.tags,
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.tags.push(tag);
        this.forceUpdate();
    },
    removeTag: function (tag) {
        this.props.tags.splice(this.props.tags.indexOf(tag), 1);
        this.forceUpdate();
    }
});