app.model.list = Backbone.Model.extend({
    idAttribute: "_id",
    initialize: function () {
    },
    defaults: function () {
        return {
            _data: {
                name: '',
                color: 'white',
                tags: [],
                excludeTags: [],
                options: {}
            }
        };
    },
    reset: function () {
        this.unset({ silent: true });
        //TODO:check why it happens so that error "this.defaults is not a function" happens
        this.set(this.defaults());
    },
    data: function (context) {
        if (context) {
            return this.get('_data')[context];
        }
        else {
            return this.get('_data');
        }
    },
    update: function () {
        if (typeof (arguments[0]) === 'string') {
            this._update.apply(this, arguments);
        }
        else {
            this._update.call(this, null, arguments[0], arguments[1]);
        }
    },
    _update: function (context, update, silent) {
        if (context) {
            var temp = {};
            temp[context] = update;
            update = temp;
        }

        this.set('_data', React.addons.update(this.get('_data'), update), { silent: silent });
        if (!silent) {
            var routes = this.commandRoutes(update, true);
            this.trigger(routes.change.join(' '));
            this.trigger(routes.update.join(' '));
        }
    },
    getOptions: function (field) {
        if (field) {
            return (this.data('options') && typeof (this.data('options')[field]) !== 'undefined') ? this.data('options')[field] : app.config.defaultListOptions[field];
        } else {
            return $.extend(true, {}, app.config.defaultListOptions, this.data('options'));
        }
    },
    commandRoutes: function (update, prefix, root) {
        var path, nested, result = { change: [], update: [] };
        for (var field in update) {
            if (update.hasOwnProperty(field)) {
                if (field[0] === '$') {
                    result.update.push(prefix ? 'update:' + root : root);
                }
                else {
                    path = root ? root + '.' + field : field;
                    result.change.push(prefix ? 'change:' + path : path);
                    nested = this.commandRoutes(update[field], prefix, path);
                    result.change = result.change.concat(nested.change);
                    result.update = result.update.concat(nested.update);
                }
            }
        }
        return result;
    }
});