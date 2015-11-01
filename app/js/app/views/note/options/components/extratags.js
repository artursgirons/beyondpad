app.view.note.options = app.view.note.options || {};
app.view.note.options.components = app.view.note.options.components || {};
app.view.note.options.components.extratags = app.lib.element({
    displayName: 'note.options.components.extratags',
    mixins: [app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:options.extratags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.getOptions('extratags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.data().options = this.props.model.data().options || {};
        this.props.model.data().options.extratags = this.props.model.getOptions('extratags');

        this.props.model.update({
            options: {
                extratags: {
                    $push: [tag]
                }
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.getOptions('extratags');

        if (tags.length > 1) {
            this.props.model.update({
                options: {
                    extratags: {
                        $splice: [[tags.indexOf(tag), 1]]
                    }
                }
            });
        } else {
            this.props.model.update({
                options: {
                    extratags: {
                        $set: undefined
                    }
                }
            });

            delete this.props.model.data('options').extratags;
        }
    }
});