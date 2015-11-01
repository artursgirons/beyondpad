app.model.state = Backbone.Model.extend({
    initialize: function () {
        this.on('change:route change:menuTreeActive', function () {
            this.set('menuTreeShow', _.contains(['notes', 'boards', 'trackers', 'tags'], this.get('route')));
        });
        this.on('change:menuTreeShow change:menuTreeActive', function () {
            this.set('controlTreeShow', this.get('menuTreeShow') && this.get('menuTreeActive'));
        });
        this.on('change:menuNavigationActive', function () {
            this.set('controlNavigationShow', this.get('menuNavigationActive'));
        });
    },
    defaults: {
        menuNavigationActive: true,
        menuTreeActive: true,
        menuTreeShow: true,
        controlTreeShow: true,
        controlNavigationShow: true,
        route: 'home'
    }
});