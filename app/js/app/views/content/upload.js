app.view.content.upload = app.lib.element({
    displayName: 'content.upload',
    getInitialState: function () {
        return {
            text:'',
        }
    },
    upload: function () {
        var req = {
            tags: this.refs.tags.getTags(),
            text: this.state.text
        }

        app.dataadapter.generic.update('/api/notes/upload/list', req).done(this.postUpload);
    },
    reverse: function () {
        var arr = this.state.text.split('\n');
        arr = _.map(arr, function (text) {
            return text.trim();
        });

        arr = _.filter(arr, function (text) { return text; });

        arr.reverse();

        this.setState({
            text: arr.join('\n')
        });
    },
    postUpload: function () {
        this.setState({
            text: ''
        });
    },
    onChange: function (event) {
        this.setState({
            text: event.target.value
        });
    },
    render: function () {
        return (
            React.DOM.div({ className: 'options upload' },
                app.view.components.group({name:'List of notes to be uploaded'},
                    React.DOM.textarea({
                        value: this.state.text,
                        onChange: this.onChange
                    })
                ),
                app.view.components.group({name:'Tags for uploaded notes'},
                    app.view.content.component.uploadtags({
                        ref:'tags'
                    })
                ),
                app.view.components.group({ name: 'Upload notes' },
                    React.DOM.div({className:'uploaddetails'},
                        React.DOM.div({}, 'Each line in the list above (excluding blank lines) will be created as a new note'),
                        React.DOM.div({}, 'In a single upload you can create up to 200 notes'),
                        React.DOM.div({}, 'Order of notes will be the same as order of lines (use "Reverse" to reverse order)')
                    ),
                    app.view.components.button({
                        icon: 'icon-sort',
                        text: 'Reverse',
                        onClick: this.reverse
                    }),
                    app.view.components.button({
                        icon: 'icon-upload-cloud',
                        text: 'Upload',
                        onClick: this.upload
                    })
                )
            )
        );
    }
});