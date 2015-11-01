app.model.dataModel = Backbone.Model.extend({
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