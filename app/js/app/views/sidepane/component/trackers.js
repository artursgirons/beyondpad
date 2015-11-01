app.view.sidepane.component.trackers = app.lib.element({
    displayName: 'sidepane.component.trackers',
    click: function (_id, event) {
        if (app.navigation) {
            app.router.navigate(this.props.root + '/all/' + 'root:' + _id, { trigger: true, replace: true });
        }
    },
    isVisible: function (id) {
        var visible = app.data.tags.get(id).isActive();

        if (this.props.filter) {
            var filter = this.props.filter.toLowerCase();

            return visible && app.lib.searchText(app.data.tags.get(id).data('tag').name.toLowerCase(), filter);

            //var words = _.words(app.data.tags.get(id).data('tag').name.toLowerCase());

            //return visible && _.find(words, function(word){
            //    return _.startsWith(word, filter);
            //});
        } else {
            return visible;
        }
    },
    render: function () {
        return (
            React.DOM.div(null,
                _.map(app.data.tags.getTrackers(), function (tracker) {
                    var id = tracker.get('_id');
                    if (this.isVisible(id)) {
                        return app.view.sidepane.component.item({
                            key: app.lib.uidmap(id),
                            text: tracker.data('tag').name,
                            icon: 'icon-spinner',
                            color: app.lib.color(tracker.data('color')),
                            click: this.click.bind(this, id),
                            selected: this.props.active && app.navigation.query.tags() && app.navigation.query.tags()[0] && id === app.navigation.query.tags()[0].query
                        });
                    } else {
                        return null;
                    }
                }, this)
            )
        );
    }
});