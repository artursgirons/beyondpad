app.view.content.settings = app.lib.element({
    displayName: 'content.settings',
    componentWillMount: function () {
        this.model = new app.model.account();
        this.model.set(this.model.parse(app.data.account.toJSON()));

        this.model.on('change:options', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.model.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    addTagLink: function () {
        this.model.get('tagLinks').push(
            { _data: { tags: [] } }
        );

        this.forceUpdate();
    },
    removeTagLink: function (taglink) {
        this.model.get('tagLinks').remove(taglink);
        this.forceUpdate();
    },

    save: function () {
        app.lib.cursorLoading();
        this.model.save().then(this.doneSave, this.doneSave);
        app.data.account.set(app.data.account.parse(this.model.toJSON()));
    },

    doneSave: function () {
        app.lib.cursorDefault();
    },

    changeOptionsValue: function (name, type, event) {
        var val;
        switch(type){
            case 'number':
                val = parseInt(event.target.value);
                break;
            case 'boolean':
                val = event.target.value === 'true' ? true : false;
                break;
            default:
                val = event.target.value;
                break;
        }
        this.model.setOptions(name, val);
    },

    render: function () {
        return (
            React.DOM.table({ id: 'settings' },
                React.DOM.tbody({ className: '' },

                    //React.DOM.tr({ className: 'rowMain' },
                    //    React.DOM.td({ className: 'collumnDescription' },
                    //        React.DOM.div({ className: 'tc' },
                    //            React.DOM.div({ className: 'settingsTitle' },
                    //                'Language'
                    //            )
                    //        )
                    //    ),
                    //    React.DOM.td({ className: 'collumnValue inactive' },
                    //        React.DOM.div({ className: 'tc' },
                    //            React.DOM.select({}, 
                    //                React.DOM.option({value:'en'}, 'English')
                    //            )
                    //        )
                    //    )
                    //),

                    React.DOM.tr({ className: 'rowMain' },
                        React.DOM.td({ className: 'collumnDescription' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.div({ className: 'settingsTitle' },
                                    'Linked tags'
                                ),
                                React.DOM.div({ className: 'settingsDetails' },
                                    'Easly switch between these note tags by simply clicking on one. '+
                                    'You can define multiple sets of linked tags. ' +
                                    'Ideal for linking "Todo", "Later", "Done" tags.'
                                )
                            )
                        ),
                        React.DOM.td({ className: 'collumnValue' },
                            React.DOM.div({ className: 'tc' },
                                _.map(this.model.get('tagLinks').models, function (taglink, index) {
                                    return (
                                        React.DOM.div({ key: index, className: 'taglinkblock' },
                                            React.DOM.div({className:'taglinkgroup'},
                                                app.view.content.component.taglinktags({
                                                    model: taglink,
                                                    account: this.model
                                                })
                                            ),
                                            React.DOM.i({ className: 'icon-cancel', onClick: this.removeTagLink.bind(this, taglink) })
                                        )
                                    );
                                }, this),
                                app.view.components.button({
                                    icon: 'icon-plus-squared',
                                    text: 'Add list',
                                    onClick: this.addTagLink
                                })
                            )
                        )
                    ),

                    React.DOM.tr({ className: 'rowMain' },
                        React.DOM.td({ className: 'collumnDescription' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.div({ className: 'settingsTitle' },
                                    'Note column count'
                                ),
                                React.DOM.div({ className: 'settingsDetails' },
                                    'Maximum number of columns notes will arenge them selves. '+
                                    'Smaller column count may improve readability. ' +
                                    '(Setting can be changed from context bar)'
                                )
                            )
                        ),
                        React.DOM.td({ className: 'collumnValue' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.select({ value: this.model.getOptions('maxColumnCount'), onChange: this.changeOptionsValue.bind(this, 'maxColumnCount', 'number') },
                                    React.DOM.option({ value: 100 }, 'Fill entire screen'),
                                    React.DOM.option({ value: 6 }, '6 columns'),
                                    React.DOM.option({ value: 5 }, '5 columns'),
                                    React.DOM.option({ value: 4 }, '4 columns'),
                                    React.DOM.option({ value: 3 }, '3 columns'),
                                    React.DOM.option({ value: 2 }, '2 columns'),
                                    React.DOM.option({ value: 1 }, '1 column')
                                )
                            )
                        )
                    ),


                    React.DOM.tr({ className: 'rowMain' },
                        React.DOM.td({ className: 'collumnDescription' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.div({ className: 'settingsTitle' },
                                    'Note layout'
                                ),
                                React.DOM.div({ className: 'settingsDetails' },
                                    'How notes will arange in columns. Tile alignment will pack notes one after another ' +
                                    'while Row alignment will enforece rows (less dense). ' +
                                    'Smaller column count may improve readability. ' +
                                    '(Setting can be changed from context bar)'
                                )
                            )
                        ),
                        React.DOM.td({ className: 'collumnValue' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.select({ value: this.model.getOptions('noteLayout'), onChange: this.changeOptionsValue.bind(this, 'noteLayout', 'string') },
                                    React.DOM.option({ value: 'masonry' }, 'Tile alignment'),
                                    React.DOM.option({ value: 'row' }, 'Row alignment')
                                )
                            )
                        )
                    ),

                    React.DOM.tr({ className: 'rowMain' },
                        React.DOM.td({ className: 'collumnDescription' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.div({ className: 'settingsTitle' },
                                    'Toggle block options'
                                ),
                                React.DOM.div({ className: 'settingsDetails' },
                                    'Toggle note item options to be always visible. ' +
                                    'Usefull if you like to customize your notes.'
                                )
                            )
                        ),
                        React.DOM.td({ className: 'collumnValue' },
                            React.DOM.div({ className: 'tc' },
                                React.DOM.select({ value: this.model.getOptions('noteItemOptions'), onChange: this.changeOptionsValue.bind(this, 'noteItemOptions', 'boolean') },
                                    React.DOM.option({ value: false }, 'Manual'),
                                    React.DOM.option({ value: true }, 'Automatic')
                                )
                            )
                        )
                    ),

                    //React.DOM.tr({ className: 'rowMain' },
                    //    React.DOM.td({ className: 'collumnDescription' },
                    //        React.DOM.div({ className: 'tc' },
                    //            React.DOM.div({ className: 'settingsTitle' },
                    //                'Startup page'
                    //            )
                    //        )
                    //    ),
                    //    React.DOM.td({ className: 'collumnValue inactive' },
                    //        React.DOM.div({ className: 'tc' },
                    //            React.DOM.select({},
                    //                React.DOM.option({ value: 'notes/inbox' }, 'Notes / Inbox'),
                    //                React.DOM.option({ value: 'notes/all' }, 'Notes / All'),
                    //                React.DOM.option({ value: 'notes/trackers' }, 'Notes / Trackers'),

                    //                React.DOM.option({ value: 'boards' }, 'Boards'),

                    //                React.DOM.option({ value: 'trackers/manage' }, 'Trackers / Manage'),
                    //                React.DOM.option({ value: 'trackers/all' }, 'Trackers / All'),

                    //                React.DOM.option({ value: 'tags' }, 'Tags')
                    //            )
                    //        )
                    //    )
                    //),

                    //React.DOM.tr({ className: 'rowMain' },
                    //    React.DOM.td({ className: 'collumnWithSub', colSpan: 2 },
                    //        React.DOM.table({},
                    //            React.DOM.tbody({ className: '' },
                    //                React.DOM.tr({ className: '' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Formating'
                    //                            ),
                    //                            React.DOM.div({ className: 'settingsDetails' },
                    //                                'Configure how different values ar formatted, like date, time and decimal'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' })
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Date format'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.select({},
                    //                                React.DOM.option({ value: 'yyyy-MM-dd' }, '2009-06-15'),
                    //                                React.DOM.option({ value: 'yyyy.MM.dd' }, '2009.06.15'),
                    //                                React.DOM.option({ value: 'dd.MM.yyyy' }, '15.06.2009'),
                    //                                React.DOM.option({ value: 'dd/MM/yyyy' }, '15/06/2009'),
                    //                                React.DOM.option({ value: 'MM/dd/yyyy' }, '06/15/2009')
                    //                            )
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Time format'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.select({},
                    //                                React.DOM.option({ value: 'HH:mm:ss' }, '18:30:25'),
                    //                                React.DOM.option({ value: 'HH:mm' }, '18:30'),
                    //                                React.DOM.option({ value: 'hh:mm:ss tt' }, '06:30:25 pm'),
                    //                                React.DOM.option({ value: 'hh:mm tt' }, '06:30 pm')
                    //                            )
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Decimal format'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.select({},
                    //                                React.DOM.option({ value: '00.00' }, '0.25'),
                    //                                React.DOM.option({ value: '00,00' }, '0,25')
                    //                            )
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Currency format'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.select({},
                    //                                React.DOM.option({ value: '00.00' }, '0.25'),
                    //                                React.DOM.option({ value: '00,00' }, '0,25')
                    //                            )
                    //                        )
                    //                    )
                    //                )
                    //            )
                    //        )
                    //    )
                    //),

                    //React.DOM.tr({ className: 'rowMain' },
                    //    React.DOM.td({ className: 'collumnWithSub', colSpan: 2 },
                    //        React.DOM.table({ },
                    //            React.DOM.tbody({ className: '' },
                    //                React.DOM.tr({ className: '' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Currency'
                    //                            ),
                    //                            React.DOM.div({ className: 'settingsDetails' },
                    //                                'Configure currencys that will be aviable when adding currency block to note.'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' })
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Multi currency'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            "Coming soon"
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Default currency'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue inactive' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.input({ type: 'text', autoComplete: 'off', value:'USD' })
                    //                        )
                    //                    )
                    //                )
                    //            )
                    //        )
                    //    )
                    //),

                    React.DOM.tr({ className: '' },
                        React.DOM.td({ className: 'collumnDescription' },
                            React.DOM.div({ className: 'tc' }
                            )
                        ),
                        React.DOM.td({ className: 'collumnValue' },
                            React.DOM.div({ className: 'tc' },
                                app.view.components.button({
                                    icon: 'icon-enter',
                                    text: 'Save settings',
                                    onClick: this.save
                                })
                            )
                        )
                    )

                    //React.DOM.tr({ className: 'rowMain' },
                    //    React.DOM.td({ className: 'collumnWithSub', colSpan: 2 },
                    //        React.DOM.table({},
                    //            React.DOM.tbody({ className: '' },
                    //                React.DOM.tr({ className: '' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Account information'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue' })
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Current password'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.input({ type: 'password', autoComplete: 'off' })
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'New password'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.input({ type: 'password', autoComplete:'off' })
                    //                        )
                    //                    )
                    //                ),
                    //                React.DOM.tr({ className: 'rowSub' },
                    //                    React.DOM.td({ className: 'collumnDescription' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.div({ className: 'settingsTitle' },
                    //                                'Repear new password'
                    //                            )
                    //                        )
                    //                    ),
                    //                    React.DOM.td({ className: 'collumnValue' },
                    //                        React.DOM.div({ className: 'tc' },
                    //                            React.DOM.input({ type: 'password', autoComplete: 'off' })
                    //                        )
                    //                    )
                    //                )
                    //            )
                    //        )
                    //    )
                    //),

                    //React.DOM.tr({ className: '' },
                    //    React.DOM.td({ className: 'collumnDescription' },
                    //        React.DOM.div({ className: 'tc' }
                    //        )
                    //    ),
                    //    React.DOM.td({ className: 'collumnValue' },
                    //        React.DOM.div({ className: 'tc' },
                    //            app.view.components.button({
                    //                icon: 'icon-enter',
                    //                text: 'Update credentials',
                    //                onClick: this.saveCredentials
                    //            })
                    //        )
                    //    )
                    //)
                )
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});