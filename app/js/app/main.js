$(document).ready(function () {

    if (app.lib.isSupported()) {

        app.navigation = null;
        app.events = _.clone(Backbone.Events);

        app.data.state = new app.model.state();
        app.data.account = new app.model.account();
        app.data.tags = new app.collection.tags();
        app.data.boards = new app.collection.boards();

        app.data.misc = {
            inboxTag: new app.model.tag({ 
                _data: {
                    color: '#777',
                    tag: {
                        name: 'Inbox',
                        icon: 'icon-inbox'
                    }
                }
            })
        }

        $.when(
            app.lib.retry(function () { return app.fonts.load();}).fail(function (font) {
                logException('font load error', font);
            }),
            app.dataadapter.generic.preload().fail(function (xhr) {
                xhr = xhr || {};
                logException('preload error', xhr.statusText + ';' + xhr.readyState + ';' + xhr.status + ';' + xhr.responseText);
            }),
            app.lib.retry(function () { return app.data.account.fetch(); }).fail(function (xhr) {
                xhr = xhr || {};
                logException('account load error', xhr.statusText + ';' + xhr.readyState + ';' + xhr.status + ';' + xhr.responseText);
            }),
            app.lib.retry(function () { return app.data.boards.load(); }).fail(function (xhr) {
                xhr = xhr || {};
                logException('boards load error', xhr.statusText + ';' + xhr.readyState + ';' + xhr.status + ';' + xhr.responseText);
            })
        ).done(function () {
            if (!app.data.account.get('_id')) {
                window.location = '/logout';
                return;
            }

            var texts = app.dataadapter.local.getAllTexts();
            if (texts) {
                $('#fontFix').text(texts);
                _.each(['100', '300', '500', '700'], function (weight, index) {
                    setTimeout(function (weight) {
                        $('#fontFix').css('fontWeight', weight);
                    }.bind(null, weight), index * 75);
                });
            }

            app.data.tags.load().done(function () {
                setTimeout(function () {
                    app.data.tags.buildEdges();
                    React.render(app.view.layout.main(), $('#root')[0]);

                    if (uwa && uwa.getLaunchPath()) {
                        app.router.navigate(uwa.getLaunchPath(), { trigger: true });
                    }

                    Backbone.history.start();
                }, 75 * 4);
            }).fail(function (xhr) {
                xhr = xhr || {};
                logException('tags load error', xhr.statusText + ';' + xhr.readyState + ';' + xhr.status + ';' + xhr.responseText);

                $('.loadingdatatext').text('Something went wrong while loading tags. Try to reload.');
            });
        }).fail(function () {
            $('.loadingdatatext').text('Something went wrong while loading data. Try to reload.');
        });

        setInterval(function () {
            app.events.trigger('tick:seconds');
        }, 1000);

        $(window).resize(function () {
            app.lib.triggerWindowResizeEvent();
        });

        $(document).unbind('keydown').bind('keydown', function (event) {
            var doPrevent = false;
            if (event.keyCode === 8) {
                var d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' &&
                     (
                         d.type.toUpperCase() === 'TEXT' ||
                         d.type.toUpperCase() === 'PASSWORD' ||
                         d.type.toUpperCase() === 'FILE' ||
                         d.type.toUpperCase() === 'EMAIL' ||
                         d.type.toUpperCase() === 'SEARCH' ||
                         d.type.toUpperCase() === 'DATE')
                     ) ||
                     d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                }
                else {
                    doPrevent = true;
                }
            }

            if (doPrevent) {
                event.preventDefault();
            }
        });

        $(window).on('beforeunload', function (event) {
            if (!app.lib.newNotes.validate(true)) {
                return 'There are unsaved new note(s).';
            }
        });

    } else {
        $('.loadingdatatext').text('Your browser is not supported at the moment (use Chrome, Firefox, Opera, Safari or IE10+)');
    }
});