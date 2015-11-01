app.fonts = {
    load: function () {
        var deferred = $.Deferred();
        WebFont.load({
            google: {
                families: [
                    'Roboto+Slab:100,300,400,700:cyrillic-ext,latin-ext'
                ]
            },
            active: function () {
                deferred.resolve();
            },
            inactive: function () {
                deferred.reject("Browser does not support linked fonts or none of the fonts could be loaded");
            },

        });

        return deferred;
    }
}