
app.view.content.component.uploadtags = app.lib.element({
    displayName: 'content.component.uploadtags',
    mixins: [],
    getInitialState: function () {
        return {
            tags:[]
        }
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: 'tags',
                tags: this.state.tags,
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    getTags: function () {
        return this.state.tags;
    },
    addTag: function (tag) {
        this.state.tags.push(tag);
        this.forceUpdate();
    },
    removeTag: function (tag) {
        this.state.tags.splice(this.state.tags.indexOf(tag), 1);
        this.forceUpdate();
    }
});