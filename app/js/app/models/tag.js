app.model.tag = app.model.note.extend({
    hasTracker: function () {
        return !!this.data('tracker');
    },
    getTrackerItems: function () {
        var groupId = app.lib.uid();

        var items = $.extend(true, [], this.data('tracker').items);
        _.each(items, function (item) { item.group = groupId; });

        var group = app.model.note.item.group(/*groupId,*/ this.get('_id'));
        group.uid = groupId;
        group.name = this.data('tag').name;

        items.push(group);
        return items;
    },
    save: function (options) {
        return app.model.note.prototype.save.call(this, 'tag', options);
    },
    isVisible: function () {
        var status = this.data('status');
        return status !== 'trash';
    },
    isActive: function () {
        var status = this.data('status');
        return status === 'all' || status === 'inbox';
    }
});