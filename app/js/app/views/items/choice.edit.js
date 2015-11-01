app.view.item.choice = app.view.item.choice || {};
app.view.item.choice.edit = app.lib.element({
    displayName: 'item.choice.edit',

    checkItem: function (index) {
        if (index==-1 || this.props.data.data.combo && this.props.data.data.items[index].checked) {
            _.each(this.props.data.data.items, function (item, itemIndex) {
                if (itemIndex !== index && item.checked) {
                    item.checked = false;
                    this.checkItem(itemIndex);
                }
            }, this);

            if (index >= 0) {
                this.props.data.data.items[index].checked = true;
            }

            this.forceUpdate();
        }

        if (index >=0 && this.props.context === 'note') {
            var item = this.props.data.data.items[index];
            if (item && item.tags && item.tags.length>0) {
                if (item.checked) {
                    _.each(item.tags, function (tag) {
                        this.props.model.appendTag(tag, this.props.context);
                    }, this);
                } else {
                    var checkedTags = _.reduce(this.props.data.data.items, function (memo, item) {
                        if (item.checked && item.tags && item.tags.length>0) {
                            memo.push(item.tags);
                        }
                        return memo;
                    }, [], this);

                    checkedTags = _.uniq(_.flatten(checkedTags));

                    var diff = _.difference(item.tags, checkedTags);

                    var tagsToRemove = diff.length > 0 ? diff : item.tags;

                    _.each(tagsToRemove, function (tag) {
                        this.props.model.deleteTag(tag, this.props.context);
                    }, this);
                }
            }
        }
    },

    render: function () {
        var props = _.clone(this.props);

        props.choice = true;
        props.mode = 'choice';
        props.checkItem = this.checkItem;

        if (this.props.context === 'tracker') {
            return app.view.item.list.edit(props);
        } else {
            if (!this.props.data.data.combo) {
                props.viewMode = 'edit';
                return app.view.item.list.view(props);
            } else {
                props.viewMode = 'edit';
                return app.view.item.combo.edit(props);
            }
        }
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: true
    }
});