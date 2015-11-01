app.view.note.options = app.view.note.options || {};
app.view.note.options.base = {
    optionsToggle: function (field, value, component) {
        this.props.model.data().options = this.props.model.data('options') || {};
        var options = this.props.model.data('options');
        if (typeof (options[field]) === 'undefined') {
            var update = {};
            update[field] = { $set: !app.config.defaultNoteOptions[field] };
            this.props.model.update('options', update);

            component.update(this.props.model.getOptions(field), false);
        } else {
            if (typeof (options[field]) !== 'undefined' && options[field] === app.config.defaultNoteOptions[field]) {
                var update = {};
                update[field] = { $set: undefined };
                this.props.model.update('options', update);
                delete this.props.model.data('options')[field];

                component.update(this.props.model.getOptions(field), true);

            } else {
                var update = {};
                update[field] = { $set: !options[field] };
                this.props.model.update('options', update);

                component.update(this.props.model.getOptions(field), false);
            }
        }
    },
    getOptionToggleProps: function (field, text) {
        this.props.model.data().options = this.props.model.data('options') || {};
        var options = this.props.model.data('options');
        var isDefault = typeof (options[field]) === 'undefined';
        var checked = isDefault ? app.config.defaultNoteOptions[field] : options[field];

        return {
            field: field,
            isDefault: isDefault,
            checked: checked,
            text: text,
            callback: this.optionsToggle
        }
    }
};