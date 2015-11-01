/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/backbone.js" />

app.router = new (Backbone.Router.extend({
    initialize: function () {
        this.path = null;
        this.prev = null;
    },
    navigate: function (path, options) {
        if (Backbone.History.started) {

            if (!app.lib.newNotes.validate()) {
                return;
            }

            app.lib.newNotes.clear();

            if (!options.temp) {
                this.path = path;
                this.prev = null;
            } else {
                this.prev = app.navigation;
            }
            return Backbone.Router.prototype.navigate.apply(this, arguments);
        } else {
            window.location.hash = path;
        }
    },
    getPath: function () {
        return this.path;
    },
    routes: {
        //'notes(/)': app.lib.router.handler('notes', 'inbox'),
        'notes(/)': function () { app.router.navigate('notes/inbox', { trigger: true, replace: true });},
        'notes/inbox(/)': app.lib.router.handler('notes', 'inbox'),
        'notes/all(/)': app.lib.router.handler('notes', 'all'),
        'notes/all/:query(/)': app.lib.router.handler('notes', 'all'),
        'notes/search/:query(/)': app.lib.router.handler('notes', 'search'),
        //'notes/trackers(/)': app.lib.router.handler('notes', 'trackers'),
        'notes/trackers(/)': function () { app.router.navigate('notes/trackers/all', { trigger: true, replace: true }); },
        'notes/trackers/all(/)': app.lib.router.handler('notes', 'trackers'),
        'notes/trackers/all/:query(/)': app.lib.router.handler('notes', 'trackers'),
        'notes/untagged(/)': app.lib.router.handler('notes', 'untagged'),
        'notes/archive(/)': app.lib.router.handler('notes', 'archive'),
        'notes/trash(/)': app.lib.router.handler('notes', 'trash'),

        'boards(/)': app.lib.router.handler('boards', 'all'),
        //'boards/:board(/)': app.lib.router.handler('boards', 'board'),
        'boards/:board(/)': function (board) { app.router.navigate('boards/' + board + '/all', { trigger: true, replace: true }); },
        'boards/:board/all(/)': app.lib.router.handler('boards', 'board'),
        'boards/:board/all/:query(/)': app.lib.router.handler('boards', 'board-search'),
        //'boards/:board/:list(/)': app.lib.router.handler('boards', 'list'),
        'boards/:board/:list(/)': function (board, list) { app.router.navigate('boards/' + board + '/' + list + '/all', { trigger: true, replace: true }); },
        'boards/:board/:list/all(/)': app.lib.router.handler('boards', 'list'),
        'boards/:board/:list/all/:query(/)': app.lib.router.handler('boards', 'list-search'),

        //'trackers(/)': app.lib.router.handler('trackers', 'manage'),
        'trackers(/)': function () { app.router.navigate('trackers/manage', { trigger: true, replace: true }); },
        'trackers/manage(/)': app.lib.router.handler('trackers', 'manage'),
        'trackers/all(/)': app.lib.router.handler('trackers', 'all'),
        'trackers/all/:query(/)': app.lib.router.handler('trackers', 'all'),
        'trackers/search/:query(/)': app.lib.router.handler('trackers', 'search'),
        'trackers/untagged(/)': app.lib.router.handler('trackers', 'untagged'),
        'trackers/archive(/)': app.lib.router.handler('trackers', 'archive'),
        'trackers/trash(/)': app.lib.router.handler('trackers', 'trash'),

        //'tags(/)': app.lib.router.handler('tags', 'all'),
        'tags(/)': function () { app.router.navigate('tags/all', { trigger: true, replace: true }); },
        'tags/all(/)': app.lib.router.handler('tags', 'all'),
        'tags/all/:query(/)': app.lib.router.handler('tags', 'all'),
        'tags/search/:query(/)': app.lib.router.handler('tags', 'search'),
        'tags/graph(/)': app.lib.router.handler('tags', 'graph'),
        'tags/untagged(/)': app.lib.router.handler('tags', 'untagged'),
        'tags/archive(/)': app.lib.router.handler('tags', 'archive'),
        'tags/trash(/)': app.lib.router.handler('tags', 'trash'),

        'calendar(/)': app.lib.router.handler('calendar', 'all'),
        'map(/)': app.lib.router.handler('map', 'all'),
        'insights(/)': app.lib.router.handler('insights', 'all'),

        'logout(/)': app.lib.router.handler('logout', 'all'),
        'settings(/)': app.lib.router.handler('settings', 'all'),
        'upload(/)': app.lib.router.handler('upload', 'all'),
        'upgrade(/)': app.lib.router.handler('upgrade', 'all'),
        'feedback(/)': app.lib.router.handler('feedback', 'all'),

        '*notfound': 'notfound'
    },
    notfound: function () {
        setTimeout(function () {
            this.navigate('notes/inbox', { trigger: true, replace: true });
        }.bind(this), 0);
    },
    execute: function () {
        if (!this.path) {
            this.path = Backbone.history.fragment
        }

        return Backbone.Router.prototype.execute.apply(this, arguments);
    }
}))();