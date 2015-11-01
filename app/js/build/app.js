(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

//ga('create', 'UA-48589837-1', { 'cookieDomain': 'none' });

ga('create', 'UA-48589837-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

window.log = function () {
    try {
        ga.apply(null, arguments);
    } catch (ex) { }
}

window.onerror = function (err, url, line, col) {
    try {
        var exceptionLog = { 
            exDescription: [err, url, line, col].join(';') 
        };
        console.log(exceptionLog);
        log('send', 'exception', exceptionLog);
    } catch (ex) { }
};

window.logException = function (description, details) {
    try {
        var exceptionLog = {
            exDescription: [description, details].join(';')
        };
        console.log(exceptionLog);
        log('send', 'exception', exceptionLog);
    } catch (ex) { }
};
window.uwa = (typeof window.uwa === 'undefined' ? null : window.uwa);

window.app = window.app || {};

window.app.lib = {};

window.app.collection = {};

window.app.model = {};

window.app.dataadapter = {};

window.app.view = {};
window.app.view.note = {};
window.app.view.item = {};
window.app.view.components = {};
window.app.view.content = {};
window.app.view.context = {};
window.app.view.content.component = {};
window.app.view.layout = {};
window.app.view.sidepane = {};
window.app.view.sidepane.component = {};

window.app.router = {};

window.app.config = {};

window.app.data = {};
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
app.config.colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'lilac',
    'grey',
    'white'
];

app.config.maxNoteLength = 2048;

app.config.colors.map = {
    'red': '#F56545',
    'orange': '#FFBB22',
    'yellow': '#EEEE22',
    'green': '#BBE535',
    'cyan': '#77DDBB',
    'blue': '#66CCDD',
    'lilac': '#D28EF6',
    'grey': '#B5C5C5',
    'white': '#FFFFFF'
};

//TODO: seperate defaults for note / tracker / tag

app.config.defaultNoteOptions = {
    timestamp: false,
    noteInheritColor: false,
    noteTimestamp: false,
    noteAddToInbox: false,
    noteLinkToTag: false,
    extratags: [],
    hideFromTrackerList: false,
    autoExpand: false
};

app.config.defaultListOptions = {
    addToInbox: false,
    showNewNote: false,
    hideTags: false,
    appendOnly: false
};

app.config.context = {
    tag: {
        name: 'tag',
        icon: 'icon-tag',
        placeholder: {
            header: 'Tag name',
            blockValue: 'Tag name'
        }
    },
    note: {
        name: 'note',
        icon: 'icon-doc-text-inv',
        placeholder: {
            header: 'Note tag name',
            blockTitle: 'Block name',
            blockValue: 'Text note'
        }
    },
    tracker: {
        name: 'tracker',
        icon: 'icon-spinner',
        placeholder: {
            header: 'Tracker tag name',
            blockTitle: 'Block name',
            blockValue: 'Blank text'
        }
    }
};

app.config.contextList = [
    app.config.context.tag,
    app.config.context.note,
    app.config.context.tracker,
];

app.config.navigation = [
    {
        page: 'notes',
        title: 'Notes',
        icon: 'icon-pentagon-alt'
    },
    {
        page: 'boards',
        title: 'Boards',
        icon: 'icon-books'
    },
    {
        page: 'trackers',
        title: 'Trackers',
        icon: 'icon-spinner'
    },
    {
        page: 'tags',
        title: 'Tags',
        icon: 'icon-tags'
    },
    {
        page: 'insights',
        title: 'Insights',
        icon: 'icon-chart-pie-alt-explode'
    },
    {
        page: 'calendar',
        title: 'Calendar',
        icon: 'icon-calendar-number'
    },
    {
        page: 'map',
        title: 'Map',
        icon: 'icon-map'
    },
    {
        page: '',
        title: 'Account',
        icon: 'icon-profile',
        children: [
            {
                page: '',
                title: 'Account',
                icon: 'icon-profile'
            },
            {
                page: 'settings',
                title: 'Settings',
                icon: 'icon-cog'
            },
            {
                page: 'upload',
                title: 'Upload',
                icon: 'icon-upload-cloud'
            },
            {
                page: 'upgrade',
                title: 'Upgrade',
                icon: 'icon-rocket'
            },
            {
                page: 'feedback',
                title: 'Feedback',
                icon: 'icon-comment'
            },
            {
                page: 'logout',
                url: '/logout',
                title: 'Logout',
                icon: 'icon-off'
            }
        ]
    }
];
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

app.lib = {
    scope: function () {
        var scope = function () {
            this.delegate = function () {
                return Object.create(this);
            }
        };

        _.extend(scope.prototype, Backbone.Events);

        return new scope();
    },
    counter: 0,
    retry: function (logic, deferred, count) {
        deferred = deferred || $.Deferred();
        count = count || 0;

        logic().fail(function () {
            if (count < 4) {
                count += 1;
                setTimeout(function () {
                    app.lib.retry(logic, deferred, count);
                }, 100 * count);
            } else {
                deferred.reject.apply(deferred, arguments);
            }
        }).done(function () {
            deferred.resolve.apply(deferred, arguments);
        });

        return deferred;
    },
    extendDemoObject: function (data) {
        if (data.lists) {
            _.each(data.lists, function (list) {
                list._id = list._id || app.lib.oid();
            });
        }

        if (!data._id) {
            data._id = app.lib.oid();

            data._owner = app.data.account.get('_id');

            var timeoffset = 1402727032767;
            var date = Date.now();

            data.order = (date - 1398778819956) * 100;

            if (data._data) {
                if (data._data.note && !data._data.note.order) {
                    data._data.note.order = (date - timeoffset) * 100;
                }

                if (data._data.tracker && !data._data.tracker.order) {
                    data._data.tracker.order = (date - timeoffset) * 100;
                }

                if (data._data.tag && !data._data.tag.order) {
                    data._data.tag.order = (date - timeoffset) * 100;
                }
            }
        }
        return data;
    },
    element: function (definition) {
        var elementClass = React.createClass(definition);
        var elementFactory = React.createFactory(elementClass);
        elementFactory._class = elementClass;
        return elementFactory;
    },
    newNotes: {
        _all:[],
        add: function (model) {
            app.lib.newNotes._all.push(model);
        },
        remove: function (model) {
            var index = app.lib.newNotes._all.indexOf(model);
            if (index >=0) {
                app.lib.newNotes._all.splice(index, 1);
            }
        },
        clear: function () {
            app.lib.newNotes._all = [];
        },
        all: function () {
            return app.lib.newNotes._all;
        },
        validate: function (silent) {
            var hasUnsaved = false;
            for (var i = 0 ; i < app.lib.newNotes.all().length; i++) {
                var newNote = app.lib.newNotes.all()[i];

                hasUnsaved = hasUnsaved || newNote.isChanged();;

                if (hasUnsaved) { break; }
            }

            if (hasUnsaved) {
                try {
                    if (silent) {
                        return false;
                    } else {
                        return !confirm('There are unsaved new note(s), click "OK" to keep editing.');
                    }
                } catch (ex) {
                    return true;
                };
            }

            return true;
        }
    },
    decimals: function (num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; }
        return Math.max(0,
             // Number of digits right of decimal point.
             (match[1] ? match[1].length : 0)
             // Adjust for scientific notation.
             - (match[2] ? +match[2] : 0));
    },
    getUrl: function (url) {
        var reg = /(^.+:\/\/)|(^[/])/gi;

        if (reg.test(url)) {
            return url;
        } else {
            return 'http://' + url;
        }
    },
    isSupported: function () {
        var myNav = navigator.userAgent.toLowerCase();
        var result = (myNav.indexOf('msie') != -1) ? !(parseInt(myNav.split('msie')[1]) <= 9) : true;
        return result;
    },
    cursorLoading: function () {
        $('body').addClass('loading');
    },
    cursorDefault: function () {
        $('body').removeClass('loading');
    },
    dateTimeToString: function (ms) {
        var date = new Date(ms);
        var arr = [];
        arr.push(app.lib.pad(date.getDate(), 2));
        arr.push('-');
        arr.push(app.lib.pad(date.getMonth()+1, 2));
        arr.push('-');
        arr.push(app.lib.pad(date.getFullYear(), 4));
        arr.push(' ');
        arr.push(app.lib.pad(date.getHours(), 2));
        arr.push(':');
        arr.push(app.lib.pad(date.getMinutes(), 2));
        return arr.join('');
    },
    isEmpty: function (obj) {
        var hasOwnProperty = Object.prototype.hasOwnProperty
        if (obj == null) return true;
        if (obj.length > 0) return false;
        if (obj.length === 0) return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    },
    getFontSize: function (length) {
        length = Math.ceil((length) / 10) * 10 * 1.25;

        var size = Math.round(Math.sqrt(6250 / Math.sqrt(length)));

        size = Math.min(size, 40);
        size = Math.max(size, 14);//17

        return size;
    },
    cid: function () {
        app.lib.counter++;
        return (app.lib.counter).toString(36);
    },
    uidmap: function (id) {
        if (!app.lib._uidmap[id]) {
            app.lib._uidmap[id] = app.lib.cid();
        }
        return app.lib._uidmap[id];
    },
    _uidmap:{},
    uid: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    guid: function () {
        var uid = app.lib.uid;
        return uid() + uid() + '-' + uid() + '-' + uid() + '-' + uid() + '-' + uid() + uid() + uid();
    },
    oid: function () {
        var uid = app.lib.uid;
        return uid() + uid() + uid() + uid() + uid() + uid();
    },
    validIndex: function (index, array) {
        if (index < 0) {
            index = 0;
        }
        if (index >= array.length) {
            index = array.length - 1;
        }
        return index;
    },
    clearTimeout: function (timeout) {
        if (timeout) {
            clearTimeout(timeout);
        }
    },
    isMounted: function (component) {
        return component.isMounted() && component._compositeLifeCycleState !== 'UNMOUNTING';
    },
    mixins: {
        isActive: {
            isActive: function () {
                return this.isMounted() && this._compositeLifeCycleState !== 'UNMOUNTING';
            }
        },
        resize: {
            componentDidUpdate: function () {
                if (this.rootParent) {
                    this.rootParent().onResize(this);
                }
            }
        },
        focus: {
            componentDidMount: function () {
                //this.props.events.trigger('focus:set', this);
            },
            componentWillUnmount: function () {
                //this.props.events.trigger('focus:remove', this);
            }
        },
        rootParent: {
            //TODO: consider adding (props, state) atributes due to methods dependency on this.props
            rootParent: function () {
                if (this.props.rootParent) {
                    return this.props.rootParent.rootParent();
                } else {
                    return this;
                }
            },
            isRootParent: function () {
                return !this.props.rootParent;
            }
        }
    },
    color: function (color) {
        if (_.startsWith(color, '#')) {
            return color;
        }
        else {
            return app.config.colors.map[color] || app.config.colors.map['white'];
        }
    },
    randomColor: function () {
        var index = Math.floor(Math.random() * app.config.colors.length - 0.00001);
        return app.config.colors[index] !== 'white' ? app.config.colors[index] : app.lib.randomColor();
    },
    dateUTC: function () {
        var now = new Date();
        return now;
    },
    pad: function (text, width, pad) {
        pad = pad || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(pad) + text;
    },
    triggerWindowResizeEvent: _.debounce(function () {
        app.events.trigger('resize:window');
    }, 200),
    parseQuery: function (query) {
        return query && _.map(query, function (item) {
            if (item.type === 'branch') {
                return {
                    type: item.type,
                    query: app.data.tags.getTags(item.query)
                };
            } else {
                return item;
            }
        });
    },
    focus: {
        element: null,
        clear: function () {
            app.lib.focus.element = null;
        },
        save: function (element) {
            app.lib.focus.element = element;
        },
        restore: function () {
            if (app.lib.focus.element) {
                app.lib.focus.element.focus();
            }
        },
        next: function (context) {
            if (app.lib.focus.element) {
                context = context || '.note';
                var items = $(app.lib.focus.element).closest(context).find(':focusable');
                items.eq(items.index(app.lib.focus.element) + 1).focus();
            }
        }
    },
    findChildren: function (component, list) {
        list = list || [];
        for (var ref in component.refs) {
            list.push(component.refs[ref]);
            app.lib.findChildren(component.refs[ref], list);
        }
        return list;
    },
    getChildren: function (component, list) {
        list = list || [];

        for (var ref in component.refs) {
            //TODO: this cindition is a fix for something that looks like react.js bug
            if (component.refs[ref].isMounted()) {
                list.push(component.refs[ref]);
            }
        }

        return list;
    },
    selection: function (extension) {
        var selection = {
            collection: extension.collection,
            selectAll: extension.selectAll
        };

        selection = _.extend(selection, {
            selected: [],
            active: null,

            onUpdate: _.debounce(function () {
                app.events.trigger('contextbar:update');
            }, 10).bind(selection),

            deselectAll: function () {
                while (this.selected.length > 0) {
                    this.deselect(this.selected[0]);
                }
                this.onUpdate();
            }.bind(selection),

            select: function (component) {
                if (this.selected.indexOf(component) < 0) {
                    this.selected.push(component);
                    component.onSetSelected(true);
                }
                this.onUpdate();
            }.bind(selection),

            deselect: function (component) {
                var index = this.selected.indexOf(component);
                if (index >= 0) {
                    this.selected.splice(index, 1);
                }
                component.onSetSelected(false);
                this.onUpdate();
            }.bind(selection),

            activate: function (component) {
                if (this.active !== component) {
                    this.deactivate(this.active);
                    this.active = component;
                    component.onSetActive(true);
                    this.onUpdate();
                }
            }.bind(selection),

            deactivate: function (component) {
                if (component) {
                    component.onSetActive(false);
                }
                this.active = null;
                this.onUpdate();
            }.bind(selection)
        });

        return selection;
    },
    router: {
        QueryObject: (function () {
            function QueryObject(query) {
                if (!(this instanceof QueryObject)) { return new QueryObject(query); }

                this._raw = query;

                this._all = query ? _.map(query.split('&'), function (item) {
                    var parts = item.split(':');
                    if (parts.length === 1) {
                        return {
                            type: null,
                            query: parts[0]
                        }
                    } else {
                        return {
                            type: parts[0],
                            query: parts[1]
                        }
                    }
                }) : [];

            }

            QueryObject.prototype.raw = function () {
                return this._raw;
            }

            QueryObject.prototype.all = function () {
                return this._all;
            }

            QueryObject.prototype.tags = function () {
                return _.filter(this.all(), this.findTags, this);
            }

            QueryObject.prototype.text = function () {
                return _.filter(this.all(), this.findText, this);
            }

            QueryObject.prototype.findTags = function (query) {
                return query.type === 'root' || query.type === 'branch';
            }

            QueryObject.prototype.findText = function (query) {
                return query.type === 'text' || query.type === 'name';
            }

            QueryObject.prototype.valid = function () {
                var tagsValid = !_.find(this.tags(), function (tag) {
                    return !app.data.tags.get(tag.query);
                });

                return tagsValid;
            }

            return QueryObject;
        })(),
        validBoards: function (nav) {
            var valid = true;

            if (nav.data && nav.data.board) {
                var board = app.data.boards.get(nav.data.board);
                if (board) {
                    if (nav.data.list) {
                        var list = board.get('lists').get(nav.data.list);
                        if (!list) {
                            valid = false;
                        }
                    }
                } else {
                    valid = false;
                }
            }

            return valid;
        },
        execute: function (data) {
            //TODO: better validation logic - move to handle.*
            if (data.query.valid() && app.lib.router.validBoards(data)) {
                document.title = "Beyondpad - " + _.capitalize(data.page);

                if (!app.navigation || app.navigation.page !== data.page) {
                    log('send', 'pageview', { page: (app.demo ? '/demo#' : '/app#') + data.page });
                }
                log('send', 'event', 'navigate', data.page, (data.view ? data.view : '') + (data.query && data.query.all().length > 0 ? '/query' : ''), (data.query && data.query.all().length > 0 ? data.query.all().length : null));

                app.navigation = data;

                app.events.trigger('navigate navigate:' + data.page, data);
                app.data.state.set('route', data.page);
            } else {
                app.router.navigate(data.page, { trigger: true, replace: true });
            }
        },
        handle: {
            generic: function (page, view, query) {
                app.lib.router.execute({
                    page: page,
                    view: view,
                    query: app.lib.router.QueryObject(query)
                });
            },
            boards: function (page, view, board, list, query) {
                //board, list, query are passed from router and this is to resolve board+list vs board+search colision
                if (view === 'board-search') {
                    query = list;
                    list = null;
                }

                app.lib.router.execute({
                    page: page,
                    view: view,
                    query: app.lib.router.QueryObject(query),
                    data: {
                        board: board,
                        list: list
                    }
                });
            }
        },
        handler: function (page, view) {
            switch (page) {
                case 'boards':
                    return app.lib.router.handle.boards.bind(this, page, view);
                default:
                    return app.lib.router.handle.generic.bind(this, page, view);
            }
        }
    },
    searchText: function (text, search) {
        text = (text || '').toLocaleLowerCase();
        search = (search || '').toLocaleLowerCase();

        var words = text.split(' ');
        //var words = _.words(text);

        return !!_.find(words, function (word) {
            return _.startsWith(word, search);
        });
    }
};
app.model.account = Backbone.Model.extend({
    urlRoot: '/api/account',
    idAttribute: "_id",
    initialize: function () {
        this.on('change sync', function () {
            if (this.get('_id')) {
                this.buildTagLinkHash();
            }
        });
    },
    defaults: {
        _id: null,
        _data: {
            email: null,
            name: null,
            options: {
            }
        }
    },
    defaultOptions: {
        tagLinks: [[]],
        maxColumnCount: 100,
        noteLayout: 'masonry'
    },

    getOptions: function (field) {
        if (field) {
            return (this.data('options') && typeof (this.data('options')[field]) !== 'undefined') ? this.data('options')[field] : this.defaultOptions[field];
        } else {
            return $.extend(true, {}, this.defaultOptions, this.data('options'));
        }
    },

    setOptions: function (name, value) {
        var update = {};
        update[name] = { $set: value };
        this.update('options', update);
    },

    buildTagLinkHash: function () {
        var tagLinkHash = this.tagLinkHash = {};

        _.each(this.get('tagLinks').models, function (taglink) {
            var tags = taglink.data('tags');
            _.each(tags, function (tag) {
                tagLinkHash[tag] = tags;
            })
        });
    },

    fetch: function () {
        if (app.demo) {
            this.set(this.parse(app.demo.account));
            var deferred = $.Deferred();
            deferred.resolve(app.demo.account);
            return deferred;
        } else {
            var f = Backbone.Model.prototype.fetch.apply(this, arguments);
            return f;
        }
    },

    save: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(this.parse(this.toJSON()));
            return deferred;
        } else {
            var f = Backbone.Model.prototype.save.apply(this, arguments);
            return f;
        }
    },

    parse: function (response) {
        if (response._data) {
            var tagLinks = (response._data.options && response._data.options.tagLinks) || [];
            tagLinks = _.map(tagLinks, function (tags) { return { _data: { tags: tags } } });
            var Coll = Backbone.Collection.extend({ model: app.model.dataModel });
            response.tagLinks = new Coll(tagLinks);
            return response;
        } else {
            return {}
        }
    },

    toJSON: function () {
        var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
        var tagLinks = _.map(this.get('tagLinks').models, function (taglink) {
            return taglink.data('tags');
        });

        delete json.tagLinks;
        json._data.options = json._data.options || {};
        json._data.options.tagLinks = tagLinks;

        return json;
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

            this.get('_data')[context] = this.get('_data')[context] || {};
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
app.model.board = Backbone.Model.extend({
    urlRoot: '/api/board',
    idAttribute: "_id",
    initialize: function () {
    },
    defaults: function () {
        return app.model.board.parse({
            name: '',
            order: 0,
            color: 'white',
            _data: {},
            lists: []
        });
    },
    parse: function (response) {
        return app.model.board.parse(response);
    },
    toJSON: function () {
        return app.model.board.toJSON(this);
    },
    updatePosition: function (order) {
        this.set('order', order);
        this.save();
    },
    save: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            var data = this.parse(app.lib.extendDemoObject(this.toJSON()));

            this.set(data)
            deferred.resolve(data);

            return deferred;
        } else {
            return Backbone.Model.prototype.save.apply(this, arguments);
        }
    },
    destroy: function () {
        if (app.demo) {
            app.data.boards.remove(this);
        } else {
            return Backbone.Model.prototype.destroy.apply(this, arguments);
        }
    }
}, {
    parse: function (response) {
        return {
            _id: response._id,
            name: response.name,
            order: response.order,
            color: response.color,
            _data: response._data,
            lists: new app.collection.lists(response.lists)
        };
    },
    toJSON: function (model) {
        return {
            _id: model.get('_id'),
            name: model.get('name'),
            order: model.get('order'),
            color: model.get('color'),
            _data: model.get('_data'),
            lists: _.map(model.get('lists').models, function (list) {
                return list.toJSON();
            })
        }
    }
});
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
app.model.note = Backbone.Model.extend({
    urlRoot: '/api/note',
    idAttribute: "_id",
    constructor: function () {
        return Backbone.Model.apply(this, arguments);
    },
    initialize: function (options) {
        this.updateKey();
    },
    setDefaults: function (context, tags, data) {
        this.defaults = app.model.note.defaults.get(context, tags, data, this);
    },
    data: function (context) {
        if (context) {
            return this.get('_data')[context];
        }
        else {
            return this.get('_data');
        }
    },
    updateKey: function () {
        this.key = app.lib.uidmap(this.get('_id') || app.lib.uid());
    },
    reset: function (options) {
        this.clear({ silent: true });
        //TODO:check why it happens so that error "this.defaults is not a function" happens
        this.set(this.defaults(), { silent: true });
        this.trigger('reset');
    },
    tags: function () {
        return _.filter(this.data('tags'), function (tag) {
            var model = app.data.tags.get(tag._id);
            return model && model.data('status') !== 'trash';
        });
    },
    getStatus: function () {
        var link = this.getLinkedTag();

        if (link.tag) {
            if (link.valid) {
                return 'link';
            } else {
                return 'error';
            }
        }
        return null;
    },
    isChanged: function () {
        return !_.isEqual(this.originalJson, this.attributes);
    },
    getLinkedTag: function () {
        var tag = _.find(app.data.tags.models, function (tag) { return this.data('tag') && tag.data('tag').name.toLocaleLowerCase() === this.data('tag').name.toLocaleLowerCase() && tag.get('_id') !== this.get('_id'); }, this);
        if (tag) {
            if (true) {
                if (this.data('note') && !tag.data('note') || this.data('tracker') && !tag.data('tracker')) {
                    return {
                        tag: tag,
                        valid: true
                    }
                }
            }
            return {
                tag: tag,
                valid: false
            }
        }

        return {
            tag: null,
            valid: true
        }
    },
    duplicate: function (context) {
        var data = this.toJSON();
        delete data._id;
        data._data[context].order -= 1000;

        var clone = new app.model.note(app.model.note.parse(data));

        this.collection.add(clone);
        clone.save(context);
    },
    save: function (context, options) {
        var link = this.getLinkedTag();

        if (link.tag) {
            var data = this.clone();
            this.set(app.model.note.parse(link.tag.toJSON()));

            this.data()[context] = data.data()[context];
            this.data()['status'] = data.data()['status'];
            this.data()['tags'] = _.reduce(this.data('tags').concat(data.data('tags')), function (memo, tag) {
                if (!_.find(memo, function (memoTag) { return memoTag._id === tag._id })) {
                    memo.push(tag);
                }
                return memo;
            }, [], this);

            if (data.isNew()) {
                return this.save.apply(this, arguments);
            } else {
                var tag = app.data.tags.get(data.get('_id'))
                if (tag) {
                    delete tag.data()[context];

                    var deferred = $.Deferred();

                    $.when(
                        this.save.apply(this, arguments),
                        tag.save('tag')
                    ).done(function (r1, r2) {
                        deferred.resolve(r1[0]);
                    });

                    return deferred;
                } else {
                    var deferred = $.Deferred();

                    $.when(
                        this.save.apply(this, arguments),
                        app.dataadapter.generic.remove({ ids: [data.get('_id')] })
                    ).done(function (r1, r2) {
                        deferred.resolve(r1[0]);
                    });

                    return deferred;
                }
            }
        } else {
            var tag = app.data.tags.get(this.get('_id'));

            if (tag && !this.data('tag')) {
                var deferred = $.Deferred();

                delete tag.data()[context];

                switch (context) {
                    case 'note':
                        this.unset('_id', { silent: true });

                        $.when(
                            this.save.apply(this, arguments),
                            tag.save('tag')
                        ).done(function (r1, r2) {
                            deferred.resolve(r1[0]);
                        });

                        break;
                    case 'tracker':
                        $.when(
                            tag.save('tag')
                        ).done(function (r1) {
                            deferred.resolve(r1[0]);
                        });

                        break;
                }

                return deferred;
            } else {

                _.each(this.data(context).items, function (item) {
                    var text = '';
                    switch (item.type) {
                        case 'text':
                            text = item.data.text;
                            break;
                        case 'choice':
                        case 'list':
                            text = _.reduce(item.data.items, function (str, item) {
                                return str + ' ' + (item.text || '');
                            }, '');
                            break;
                        case 'link':
                            text = (item.data.link || '') + ' ' + (item.data.title || '');
                            break;
                        case 'numeric':
                            text = (item.data.value + '' || '');
                            break;
                    }
                    item.data.text = text;
                });

                return app.dataadapter.generic.save(this.url(), this.toJSON(), (this.isNew() ? 'POST' : 'PUT')).done(function (data) {
                    log('send', 'event', 'entity', 'save', context);

                    var collection = this.collection;

                    if (!this.isNew()) {
                        if (collection) {
                            var filtered = app.dataadapter.local.filter(collection.req, [data]);

                            if (filtered.length === 0) {
                                collection.remove(this);
                            }
                        }
                    }

                    this.set(this.parse(data));
                    this.trigger('update:model', data);

                    if (collection) {
                        collection.trigger('update:model', data);
                    }
                }.bind(this));
            }
        }
    },
    parse: function (response) {
        return app.model.note.parse(response);
    },
    toJSON: function (options) {
        var result = $.extend(true, {}, Backbone.Model.prototype.toJSON.apply(this, arguments));

        if (result._data.options && app.lib.isEmpty(result._data.options)) {
            delete result._data.options;
        };

        if (!result._data.status) {
            result._data.status = 'all';
        }

        if (result._data.tags && app.lib.isEmpty(result._data.tags)) {
            delete result._data.tags;
        };

        return result;
    },
    clear: function () {
        this.updateKey();
        return Backbone.Model.prototype.clear.apply(this, arguments);
    },
    setTag: function () {
        this.update({
            tag: {
                $set: {
                    name: '',
                    order: 0
                }
            },
            color: {
                $set: app.lib.randomColor()
            }
        });
    },
    removeTag: function () {
        this.update({
            tag: {
                $set: null
            },
            color: {
                $set: 'white'
            }
        });
    },
    appendTag: function (tagId, context, silent) {
        if (context === 'note') {
            this.set({
                '_data': app.model.note.addTagToData(this.data(), tagId)
            }, { silent: true });

            this.updateChoice(context, silent);

            this.trigger('update:color');

        } else {
            this.update({
                tags: { $push: [{ _id: tagId }] }
            }, silent);

            this.updateChoice(context, silent);
        }
    },
    deleteTag: function (tagId, context, silent) {
        var tags = _.pluck(this.data('tags'), '_id');

        if (tags.indexOf(tagId) >= 0) {
            this.update({
                tags: {
                    $splice: [[tags.indexOf(tagId), 1]]
                }
            }, silent);

            if (app.data.tags.get(tagId).data('tracker')) {
                var trackerItem = _.find(this.data(context).items, function (item) {
                    return item.data.trackerId === tagId;
                });

                if (trackerItem) {
                    this.removeItem(context, trackerItem.uid, silent);
                }
            }

            this.updateChoice(context, silent);
        }
    },
    updateChoice: function (context, silent) {
        if (context === 'note' || context === 'tracker') {

            var data = app.model.note.updateChoiceData(this.data());

            this.update(context, {
                items: { $set: _.clone(data[context].items) }
            }, silent);
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

        this.set({
            '_data': React.addons.update(this.get('_data'), update)
        }, { silent: silent });

        if (!silent) {
            var routes = this.commandRoutes(update, true);
            this.trigger(routes.change.join(' '));
            this.trigger(routes.update.join(' '));
        }
    },
    getOptions: function (field) {
        if (field) {
            return (this.data('options') && typeof (this.data('options')[field]) !== 'undefined') ? this.data('options')[field] : app.config.defaultNoteOptions[field];
        } else {
            return $.extend(true, {}, app.config.defaultNoteOptions, this.data('options'));
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
    },
    updatePosition: function (context, order) {
        this.update(context, { order: { $set: order } });

        this.collection.sort();

        this.save(context);
    },


    setStatus: function (context, status) {
        this.update({ status: { $set: status } });
        this.save(context);
    },

    remove: function (context) {
        this.update({ status: { $set: 'trash' } });
        if (this.collection) {
            this.collection.remove(this);
        }
        this.save(context);
    },
    addItem: function (context, type) {
        if (app.model.note.item[type]) {
            this.update(context, { items: { $push: [app.model.note.item[type]()] } });
        }
    },
    removeItem: function (context, uid, silent) {

        var items = this.data(context).items;
        var item = _.find(items, function (item) { return item.uid === uid; });

        if (item.data.trackerId) {
            var trackerId = item.data.trackerId;
            _.each(_.filter(items, function (subItem) { return subItem.group === item.uid; }), function (subItem) {
                items.splice(items.indexOf(subItem), 1);
            });
        }

        items.splice(items.indexOf(item), 1);

        this.update(context, { items: { $set: items } }, silent);

        if (item.data.trackerId) {
            this.deleteTag(trackerId, context);
        }
    },
    updateColor: function (color) {
        this.update({ color: { $set: color } });
    }
},
{
    parse: function (response) {
        response._data.tags = response._data.tags || [];
        return response;
    },
    item: {
        choice: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'choice',
                name: null,
                data: {
                    items: [
                        {
                            text: '',
                            value: '',
                            tags: []
                        }
                    ],
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        list: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'list',
                name: null,
                data: {
                    items: [
                        {
                            text: '',
                            uid: app.lib.uid()
                        }
                    ],
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        text: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'text',
                name: null,
                data: {
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        link: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'link',
                name: null,
                data: {
                    link: '',
                    title: '',
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        numeric: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'numeric',
                name: null,
                data: {
                    value: '',
                    text: ''
                }
            };

            return $.extend(true, item, data);
        },
        stopwatch: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'stopwatch',
                name: null,
                data: {
                    ellapsed: 0,
                    periods: []
                }
            };

            return $.extend(true, item, data);
        },
        countdown: function (data) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'countdown',
                name: null,
                data: {
                    start: 1000 * 60 * 15,
                    ellapsed: 0,
                    periods: []
                }
            };

            return $.extend(true, item, data);
        },
        group: function (trackerId) {
            var item = {
                uid: app.lib.uid(),
                group: null,
                type: 'group',
                name: null,
                data: {
                    trackerId: trackerId
                }
            };

            return item;
        }
    },
    defaults: {
        note: function () {
            return {
                _data: {
                    status: 'all',
                    color: 'white',
                    created: Date.now(),
                    modified: Date.now(),
                    note: {
                        order: 0,
                        items: [
                            app.model.note.item.text()
                        ]
                    },
                    tags: []
                }
            };
        },
        tracker: function () {
            return {
                _data: {
                    status: 'all',
                    color: app.lib.randomColor(),
                    created: Date.now(),
                    modified: Date.now(),
                    tag: {
                        order: 0,
                        name: ''
                    },
                    tracker: {
                        order: 0,
                        items: [
                            app.model.note.item.text({ name: '', data: { text: '' } })
                        ]
                    },
                    tags: []
                }
            };
        },
        tag: function () {
            return {
                _data: {
                    status: 'all',
                    color: app.lib.randomColor(),
                    created: Date.now(),
                    modified: Date.now(),
                    tag: {
                        order: 0,
                        name: ''
                    },
                    tags: []
                }
            };
        },
        note_blank: function () {
            return {
                _data: {
                    color: 'white',
                    created: Date.now(),
                    modified: Date.now(),
                    tag: null,
                    note: {
                        order: 0,
                        items: []
                    },
                    tags: []
                }
            };
        },
        get: function (context, tags, data, model) {
            return function () {
                var json = $.extend(true, app.model.note.defaults[context](), app.model.note.defaults.getDefaultData(context, tags), data);
                if (model) {
                    model.originalJson = json;
                }
                return $.extend(true, {}, json);
            };
        },
        getDefaultData: function (context, tags) {
            var result = null;

            if (context === 'note') {
                var data = {};

                _.each(tags, function (tag) {
                    data = app.model.note.addTagToData(data, tag._id);
                });

                // TODO : recursive multiple passes insted of fixed pass count
                if (data.note) {
                    for (var i = 0; i < 3; i++) {
                        _.each(data.note.items, function (noteItem) {
                            if (noteItem.type === 'choice') {
                                _.each(noteItem.data.items, function (listItem) {
                                    if (listItem.checked && listItem.tags && listItem.tags.length > 0) {
                                        _.each(listItem.tags, function (listItemTag) {
                                            data = app.model.note.addTagToData(data, listItemTag);
                                        });
                                    }
                                });
                            }
                        });
                    }
                }

                data = app.model.note.updateChoiceData(data);

                result = {
                    _data: data
                }
            } else {
                result = {
                    _data: {
                        tags: _.map(tags, function (tag) {
                            return { _id: tag._id }
                        })
                    }
                }
            }

            return result;
        }
    },
    addTagToData: function (data, tagId) {
        var data = app.model.note.addTagToDataLogic(data, tagId);
        return data;
    },
    addTagToDataLogic: function (data, tagId) {
        data = $.extend(true, {}, data || {});
        data.tags = data.tags || [];

        var tag = app.data.tags.get(tagId);

        if (tag && !_.find(data.tags, function (tagItem) { return tagItem._id === tagId; })) {
            data.tags = data.tags || [];
            data.tags.push({ _id: tagId });

            if (tag.hasTracker()) {
                data.note = data.note || {};
                data.note.items = data.note.items || [];
                data.note.items = data.note.items.concat(tag.getTrackerItems());
            }

            if (tag.getOptions('noteLinkToTag')) {
                if (!data.tag) {
                    data.tag = {
                        name: '',
                        order: 0
                    };
                    data.color = app.lib.randomColor();
                }
            }

            if (tag.getOptions('noteInheritColor')) {
                data.color = tag.data('color');
            }

            if (tag.getOptions('noteAddToInbox')) {
                data.status = 'inbox';
            }

            if (tag.getOptions('noteTimestamp')) {
                data.options = data.options || {};
                data.options.timestamp = true;
            }

            _.each(tag.getOptions('extratags'), function (tag) {
                data = app.model.note.addTagToDataLogic(data, tag);
            });
        }

        return data;
    },
    updateChoiceData: function (data) {
        if (data && data.note) {
            var allTags = _.pluck(data.tags, '_id');

            _.each(data.note.items, function (item) {
                if (item.type === 'choice') {
                    _.each(item.data.items, function (listItem) {
                        if (listItem.tags && listItem.tags.length > 0) {
                            listItem.checked = _.difference(listItem.tags, allTags).length === 0;
                        }
                    });
                }
            }, this);
        }

        return data;
    }
});
app.model.tag = app.model.note.extend({
    hasTracker: function () {
        return !!this.data('tracker');
    },
    getTrackerItems: function () {
        var groupId = app.lib.uid();

        var items = $.extend(true, [], this.data('tracker').items);
        _.each(items, function (item) { item.group = groupId; });

        var group = app.model.note.item.group(/*groupId,*/ this.get('_id'));
        group.uid = groupId;
        group.name = this.data('tag').name;

        items.push(group);
        return items;
    },
    save: function (options) {
        return app.model.note.prototype.save.call(this, 'tag', options);
    },
    isVisible: function () {
        var status = this.data('status');
        return status !== 'trash';
    },
    isActive: function () {
        var status = this.data('status');
        return status === 'all' || status === 'inbox';
    }
});
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
app.collection.boards = Backbone.Collection.extend({
    url: '/api/boards',
    model: app.model.board,
    load: function () {
        if (app.demo) {
            var data = app.demo.boards;

            var deferred = $.Deferred();
            deferred.resolve(data);

            this.reset(_.map(data, function (item) { return app.model.board.parse(item); }), { silent: true });

            return deferred;
        } else {
            return this.fetch();
        }
    },
    comparator: function (model) {
        return -model.get('order');
    }
});
app.collection.lists = Backbone.Collection.extend({
    model: app.model.list
});
app.collection.notes = Backbone.Collection.extend({
    url: '/api/notes',

    model: app.model.note,

    initialize: function (models, options) {
        this.options = {
            context: options.context
        }
    },

    comparator: function (model) {
        return -model.data(this.options.context).order;
    },

    unload: function () {
        this.reset(null, { silent: true });
        this.trigger('unloaded');
    },

    load: function (page, view, query) {
        this.unload();

        switch (page) {
            case 'trackers':
                if (view === 'all' || view === 'search') {
                    this.options.context = 'note'
                } else {
                    this.options.context = 'tracker'
                }
                break;
        }

        this.req = {
            page: page,
            view: view,
            query: app.lib.parseQuery(query)
        }

        return app.dataadapter.generic.load(this.url, this.req).done(function (data) {
            this.reset(_.map(data, function (item) { return app.model.note.parse(item); }), { silent: true });
            this.trigger('loaded');
        }.bind(this));
    },

    updateNotes: function (url, req) {
        return app.dataadapter.generic.update(url, req).done(function (responseData) {
            var inContextData = app.dataadapter.local.filter(this.req, responseData);

            var notesUpdate = _.map(inContextData, function (item) { return app.model.note.parse(item); });

            var models = this.add(notesUpdate, { merge: true });
            _.each(models, function (model) {
                model.trigger('batch:model');
            });

            var notesRemove = _.map(_.difference(_.pluck(responseData, '_id'), _.pluck(inContextData, '_id')), function (id) { return this.get(id); }.bind(this));
            this.remove(notesRemove, { silent: true });

            this.trigger('batch:collection', responseData);

        }.bind(this));
    },

    removeNotes: function (req) {
        return app.dataadapter.generic.remove(req).done(function () {
            var notesRemove = _.map(req.ids, function (id) { return this.get(id); }, this);
            this.remove(notesRemove, { silent: true });
            this.trigger('batch:collection');
        }.bind(this));
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.collection.tags = Backbone.Collection.extend({
    url: '/api/notes',
    model: app.model.tag,
    initialize: function () {
        this.tree = {};
        this.edges = [];
    },
    load: function () {
        this.req = {
            page: 'tags',
            view: 'preload',
            query: app.lib.parseQuery('')
        }

        return app.dataadapter.generic.load(this.url, this.req).done(function (data) {
            this.reset(_.map(data, function (item) { return app.model.note.parse(item); }), { silent: true });
            this.trigger('loaded');
        }.bind(this));
    },
    comparator: function (model) {
        return -model.data('tag').order;
    },
    buildEdges: function (onlyTags) {
        this.sort();

        var tree = {};
        var edges = [];

        for (var i = 0 ; i < this.models.length; i++) {
            var tag = this.models[i].get('_id');
            if (this.models[i].isVisible() && !(onlyTags && this.models[i].data('tracker'))) {
                var tags = this.models[i].data('tags');
                tree[tag] = tree[tag] || { tag: tag, up: [], down: [] };
                for (var j = 0; j < tags.length; j++) {
                    if (this.get(tags[j]._id) && this.get(tags[j]._id).isActive() && !(onlyTags && this.get(tags[j]._id).data('tracker'))) {
                        edges.push({ child: tag, parent: tags[j]._id });
                        tree[tag].up.push(tags[j]._id);
                        tree[tags[j]._id] = tree[tags[j]._id] || { tag: tags[j]._id, up: [], down: [] };
                        tree[tags[j]._id].down.push(tag);
                    }
                }
            }
        }

        if (onlyTags) {
            this.tree_tags = tree;
            this.edges_tags = edges;
        } else {
            this.tree = tree;
            this.edges = edges;
        }
    },
    getVisible: function () {
        return _.filter(this.models, function (model) {
            return model.isVisible();
        });
    },
    getEdges: function () {
        this.buildEdges();
        return this.edges;
    },
    getTree: function (rebuild) {
        if (rebuild !== false) {
            this.buildEdges();
        }
        return this.tree;
    },

    getTreeTags: function (rebuild) {
        if (rebuild !== false) {
            this.buildEdges(true);
        }
        return this.tree_tags;
    },

    treeToArray: function (tree) {
        var tags = _.map(tree, function (tags, tag) { return tag; });
        tags = _.sortBy(tags, function (tag) {
            return -this.get(tag).data('tag').order;
        }, this);
        return _.map(tags, function (tag) { return tree[tag]; }, this);
    },
    //TODO: fix crash when tags dont exist
    getParents: function (tags, parents) {
        parents = parents || {};
        var newTags = [];
        _.each(tags, function (tag) {
            if (this.get(tag) && this.tree[tag]) {
                _.each(this.tree[tag].up, function (parent) {
                    if (!parents[parent]) {
                        newTags.push(parent);
                        parents[parent] = true;
                    }
                });
            }
        }, this);
        if (newTags.length > 0) {
            return this.getParents(newTags, parents);
        } else {
            return parents;
        }
    },
    reduceTree: function (tree) {
        var count = {};
        for (var tag in tree) {
            count[tag] = tree[tag].down.length;
        }

        var result = this._reduceTree(tree, count);

        return this.treeToArray(result);
    },
    _reduceTree: function (tree, count) {
        //TODO:Refactor this magic
        var changed = false;
        var tag;

        for (tag in count) {
            if (count[tag] === 0 && tree[tag].up.length > 0) {
                count[tag] = null;
                changed = true;

                _.each(tree[tag].up, function (upTag) {
                    count[upTag] -= 1;
                });
            } else {
                //TODO:This is only temporary fix
                if (tree[tag].up.length === 0) {
                    changed = this._nullifyDown(tag, tree, count);
                }
            }
        }

        if (changed) {
            return this._reduceTree(tree, count);
        } else {
            var resultTree = {};
            for (tag in count) {
                if (count[tag] !== null) {
                    resultTree[tag] = tree[tag];
                }
            }
            return resultTree;
        }
    },
    //TODO:This is only temporary fix
    _nullifyDown: function (tag, tree, count) {
        var changed = false;
        _.each(tree[tag].down, function (downTag) {
            if (count[downTag] !== null) {
                count[downTag] = null;
                this._nullifyDown(downTag, tree, count);
                changed = true;
            }
        }, this);
        return changed;
    },
    getTrackers: function () {
        var result = _.filter(this.models, function (model) {
            return model.hasTracker() && !model.getOptions('hideFromTrackerList');
        });

        result = _.sortBy(result, function (tag) { return -tag.data('tracker').order; });

        return result;
    },
    getAllTags: function (_id, memo) {
        memo = memo || {};
        memo[_id] = true;
        if (!app.data.tags.getTree()[_id]) {
            return memo;
        }
        return _.reduce(app.data.tags.getTree()[_id].down, function (memo, tag) {
            if (!memo[tag]) {
                memo[tag] = true;
                memo = this.getAllTags(tag, memo);
            }
            return memo;
        }, memo, this);
    },
    getTags: function (_id) {
        return _.map(this.getAllTags(_id), function (value, key) {
            return key;
        });
    }
});
app.dataadapter.generic = {
    options: {
        localStorage: true
    },
    preload: function () {
        if (app.demo) {
            var deferred = $.Deferred();
            app.dataadapter.local.update(app.demo.notes);
            deferred.resolve();
            return deferred;
        } else {
            if (this.options.localStorage) {
                return app.dataadapter.remote.load('/api/notes', { page: 'all' }).done(function (response) {
                    app.dataadapter.local.update(response);
                });
            } else {
                var deferred = $.Deferred();
                deferred.resolve();
                return deferred;
            }
        }
    },
    load: function (url, req, method) {
        if (app.demo) {
            return app.dataadapter.local.load(url, req, method);
        } else {
            if (this.options.localStorage) {

                // if there is no local data then load all entities from server then return query from local storage
                if (!app.dataadapter.local.data.array) {
                    var deferred = $.Deferred();
                    app.dataadapter.remote.load('/api/notes', { page: 'all' }).done(function (response) {
                        app.dataadapter.local.update(response);
                        app.dataadapter.local.load(url, req, method).done(function (data) {
                            deferred.resolve(data);
                        }).fail(function () {
                            deferred.reject.apply(deferred, arguments);
                        });
                    }).fail(function () {
                        deferred.reject.apply(deferred, arguments);
                    });

                    return deferred;
                } else {
                    return app.dataadapter.local.load(url, req, method);
                }
            } else {
                return app.dataadapter.remote.load(url, req, method);
            }
        }
    },
    save: function (url, req, method) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(app.lib.extendDemoObject(req));
        } else {
            var deferred = app.dataadapter.remote.save(url, req, method);
        }

        // update local storage
        if (this.options.localStorage) {
            deferred.done(function (result) {
                app.dataadapter.local.update([result]);
            });
        }

        // update app.data.tags collection if entity that is saved is a tag
        deferred.done(function (result) {

            var t = app.data.tags.get(result._id);

            if (result._data.tag) {
                app.data.tags.add(app.model.tag.parse(result), { merge: true });
            }
        });

        return deferred;
    },
    update: function (url, req, method) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve(app.dataadapter.local.updateActionExecute(url, req));
        } else {
            var deferred = app.dataadapter.remote.update(url, req, method);
        }

        // update local storage
        if (this.options.localStorage) {
            deferred.done(function (results) {
                app.dataadapter.local.update(results);
            });
        }

        // update app.data.tags collection if entity that is saved is a tag
        deferred.done(function (results) {
            var tags = [];
            _.each(results, function (result) {
                if (result._data.tag) {
                    tags.push(app.model.tag.parse(result));
                }
            });
            app.data.tags.add(tags, { merge: true });
        });

        return deferred;
    },
    remove: function (req) {
        if (app.demo) {
            var deferred = $.Deferred();
            deferred.resolve([]);
        } else {
            var deferred = app.dataadapter.remote.remove('/api/notes/remove', req);
        }

        if (this.options.localStorage) {
            deferred.done(function (results) {
                app.dataadapter.local.remove(req.ids);

                var tags = [];
                _.each(req.ids, function (id) {
                    var tag = app.data.tags.get(id);
                    if (tag) {
                        tags.push(tag);
                    }
                });
                app.data.tags.remove(tags);

            }.bind(this));
        }

        return deferred;
    }
}
app.dataadapter.local = {
    data: {
        array: null,
        hash: {}
    },

    load: function (url, req) {
        app.lib.cursorLoading();
        return this.request(url, req).done(this.onSuccess).fail(this.onError);
    },

    getAllTexts: function () {
        var arr = [];
        _.each(this.data.array, function (data) {
            if (data._data.note) {
                _.each(data._data.note.items, function (item) {
                    if (item.data && item.data.text) {
                        arr.push(item.data.text);
                    }
                });
            }
        });

        return arr.join();
    },

    update: function (array) {
        if (!this.data.array) {
            this.data.array = array;
            this.data.hash = {};
            _.each(this.data.array, function (item) {
                this.data.hash[item._id] = item;
            }, this);
        } else {
            _.each(array, function (item) {
                if (this.data.hash[item._id]) {
                    this.data.array.splice(this.data.array.indexOf(this.data.hash[item._id]), 1, item);
                } else {
                    this.data.array.push(item);
                }

                this.data.hash[item._id] = item;
            }, this);
        }
    },

    remove: function (ids) {
        ids = _.isArray(ids) ? ids : [ids];
        _.each(ids, function (id) {
            if (this.data.hash[id]) {
                this.data.array.splice(this.data.array.indexOf(this.data.hash[id]), 1);
                this.data.hash[id] = null;
                delete this.data.hash[id];
            }
        }, this);
    },

    request: function (url, req) {
        var deferred = $.Deferred();

        setTimeout(function () {
            deferred.resolve(this.filter(req, this.data.array));
        }.bind(this), 5);

        return deferred;
    },

    onSuccess: function (res) {
        app.lib.cursorDefault();
    },

    onError: function () {
        app.lib.cursorDefault();
    },

    // filter json data to apply with query data (used to load from local and to validate changed data set for context)
    filter: function (data, result) {
        // extract query string if app.navigation is passed as data
        var queryItems = (data.query && data.query.all) ? app.lib.parseQuery(data.query.all()) : data.query;

        // filter data based on request parameters (query)
        var statusPredicate = null;
        if (queryItems) {
            var statusList = [];
            _.each(queryItems, function (queryItem) {
                if (!queryItem.type) {
                    switch (queryItem.query) {
                        case 'all':
                        case 'inbox':
                        case 'archive':
                        case 'trash':
                            statusList.push(queryItem.query);
                            break;
                    }
                }
            }, this);
            if (statusList.length > 0) {
                statusPredicate = this.statusFinderPredicate(statusList);
            }
        }

        // filter data based on request parameters (page, view)
        switch (data.page) {
            case 'none':
                return [];
            case 'all':
                return result;
            case 'notes':
                switch (data.view) {
                    case 'inbox':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'inbox' &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                    (statusPredicate ? statusPredicate(entity) : entity._data.status !== 'trash') &&
                                    entity._data.note
                                );
                        });
                        break;
                    case 'trackers':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.note
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.note
                            );
                        });
                        break;
                    default:
                        return [];
                }

                result = _.sortBy(result, function (entity) { return -entity._data.note.order; });
                break;
            case 'trackers':
                switch (data.view) {
                    case 'manage':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : entity._data.status != 'trash') &&
                                entity._data.note &&
                                _.find(entity._data.note.items, function (item) {
                                    return item.data.trackerId;
                                })
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.tracker
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.tracker
                            );
                        });
                        break;
                    default:
                        return [];
                }

                switch (data.view) {
                    case 'all':
                    case 'search':
                        result = _.sortBy(result, function (entity) { return -entity._data.note.order; });
                        break;
                    case 'manage':
                    case 'untagged':
                    case 'archive':
                    case 'trash':
                        result = _.sortBy(result, function (entity) { return -entity._data.tracker.order; });
                        break;
                }
                break;
            case 'tags':
                switch (data.view) {
                    case 'preload':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.tag
                            );
                        });
                        break;
                    case 'all':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : (entity._data.status === 'all' || entity._data.status === 'inbox')) &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'search':
                        result = _.filter(result, function (entity) {
                            return (
                                (statusPredicate ? statusPredicate(entity) : entity._data.status !== 'trash') &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'untagged':
                        result = _.filter(result, function (entity) {
                            return (
                                (entity._data.status === 'all' || entity._data.status === 'inbox') &&
                                (!entity._data.tags || entity._data.tags.length === 0) &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'archive':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'archive' &&
                                entity._data.tag
                            );
                        });
                        break;
                    case 'trash':
                        result = _.filter(result, function (entity) {
                            return (
                                entity._data.status === 'trash' &&
                                entity._data.tag
                            );
                        });
                        break;
                    default:
                        return [];
                }

                result = _.sortBy(result, function (entity) { return -entity._data.tag.order; });
                break;
            default:
                return [];
        }

        // filter data based on request parameters (query)
        if (queryItems) {
            _.each(queryItems, function (queryItem) {
                switch (queryItem.type) {
                    case 'branch':
                        var predicate = this.tagFinderPredicate(queryItem.query);

                        result = _.filter(result, function (entity) {
                            return _.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'root':
                        var predicate = this.tagFinderPredicate([queryItem.query]);

                        result = _.filter(result, function (entity) {
                            return _.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'not':
                        var predicate = this.tagFinderPredicate([queryItem.query]);

                        result = _.filter(result, function (entity) {
                            return !_.find(entity._data.tags, predicate);
                        });

                        predicate = null;
                        break;
                    case 'text':
                        var search = this.fuzzyRegExpString(queryItem.query);
                        var predicate = function (item) {
                            return search.test(item.data.text);
                        }

                        result = _.filter(result, function (entity) {
                            return entity._data.note && _.find(entity._data.note.items, predicate);
                        });

                        predicate = null;
                        break;
                    case 'type':
                        var predicate = function (item) {
                            return item.type === queryItem.query;
                        }

                        result = _.filter(result, function (entity) {
                            return entity._data.note && _.find(entity._data.note.items, predicate);
                        });

                        predicate = null;
                        break;
                    case 'id':
                        result = _.filter(result, function (entity) {
                            return entity._id === queryItem.query;
                        });
                        break;
                    case 'color':
                        result = _.filter(result, function (entity) {
                            return entity._data.color === queryItem.query;
                        });
                        break;
                    case 'name':
                        var search = this.fuzzyRegExpString(queryItem.query);

                        result = _.filter(result, function (entity) {
                            return entity._data.tag && search.test(entity._data.tag.name);
                        });
                        break;
                }
            }, this);
        }

        return JSON.parse(JSON.stringify(result));
    },

    updateActionExecute: function (url, req) {
        switch(url){
            case '/api/notes/update/tags':
                return app.dataadapter.local.updateActions.tags(req);
                break;
            case '/api/notes/update/status':
                return app.dataadapter.local.updateActions.status(req);
                break;
            case '/api/notes/update/color':
                return app.dataadapter.local.updateActions.color(req);
                break;
            case '/api/notes/upload/list':
                return app.dataadapter.local.updateActions.list(req);
                break;
        }
    },

    updateActions: {
        tags: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            //pull
            _.each(filtered, function (note) {
                _.each(data.tags.pull, function (tagId) {
                    var tag = _.find(note._data.tags, function (tag) {
                        return tag._id === tagId;
                    });

                    var index = note._data.tags.indexOf(tag);

                    if (index >= 0) {
                        note._data.tags.splice(index, 1);
                        note._data.modified = modified;
                    }
                })
            });

            //push
            _.each(filtered, function (note) {
                note._data.tags = note._data.tags || [];
                _.each(data.tags.push, function (tagId) {
                    note._data.tags.push({ _id: tagId });
                    note._data.modified = modified;
                })
            });

            //fix
            _.each(filtered, function (note) {
                note._data.tags = _.uniq(note._data.tags, function (tag) { return tag._id; });

                if (note._data.tags && note._data.tags.length === 0) {
                    delete note._data.tags
                }
            });

            return filtered;
        },
        status: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            _.each(filtered, function (note) {
                note._data.status = data.status;
                note._data.modified = modified;
            });

            return filtered;
        },
        color: function (data) {
            var data = $.extend(true, {}, data);
            var modified = Date.now();

            var filtered = _.filter(app.dataadapter.local.data.array, function (note) {
                return _.contains(data.ids, note._id);
            });

            _.each(filtered, function (note) {
                note._data.color = data.color;
                note._data.modified = modified;
            });

            return filtered;
        },
        list: function (data) {
            var data = $.extend(true, {}, data);

            var created = Date.now();
            var timeoffset = 1402727032767;
            var order = (created - timeoffset) * 100;

            var notes = [];
            var tags = _.map(data.tags, function (tag) {
                return { _id: tag }
            });

            var texts = data.text.split('\n');
            order = order + (texts.length * 100 || 0);
            var batch = app.lib.oid();

            _.each(texts, function (text, index) {
                if (text && text.length > 0 && notes.length < 201) {

                    text = text.trim();
                    var textOriginal = text;
                    text = text.length < app.config.maxNoteLength + 1 ? text : text.substring(0, app.config.maxNoteLength - 3);

                    if (text.length !== textOriginal.length) {
                        text += '...';
                    }

                    var note = {
                        _id: app.lib.oid(),
                        _owner: app.data.account.get('_id'),
                        _batch: batch,
                        _data: {
                            created: created,
                            modified: created,
                            color: 'white',
                            status: 'all',
                            note: {
                                order: Math.round(order - index * 100),
                                items: [{
                                    data: {
                                        text: text
                                    },
                                    name: null,
                                    type: 'text',
                                    group: null,
                                    uid: '0'
                                }]
                            }
                        }
                    };

                    if (tags.length > 0) {
                        note._data.tags = tags;
                    }

                    notes.push(note);
                }
            });

            return notes;
        }
    },

    // build function that will return predicate for iterating through tags
    tagFinderPredicate: function (or) {
        var ors = _.map(or, function (tag) {
            return 'tag._id==="' + tag + '"';
        });

        return new Function('tag', 'return ' + ors.join(' || '));
    },

    statusFinderPredicate: function (statusList) {
        var ors = _.map(statusList, function (status) {
            return 'entity._data.status==="' + status + '"';
        });

        return new Function('entity', 'return ' + ors.join(' || '));
    },

    // regexp for searching strings that lossely match the query
    fuzzyRegExpString: function (text) {
        return new RegExp(text.split('').join('.{0,2}').replace(/\s/igm, '.*'), 'im');
    }
};
app.dataadapter.remote = {
    load: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    save: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    update: function (url, req, method) {
        app.lib.cursorLoading();
        return this.request(url, req, method).done(this.onSuccess).fail(this.onError);
    },

    remove: function (url, req) {
        app.lib.cursorLoading();
        return this.request(url, req, 'DELETE').done(this.onSuccess).fail(this.onError);
    },

    request: function (url, req, method) {
        var promise = app.lib.retry(function () {
            return $.ajax({
                url: url,
                contentType: 'application/json',
                type: method || 'POST',
                dataType: 'json',
                data: JSON.stringify(req),
                cache: false
            });
        });

        app.dataadapter.remote.requestCount++;

        if (app.dataadapter.remote.requestCount >= 5) {
            app.dataadapter.remote.requestCount = 0;
            alert('You are making quite a lot requests to server per second');
        }

        if (app.dataadapter.remote.timeout === null) {
            app.dataadapter.remote.timeout = setTimeout(function () {
                app.dataadapter.remote.requestCount = 0;
                app.dataadapter.remote.timeout = null;
            }, 1000);
        }

        return promise;
    },

    requestCount: 0,
    timeout: null,

    onSuccess: function (res) {
        app.lib.cursorDefault();
    },

    onError: function (jqXHR, textStatus, errorThrown) {
        jqXHR = jqXHR || {};

        app.lib.cursorDefault();

        logException('dataadapter remote error', jqXHR.statusText + ';' + jqXHR.readyState + ';' + jqXHR.status + ';' + jqXHR.responseText);

        if (jqXHR.status == 403) {
            window.location = '/app';
            return;
        }

        alert('Unable to complete request to server try again or try to reload page');
    }
}
app.view.layout.content = app.lib.element({
    displayName: 'layout.content',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {
            page: null,
            navigation: null
        };
    },
    onNavigate: function (navigation) {
        this.setState({
            page: navigation.page,
            navigation: navigation
        });
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    showContextMenu: function (enable) {
        var $container = $(this.refs.container.getDOMNode());

        if (typeof (enable) === 'undefined') {
            if ($container.hasClass('showctx')) {
                $container.removeClass('showctx');
            } else {
                $container.addClass('showctx');
            }
        } else {
            if (!enable) {
                $container.removeClass('showctx');
            } else {
                $container.addClass('showctx');
            }
        }
    },
    render: function () {
        var canScroll = !_.contains(['board', 'board-search'], app.navigation && app.navigation.view);
        return (
            React.DOM.div({ id: 'container', className: 'scroll', ref: 'container' },
                React.DOM.div({ id: 'cont', className: 'animate scroll' + (canScroll ? ' scroll' : '') },
                    (app.view.content[this.state.page] || app.view.content.notfound)({ navigation: this.state.navigation, key: app.lib.cid() }),
                    app.view.context.contextmenu({
                        selector: '#cont'
                    })
                ),
                (app.view.context[this.state.page]
                    ? app.view.context[this.state.page]({
                        toggle: this.showContextMenu
                    })
                    : null)
            )
        );
    }
});
app.view.layout.contextmenu = app.lib.element({
    displayName: 'layout.contextmenu',
    componentDidMount: function () {
        app.data.state.on('change:menuNavigationActive change:menuTreeActive change:menuTreeShow', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        app.data.state.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    menuNavigationToggle:function () {
        app.data.state.set('menuNavigationActive', !app.data.state.get('menuNavigationActive'));
    },
    menuTreeToggle : function () {
        app.data.state.set('menuTreeActive', !app.data.state.get('menuTreeActive'));
    },
    render: function () {
        var navigationClasses = window.classnames({
            'item': true,
            'active': app.data.state.get('menuNavigationActive')
        });

        var treeClasses = window.classnames({
            'item': true,
            'hide': !app.data.state.get('menuTreeShow'),
            'active': app.data.state.get('menuTreeActive')
        });

        return (
            React.DOM.div({ id: "contextmenu" },
                React.DOM.span({ className: navigationClasses, onClick: this.menuNavigationToggle },
                    React.DOM.i({ className: "icon-menu" })
                ),
                React.DOM.span({ className: treeClasses, onClick: this.menuTreeToggle },
                    React.DOM.i({ className: "icon-hash" })
                )
            )
        );
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.layout.header = app.lib.element({
    displayName: 'layout.header',
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    render: function () {
        return (
            React.DOM.div({ id: "header" },
                React.DOM.span({ id: "title" }, 'Beyondpad'),
                React.DOM.span({ id: "search" },
                    React.DOM.input({ type: "text" }),
                    React.DOM.button(null,
                        React.DOM.i({ className: "icon-search" })
                    )
                ),
                React.DOM.div({ id: "account" },
                    React.DOM.span({ id: "accountname" }, 'Arturs Girons'),
                    React.DOM.span({ id: "accounticon" },
                    React.DOM.i({ className: "icon-user-round" }))
                )
            )
        );
    }
});
app.view.layout.main = app.lib.element({
    displayName: 'layout.main',
    componentDidMount: function () {
        app.data.state.on('change:controlTreeShow change:controlNavigationShow', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        app.data.state.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    render: function () {
        var containerClasses = window.classnames({
            'treeshow': app.data.state.get('controlTreeShow'),
            'navigationshow': app.data.state.get('controlNavigationShow')
        });

        return (
            React.DOM.div({ id: 'app', onFocus: this.focus},
                app.view.layout.header(),
                React.DOM.div({ id: 'body', className: containerClasses },
                    app.view.layout.contextmenu(),
                    app.view.layout.navigation(),
                    app.view.layout.sidepane(),
                    app.view.layout.content()
                )
            )
        );
    },
    focus: function (event) {
        app.lib.focus.save(event.target);
    },
    componentDidUpdate: function () {
        app.events.trigger('resize:content');
    }
});
app.view.layout.navigation = app.lib.element({
    displayName: 'layout.navigation',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    getInitialState:function(){
        return {
            page: null
        };
    },
    onNavigate: function (navigation) {
        this.setState({
            page: navigation.page
        });
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return this.state.page !== nextState.page;
    },
    validate: function (event) {
        if (!app.lib.newNotes.validate()) {
            event.preventDefault();
            event.stopPropagation();

            return;
        }

        app.lib.newNotes.clear();
    },
    render: function () {
        return (
            React.DOM.div({ id: "navigation", className: 'noselect' },
                _.map(app.config.navigation, function (item, index) {
                    if (!item.children) {
                        return (
                            React.DOM.a({
                                key: index,
                                href: ('#' + item.page),
                                onClick: this.validate,
                                className: window.classnames({
                                    'item': true,
                                    'active': item.page === this.state.page
                                })
                            },
                                React.DOM.i({ className: item.icon }),
                                React.DOM.span(null, item.title)
                            )
                        );
                    } else {
                        return (
                            React.DOM.div({
                                key: index,
                                className: 'navswap'
                            },
                                React.DOM.div({ className: 'navswapplaceholder' },
                                    React.DOM.a({
                                        href: item.url || ('#' + item.page),
                                        onClick: this.validate,
                                        className: window.classnames({
                                            'item': true,
                                            'active': item.page === this.state.page
                                        })
                                    },
                                        React.DOM.i({ className: item.icon }),
                                        React.DOM.span(null, item.title)
                                    )
                                ),
                                React.DOM.div({ className: 'navswapcontent' },
                                    _.map(item.children, function (item, index) {
                                        return (
                                            React.DOM.a({
                                                key: index,
                                                href: item.page ? (item.url || '#' + item.page) : null,
                                                onClick: this.validate,
                                                className: window.classnames({
                                                    'item': true,
                                                    'active': item.page === this.state.page
                                                })
                                            },
                                                React.DOM.i({ className: item.icon }),
                                                React.DOM.span(null, item.title)
                                            )
                                        )
                                    }, this)
                                )
                            )
                        );
                    }
                }, this)
            )
        );
    }
});
app.view.layout.sidepane = app.lib.element({
    displayName: 'layout.sidepane',
    componentDidMount: function () {
        app.events.on('navigate', this.onNavigate, this);
    },
    getInitialState: function () {
        return {
            page: null,
            navigation: null
        };
    },
    onNavigate: function (navigation) {
        this.setState({
            page: navigation.page,
            navigation: navigation
        });
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    render: function () {
        return (
            React.DOM.div({ id: "sidepane" },
                (app.view.sidepane[this.state.page] || app.view.sidepane.notfound)({ navigation: this.state.navigation })
            )
        );
    }
});
app.view.context.tags = app.view.context.boards = app.view.context.trackers = app.view.context.notes = app.lib.element({
    displayName: 'context.notes',
    getInitialState: function () {
        return {
            expanded:false
        }
    },
    componentWillMount: function () {
        app.events.on('contextbar:initialize', this.initialize, this);
        app.events.on('contextbar:update', this.update, this);
        app.events.on('contextbar:dispose', this.dispose, this);
    },
    initialize: function (selection) {
        this.selection = selection;
        this.forceUpdate(function () {
            this.triggerToggle();
        }.bind(this));
    },
    dispose: function () {
        this.selection = null;
        this.props.toggle(false);
        this.setState({ expanded: false });
    },
    update: function () {
        this.forceUpdate(function () {
            this.triggerToggle();
        }.bind(this));
    },
    triggerToggle: function () {
        if (this.selection) {
            this.props.toggle(this.selection.selected.length > 0 || app.navigation.view === 'trash' || this.state.expanded);
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.triggerToggle();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
        this.props.toggle(false);
    },

    componentDidMount: function () {
    },

    applyRetag: function (pushpull) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            tags: pushpull
        }

        this.selection.collection.updateNotes('/api/notes/update/tags', update);
    },

    applyColor: function (color) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            color: color
        }

        this.selection.collection.updateNotes('/api/notes/update/color', update);
    },

    applyStatus: function (status) {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            }),
            status: status
        }

        this.selection.collection.updateNotes('/api/notes/update/status', update);
    },

    applyDelete: function () {
        var update = {
            ids: _.map(this.selection.selected, function (item) {
                return item.props.model.get('_id');
            })
        }

        this.selection.collection.removeNotes(update);
    },

    retagAll: function (event) {
        var menu = {
            type: 'retagmenu',
            selection: this.selection,
            callback: this.applyRetag
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    moveTo: function (event) {
        var menu = {
            type: 'statusmenu',
            callback: this.applyStatus
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    changeColor: function (event) {
        var menu = {
            type: 'colormenu',
            callback: this.applyColor
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom', 'middle');
    },
    changeViewTo: function (view) {
        var path = app.router.getPath();

        // TODO: refactor this marasmatic crap
        var nav = app.router.prev || app.navigation;

        if (view) {
            if (nav.query && nav.query.all().length > 0) {
                path += '&';
            } else {
                path += '/';
            }
            path += view;
            path = path.replace('//', '/').replace('/&', '/');
        }

        app.router.navigate(path, { trigger: true, temp: true });
    },
    changeView: function (event) {
        var menu = {
            type: 'textmenu',
            items: [
                {
                    icon: 'icon-archive',
                    text: 'Show archived',
                    callback: this.changeViewTo.bind(this, 'archive')
                },
                {
                    icon: 'icon-inbox',
                    text: 'Show inboxed',
                    callback: this.changeViewTo.bind(this, 'inbox')
                },
                {
                    icon: 'icon-trash-alt',
                    text: 'Show trashed',
                    callback: this.changeViewTo.bind(this, 'trash')
                },
                {
                    icon: 'icon-folder-open',
                    text: 'Show all',
                    callback: this.changeViewTo.bind(this, null)
                }
            ]
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    changeLayoutTo: function (layout) {
        app.data.account.setOptions('noteLayout', layout);
        app.events.trigger('resize:window');
    },

    changeLayout: function (event) {
        var menu = {
            type: 'textmenu',
            items: [
                {
                    icon: 'icon-th-1',
                    text: 'Tile alignment',
                    callback: this.changeLayoutTo.bind(this, 'masonry')
                },
                {
                    icon: 'icon-menu',
                    text: 'Row alignment',
                    callback: this.changeLayoutTo.bind(this, 'row')
                }
            ]
        };

        app.events.trigger('contextmenu:contextbar', $(event.target).closest('.button')[0] || event.target, menu, 'bottom');
    },

    toggleContextPanel: function () {
        this.selection.deselectAll();
        this.setState({
            expanded: !this.state.expanded
        }, function () {
            this.triggerToggle();
        }.bind(this));
    },
    render: function () {
        if (!this.selection) return null;

        return (
            React.DOM.div({ id: 'ctx', className: 'animate' },
                React.DOM.div({ className: 'ctxRight' },
                    app.view.components.button({
                        icon: 'icon-sort',
                        dropdown: true,
                        text: '',
                        hidden: true
                    }),
                    app.view.components.button({
                        icon: 'icon-view-mode',
                        dropdown: true,
                        text: '',
                        title: 'Layout mode',
                        onClick: this.changeLayout,
                        inactive: _.contains(['board', 'board-search'], app.navigation.view)
                    }),
                    app.view.components.button({
                        icon: 'icon-eye',
                        text: '',
                        title: 'Status view toggle',
                        dropdown: true,
                        onClick: this.changeView,
                        inactive: !_.contains(['all', 'trackers', 'search', 'manage', 'list', 'list-search', 'board', 'board-search'], app.navigation.view)
                    })
                ),
                React.DOM.div({ className: 'ctxLeft' },
                    app.view.components.button({
                        icon: 'icon-block',
                        text: 'Uncheck',
                        title: 'Unchek all items',
                        ticker: this.selection.selected.length,
                        inactive: this.selection.selected.length === 0,
                        onClick: this.selection.deselectAll
                    }),
                    app.view.components.button({
                        icon: 'icon-ok-big',
                        text: 'Check all',
                        title: 'Check all items',
                        onClick: this.selection.selectAll
                    }),
                    app.view.components.button({
                        icon: 'icon-tags',
                        text: 'Tags',
                        title: 'Change item tags',
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.retagAll
                    }),
                    app.view.components.button({
                        icon: 'icon-art-gallery',
                        text: 'Color',
                        title: 'Change item color',
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.changeColor
                    }),
                    app.view.components.button({
                        icon: 'icon-folder-open',
                        text: (app.navigation.view === 'trash' ? 'Restore' : 'Move'),
                        inactive: this.selection.selected.length === 0,
                        dropdown: true,
                        onClick: this.moveTo
                    }),
                    app.view.components.button({
                        icon: 'icon-trash-alt',
                        text: 'Permanently delete',
                        inactive: this.selection.selected.length === 0,
                        hidden: app.navigation.view !== 'trash',
                        onClick: this.applyDelete
                    })
                ),
                React.DOM.i({ className: 'contextpanetoggle icon-ellipsis-vert', onClick: this.toggleContextPanel, title: 'Toggle context bar' }),
                app.view.context.contextmenu({
                    type: 'contextbar',
                    selector: '#ctx'
                })
            )
        );
    }
});
app.view.context.contextmenu = app.lib.element({
    displayName: 'context.contextmenu',
    componentWillMount: function () {
        this.prev = null;
    },
    componentDidMount: function () {
        app.events.on('contextmenu' + (this.props.type ? ':' + this.props.type : ''), this.showContextMenu, this);
    },
    showContextMenu: function (element, data, vertical, horizontal) {
        this.cancelHide = false;

        if (element !== this.prev && this.prev) {
            this.cancelHide = true;
        }

        this.prev = element;

        this.setState({
            element: element,
            data: data,
            vertical: vertical || 'top',
            horizontal: horizontal || 'right',
        });

        $(document).on('mouseup', this.componentDidBlur);
    },

    componentDidBlur: function (event) {
        if (this.state.data) {
            var container = $(this.getDOMNode());
            if (!container.is(event.target) && container.has(event.target).length === 0) {
                this.hide();
            }
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.prev = null;
        this.cancelHide = false;

        this.hide(true);
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
        $(document).off('mouseup', this.componentDidBlur);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    getInitialState: function () {
        return {
            element: null,
            data: null,
            vertical: 'top',
            horizontal: 'right',
        };
    },
    hide: function(force){
        this.hide__ = this.hide__ || _.debounce(this.hide_, 10);
        this.hide__(force);
    },
    hide_: function (force) {
        if (!this.cancelHide || force) {
            $(document).off('mouseup', this.componentDidBlur);
            if (this.isMounted()) {
                this.setState({
                    element: null,
                    data: null
                });
            }
        }
        this.cancelHide = false;
    },
    render: function () {
        if (this.state.data && app.view.context.components[this.state.data.type]) {
            return (
                app.view.context.components[this.state.data.type]({
                    ref: 'contextmenu',
                    hide: this.hide,
                    data: this.state.data
                })
            );
        }
        else {
            return React.DOM.span({ style: { display: 'none' } });
        }
    },
    componentDidUpdate: function () {
        if (this.state.element) {
            var element = $(this.refs.contextmenu.getDOMNode());
            var source = $(this.state.element);
            var context = $(this.props.selector || '#cont');

            element.bbox = element[0].getBoundingClientRect();
            source.bbox = source[0].getBoundingClientRect();
            context.bbox = context[0].getBoundingClientRect();

            //container border top width
            var offsetTop = 0;

            if (this.state.vertical == 'top') {
                var top = (source.bbox.top - context.bbox.top - element.bbox.height + context.scrollTop() - offsetTop);
                top = top <= 0 ? 0 : top;
            } else { 
                var top = (source.bbox.top + source.bbox.height + context.scrollTop() - offsetTop);
                top = top <= 0 ? 0 : top;
            }

            if (this.state.horizontal === 'middle') {
                var left = (source.bbox.left + source.bbox.width/2 - context.bbox.left - element.bbox.width / 2 + context.scrollLeft());
                left = left <= 0 ? 0 : left;
            } else {
                var left = (source.bbox.left - context.bbox.left - element.bbox.width + source.bbox.width + context.scrollLeft());
                left = left <= 0 ? 0 : left;
            }

            $(element).css({
                'top': top + 'px',
                'left': left + 'px'
            });
        }
    }
});
app.view.context.components = app.view.context.components || {};
app.view.context.components.retagitem = app.lib.element({
    displayName: 'context.components.retagitem',
    mixins: [app.lib.mixins.rootParent],
    getDefaultProps: function () {
        return {
            filter: null,
            tree: [],
            active: false, // active is to refresh expander when tags are selected
            rootParent: null // to get rootParent of recursively nested components
        }
    },
    getInitialState: function () {
        if (this.isRootParent()) {
            return {
                hasChecked: false,
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            }
        } else {
            return {
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            };
        }
    },
    componentWillMount: function () {
        this.refreshExpander(this.props);
    },
    componentDidMount: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentDidUpdate: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.isRootParent()) {
            this.rootParent().forceExpander = (this.props.filter !== nextProps.filter) && nextProps.filter;

            //if (true) { // refresh expanders always
            if (!this.rootParent().skipUpdate || this.props.filter !== nextProps.filter) { // refresh expanders only on navigate
                if (nextProps.filter) {
                    this.refreshExpanderFilter(nextProps);
                } else {
                    this.refreshExpander(nextProps, this.props.filter !== nextProps.filter);
                }
            } else {
                this.expandedTagHash = {};
                this._expandedTagHash = {};
            }
        }
    },
    toggle: function (_id, event) {
        if (this.isRootParent()) {
            event.preventDefault();
            event.stopPropagation();

            if (typeof (this.props.selectionHashDefault[_id]) === 'undefined') {
                if (typeof (this.props.selectionHash[_id]) === 'undefined') {
                    this.props.selectionHash[_id] = true;
                } else {
                    delete this.props.selectionHash[_id];
                }

                this.forceUpdate();
            } else {
                if (this.props.selectionHash[_id] === false) {
                    this.props.selectionHash[_id] = true;
                    this.forceUpdate();
                    return;
                }

                if (this.props.selectionHash[_id] === true) {
                    if (this.props.selectionHashDefault[_id]) {
                        this.props.selectionHash[_id] = false;
                    } else {
                        this.props.selectionHash[_id] = this.props.selectionHashDefault[_id];
                    }
                    this.forceUpdate();
                    return;
                }

                if (this.props.selectionHash[_id] === null) {
                    this.props.selectionHash[_id] = false;
                    this.forceUpdate();
                    return;
                }
            }
        }
    },
    refreshExpander: function (props, force) {
        if (this.isRootParent() && (props.active || force)) { // active is to refresh expander when tags are selected
            this.expandedTagHash = app.data.tags.getParents(_.keys(this.props.selectionHash));
            this._expandedTagHash = _.clone(this.expandedTagHash);
            this.setState({
                tags: {
                    visible: null,
                    filtered: null
                }
            });
        }
    },
    //TODO: add debounce, but in complience with "trackers component" to be streamilned
    refreshExpanderFilter: function (props) {
        if (this.isRootParent() && props.filter) {
            var filter = props.filter.toLowerCase();

            var filteredTags = _.filter(app.data.tags.models, function (tag) {
                return app.lib.searchText(tag.data('tag').name.toLowerCase(), filter);

                //var words = _.words(tag.data('tag').name.toLowerCase());

                //return !!_.find(words, function (word) {
                //    return _.startsWith(word, filter);
                //});
            }, this);

            var filteredIds = _.map(filteredTags, function (item) { return item.get('_id') });

            this.expandedTagHash = app.data.tags.getParents(filteredIds);
            this._expandedTagHash = _.clone(this.expandedTagHash);

            var parentsIds = _.keys(this.expandedTagHash);

            var mergedTags = [].concat(filteredIds, parentsIds);

            this.setState({
                tags: {
                    visible: _.object(mergedTags, mergedTags),
                    filtered: filteredIds
                }
            });
        }
    },
    isExpanded: function (id) {
        if (this.isRootParent()) {
            if (this.expandedTagHash) {
                if (this.expandedTagHash[id]) {
                    // agains recursion
                    this.expandedTagHash[id] = false;
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    },
    isVisible: function (id) {
        if (this.isRootParent()) {
            var visible = app.data.tags.get(id).isActive();

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && (!!this.state.tags.visible[id] || show);
            } else {
                return visible;
            }
        }
    },
    isChildrenVisible: function (id) {
        if (this.isRootParent()) {
            var status = app.data.tags.get(id).data('status');
            var visible = status === 'all' || status === 'inbox';

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && show;
            } else {
                return visible;
            }
        }
    },

    isToggle: function (id) {
        if (this.isRootParent()) {
            return (typeof (this.props.selectionHash[id]) !== 'undefined' ? this.props.selectionHash[id] : false);
        }
    },

    //TODO: add "Nothing found" message if rootParent has no items
    //TODO: replace "key:id" with something shorter like "lib.cid()"
    render: function () {
        return (
            React.DOM.div({ className: 'retag' },
                _.map(this.props.tree, function (treeItem) {
                    var tag = treeItem.tag;
                    var id = app.data.tags.get(tag).get('_id');

                    var childrenVisible = this.props.isChildrenVisible || this.rootParent().isChildrenVisible(id);
                    var visible = (this.rootParent().isVisible(id) || childrenVisible) && app.data.tags.get(id).isActive();

                    if (visible) {
                        var newTree = _.reduce(treeItem.down, function (memo, subTag) {
                            memo[subTag] = app.data.tags[this.props.hasNotes ? 'getTreeTags' : 'getTree'](false)[subTag];
                            return memo;
                        }, {}, this);

                        newTree = app.data.tags.treeToArray(newTree);

                        var isSelected = this.props.active && !!_.find(app.navigation.query.tags(), function (queryItem) { return queryItem.query === id });

                        return app.view.sidepane.component.checkitem(
                            {
                                key: app.lib.uidmap(id),
                                text: app.data.tags.get(tag).data('tag').name,
                                icon: 'icon-blank',
                                color: app.lib.color(app.data.tags.get(tag).data('color')),
                                click: this.rootParent().toggle.bind(null, id),
                                checked: this.rootParent().isToggle(id),
                                expanded: this.rootParent().isExpanded(id),
                                forceExpanded: this.rootParent().forceExpander,
                                visible: visible,
                                selected: isSelected
                            },
                            treeItem.down.length > 0 ? app.view.context.components.retagitem({
                                tree: newTree,
                                rootParent: this.props.rootParent || this,
                                active: this.props.active,
                                isChildrenVisible: childrenVisible
                            }) : null
                        );
                    } else {
                        return null
                    }
                }, this)
            )
        );
    }
});
app.view.context.components = app.view.context.components || {};
app.view.context.components.retagmenu = app.lib.element({
    displayName: 'context.components.retagmenu',
    componentWillMount: function () {
        this.selectionHash = this.getSelectionHash(this.props.data.selection);
        this.selectionHashDefault = _.clone(this.selectionHash);

        app.data.tags.on('add remove change sync', this.forceUpdate.bind(this, null), this);

        this.newTag = new app.model.tag();
        this.newTag.setDefaults('tag');
        this.newTag.reset();
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
    },
    getInitialState: function () {
        return {
            filter: null
        };
    },
    apply: function () {
        var result = {
            push: [],
            pull: []
        };

        _.each(_.keys(this.selectionHash), function (tag) {
            if (typeof (this.selectionHash[tag]) !== 'undefined' && this.selectionHash[tag] !== null) {
                if (this.selectionHash[tag] === true) {
                    result.push.push(tag);
                }
                if (this.selectionHash[tag] === false) {
                    result.pull.push(tag);
                }
            }
        }, this);

        this.props.data.callback(result);

        this.props.hide(true);
    },
    getSelectionHash: function (selection) {
        var hash = {};
        this.hasNotes = true;

        var arr = _.reduce(selection.selected, function (memo, selected) {
            this.hasNotes = this.hasNotes && selected.props.context === 'note';

            memo.push(_.pluck(selected.props.model.data('tags'), '_id'));
            return memo;
        }, [], this);

        var common = _.intersection.apply(null, arr);
        var different = _.difference(_.flatten(arr), common);

        _.each(common, function (checkedTag) {
            hash[checkedTag] = true;
        });

        _.each(different, function (uncheckedTag) {
            hash[uncheckedTag] = null;
        });

        return hash;
    },

    onSearchChanged: function (filter) {
        this.newTag.update('tag', {
            name: { $set: 'Create tag "' + filter + '"' }
        }, true);


        var createNew = filter && !_.find(app.data.tags.models, function (tag) {
            return tag.data('tag').name.toLocaleLowerCase() === filter.toLocaleLowerCase();
        }, this);


        this.setState({
            filter: filter,
            createNew: createNew
        });
    },

    createNew: function () {
        var createTag = this.newTag.clone();
        createTag.update('tag', {
            name: { $set: this.state.filter }
        }, true);

        createTag.save();
        this.onSearchChanged(null);
    },

    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu sidepane retagmenu', ref: 'contextmenu' },
                app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: false,
                    placeholder: 'Filter tags'
                }),
                this.state.createNew ?
                    React.DOM.div({ className: 'createNew' },
                        app.view.components.tag({
                            tag: this.newTag,
                            onClickTag: this.createNew
                        })
                    ) :
                    null,
                app.view.context.components.retagitem({
                    tree: app.data.tags.reduceTree(app.data.tags[this.hasNotes ? 'getTreeTags' : 'getTree']()),
                    selectionHash: this.selectionHash,
                    selectionHashDefault: this.selectionHashDefault,
                    filter: this.state.filter,
                    hasNotes: this.hasNotes,
                    active: true
                }),
                React.DOM.div({ className: 'retagApply', onClick: this.apply },
                    React.DOM.i({ className: 'icon-enter' }),
                    'Apply'
                )
            )
        );
    }
});
app.view.context.components = app.view.context.components || {};
app.view.context.components.textmenu = app.lib.element({
    displayName: 'context.components.textmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (item, event) {
        if (item.callback) {
            item.callback();
        }
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu textmenu' },
                _.map(this.props.data.items, function (item, index) {
                    return React.DOM.div({
                        key:index,
                        className: 'item', 'data-value': item.value,
                        onClick: this.click.bind(this, item)
                    },
                        React.DOM.i({ className: item.icon }),
                        React.DOM.span(null, item.text)
                    );
                }, this)
            )
        );
    }
});
app.view.context.components = app.view.context.components || {};
app.view.context.components.tagmenu = app.lib.element({
    displayName: 'context.components.tagmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (tag, event) {
        if (this.props.data.onClick) {
            this.props.data.onClick(this.props.data.tag, tag);
        }

        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu' },
                _.map(this.props.data.tags, function (tag, index) {
                    return (
                        app.view.components.tag({
                            key: app.lib.uidmap(tag),
                            tag: app.data.tags.get(tag),
                            onClickTag: this.click.bind(this, tag)
                        })
                    );
                }, this)
            )
        );
    }
});
app.view.context.components = app.view.context.components || {};
app.view.context.components.statusmenu = app.lib.element({
    displayName: 'context.components.statusmenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (status, event) {
        this.props.data.callback(status);
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu statusmenu' },
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'all') },
                    React.DOM.i({ className: 'icon-folder-open' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'All'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Default state for active items (all manipulations aviable)')
                ),
                React.DOM.div({ className: 'statusmenusub', onClick: this.click.bind(this, 'inbox') },
                    React.DOM.div({ className: 'statusmenuitem' },
                        React.DOM.i({ className: 'icon-inbox' }),
                        React.DOM.div({ className: 'statusmenutitle' },
                            'Inbox'
                        ),
                        React.DOM.div({ className: 'statusmenudetails' }, 'State for incomming, new and important items')
                    )
                ),
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'archive') },
                    React.DOM.i({ className: 'icon-archive' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'Archive'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Recommended state for dismissed items (aviable in search and archive view only)')
                ),
                React.DOM.div({ className: 'statusmenuitem', onClick: this.click.bind(this, 'trash') },
                    React.DOM.i({ className: 'icon-trash-alt' }),
                    React.DOM.div({ className: 'statusmenutitle' },
                        'Trash'
                    ),
                    React.DOM.div({ className: 'statusmenudetails' }, 'Items in trash will be deleted in 30 days (aviable only in trash)')
                )
            )
        );
    }
});

/*
React.DOM.div({ className: '' }, '')
*/
app.view.context.components = app.view.context.components || {};
app.view.context.components.colormenu = app.lib.element({
    displayName: 'context.components.colormenu',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {};
    },
    click: function (color, event) {
        this.props.data.callback(color);
        this.props.hide(true);
    },
    render: function () {
        return (
            React.DOM.div({ className: 'contextmenu colormenu' },
                _.map(app.config.colors, function (color, index) {
                    return (
                        React.DOM.i({
                            key:index,
                            'className': 'icon-blank ',
                            onClick: this.click.bind(this, color),
                            style: { color: app.lib.color(color) }
                        })
                    );
                }, this)
            )
        );
    }
});
app.view.content.boards = app.lib.element({
    displayName: 'content.boards',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });

        switch (this.props.navigation.view) {
            case 'list':
            case 'list-search':
                this.collection.on('loaded', this.onDataLoaded, this);
                this.resetDefaults();
                app.lib.newNotes.add(this.model);
                this.loadData();
                break;
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    loadData: function () {
        var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

        var query = _.map(listModel.data('tags'), function (tag) {
            return {
                type: 'branch',
                query: tag
            }
        }).concat(
            _.map(listModel.data('excludeTags'), function (tag) {
                return {
                    type: 'not',
                    query: tag
                }
            })
        );

        query = $.extend(true, [], query.concat(app.navigation.query.all()));

        this.collection.load('notes', 'all', query);
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        switch (this.props.navigation.view) {
            case 'all':
                return app.view.content.component.boards();
            case 'board':
            case 'board-search':
                return app.view.content.component.lists({
                    board: app.navigation.data.board
                });
            case 'list':
            case 'list-search':
                if (!this.state.loaded) return app.view.content.component.loading();

                return app.view.content.component.notes({
                    collection: this.collection,
                    model: this.model,
                    context: 'note',
                    showNew: app.navigation.view === 'list'
                });
        }
    },
    resetDefaults: function () {
        var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

        var data;

        if (listModel.getOptions('addToInbox')) {
            data = {
                _data: {
                    status: 'inbox'
                }
            }
        }

        this.model.setDefaults('note', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;

        if (app.navigation.data.board && app.navigation.data.list) {

            var listModel = app.data.boards.get(app.navigation.data.board).get('lists').get(app.navigation.data.list);

            var query = _.map(listModel.data('tags'), function (tag) {
                return {
                    type: 'branch',
                    query: tag
                }
            });

            if (query && (nav.view === 'list')) {
                return _.map(query, function (queryItem) {
                    return {
                        _id: queryItem.query
                    };
                });
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
});
app.view.content.calendar = app.lib.element({
    displayName: 'content.calendar',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-calendar-number' }),
                'Calendar view'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'View or add notes and trackers in calendar view'),
                React.DOM.div(null, 'Any data with date information can be seen hear')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
app.view.content.insights = app.lib.element({
    displayName: 'content.insights',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-chart-pie-alt-explode' }),
                'Insights'
            ),
            ' coming soon',
            React.DOM.div({className:'details'},
                React.DOM.div(null, 'Get automatic insights based on your notes and trackers'),
                React.DOM.div(null, 'Create graphs and charts for projects, expenses and more...')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
app.view.content.map = app.lib.element({
    displayName: 'content.map',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-map' }),
                'Map view'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'View or add notes and trackers on map'),
                React.DOM.div(null, 'Any data with location information can be seen here')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
app.view.content.notes = app.lib.element({
    displayName: 'content.notes',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('unloaded', this.onDataUnloaded, this);
        this.resetDefaults();
        this.collection.load('notes', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('notes', nextProps.navigation.view, nextProps.navigation.query.all());
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    onDataUnloaded: function () {
        this.setState({
            loaded: false
        });
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        if (!this.state.loaded) {
            return app.view.content.component.loading();
        }

        var nav = this.props.navigation;
        return app.view.content.component.notes({
            collection: this.collection,
            model: this.model,
            context: 'note',
            showNew: nav.view === 'inbox' || nav.view === 'all' || (nav.view === 'trackers' && nav.query.tags().length > 0)
        });
    },
    resetDefaults: function () {
        var data;

        if (this.props.navigation.view === 'inbox') {
            data = {
                _data: {
                    status: 'inbox'
                }
            }
        }

        this.model.setDefaults('note', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;
        if (nav.query) {
            return _.map(nav.query.tags(), function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    }
});
app.view.content.trackers = app.lib.element({
    displayName: 'content.trackers',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: app.navigation.view === 'all' ? 'note' : 'tracker' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.resetDefaults();
        this.collection.load('trackers', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('trackers', nextProps.navigation.view, nextProps.navigation.query.all());
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentDidMount: function () {
        app.events.trigger('context:notes:init', { reload: this.reload });
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        if (!this.state.loaded) return app.view.content.component.loading();

        var nav = this.props.navigation;
        return app.view.content.component.notes({
            collection: this.collection,
            model: this.model,
            context: ((app.navigation.view === 'all' || app.navigation.view === 'search') ? 'note' : 'tracker'),
            showNew: nav.view === 'manage' || (nav.view === 'all' && nav.query.tags().length > 0)
        });
    },
    reload: function () {
        this.collection.load('trackers', this.props.navigation.view, this.props.navigation.query.all());
    },
    resetDefaults: function () {
        if (this.props.navigation.view === 'all') {
            this.model.setDefaults('note', this.getTags());
        }
        else {
            this.model.setDefaults('tracker', this.getTags());
        }
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;
        if (nav.query && (nav.view === 'all' || nav.view === 'manage')) {
            return _.map(nav.query.tags(), function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    }
});
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
app.view.content.tags = app.lib.element({
    displayName: 'content.tags',
    getInitialState: function () {
        return {
            loaded: false
        }
    },
    componentWillMount: function () {
        this.collection = new app.collection.notes([], { context: 'tag' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('unloaded', this.onDataUnloaded, this);
        this.resetDefaults();
        this.collection.load('tags', this.props.navigation.view, this.props.navigation.query.all());
    },
    componentWillReceiveProps: function (nextProps) {
        this.collection.load('tags', nextProps.navigation.view, nextProps.navigation.query.all());
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentDidMount: function () {
        app.events.trigger('context:notes:init', { reload: this.reload });
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resetDefaults();
    },
    onDataUnloaded: function () {
        this.setState({
            loaded: false
        });
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    render: function () {
        if (!this.state.loaded) return app.view.content.component.loading();

        if (this.props.navigation.view === 'graph') {
            return app.view.content.component.graph();
        }
        else {
            var nav = this.props.navigation;
            return app.view.content.component.notes({
                collection: this.collection,
                model: this.model,
                context: 'tag',
                showNew: nav.view === 'all'
            });
        }
    },
    reload: function () {
        this.collection.load('tags', this.props.navigation.view, this.props.navigation.query.all());
    },
    resetDefaults: function () {
        var data;

        this.model.setDefaults('tag', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var nav = this.props.navigation;
        if (nav.query) {
            return _.map(nav.query.tags(), function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    }
});
app.view.content.notfound = app.lib.element({
    displayName: 'content.notes',
    render: function () {
        return app.view.content.component.notfound();
    }
});
app.view.content.logout = app.lib.element({
    displayName: 'content.logout',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-off' }),
                'Logout'
            ),
            ' coming soon'
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
app.view.content.feedback = app.lib.element({
    displayName: 'content.feedback',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.a({ className: 'highlight', href: 'mailto:feedback@beyondpad.com', target: '_blank' },
                React.DOM.i({ className: 'icon-comment' }),
                'feedback@beyondpad.com'
            ),
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'We would appreciate your feedback'),
                React.DOM.div(null,
                    'There are some social love buttons on ',
                    React.DOM.a({ href: 'http://www.beyondpad.com', target: '_blank' }, 'homepage'),
                    ' too. :)'
                )
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
app.view.content.upgrade = app.lib.element({
    displayName: 'content.upgrade',
    componentWillMount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        return React.DOM.div({ className: 'commingsoon' },
            React.DOM.span({ className: 'highlight' },
                React.DOM.i({ className: 'icon-rocket' }),
                'Upgrade to Pro'
            ),
            ' coming soon',
            React.DOM.div({ className: 'details' },
                React.DOM.div(null, 'Support Beyondpad development and new features, plus remove all quotas (there are no quotas at the moment)')
            )
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
    }
});
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
app.view.content.component.choicetags = app.lib.element({
    displayName: 'content.component.choicetags',
    mixins: [],
    componentWillMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.tags,
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.tags.push(tag);
        this.forceUpdate();
    },
    removeTag: function (tag) {
        this.props.tags.splice(this.props.tags.indexOf(tag), 1);
        this.forceUpdate();
    }
});
app.view.content.component.board = app.lib.element({
    displayName: 'content.component.board',
    mixins: [],
    getInitialState: function () {
        return {
            mode: this.props.mode || 'view',
            placeholder: true
        };
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
        $(this.getDOMNode()).data('model', this.props.model);
        this.focus();
    },
    focus: function () {
        if (this.refs.input) {
            this.refs.input.getDOMNode().focus();
            return true;
        }

        return false;
    },

    isEdit: function () {
        return this.state.mode === 'edit';
    },
    edit: function () {
        this.setState({
            mode: 'edit',
            placeholder: false
        });
    },
    remove: function () {
        this.props.model.destroy();
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.save();
        }
    },
    save: function () {
        if (this.props.model.get('name')) {
            if (this.props.model.isNew()) {
                var board = this.props.model.clone();
                this.props.model.collection.unshift(board);
                this.props.model.collection.sort();
                board.save();
                this.props.model.clear();
                this.props.model.set(this.props.model.defaults());
                this.setState({ placeholder: true });
            } else {
                this.props.model.save();
                this.setState({ mode: 'view' });
            }
        }
    },
    updateName: function (event) {
        this.props.model.set('name', event.target.value);
        this.forceUpdate();
    },
    openBoard: function () {
        if (!this.isEdit()) {
            app.router.navigate('boards/' + this.props.model.get('_id'), { trigger: true });
        }
    },
    more: function (event) {
        event.preventDefault();
        event.stopPropagation();

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit board',
            callback: this.edit
        });

        menu.items.push({
            icon: 'icon-trash-alt',
            text: 'Remove board',
            callback: this.remove
        });

        app.events.trigger('contextmenu', event.target, menu);
    },
    removePlaceholder: function () {
        this.setState({ placeholder: false });
    },
    render: function () {
        var lists = this.props.model.get('lists');

        switch (this.state.mode) {
            case 'view': {
                return (
                    React.DOM.div({ className: 'boarditem view', onDoubleClick: this.openBoard },
                        React.DOM.div({ className: 'title' },
                            React.DOM.div({ className: 'value' },
                                this.props.model.get('name')
                            )
                        ),
                        React.DOM.div({ className: 'list' },
                            lists.length > 0 ? (
                                _.map(lists.models, function (listModel, index) {
                                    return React.DOM.div({ key:index, className: 'item' }, listModel.data('name'));
                                })
                            ) : (
                                React.DOM.div({ className: 'item', dangerouslySetInnerHTML: { __html: '&nbsp;' } })
                            )
                        ),
                        React.DOM.div({ className: 'more icon-ellipsis', onClick: this.more, title:'More' })
                    )
                );
            }
            case 'edit': {

                switch (this.state.placeholder) {
                    case true: {
                        return (
                            React.DOM.div({ className: 'boarditem edit placeholder', onClick: this.removePlaceholder },
                                React.DOM.div({ className: 'text' },
                                    '+ New board'
                                )
                            )
                        );
                    }
                    case false: {
                        return (
                            React.DOM.div({ className: 'boarditem edit', onClick: this.openBoard },
                                React.DOM.div({ className: 'title' },
                                    React.DOM.textarea({
                                        rows: 1,
                                        className: 'value',
                                        value: this.props.model.get('name'),
                                        onChange: this.updateName,
                                        placeholder: 'New board name',
                                        ref: 'input',
                                        onKeyDown: this.keyPress
                                    })
                                ),
                                React.DOM.div({ className: 'list' },
                                    lists.length > 0 ? (
                                        _.map(lists.models, function (listModel, index) {
                                            return React.DOM.div({ key: index, className: 'item' }, listModel.data('name'));
                                        })
                                    ) : (
                                        React.DOM.div({ className: 'item', dangerouslySetInnerHTML: { __html: '&nbsp;' } })
                                    )
                                ),
                                React.DOM.div({ className: 'more icon-enter', onClick: this.save, title: 'Save board' })
                            )
                        );
                    }
                }
            }
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.mode !== prevState.mode || this.state.placeholder !== prevState.placeholder) {
            this.focus();
            this.props.onResize();
        }
    }
});
app.view.content.component.boards = app.lib.element({
    displayName: 'content.component.boards',
    componentWillMount: function () {
        this.newBoard = new app.model.board(null, { collection: app.data.boards });

        app.data.boards.on('add remove sort', this.forceUpdate.bind(this, null), this);
        app.events.on('resize:component resize:window resize:content', this.reposition, this);
    },
    reposition: _.debounce(function (element) {
        if (element) {
            var $element = $(element).parents('.note');

            var size = {
                height: $element.outerHeight(),
                width: $element.outerWidth()
            };

            var prev = $element.data('size');
            $element.data('size', size);

            //TODO:fix and optimize reposition
            /*
            if (prev && prev.width === size.width && prev.height === size.height) {
                return;
            }
            */
        } else {
        }

        this.alignDOM();
    }, 50),
    componentWillUnmount: function () {
        app.data.boards.off(null, null, this);
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
        this.initializeDraggable();
    },
    componentDidUpdate: function () {
        this.initializeDraggable();
    },
    changeOrder: function (drag) {
        var order;

        //var items = $.makeArray($('.boarditem', this.getDOMNode()).filter(":visible :not(.placeholder)"));
        var items = _.filter(this.items, function (item) { return !$(item).hasClass('placeholder'); });
        var index = items.indexOf(drag);

        if (items.length > 1) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model') : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model') : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev.get('order') - (dataPrev.get('order') - dataNext.get('order')) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev.get('order') - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext.get('order') + 100000;
                    }
                }
            }

            if (order) {
                $(items[index]).data('model').updatePosition(order);
                this.reposition();
            }
        }
    },
    initializeDraggable: function () {
        $('.boarditem.ui-draggable', this.getDOMNode()).draggable('destroy');
        this.items = $.makeArray($('.boarditem', this.getDOMNode()));
        $('.boarditem.view', this.getDOMNode()).draggable({
            distance: 10,
            delay: 50,
            scroll: true,
            start: function (event, ui) {
                $(event.target).removeClass('animate');
                $(event.target).addClass('drag');
            }.bind(this),
            stop: function (event, ui) {
                $(event.target).removeClass('drag');
                this.alignDOM();
                this.changeOrder(event.target);
            }.bind(this),
            drag: function (event, ui) {
                this.reorderDOM(event.target, {
                    top: ui.position.top + (event.pageY - ui.offset.top),
                    left: ui.position.left + (event.pageX - ui.offset.left)
                });
            }.bind(this)
        });
        this.alignDOM();
    },
    reorderDOM: function (drag, pos, fix) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== drag && !$(item).hasClass('edit')) {
                var bbox = $(item).data('bbox');

                if (bbox.top < pos.top && (bbox.top + Math.min($(drag).outerHeight(), bbox.height) > pos.top) && bbox.left < pos.left && (bbox.left + bbox.width > pos.left)) {

                    var indexDrag = this.items.indexOf(drag);
                    var indexDrop = this.items.indexOf(item);

                    this.items.splice(indexDrag, 1);
                    this.items.splice(this.items.indexOf(item) + (indexDrag > indexDrop ? 0 : 1), 0, drag);

                    this.alignDOM(drag);

                    if (!fix) {
                        this.reorderDOM(drag, pos, true);
                    }

                    break;
                }
            }
        }
    },

    onBoardSizeChange: _.debounce(function (note) {
        this.alignDOM();
    }, 10),

    alignDOM: function (target) {
        if (this.isMounted()) {
            var container = $(this.getDOMNode());
            container.css({ 'width': 'auto' });

            var spacer = 15;
            var itemWidth = 300;
            var containerWidth = container.outerWidth();
            var i;

            var count = Math.floor((containerWidth + spacer) / (itemWidth + spacer)) || 1;
            count = Math.min(count, app.data.account.getOptions('maxColumnCount') || 100);

            var spaces = [];

            container.css({ 'width': count * itemWidth + (count - 1) * spacer });

            for (i = 0; i < count; i++) {
                spaces.push({
                    x: itemWidth * i + spacer * i,
                    y: 0
                });
            }

            var space = spaces[0];
            for (i = 0; i < this.items.length; i++) {

                var $item = $(this.items[i]);

                $item.data('bbox', {
                    top: space.y,
                    left: space.x,
                    width: $item.outerWidth(),
                    height: $item.outerHeight()
                });

                if (!target || this.items[i] !== target) {
                    $(this.items[i]).addClass('animate');
                    $(this.items[i]).css({
                        'position': 'absolute',
                        'top': space.y + 'px',
                        'left': space.x + 'px'
                    });
                }

                space.y += $item.outerHeight() + spacer;
                space = _.reduce(spaces, function (first, space) { return first.y <= space.y ? first : space; }, space);
            }
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'boardoverview' },
                app.view.content.component.board({
                    onResize: this.onBoardSizeChange,
                    model: this.newBoard,
                    mode: 'edit'
                }),
                _.map(app.data.boards.models, function (model) {
                    return app.view.content.component.board({
                        onResize: this.onBoardSizeChange,
                        key: app.lib.uidmap(model.get('_id')),
                        model: model,
                        mode: 'view'
                    });
                }, this)
            )
        );
    }
});
app.view.content.component.graph = app.lib.element({
    displayName: 'content.component.graph',
    render: function () {
        return (
            React.DOM.div({ className: 'graph' })
        );
    },
    componentDidMount: function () {
        var self = this;

        var visibleModels = _.filter(app.data.tags.models, function (tagModel) { return tagModel.isVisible(); });

        var nodes = _.map(visibleModels, function (tag) {
            return {
                data: {
                    id: tag.get('_id'),
                    name: tag.data('tag').name,
                    color: app.lib.color(tag.data('color')),
                    width: tag.data('tag').name.length * 12,
                    height: 25
                }
            };
        });

        var edges = _.map(app.data.tags.getEdges(), function (edge) {
            return {
                data: {
                    source: edge.child,
                    target: edge.parent
                }
            };
        });

        var options = {
            showOverlay: true,
            minZoom: 0.1,
            maxZoom: 2,
            layout: {
                name: 'springy',
                maxSimulationTime: 15000,
                ungrabifyWhileSimulating: false,
                fit: true,
                random: false
            },
            style: cytoscape.stylesheet()
              .selector('node')
                .css({
                    'shape': 'roundrectangle',
                    'content': 'data(name)',
                    'font-family': 'Roboto Slab, serif',
                    'font-size': 14,
                    'text-outline-width': 0,
                    'text-outline-color': '#fff',
                    'text-valign': 'center',
                    'color': '#444',
                    'width': 'data(width)',
                    'height': 'data(height)',
                    'border-width': 0.75,
                    'border-color': '#999',
                    'background-color': 'data(color)'
                })
              .selector(':selected')
                .css({
                    'border-width': 2,
                    'border-color': '#666',
                    'line-color': '#666',
                    'target-arrow-color': '#666',
                })
              .selector('edge')
                .css({
                    'width': 2,
                    'target-arrow-shape': 'triangle'
                }),
            elements: {
                nodes: nodes,
                edges: edges
            },
            ready: function () {
                self.cy = this;
                self.cy.boxSelectionEnabled(false);
            }
        };

        $('.graph').cytoscape(options);
    },
    componentWillUnmount: function () {
        if (this.cy) {
            this.cy.remove('*');
        }
    }
});
app.view.content.component.list = app.lib.element({
    displayName: 'content.component.list',
    getInitialState: function () {
        return {
            mode: this.props.mode,
            loaded: false
        }
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);

        this.collection = new app.collection.notes([], { context: 'note' });
        this.model = new app.model.note(null, { collection: this.collection });
        app.lib.newNotes.add(this.model);
        this.collection.on('loaded', this.onDataLoaded, this);
        this.collection.on('update:model batch:collection', this.props.updateLists);

        this.resetDefaults();

        this.loadData();
    },
    componentWillUnmount: function () {
        app.lib.newNotes.remove(this.model);
        this.collection.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentDidMount: function () {
        if (this.state.mode === 'edit') {
            this.focus();
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (prevState.mode !== this.state.mode && this.state.mode === 'edit') {
            this.focus();
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    isEdit: function () {
        return this.state.mode === 'edit';
    },
    loadData: function () {
        this.collection.load('notes', 'all', this.getListQuery());
    },
    getListQuery: function () {
        var query = _.map(this.props.model.data('tags'), function (tag) {
            return {
                type: 'root',
                query: tag
            }
        }).concat(
            _.map(this.props.model.data('excludeTags'), function (tag) {
                return {
                    type: 'not',
                    query: tag
                }
            })
        );

        return $.extend(true, [], query.concat(app.navigation.query.all()));
    },
    onDataLoaded: function () {
        this.setState({
            loaded: true
        });
    },
    resetDefaults: function () {
        var data;

        if (this.props.model.getOptions('addToInbox')) {
            data = {
                _data: {
                    status: 'inbox'
                }
            }
        }

        this.model.setDefaults('note', this.getTags(), data);
        this.model.reset();
    },
    getTags: function () {
        var query = _.map(this.props.model.data('tags'), function (tag) {
            return {
                type: 'branch',
                query: tag
            }
        });

        if (query.length > 0) {
            return _.map(query, function (queryItem) {
                return {
                    _id: queryItem.query
                };
            });
        } else {
            return null;
        }
    },
    update: function () {
        this.forceUpdate();
    },
    changeName: function (event) {
        this.props.model.data().name = event.target.value;
        this.forceUpdate();
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next('.boardlist');
            event.preventDefault();
        }
    },
    focus: function () {
        $(':focusable:first', this.getDOMNode()).focus();
    },
    save: function () {
        if (!this.props.model.data().name) {
            this.props.model.update({ name: { $set: 'Unnamed' } });
        }

        if (this.props.model.isNew()) {
            var list = this.props.model.clone();
            this.props.add(list)
            this.setState({ mode: 'add' });
            this.props.model.reset();
        } else {
            this.props.save();
            this.toggleMode();
        }
    },
    toggleMode: function () {
        if (this.state.mode == 'add') {
            this.setState({
                mode: 'edit'
            });
        } else {
            if (this.isEdit()) {
                this.setState({
                    mode: 'view',
                    loaded: false
                }, function () {
                    this.resetDefaults();
                    this.loadData()
                }.bind(this));
            } else {
                this.setState({
                    mode: 'edit'
                });
            }
        }
    },
    showMenu: function (event) {
        event.preventDefault();
        event.stopPropagation();

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-ok-big',
            text: 'Select all notes',
            callback: this.selectAllNotes
        });

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit list',
            callback: this.editList
        });

        menu.items.push({
            icon: 'icon-trash-alt',
            text: 'Delete list',
            callback: this.deleteList
        });

        app.events.trigger('contextmenu', event.target, menu, 'bottom');
    },
    deleteList: function () {
        this.props.remove(this.props.model);
    },
    editList: function () {
        this.toggleMode();
    },
    newNote: function () {
        this.refs.notes.addNewNote();
    },
    optionsToggle: function (field, value, component) {
        this.props.model.data().options = this.props.model.data('options') || {};
        var options = this.props.model.data('options');
        if (typeof (options[field]) === 'undefined') {
            var update = {};
            update[field] = { $set: !app.config.defaultListOptions[field] };
            this.props.model.update('options', update);

            component.update(this.props.model.getOptions(field), false);
        } else {
            if (typeof (options[field]) !== 'undefined' && options[field] === app.config.defaultListOptions[field]) {
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
        var checked = isDefault ? app.config.defaultListOptions[field] : options[field];

        return {
            field: field,
            isDefault: isDefault,
            checked: checked,
            text: text,
            callback: this.optionsToggle
        }
    },
    selectAllNotes: function () {
        if (this.refs.notes) {
            this.refs.notes.selectAllNotes();
        }
    },
    render: function () {
        var background = (this.props.index % 2 == 1 ? ' bg light' : ' bg dark');

        var saved = !this.props.model.isNew() ? ' savedlist ' : '';

        switch (this.state.mode) {
            case 'edit':
                return (
                    React.DOM.div({ className: 'boardlist edit ' + saved + background, 'data-index': this.props.index },
                        React.DOM.div({ className: 'head' },
                            React.DOM.textarea({
                                ref: 'input',
                                className: 'value',
                                value: this.props.model.data('name'),
                                onChange: this.changeName,
                                onKeyDown: this.keyPress,
                                rows: 1,
                                placeholder: 'List name'
                            }),
                            React.DOM.div({ className: 'more icon-enter', onClick: this.save, title: 'Save list' })
                        ),
                        React.DOM.div({ className: 'options' },
                            app.view.components.group({ name: 'Tag to include (filter)', labelClassName: background },
                                app.view.content.component.listtags({
                                    model: this.props.model,
                                    events: this.events
                                })
                            ),
                            app.view.components.group({ name: 'Tags to exclude (optional)', labelClassName: background },
                                app.view.content.component.listexcludetags({
                                    model: this.props.model,
                                    events: this.events
                                })
                            ),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('addToInbox', 'Add note to inbox')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('showNewNote', 'Always show new note')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('hideTags', 'Don\'t show filter tags')),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.checkbox(this.getOptionToggleProps('appendOnly', 'Only append / don\'t remove source list tags')),
                            React.DOM.div({ className: 'seperator' }),
                            React.DOM.div({ className: 'seperator' }),
                            app.view.components.button({
                                icon: 'icon-enter',
                                text: 'Save list',
                                onClick: this.save,
                                className: 'right'
                            })
                        )
                    )
                );
            case 'view':
                return (
                    React.DOM.div({ className: 'boardlist view ' + saved + background, 'data-index': this.props.index },
                        React.DOM.div({ className: 'head' },
                            React.DOM.div({ className: 'value', onDoubleClick: this.toggleMode },
                                this.props.model.data('name')
                            ),
                            React.DOM.div({ className: 'newnote icon-plus-alt', onClick: this.newNote, title:'Add new note' }),
                            React.DOM.div({ className: 'more icon-ellipsis', onClick: this.showMenu, title:'More' })
                        ),
                        this.state.loaded ?
                            app.view.content.component.listnotes({
                                ref: 'notes',
                                model: this.model,
                                collection: this.collection,
                                selection: this.props.selection,
                                listModel: this.props.model,
                                lists: this.props.lists
                            }) :
                            app.view.content.component.loading()
                    )
                );
                break;
            case 'add':
                return (
                    React.DOM.div({ className: 'newboardlist', 'data-index': this.props.index },
                        React.DOM.span({ onClick: this.toggleMode }, '+ New list')
                    )
                );
                break;
        }
    }
});
app.view.content.component.listnotes = app.lib.element({
    displayName: 'content.component.listnotes',
    defaults: {
        lazyLoadTimeout: 0, // Set to null to disable lazyLoad (all notes are mounted already pre inflated)
        initialBatchSize: 30,
        lazyBatch: null,
    },
    getInitialState: function () {
        return {
            showNewNote: this.props.listModel.getOptions('showNewNote')
        }
    },
    componentWillMount: function () {
        this.collection = this.props.collection;

        this.collection.on('add', this.onNewNoteAdded, this);
        this.collection.on('remove update batch:collection', this.forceUpdate.bind(this, null), this);
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },

    componentWillReceiveProps: function (nextProps) {
    },

    componentWillUnmount: function () {
        this.collection.off(null, null, this);

        this.lazyLoadDisable();

        var $sortable = $(this.getDOMNode());

        $sortable.sortable('destroy');
        $sortable.removeData();
    },

    componentDidMount: function () {
        var $sortable = $(this.getDOMNode());

        $sortable.sortable({
            appendTo: '.boardlistwrapper',
            containment: ".boardlistwrapper",
            items: '.note.sortable',
            tolerance: 'pointer',
            delay: 50,
            scroll: false,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            connectWith: '.view .body',
            zIndex: 100,
            helper: this.getSortableHelper,
            start: this.onStartSorting,
            update: this.updateNotePosition
        });

        $sortable.data('model', this.props.model);

        this.lazyLoadEnable();
    },

    onNewNoteAdded: function (model) {
        model.newlyAdded = true;
        this.forceUpdate();
    },

    onStartSorting: function (event, ui) {
        app.view.content.component.listnotes._source = this;
    },
    updateNotePosition: function (event, ui) {
        var order;
        var sourceList = ui.sender && ui.sender[0];
        var targetList = $(this.getDOMNode());

        var items = $.makeArray($('.note.sortable', targetList).filter(':visible'));
        var index = items.indexOf(ui.item[0]);

        if (items.length > 1 && index >= 0) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model').data() : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model').data() : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev.note.order - (dataPrev.note.order - dataNext.note.order) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev.note.order - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext.note.order + 100000;
                    }
                }
            }
        }

        var noteTags;
        var noteTagsOnly;

        if (sourceList && targetList) {
            var noteModel = ui.item.data('model');
            noteTags = noteModel.data('tags');

            if (!this.props.listModel.getOptions('appendOnly')) {
                var nonTargetTags = _.reduce(this.props.lists, function (array, list) {
                    if (list !== this.props.listModel) {
                        array.push(list.data('tags'));
                    }
                    return array;
                }, [], this);

                noteTagsOnly = _.pluck(noteTags, '_id');

                nonTargetTags = _.filter(nonTargetTags, function (tags) {
                    return _.intersection(tags, noteTagsOnly).length >= tags.length;
                });

                nonTargetTags = _.flatten(nonTargetTags);

                noteTags = _.filter(noteTags, function (tag) {
                    return !_.contains(nonTargetTags, tag._id);
                });
            }

            var targetListModel = targetList.data('model');

            var targetTags = targetListModel.data('tags');

            noteTags = noteTags.concat(targetTags);

            noteTags = _.uniq(noteTags, function (item) { return item._id });
        }

        if (noteTags || order) {
            if (app.view.content.component.listnotes._source) {
                if (noteTags) {
                    $(ui.item[0]).hide();
                }
                $(app.view.content.component.listnotes._source.getDOMNode()).sortable("cancel");
                app.view.content.component.listnotes._source = null;
            }

            var model = $(items[index]).data('model');

            if (noteTags) {
                var tagsPrev = _.pluck(noteModel.data('tags'), '_id');
                var tagsNext = _.pluck(noteTags, '_id');

                var remove = _.difference(tagsPrev, tagsNext);
                var add = _.difference(tagsNext, tagsPrev);

                _.each(remove, function (tag) {
                    model.deleteTag(tag, 'note', true);
                }, this);

                _.each(add, function (tag) {
                    model.appendTag(tag, 'note', true);
                }, this);
            }

            if (order) {
                model.update('note', { order: { $set: order } }, true);
            }

            // TODO: think of better way to pre update lists
            var json = model.toJSON();
            model.trigger('update:model', json);
            this.collection.trigger('update:model', json);

            model.save('note').done(function () {
                $(ui.item[0]).show();
            });
        }
    },

    getSortableHelper: function (event, element) {
        var helper = element.clone();

        helper.removeAttr('data-reactid');
        helper.find('[data-reactid]').removeAttr('data-reactid');

        return helper;
    },

    lazyLoadEnable: function () {
        if (this.defaults.lazyLoadTimeout !== null) {
            this.lazyNotes = this.lazyNotes || _.sortBy(_.keys(this.refs), function (ref) { return this.refs[ref].props.index; }, this);
            this.lazyBatchSize = this.defaults.initialBatchSize;
            this.lazyLoad();
        }
    },

    lazyLoad: function () {
        if (this.defaults.lazyBatch !== null) {
            // TODO: issue with layzBatch reordering

            if (this.items.length > this.lazyBatchSize) {
                this.lazyBatchSize += this.defaults.lazyBatch;
                this.forceUpdate(function () {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                }.bind(this));
            } else {
                this.lazyLoadTimeout = null;
            }
        } else {
            if (this.lazyNotes && this.lazyNotes.length > 0) {
                var note = this.refs[this.lazyNotes.shift()];
                if (!note.state.inflated) {
                    note.inflate(function () {
                        this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                    }.bind(this));
                } else {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, 0);
                }
            } else {
                this.lazyLoadTimeout = null;
            }
        }
    },

    lazyLoadDisable: function () {
        this.lazyNotes = null;
        app.lib.clearTimeout(this.lazyLoadTimeout);
    },

    addNewNote: function () {
        this.setState({
            showNewNote: !this.state.showNewNote
        });
    },

    onNoteSaved: function () {
        this.setState({
            showNewNote: this.getInitialState().showNewNote
        });
    },

    onNoteResize: function () { },

    selectAllNotes: function () {
        var children = app.lib.getChildren(this);
        _.each(children, function (noteComponent) {
            noteComponent.setSelected(true);
        }.bind(this));
    },

    getTagsToHide: function () {
        if (this.props.listModel.getOptions('hideTags')) {
            return this.props.listModel.data('tags');
        } else {
            return [];
        }
    },

    render: function () {
        return (
            React.DOM.div({ className: 'body scroll' },
                this.state.showNewNote ?
                app.view.note.main({
                    key: 'new',
                    focus: true,
                    view: 'edit',
                    model: this.props.model,
                    className: 'stamp',
                    context: 'note',
                    onSaved: this.onNoteSaved,
                    inflated: true,
                    onResize: this.onNoteResize,
                    selection: this.props.selection
                }) :
                null,
                _.map(this.collection.models, function (model, index) {
                    return app.view.note.main({
                        key: model.key,
                        ref: model.key,
                        view: 'view',
                        model: model,
                        context: 'note',
                        selection: this.props.selection,
                        inflated: model.newlyAdded || this.defaults.lazyLoadTimeout === null || index < this.lazyBatchSize || index < this.defaults.initialBatchSize,
                        onResize: this.onNoteResize,
                        index: index + 1,
                        className: 'sortable',
                        getTagsToHide: this.getTagsToHide
                    });

                    delete model.newlyAdded;
                }, this)
            )
        )
    }
});
app.view.content.component.listtags = app.lib.element({
    displayName: 'content.component.listtags',
    mixins: [app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:tags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.data('tags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.update({
            tags: {
                $push: [tag]
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.data('tags');

        this.props.model.update({
            tags: {
                $splice: [[tags.indexOf(tag), 1]]
            }
        });
    }
});

app.view.content.component.listexcludetags = app.lib.element({
    displayName: 'content.component.listexcludetags',
    mixins: [app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:excludeTags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.data('excludeTags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.update({
            excludeTags: {
                $push: [tag]
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.data('excludeTags');

        this.props.model.update({
            excludeTags: {
                $splice: [[tags.indexOf(tag), 1]]
            }
        });
    }
});
app.view.content.component.lists = app.lib.element({
    displayName: 'content.component.lists',
    componentWillMount: function () {
        this.setModel(this.props.board);

        this.collection = new app.collection.notes(null, { context: 'note' });
        this.collection.req = {
            page: 'none'
        };
        this.collection.on('batch:collection', this.updateLists);

        this.selection = app.lib.selection({
            collection: this.collection,
            selectAll: this.selectAllNotes
        });
    },

    selectAllNotes: function () {
        var lists = _.map(_.keys(this.refs), function (key) { return this.refs[key]; }, this);
        _.each(lists, function (list) {
            list.selectAllNotes();
        });
    },

    componentDidMount: function () {
        $(this.getDOMNode()).sortable({
            containment: "parent",
            items: '.boardlist.savedlist',
            tolerance: 'pointer',
            cursor: 'ew-resize',
            axis: 'x',
            handle: ".head",
            update: this.reorderFinished,
            scroll: true,
            delay: 100,
            forceHelperSize: true,
            forcePlaceholderSize: true
        });

        app.events.trigger('contextbar:initialize', this.selection);
    },
    reorderFinished: function (event, ui) {
        var indexArray = $(this.getDOMNode()).sortable("toArray", { attribute: 'data-index' });
        var orderedItems = _.map(indexArray, function (index) {
            return this.board.get('lists').models[parseInt(index)];
            //return this.props.model.data(this.props.context).items[parseInt(index)];
        }, this);

        orderedItems = orderedItems.concat(_.difference(this.board.get('lists').models, orderedItems));

        $(this.getDOMNode()).sortable("cancel");
        this.board.set('lists', new app.collection.lists(orderedItems));
        //this.props.model.update(this.props.context, { items: { $set: orderedItems } }, true);

        this.board.save();
        this.refresh();
    },
    componentWillUnmount: function () {
        app.events.trigger('contextbar:dispose');
        this.unsetModel();
    },
    componentWillReceiveProps: function (nextProps) {
        this.setModel(nextProps.board);
    },
    setModel: function (id) {
        this.unsetModel();
        this.board = app.data.boards.get(id);
        this.board.on('change', this.refresh, this);
        this.newList = new app.model.list();
    },
    unsetModel: function () {
        if (this.board) {
            this.board.off(null, null, this);
            this.board = null;
        }
    },
    refresh: function () {
        this.forceUpdate();
    },
    add: function (list) {
        this.board.get('lists').push(list)
        this.board.save();
        this.refresh();
    },
    remove: function (list) {
        this.board.get('lists').remove(list)
        this.board.save();
        this.refresh();
    },
    save: function () {
        this.board.save();
        this.refresh();
    },

    updateLists: function (response) {
        if (!response) { return; };

        var responseData = _.isArray(response) ? response : [response];

        var lists = _.map(_.keys(this.refs), function (key) { return this.refs[key]; }, this);
        _.each(lists, function (list) {
            var inContextData = app.dataadapter.local.filter(list.collection.req, responseData);

            var notesUpdate = _.map(inContextData, function (item) { return app.model.note.parse(item); });

            var models = list.collection.add(notesUpdate, { merge: true });
            if (models.length > 0) {
                list.collection.sort();
            }

            _.each(models, function (model) {
                model.trigger('batch:model');
            });

            var notesRemove = _.map(_.difference(_.pluck(responseData,'_id'), _.pluck(inContextData,'_id')), function (id) {
                return list.collection.get(id);
            });

            list.collection.remove(notesRemove);

            list.collection.trigger('batch:collection');
        });
    },

    render: function () {
        return (
            React.DOM.div({
                className: 'boardlistwrapper' + ((this.board.get('lists').models.length + (this.board.get('lists').models.length > 0 ? 0 : 1)) % 2 == 1 ? ' bg light' : ' bg dark')
            },
                _.map(this.board.get('lists').models, function (list, index) {
                    return (
                        app.view.content.component.list({
                            key: app.lib.uidmap(list.get('_id')),
                            ref: index,
                            lists: this.board.get('lists').models,
                            model: list,
                            add: this.add,
                            save: this.save,
                            remove: this.remove,
                            mode: 'view',
                            index: index,
                            selection: this.selection,
                            updateLists: this.updateLists
                        })
                    );
                }, this),
                app.view.content.component.list({
                    key: 'new',
                    model: this.newList,
                    add: this.add,
                    save: this.save,
                    remove: this.remove,
                    mode: this.board.get('lists').models.length > 0 ? 'add' : 'edit',
                    index: this.board.get('lists').models.length
                })
            )
        );
    }
});
app.view.content.component.notes = app.lib.element({
    displayName: 'content.component.notes',
    defaults: {
        lazyLoadTimeout: 0, // Set to null to disable lazyLoad (all notes are mounted already pre inflated)
        initialBatchSize: 30,
        lazyBatch: null,
        noteWidth: 300,
        spacer: 15
    },
    componentWillMount: function () {
        this.collection = this.props.collection;

        this.collection.on('add', this.onNewNoteAdded, this);
        this.collection.on('remove update batch:collection', this.forceUpdate.bind(this, null), this);

        app.events.on('resize:window resize:content', this.forceUpdate.bind(this, null), this);

        this.selection = app.lib.selection({
            collection: this.collection,
            selectAll: this.selectAllNotes
        });

        app.events.trigger('contextbar:initialize', this.selection);
    },

    componentWillUnmount: function () {
        app.events.trigger('contextbar:dispose');

        this.lazyLoadDisable();

        this.collection.off(null, null, this);
        app.events.off(null, null, this);

        $(this.getDOMNode()).off();
        $(this.getDOMNode()).removeData();

        this.items = null;
        this.currentDraggable = null;
    },

    componentDidMount: function () {
        var self = this;

        $(this.getDOMNode()).on('mouseover', '.note.sortable', function () {
            if (self.currentDraggable !== this && !$(self.currentDraggable).hasClass('ui-draggable-dragging')) {
                if (self.currentDraggable) {
                    if ($(self.currentDraggable).hasClass('ui-draggable')) {
                        $(self.currentDraggable).draggable('destroy');
                    }
                    self.currentDraggable = null;
                }

                $(this).draggable({
                    distance: 5,
                    delay: 30,
                    scroll: true,
                    scrollSensitivity: 30,
                    scrollSpeed: 20,
                    start: function (event, ui) {
                        var element = $(event.target);
                        element.data("startingScrollTop", element.parent().parent().scrollTop());
                    }.bind(self),
                    stop: function (event, ui) {
                        self.updateNotePosition(event.target);
                    }.bind(self),
                    drag: function (event, ui) {
                        var element = $(event.target);
                        ui.position.top += element.parent().parent().scrollTop() - parseInt(element.data("startingScrollTop"));

                        self.alignNotesOnDrag(event.target, {
                            top: ui.position.top + (event.pageY - ui.offset.top),
                            left: ui.position.left + (event.pageX - ui.offset.left)
                        });
                    }.bind(self)
                });

                self.currentDraggable = this;
            }
        });
        
        this.componentDidMountOrUpdate();
        this.lazyLoadEnable();
    },

    componentDidUpdate: function () {
        this.componentDidMountOrUpdate();
    },

    componentDidMountOrUpdate: function () {
        this.items = $.makeArray($('.note', this.getDOMNode()));
        this.alignAllNotes();
    },

    selectAllNotes: function () {
        var children = app.lib.getChildren(this);
        _.each(children, function (noteComponent) {
            noteComponent.setSelected(true);
        }.bind(this));
    },

    lazyLoadEnable: function () {
        if (this.defaults.lazyLoadTimeout !== null) {
            this.lazyNotes = this.lazyNotes || _.sortBy(_.keys(this.refs), function (ref) { return this.refs[ref].props.index; }, this);
            this.lazyBatchSize = this.defaults.initialBatchSize;
            this.lazyLoad();
        }
    },

    lazyLoad: function () {
        if (this.defaults.lazyBatch !== null) {
            // TODO: issue with layzBatch reordering

            if (this.items.length > this.lazyBatchSize) {
                this.lazyBatchSize += this.defaults.lazyBatch;
                this.forceUpdate(function () {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                }.bind(this));
            } else {
                this.lazyLoadTimeout = null;
            }
        } else {
            if (this.lazyNotes && this.lazyNotes.length > 0) {
                var note = this.refs[this.lazyNotes.shift()];
                if (note && !note.state.inflated) {
                    note.inflate(function () {
                        this.addNoteToAlignment(note.getDOMNode());
                        this.lazyLoadTimeout = setTimeout(this.lazyLoad, this.defaults.lazyLoadTimeout);
                    }.bind(this));
                } else {
                    this.lazyLoadTimeout = setTimeout(this.lazyLoad, 0);
                }
            } else {
                this.lazyLoadTimeout = null;
            }
        }
    },

    lazyLoadDisable: function () {
        this.lazyNotes = null;
        app.lib.clearTimeout(this.lazyLoadTimeout);
    },

    onNewNoteAdded: function (model) {
        model.newlyAdded = true;
        this.forceUpdate(function () {
            this.alignAllNotes();
        }.bind(this));
    },

    onNoteSizeChange: _.debounce(function (note) {
        this.alignAllNotes();
    }, 10),

    onNoteUnmount: function (note) {
        var $note = $(note.getDOMNode());
        if($note.hasClass('ui-draggable')){
            $note.draggable('destroy');
        }
    },

    alignNotesOnDrag: function (drag, pos, fix) {
        var dragBoxSize = $(drag).data('noteSize');
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== drag && !$(item).hasClass('stamp')) {
                var size = $(item).data('noteSize');
                var position = $(item).data('notePosition');

                if (position.top < pos.top && (position.top + Math.min(dragBoxSize.height, size.height) > pos.top) && position.left < pos.left && (position.left + size.width > pos.left)) {

                    var indexDrag = this.items.indexOf(drag);
                    var indexDrop = this.items.indexOf(item);

                    this.items.splice(indexDrag, 1);
                    this.items.splice(this.items.indexOf(item) + (indexDrag > indexDrop ? 0 : 1), 0, drag);

                    this.alignAllNotes(drag);

                    if (!fix) {
                        this.alignNotesOnDrag(drag, pos, true);
                    }

                    break;
                }
            }
        }
    },

    updateNotePosition: function (drag) {
        var order;
        var items = _.filter(this.items, function (item) { return !$(item).hasClass('stamp'); });
        var index = items.indexOf(drag);

        if (items.length > 1) {
            var dataPrev = index > 0 ? $(items[index - 1]).data('model').data() : null;
            var dataNext = index < items.length - 1 ? $(items[index + 1]).data('model').data() : null;

            if (dataNext && dataPrev) {
                order = Math.round(dataPrev[this.props.context].order - (dataPrev[this.props.context].order - dataNext[this.props.context].order) / 2);
            } else {
                if (dataPrev) {
                    order = dataPrev[this.props.context].order - 100000;
                } else {
                    if (dataNext) {
                        order = dataNext[this.props.context].order + 100000;
                    }
                }
            }

            if (order) {
                $(items[index]).data('model').updatePosition(this.props.context, order);
                this.forceUpdate();
            }
        } else {
            this.forceUpdate();
        }
    },

    clearAlignSpacer: function () {
        var containerWidth = $(this.getDOMNode()).outerWidth();
        var count = Math.floor((containerWidth + this.defaults.spacer) / (this.defaults.noteWidth + this.defaults.spacer)) || 1;
        count = Math.min(count, app.data.account.getOptions('maxColumnCount') || 100);

        this.spaces = [];
        this.spacesActual = [];
        this.spacesRowHeight = {};

        for (var i = 0; i < count; i++) {
            var x = this.defaults.noteWidth * i + this.defaults.spacer * i;
            this.spaces.push({
                x: x,
                y: 0,
                rows:0
            });
            this.spacesActual.push({
                x: x,
                y: 0,
                rows: 0
            });
        }
    },

    addNoteToAlignment: function (element) {
        this.items.push(element);
        this.alignNote(element);
    },

    alignNote: function (element) {
        var masonry = app.data.account.getOptions('noteLayout')==='masonry';

        if (masonry) {
            var space = _.min(this.spaces, function (space) { return space.y; });
        } else {
            var space = _.min(this.spaces, function (space) { return space.rows; });
        }

        var spaceIndex = this.spaces.indexOf(space);

        var $note = $(element);

        var size = $note.data('noteSize');
        var sizeActual = $note.data('noteSizeActual');
        
        if (masonry) {
            var top = this.spacesActual[spaceIndex].y;
        } else {
            var top = this.spacesRowHeight[space.rows] || 0;
        }

        $note.data('notePosition', {
            top: top,
            left: space.x
        });

        $note.css({
            'top': top + 'px',
            'left': space.x + 'px'
        });

        space.rows += 1;
        this.spacesActual[spaceIndex].rows += 1;
        
        //TODO: Cannot read property 'height' of undefined
        if (masonry) {
            space.y += size.height + this.defaults.spacer;
            this.spacesActual[spaceIndex].y += sizeActual.height + this.defaults.spacer;
        } else {
            space.y = top + size.height + this.defaults.spacer;
            this.spacesActual[spaceIndex].y = top + sizeActual.height + this.defaults.spacer;
        }

        this.spacesRowHeight[space.rows] = Math.max(this.spacesRowHeight[space.rows] || 0, this.spacesActual[spaceIndex].y);
    },

    alignAllNotes: function (target) {
        this.clearAlignSpacer();
        for (var i = 0; i < this.items.length; i++) {
            this.alignNote(this.items[i]);
        }
    },

    render: function () {
        return (
            React.DOM.div({ id: 'notesblock' },
                this.props.showNew ?
                    app.view.note.main({
                        focus: true,
                        key: 'new',//this.props.model.key,
                        inflated: true,
                        view: 'edit',
                        model: this.props.model,
                        className: 'stamp',
                        context: this.props.context,
                        selection: this.selection,
                        onResize: this.onNoteSizeChange,
                        onUnmount: this.onNoteUnmount
                    }) :
                    null,
                _.map(this.collection.models, function (model, index) {
                    return app.view.note.main({
                        key: model.key,
                        inflated: model.newlyAdded || this.defaults.lazyLoadTimeout === null || index < this.lazyBatchSize || index < this.defaults.initialBatchSize,
                        ref: model.key,
                        index: index + 1,
                        view: 'view',
                        model: model,
                        className: 'sortable',
                        context: this.props.context,
                        selection: this.selection,
                        force: this.force,
                        onResize: this.onNoteSizeChange,
                        onUnmount: this.onNoteUnmount
                    });

                    delete model.newlyAdded;
                }, this)
            )
        );
    }
});
app.view.content.component.notfound = app.lib.element({
    displayName: 'content.component.notfound',
    render: function () {
        return (
            React.DOM.div(null, 'Not found')
        );
    }
});
app.view.content.component.taglinktags = app.lib.element({
    displayName: 'content.component.taglinktags',
    mixins: [],
    componentWillMount: function () {
        this.props.model.on('update:tags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        var exclude = [];
        exclude = _.flatten(_.map(this.props.account.get('tagLinks').models, function (model) { return model.data('tags'); }))

        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.data('tags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events,
                exclude: exclude
            })
        );
    },
    addTag: function (tag) {
        this.props.model.update({
            tags: {
                $push: [tag]
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.data('tags');

        this.props.model.update({
            tags: {
                $splice: [[tags.indexOf(tag), 1]]
            }
        });
    }
});

app.view.content.component.uploadtags = app.lib.element({
    displayName: 'content.component.uploadtags',
    mixins: [],
    getInitialState: function () {
        return {
            tags:[]
        }
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: 'tags',
                tags: this.state.tags,
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    getTags: function () {
        return this.state.tags;
    },
    addTag: function (tag) {
        this.state.tags.push(tag);
        this.forceUpdate();
    },
    removeTag: function (tag) {
        this.state.tags.splice(this.state.tags.indexOf(tag), 1);
        this.forceUpdate();
    }
});
app.view.content.component.loading = app.lib.element({
    displayName: 'content.component.loading',
    render: function () {
        return (
            React.DOM.div({ className: 'loadingdata' },
                React.DOM.div({ className: 'loadingdatatext' }, 'Loading...')
            )
        );
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.components.button = app.lib.element({
    displayName: 'components.button',
    mixins: [React.addons.PureRenderMixin],
    getDefaultProps: function () {
        return {
            icon: 'icon-flash',
            text: 'Button',
            onClick: null,
            ticker: null
        }
    },
    render: function () {
        if (this.props.hidden) { return null; }

        return (
            React.DOM.div({
                className: 'button' + (this.props.dropdown ? ' drop' : '') + (!this.props.text ? ' textless' : '') + (this.props.ticker !== null ? ' tick' : '') + (this.props.inactive ? ' inactive' : '') + ' ' + this.props.className || '',
                onClick: this.props.inactive ? null : this.props.onClick,
                title: this.props.title || this.props.text
            },
                React.DOM.i({ className: this.props.icon }),
                React.DOM.span(null, this.props.text),
                this.props.dropdown ? React.DOM.i({ className: 'dropicon icon-down-dir' }) : null,
                this.props.ticker !== null ? React.DOM.div({ className: 'ticker' }, this.props.ticker) : null
            )
        );
    }
});
app.view.components.checkbox = app.lib.element({
    displayName: 'components.checkbox',
    getInitialState: function () {
        return {
            checked: this.props.checked,
            isDefault: this.props.isDefault
        };
    },
    getDefaultProps: function () {
        return {
            field: null,
            checked: false,
            isDefault: true,
            text: 'Label',
            callback: null
        }
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function () {
    },
    toggle: function (event) {
        if (this.props.callback) {
            this.props.callback(this.props.field, !this.state.checked, this);
        }
    },
    update: function (checked, isDefault) {
        this.setState({
            checked: checked,
            isDefault: isDefault
        });
    },
    render: function () {
        return (
            React.DOM.div({ className: 'checkboxlable' },
                React.DOM.span({
                    className: this.state.isDefault ? 'default' : '',
                    onClick: this.toggle
                },
                    React.DOM.i({
                        className: window.classnames({
                            'checkbox': true,
                            'icon-blank-empty': !this.state.checked,
                            'icon-ok-blank': this.state.checked
                        })
                    }),
                    React.DOM.span({ className: 'labeltext' },
                        this.props.text
                    )
                )
            )
        );
    }
});
app.view.components.group = app.lib.element({
    displayName: 'components.group',
    mixins: [React.addons.PureRenderMixin],
    getDefaultProps: function () {
        return {
            name: null,
            labelClassName: null
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'optionsitem' },
                this.props.name ? React.DOM.div({ className: 'label ' + (this.props.labelClassName || '') }, this.props.name) : null,
                React.DOM.div({ className: 'element' },
                    this.props.children
                )
            )
        );
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.components.tag = app.lib.element({
    displayName: 'components.tag',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {
            expand: false
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        //return this.props.active !== nextProps.active || this.props.tag.isNew();
        return true;
    },
    render: function () {
        if (!this.props.tag) { return null; }

        var tagClasses = {};

        tagClasses['tagcontent'] = true;
        tagClasses['active'] = this.props.active;
        tagClasses['remove'] = this.props.onRemoveTag;
        tagClasses['noselect'] = this.props.onRemoveTag;

        var hasTagLink = !!app.data.account.tagLinkHash[this.props.tag.get('_id')];

        return (
            React.DOM.div({ className: 'tag' },
                React.DOM.div({
                    className: window.classnames(tagClasses),
                    onMouseOver: this.onMouseOverTag,
                    onClick: this.onClickTag
                },
                    React.DOM.i({
                        className: (this.props.tag.get('_temp') && this.props.tag.get('_temp')._icon) ? this.props.tag.get('_temp')._icon : (this.props.tag.data('tag').icon || (hasTagLink ? 'icon-link-ext-alt' : ((false && this.props.tag.data('tracker')) ? 'icon-spinner' : 'icon-blank'))),
                        style: { color: app.lib.color(this.props.tag.data('color')) }
                    }),
                    React.DOM.span(null, this.props.tag.data('tag').name),
                    (this.props.onRemoveTag ? React.DOM.i({
                        className: 'remove icon-cancel',
                        onClick: this.onRemoveTag
                    }, null) : null)
                )
            )
        );
    },
    onMouseOverTag: function (event) {
        if (this.props.onMouseOverTag) { this.props.onMouseOverTag(event, this.props.tag); }
    },
    onClickTag: function (event) {
        this.setState({
            expand: !this.state.expand
        });

        if (this.props.onClickTag) {
            this.props.onClickTag(event, this.props.tag);
        }

        event.preventDefault();
        event.stopPropagation();
    },
    onRemoveTag: function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.props.onRemoveTag) {
            this.props.onRemoveTag(event, this.props.tag);
        }
    },
    //onReplaceTag: function (newTag, event) {
    //    this.setState({
    //        expand: false
    //    });
    //    if (this.props.onReplaceTag) { this.props.onReplaceTag(event, this.props.tag, newTag); }
    //    this.forceUpdate();
    //},
    componentDidUpdate: function () {
        if (this.props.active) {
            $(this.getDOMNode()).scrollintoview({
                direction: 'y',
                duration: 0
            });
        }
    }
});

app.view.components.tagbox = app.lib.element({
    displayName: 'components.tagbox',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
        this.events.on('add', this.addTag, this);

        $(document).on('mouseup', this.componentDidBlur);
        this.temp = {
            backspacecount: 0,
            timeout: null
        };
        this.resolveTags(this.props.tags);
    },
    componentWillUnmount: function () {
        this.events.off(null, null, this);

        $(document).off('mouseup', this.componentDidBlur);
        app.lib.clearTimeout(this.temp.timeout);
    },
    componentDidBlur: function (event) {
        if (this.state.showLookup) {
            var container = $(this.getDOMNode());
            if (!container.is(event.target) && container.has(event.target).length === 0) {
                app.lib.clearTimeout(this.temp.timeout);
                app.lib.focus.clear();
                this.setState({ showLookup: false });
            }
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.resolveTags(nextProps.tags);
    },
    onResize: function () {
        // This makes tagbox to work as rootparent for resize if needed
    },
    resolveTags: function (tags) {
        tags = _.filter(tags, function (tag) {
            var tagModel = app.data.tags.get(tag);
            return tagModel && tagModel.isVisible();
        });

        var selected = _.map(tags, function (tag) {
            return app.data.tags.get(tag);
        });

        this.setState({
            text: '',
            selected: selected
        });
    },
    getInitialState: function () {
        return {
            showLookup: false,
            text: '',
            selected: []
        };
    },
    focus: function () {
        this.refs.input.getDOMNode().focus();

        this.onFocus();

        return true;
    },
    onFocus: function () {
        app.lib.clearTimeout(this.temp.timeout);

        this.__scroll = this.__scroll || _.debounce(this.scroll, 5);
        this.__scroll();

        this.setState({
            showLookup: true,
        });
    },
    blur: function (event) {
        //$("..").is(":focus")

        var target = event.target;
        this.temp.timeout = setTimeout(function () {
            if (app.lib.isMounted(this) && target !== document.activeElement) {
                //app.lib.focus.clear();
                this.setState({
                    showLookup: false
                });
            }
        }.bind(this), 250);
    },
    textChanged: function (event) {
        this.temp.backspacecount = 0;
        this.setState({
            showLookup: true,
            text: event.target.value
        });
    },
    keyDown: function (event) {
        if (_.contains(['PageUp', 'PageDown', 'ArrowUp', 'ArrowDown'], event.key)) {
            var key = event.key;
            if (!this.state.showLookup) {
                this.setState({ showLookup: true });
            } else {
                this.events.trigger('navigate', key);
            }

            event.preventDefault();
            event.stopPropagation();
        } else {
            switch (event.key) {
                case 'Enter':
                    if (this.state.showLookup) {
                        this.events.trigger('select', 'keyboard');
                    }
                    else {
                        this.setState({ showLookup: true });
                    }
                    event.preventDefault();
                    event.stopPropagation();

                    break;
                case 'Backspace':
                    if (this.state.text.length === 0 && ((++this.temp.backspacecount) > 0 || !this.state.showLookup)) {
                        if (this.state.showLookup) {
                            this.setState({ showLookup: false });
                        }
                        else {
                            //this.props.removeTag(this.props.tags[this.props.tags.length - 1]);
                            this.removeTag();
                        }
                    }

                    break;
                case 'Escape':
                    this.setState({ showLookup: false });
                    break;
            }
        }
    },
    // Remove last visible tag, if tag is invissible skip in and atempt to delete next
    removeTag: function (index) {
        index = (index || this.props.tags.length) - 1;

        if (index >= 0) {
            var tag = this.props.tags[index];
            var model = app.data.tags.get(tag);

            if (model && model.isVisible()) {
                this.props.removeTag(tag);
            } else {
                this.removeTag(index);
            }
        }
    },
    //keyUp: function (event) { },
    addTag: function (item, source) {
        if (item.isNew()) {
            switch (item.get('_temp')._command) {
                case 'add': {
                    var self = this;
                    var newTag = item.clone();
                    newTag.update('tag', { name: { $set: newTag.get('_temp')._name } });
                    newTag.unset('_temp');

                    newTag.save().done(function () {
                        this.addTag(newTag, source);
                    }.bind(this));

                    item.update('color', { $set: app.lib.randomColor() });
                    //item.set('color', app.lib.randomColor());

                    break;
                }
                case 'save': {
                    this.props.events.trigger('save');
                    break;
                }
            }
          
        }
        else {
            this.props.addTag(item.get('_id'));

            if (source === 'keyboard') {
                this.setState({
                    showLookup: false
                });
            } else {
                this.focus();
            }
        }
    },
    getDefaultProps: function () {
        return {
            addTag: null,
            removeTag: null
        }
    },
    render: function () {
        return (
            React.DOM.div({
                className: 'tags',
                onClick: this.clickComponent
            },
                _.map(this.state.selected, function (tag) {
                    return app.view.components.tag({
                        key: app.lib.uidmap(tag.get('_id')),
                        tag: tag,
                        onClickTag: this.props.onClickTag,
                        onRemoveTag: this.onRemoveTag,
                        onReplaceTag: this.props.replaceTag
                    });
                }, this),
                React.DOM.input({
                    ref: 'input',
                    onFocus: this.onFocus,
                    onBlur: this.blur,
                    onChange: this.textChanged,
                    //onClick: this.clickComponent,
                    onKeyDown: this.keyDown,
                    //onKeyUp: this.keyUp,
                    value: this.state.text,
                    placeholder: ' + Add or create tags'
                }),
                app.view.components.taglookup({
                    events: this.events,
                    filter: this.state.text,
                    selected: this.state.selected,
                    show: this.state.showLookup,
                    save: this.props.save,
                    create: true,
                    rootParent: this.props.rootParent,
                    exclude: this.props.exclude
                })
            )
        );
    },
    clickComponent: function (event) {
        this.focus();
        //this.refs.input.getDOMNode().focus();
    },
    onRemoveTag: function (event, tagModel) {
        this.props.removeTag(tagModel.get('_id'));
    },
    componentDidUpdate: function () {
        //app.lib.focus.restore();
    },
    scroll: function () {
        if (this.isMounted()) {
            $(this.getDOMNode()).scrollintoview({
                direction: 'y',
                duration: 100
            });
        }
    }
});
app.view.components.taglookup = app.lib.element({
    displayName: 'components.taglookup',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.events.on('navigate', this.navigate, this);
        this.props.events.on('select', this.select, this);
        app.data.tags.on('sync', this.filter, this);
    },
    componentWillUnmount: function () {
        this.props.events.off(null, null, this);
        app.data.tags.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.show;
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.filter !== this.props.filter || nextProps.selected !== this.props.selected) {
            var filtered = this.filtered(nextProps.filter, nextProps.selected);
            this.setState({
                items: filtered,
                active: nextProps.filter ? filtered[0] : null
            });
        }

        if (nextProps.show !== this.props.show) {
            if (this.state.items.length > 0) {
                this.setState({
                    active: this.state.items[0] || null
                });
            }
        }
    },
    onResize: function () {
        // This makes tagbox to work as rootparent for resize if needed
    },
    getInitialState: function () {
        this.newTag = new app.model.tag();
        this.newTag.setDefaults('tag');
        this.newTag.reset();
        this.newTag.set('_temp', {
            _icon: null,
            _name: null,
            _command: null
        });

        this.doneTag = new app.model.tag();
        this.doneTag.setDefaults('tag');
        this.doneTag.reset();
        this.doneTag.update({ color: { $set: '#666' } });
        this.doneTag.set('_temp', {
            _icon: 'icon-enter',
            _name: null,
            _command: null
        });

        return {
            items: this.filtered(this.props.filter, this.props.selected),
            active: null
        };
    },
    navigate: function (key) {
        var index = this.state.items.indexOf(this.state.active);

        if (key === 'PageUp') index -= 6;
        if (key === 'PageDown') index += 6;
        if (key === 'ArrowUp') index -= 1;
        if (key === 'ArrowDown') index += 1;

        this.setState({
            active: this.state.items[app.lib.validIndex(index, this.state.items)]
        });
    },
    select: function (source) {
        if (this.props.show) {
            if (this.state.active) {
                this.props.events.trigger('add', this.state.active, source);
                this.setState({
                    active: null
                });
            }
            else {
                if (this.state.items.length > 0) {
                    this.setState({
                        active: this.state.items[0]
                    });
                }
            }
        }
    },
    filter: function () {
        this.setState({
            items: this.filtered(this.props.filter, this.props.selected),
        });
    },
    filtered: function (filter, exclude) {
        var result = null;
        var items = app.data.tags.getVisible();
        var exact = false;

        //filter=(filter === null?'':filter);

        if (filter===null) {
            result = items;
        }
        else {
            result = _.filter(items, function (item) {
                exact = item.data('tag').name.toLowerCase()=== filter.toLowerCase() || exact;
                return _.contains(item.data('tag').name.toLowerCase(), filter.toLowerCase()) && !_.contains(this.props.exclude, item.get('_id'));
            }, this);
        }

        if (exclude) {
            result = _.difference(result, exclude);
        }

        if (filter.length > 0 && !exact) {

            this.newTag.update('tag', {
                name: { $set: 'Create tag "' + filter + '"' }
            }, true);
            this.newTag.set('_temp', {
                _name: filter,
                _command: 'add',
                _icon: 'icon-plus-squared'
            });

            result.push(this.newTag);
        }
        else {
            if (this.props.save) {
                if (filter.length === 0) {
                    this.doneTag.update('tag', {
                        name: { $set: 'Save note' }
                    }, true);

                    this.doneTag.set('_temp', {
                        _name: filter,
                        _command: 'save',
                        _icon: 'icon-enter'
                    });

                    result.unshift(this.doneTag);
                }
            }
        }

        return result;
    },
    mouseOverItem: function (event, item) {
        this.setState({ active: item });
    },
    mouseClickItem: function (event, item) {
        this.select('mouse');
    },
    render: function () {
        if (this.props.show && this.state.items.length > 0) {
            return (
                React.DOM.div({ className: 'lookup scroll noselect' },
                    _.map(this.state.items, function (item, index) {
                        var active = (this.state.active && this.state.active.get('_id') === item.get('_id'));
                        return app.view.components.tag({
                            key: item.key,
                            tag: item,
                            active: active,
                            onMouseOverTag: this.mouseOverItem,
                            onClickTag: this.mouseClickItem
                        });
                    }, this)
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});
app.view.sidepane.boards = app.lib.element({
    displayName: 'sidepane.boards',
    getDefaultProps: function () {
        return {
            showSearch: true
        }
    },
    getInitialState: function () {
        return {
            filter: null,
            isSearch: false
        }
    },
    componentWillMount: function () {
        app.data.boards.on('add remove change sync', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUpdate: function () {
        app.data.boards.sort();
    },

    componentWillUnmount: function () {
        app.data.boards.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.restoreSearch();
    },

    //get text query from url and set as current filter state
    restoreSearch: function () {
        if (app.navigation.query.text().length > 0) {
            this.setState({
                filter: _.pluck(app.navigation.query.text(), 'query').join(' '),
                isSearch: app.navigation.query.text().length > 0
            });
        } else {
            if (this.state.isSearch) {
                this.setState({
                    filter: null,
                    isSearch: false
                });
            }
        }
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                if (app.navigation.data.board && app.navigation.data.list) {
                    app.router.navigate('boards/' + app.navigation.data.board + '/' + app.navigation.data.list, { trigger: true, replace: true });
                } else {
                    if (app.navigation.data.board) {
                        app.router.navigate('boards/' + app.navigation.data.board, { trigger: true, replace: true });
                    }
                }
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            if (app.navigation.data.board && app.navigation.data.list) {
                app.router.navigate('boards/' + app.navigation.data.board + '/' + app.navigation.data.list + '/all/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
            } else {
                if (app.navigation.data.board) {
                    app.router.navigate('boards/' + app.navigation.data.board + '/all/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
                }
            }
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    showAllBoards: function () {
        app.router.navigate('boards', { trigger: true });
    },
    showBoard: function (_board) {
        app.router.navigate('boards/' + _board, { trigger: true });
    },
    showList: function (_board, _list) {
        app.router.navigate('boards/' + _board + '/' + _list, { trigger: true });
    },
    render: function () {
        var boardsFiltered;

        if (this.getFilter()) {
            boardsFiltered = _.filter(app.data.boards.models, function (board) {
                var boardMatch = app.lib.searchText(board.get('name'), this.getFilter());
                var listMatch = !!_.find(board.get('lists').models, function (list) {
                    return app.lib.searchText(list.data('name'), this.getFilter());
                }, this);
                return boardMatch || listMatch;
            }, this)
        } else {
            boardsFiltered = app.data.boards.models;
        }

        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item({
                        text: 'Boards',
                        icon: 'icon-folder-open',
                        expanded: true,
                        click: this.showAllBoards,
                        selected: app.navigation.page === 'boards'
                    },
                        _.map(boardsFiltered, function (board) {
                            return app.view.sidepane.component.item({
                                key: app.lib.uidmap(board.get('_id')),
                                text: board.get('name'),
                                icon: 'icon-books',
                                expanded: true,
                                click: this.showBoard.bind(this, board.get('_id')),
                                selected: app.navigation.data.board === board.get('_id')
                            },
                                _.map(board.get('lists').models, function (list) {
                                    if (!this.getFilter() || app.lib.searchText(list.data('name'), this.getFilter())) {

                                        //TODO: save color to list itself
                                        var color = (function () {
                                            var tags = list.data('tags');

                                            if (tags.length > 0) {
                                                var tag = app.data.tags.get(tags[tags.length - 1]);
                                                if (tag) {
                                                    return app.lib.color(tag.data('color'));
                                                }
                                            }

                                            return null;
                                        })();

                                        return app.view.sidepane.component.item({
                                            key: app.lib.uidmap(list.get('_id')),
                                            text: list.data('name'),
                                            icon: 'icon-bookmark',
                                            color: color,
                                            click: this.showList.bind(this, board.get('_id'), list.get('_id')),
                                            selected: app.navigation.data.list === list.get('_id')
                                        });
                                    }
                                }, this)
                            );
                        }, this)
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter lists | Search'
                }) : null
            )
        );
    }
});
app.view.sidepane.calendar = app.lib.element({
    displayName: 'sidepane.calendar',
    itemOptions: function (options) {
        options.click = this.itemClick.bind(this, options.view);
        options.selected = (options.view === this.props.navigation.view);
        return options;
    },
    itemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true });
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item(this.itemOptions({ text: 'Notes', icon: 'icon-folder', expanded: true, view:'all' }), app.view.sidepane.component.tags({ tree: app.data.tags.reduceTree(app.data.tags.getTree()) })),
                app.view.sidepane.component.item({ text: 'More', icon: 'icon-braille', expanded: true },
                    app.view.sidepane.component.item(this.itemOptions({ text: 'Bin', icon: 'icon-trash-alt', view: 'bin' }))
                )
            )
        );
    }
});
app.view.sidepane.insights = app.lib.element({
    displayName: 'sidepane.insights',
    itemOptions: function (options) {
        options.click = this.itemClick.bind(this, options.view);
        options.selected = (options.view === this.props.navigation.view);
        return options;
    },
    itemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true });
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item(this.itemOptions({ text: 'Notes', icon: 'icon-folder', expanded: true, view: 'all' }), app.view.sidepane.component.tags({ tree: app.data.tags.reduceTree(app.data.tags.getTree()) })),
                app.view.sidepane.component.item({ text: 'More', icon: 'icon-braille', expanded: true },
                    app.view.sidepane.component.item(this.itemOptions({ text: 'Bin', icon: 'icon-trash-alt', view: 'bin' }))
                )
            )
        );
    }
});
app.view.sidepane.map = app.lib.element({
    displayName: 'sidepane.map',
    itemOptions: function (options) {
        options.click = this.itemClick.bind(this, options.view);
        options.selected = (options.view === this.props.navigation.view);
        return options;
    },
    itemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true });
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item(this.itemOptions({ text: 'Notes', icon: 'icon-folder', expanded: true, view: 'all' }), app.view.sidepane.component.tags({ tree: app.data.tags.reduceTree(app.data.tags.getTree()) })),
                app.view.sidepane.component.item({ text: 'More', icon: 'icon-braille', expanded: true },
                    app.view.sidepane.component.item(this.itemOptions({ text: 'Bin', icon: 'icon-trash-alt', view: 'bin' }))
                )
            )
        );
    }
});
app.view.sidepane.notes = app.lib.element({
    displayName: 'sidepane.notes',
    getDefaultProps: function () {
        return {
            showSearch: true
        }
    },
    getInitialState: function () {
        return {
            filter: null,
            isSearch: false
        }
    },
    componentWillMount: function () {
        app.data.tags.on('add remove change sync', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.restoreSearch();
    },

    //get text query from url and set as current filter state
    restoreSearch: function () {
        if (app.navigation.query.text().length > 0) {
            this.setState({
                filter: _.pluck(app.navigation.query.text(), 'query').join(' '),
                isSearch: app.navigation.query.text().length > 0
            });
        } else {
            if (this.state.isSearch) {
                this.setState({
                    filter: null,
                    isSearch: false
                });
            }
        }
    },
    //adds extra props to properties passed to "app.view.sidepane.component.item"
    extendItemOptions: function (options) {
        options.click = this.onItemClick.bind(this, options.view);
        options.selected = (options.view === app.navigation.view || (app.navigation.query && options.view === app.navigation.view + '/' + app.navigation.query.raw()));
        return options;
    },
    //change rout when item is clicked
    onItemClick: function (view, event) {
        app.router.navigate('notes/' + view, { trigger: true, replace: true });
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                app.router.navigate('notes/inbox', { trigger: true, replace: true });
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            app.router.navigate('notes/search/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    render: function () {
        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Inbox', icon: 'icon-inbox', view: 'inbox' })),
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trackables', icon: 'icon-spinner', expanded: true, view: 'trackers' }),
                        app.view.sidepane.component.trackers({
                            root: 'notes/trackers',
                            active: ('trackers' === app.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'All notes', icon: 'icon-folder-open', expanded: true, view: 'all' }),
                        app.view.sidepane.component.tags({
                            tree: app.data.tags.reduceTree(app.data.tags.getTree()),
                            active: ('all' === app.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item({ text: 'More', icon: 'icon-folder', expanded: true },
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Untagged', icon: 'icon-tags', view: 'untagged' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Archive', icon: 'icon-archive', view: 'archive' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trash', icon: 'icon-trash-alt', view: 'trash' }))
                    ),
                    app.view.sidepane.component.item({ text: 'Filters', icon: 'icon-filter', expanded: false },
                        app.view.sidepane.component.item({ text: 'Type', icon: 'icon-folder', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Text block', icon: 'icon-font', view: 'all/type:text' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Check list', icon: 'icon-check', view: 'all/type:list' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Link & image', icon: 'icon-link', view: 'all/type:link' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Numeric', icon: 'icon-sort-numeric', view: 'all/type:numeric' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Stopwatch', icon: 'icon-stopwatch', view: 'all/type:stopwatch' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Countdown', icon: 'icon-hourglass', view: 'all/type:countdown' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Choice', icon: 'icon-list-bullet', view: 'all/type:choice' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Group', icon: 'icon-marquee', view: 'all/type:group' }))
                        ),
                        app.view.sidepane.component.item({ text: 'Color', icon: 'icon-art-gallery', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Red', icon: 'icon-blank', view: 'all/color:red', color: app.config.colors.map['red'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Orange', icon: 'icon-blank', view: 'all/color:orange', color: app.config.colors.map['orange'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Yellow', icon: 'icon-blank', view: 'all/color:yellow', color: app.config.colors.map['yellow'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Green', icon: 'icon-blank', view: 'all/color:green', color: app.config.colors.map['green'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Cyan', icon: 'icon-blank', view: 'all/color:cyan', color:app.config.colors.map['cyan'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Blue', icon: 'icon-blank', view: 'all/color:blue', color:app.config.colors.map['blue'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Lilac', icon: 'icon-blank', view: 'all/color:lilac', color:app.config.colors.map['lilac'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Grey', icon: 'icon-blank', view: 'all/color:grey', color:app.config.colors.map['grey'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'White', icon: 'icon-blank', view: 'all/color:white', color:app.config.colors.map['white'] }))
                        )
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter tags | Search'
                }) : null
            )
        );
    }
});
app.view.sidepane.notfound = app.lib.element({
    displayName: 'sidepane.notfound',
    render: function () {
        return (
            React.DOM.div(null, 'Not found')
        );
    }
});
app.view.sidepane.tags = app.lib.element({
    displayName: 'sidepane.tags',
    getDefaultProps: function () {
        return {
            showSearch: true
        }
    },
    getInitialState: function () {
        return {
            filter: null,
            isSearch: false
        }
    },
    componentWillMount: function () {
        app.data.tags.on('add remove change sync', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.restoreSearch();
    },

    //get text query from url and set as current filter state
    restoreSearch: function () {
        if (app.navigation.query.text().length > 0) {
            this.setState({
                filter: _.pluck(app.navigation.query.text(), 'query').join(' '),
                isSearch: app.navigation.query.text().length > 0
            });
        } else {
            if (this.state.isSearch) {
                this.setState({
                    filter: null,
                    isSearch: false
                });
            }
        }
    },
    //adds extra props to properties passed to "app.view.sidepane.component.item"
    extendItemOptions: function (options) {
        options.click = this.onItemClick.bind(this, options.view);
        //options.selected = (options.view === this.props.navigation.view);
        options.selected = (options.view === app.navigation.view || (app.navigation.query && options.view === app.navigation.view + '/' + app.navigation.query.raw()));
        return options;
    },
    //change rout when item is clicked
    onItemClick: function (view, event) {
        app.router.navigate('tags/' + view, { trigger: true, replace: true });
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                app.router.navigate('tags/all', { trigger: true, replace: true });
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            app.router.navigate('tags/search/name:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    render: function () {
        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'All tags', icon: 'icon-tags', expanded: true, view: 'all' }),
                        app.view.sidepane.component.tags({
                            tree: app.data.tags.reduceTree(app.data.tags.getTree()),
                            active: ('all' === this.props.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item({ text: 'More', icon: 'icon-folder', expanded: true },
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Graph', icon: 'icon-graph', view: 'graph' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Untagged', icon: 'icon-tags', view: 'untagged' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Archive', icon: 'icon-archive', view: 'archive' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trash', icon: 'icon-trash-alt', view: 'trash' }))
                    ),
                    app.view.sidepane.component.item({ text: 'Filters', icon: 'icon-filter', expanded: false },
                        app.view.sidepane.component.item({ text: 'Type', icon: 'icon-folder', expanded: false },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Text block', icon: 'icon-font', view: 'all/type:text' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Check list', icon: 'icon-check', view: 'all/type:list' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Link & image', icon: 'icon-link', view: 'all/type:link' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Numeric', icon: 'icon-sort-numeric', view: 'all/type:numeric' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Stopwatch', icon: 'icon-stopwatch', view: 'all/type:stopwatch' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Countdown', icon: 'icon-hourglass', view: 'all/type:countdown' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Choice', icon: 'icon-list-bullet', view: 'all/type:choice' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Group', icon: 'icon-marquee', view: 'all/type:group' }))
                        ),
                        app.view.sidepane.component.item({ text: 'Color', icon: 'icon-art-gallery', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Red', icon: 'icon-blank', view: 'all/color:red', color: app.config.colors.map['red'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Orange', icon: 'icon-blank', view: 'all/color:orange', color: app.config.colors.map['orange'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Yellow', icon: 'icon-blank', view: 'all/color:yellow', color: app.config.colors.map['yellow'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Green', icon: 'icon-blank', view: 'all/color:green', color: app.config.colors.map['green'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Cyan', icon: 'icon-blank', view: 'all/color:cyan', color: app.config.colors.map['cyan'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Blue', icon: 'icon-blank', view: 'all/color:blue', color: app.config.colors.map['blue'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Lilac', icon: 'icon-blank', view: 'all/color:lilac', color: app.config.colors.map['lilac'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Grey', icon: 'icon-blank', view: 'all/color:grey', color: app.config.colors.map['grey'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'White', icon: 'icon-blank', view: 'all/color:white', color: app.config.colors.map['white'] }))
                        )
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter tags | Search'
                }) : null
            )
        );
    }
});
app.view.sidepane.trackers = app.lib.element({
    displayName: 'sidepane.trackers',
    getDefaultProps: function () {
        return {
            showSearch: true
        }
    },
    getInitialState: function () {
        return {
            filter: null,
            isSearch: false
        }
    },
    componentWillMount: function () {
        app.data.tags.on('add remove change sync update:model', this.forceUpdate.bind(this, null), this);
        this.restoreSearch();
    },
    componentWillUnmount: function () {
        app.data.tags.off(null, null, this);
    },
    componentWillReceiveProps: function (nextProps) {
        this.restoreSearch();
    },

    //get text query from url and set as current filter state
    restoreSearch: function () {
        if (app.navigation.query.text().length > 0) {
            this.setState({
                filter: _.pluck(app.navigation.query.text(), 'query').join(' '),
                isSearch: app.navigation.query.text().length > 0
            });
        } else {
            if (this.state.isSearch) {
                this.setState({
                    filter: null,
                    isSearch: false
                });
            }
        }
    },
    //adds extra props to properties passed to "app.view.sidepane.component.item"
    extendItemOptions: function (options) {
        options.click = this.onItemClick.bind(this, options.view);
        //options.selected = (options.view === this.props.navigation.view);
        options.selected = (options.view === app.navigation.view || (app.navigation.query && options.view === app.navigation.view + '/' + app.navigation.query.raw()));
        return options;
    },
    //change rout when item is clicked
    onItemClick: function (view, event) {
        app.router.navigate('trackers/' + view, { trigger: true, replace: true });
    },

    onSearchChanged: function (filter) {
        if (filter === null) {
            this.setState({
                filter: filter
            });
            if (app.navigation.query.text().length > 0) {
                app.router.navigate('trackers/all', { trigger: true, replace: true });
            }
        } else {
            this.setState({
                filter: filter
            });
        }
    },
    onSearchSubmit: function () {
        if (this.state.filter) {
            app.router.navigate('trackers/search/text:' + encodeURIComponent(this.state.filter), { trigger: true, replace: true });
        }
    },
    getFilter: function () {
        return app.navigation.query.text().length === 0 ? this.state.filter : null;
    },

    render: function () {
        return (
            React.DOM.div({ className: window.classnames({ 'sidepane': true, 'showsearch': this.props.showSearch }) },
                React.DOM.div({ className: 'sidepanecontent scroll noselect' },
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Manage trackers', icon: 'icon-edit', view: 'manage' })),
                    app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trackables', icon: 'icon-spinner', expanded: true, view: 'all' }),
                        app.view.sidepane.component.trackers({
                            root: 'trackers',
                            active: ('all' === this.props.navigation.view),
                            filter: this.getFilter()
                        })
                    ),
                    app.view.sidepane.component.item({ text: 'More', icon: 'icon-folder', expanded: true },
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Untagged', icon: 'icon-tags', view: 'untagged' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Archive', icon: 'icon-archive', view: 'archive' })),
                        app.view.sidepane.component.item(this.extendItemOptions({ text: 'Trash', icon: 'icon-trash-alt', view: 'trash' }))
                    ),
                    app.view.sidepane.component.item({ text: 'Filters', icon: 'icon-filter', expanded: false },
                        app.view.sidepane.component.item({ text: 'Type', icon: 'icon-folder', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Text block', icon: 'icon-font', view: 'all/type:text' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Check list', icon: 'icon-check', view: 'all/type:list' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Link & image', icon: 'icon-link', view: 'all/type:link' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Numeric', icon: 'icon-sort-numeric', view: 'all/type:numeric' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Stopwatch', icon: 'icon-stopwatch', view: 'all/type:stopwatch' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Countdown', icon: 'icon-hourglass', view: 'all/type:countdown' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Choice', icon: 'icon-list-bullet', view: 'all/type:choice' })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Group', icon: 'icon-marquee', view: 'all/type:group' }))
                        ),
                        app.view.sidepane.component.item({ text: 'Color', icon: 'icon-art-gallery', expanded: true },
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Red', icon: 'icon-blank', view: 'all/color:red', color: app.config.colors.map['red'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Orange', icon: 'icon-blank', view: 'all/color:orange', color: app.config.colors.map['orange'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Yellow', icon: 'icon-blank', view: 'all/color:yellow', color: app.config.colors.map['yellow'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Green', icon: 'icon-blank', view: 'all/color:green', color: app.config.colors.map['green'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Cyan', icon: 'icon-blank', view: 'all/color:cyan', color: app.config.colors.map['cyan'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Blue', icon: 'icon-blank', view: 'all/color:blue', color: app.config.colors.map['blue'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Lilac', icon: 'icon-blank', view: 'all/color:lilac', color: app.config.colors.map['lilac'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'Grey', icon: 'icon-blank', view: 'all/color:grey', color: app.config.colors.map['grey'] })),
                            app.view.sidepane.component.item(this.extendItemOptions({ text: 'White', icon: 'icon-blank', view: 'all/color:white', color: app.config.colors.map['white'] }))
                        )
                    )
                ),
                this.props.showSearch ? app.view.sidepane.search({
                    filter: this.state.filter,
                    onChange: this.onSearchChanged,
                    onEnter: this.onSearchSubmit,
                    isSearch: this.state.isSearch,
                    placeholder: 'Filter track. | Search'
                }) : null
            )
        );
    }
});
app.view.sidepane.search = app.lib.element({
    displayName: 'sidepane.search',
    getDefaultProps: function () {
        return {
            filter: null,
            onChange: null,
            onEnter: null,
            isSearch: false
        }
    },
    onChange: function (event) {
        if (this.props.onChange) {
            if (event.target.value === '') {
                this.clear();
            } else {
                this.props.onChange(event.target.value);
            }
        }
    },
    onKeyDown: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    },
    onKeyUp: function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (this.props.onEnter) {
                this.props.onEnter()
            }
        }
    },
    clear: function () {
        if (this.props.onChange) {
            this.props.onChange(null);
        }
    },
    render: function () {
        return (
            React.DOM.div({ className: 'searchcontainer' },
                React.DOM.div({ className: 'searchbox' },
                    React.DOM.div({ className: 'searchcontrol' + (this.props.isSearch ? ' isnotesearch' : '') },
                        React.DOM.textarea({
                            rows: '1',
                            placeholder: this.props.placeholder || 'Filter | Search',
                            className: 'searchinput',
                            onChange: this.onChange,
                            onKeyUp: this.onKeyUp,
                            onKeyDown: this.onKeyDown,
                            value: this.props.filter || ''
                        }),
                        React.DOM.i({ className: 'icon-search submitsearch' }),
                        (this.props.filter ? React.DOM.i({ className: 'icon-cancel clearsearch', onClick: this.clear }) : null)
                    )
                )
            )
        );
    }
});
app.view.sidepane.component.checkitem = app.lib.element({
    displayName: 'sidepane.component.checkitem',
    getInitialState: function () {
        return {
            expanded: this.props.expanded
        };
    },
    toggle: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },
    componentWillReceiveProps: function (nextProps) {
        if ((nextProps.expanded !== this.state.expanded) || (nextProps.forceExpanded !== this.props.forceExpanded)) {
            this.setState({
                expanded: nextProps.expanded || (nextProps.forceExpanded ? false : this.state.expanded)
            });
        }
    },
    checkComp: function () {
        if (this.props.checked === true) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-ok-squared',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-ok-blank',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }

        if (this.props.checked === false) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-blank',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-blank-empty',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }

        if (true) {
            return (
                React.DOM.span({ className: 'handle' },
                    React.DOM.i({
                        className: 'blank icon-minus-squared',
                        style: { color: this.props.color }
                    }),
                    React.DOM.i({
                        className: 'toggle icon-blank-empty',
                        style: { color: this.props.color },
                        onClick: this.props.toggle
                    })
                )
            );
        }
    },
    render: function () {
        var hasContent = !!this.props.children;

        if (!this.props.visible) {
            return null;
        }

        return (
            React.DOM.div({ className: 'paneitemwrapper' },
                React.DOM.i({
                    className: 'expander' + (this.state.expanded ? ' icon-down-dir' : ' icon-right-dir') + (hasContent ? '' : ' space'),
                    onClick: this.toggle
                }),
                    React.DOM.div(
                    {
                        className: "paneitem check" + (this.props.selected ? ' selected' : '') + (this.props.inactive ? ' inactive' : ''),
                        onDoubleClick: this.toggle,
                        onClick: this.props.click,
                        title: this.props.text
                    },
                    this.checkComp(),
                    this.props.text
                ),
                this.state.expanded ? React.DOM.div({ className: 'subpane' },
                    this.props.children
                ) : null
            )
        );
    }
});
app.view.sidepane.component.item = app.lib.element({
    displayName: 'sidepane.component.item',
    getInitialState: function () {
        return {
            expanded: !!this.props.expanded
        };
    },
    toggle: function () {
        this.setState({
            expanded: !this.state.expanded
        });
    },
    render: function () {
        var hasContent = !!this.props.children;
        return (
            React.DOM.div({ className: 'paneitemwrapper' },
                React.DOM.i({
                    className: 'expander' + (this.state.expanded ? ' icon-down-dir' : ' icon-right-dir') + (hasContent ? '' : ' space'),
                    onClick: this.toggle
                }),
                React.DOM.div({
                    className: "paneitem" + (this.props.selected ? ' selected' : ''),
                    onDoubleClick: this.toggle,
                    onClick: this.props.click,
                    title: this.props.text
                }, React.DOM.i({
                    className: this.props.icon,
                    style: { color: this.props.color }
                }), this.props.text),
                this.state.expanded ? React.DOM.div({ className: 'subpane' },
                    this.props.children
                ) : null
            )
        );
    }
});
app.view.sidepane.component.tags = app.lib.element({
    displayName: 'sidepane.component.tags',
    mixins: [app.lib.mixins.rootParent],
    getDefaultProps: function () {
        return {
            filter: null,
            tree: [],
            active: false, // active is to refresh expander when tags are selected
            rootParent: null // to get rootParent of recursively nested components
        }
    },
    getInitialState: function () {
        if (this.isRootParent()) {
            return {
                hasChecked: false,
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            }
        } else {
            return {
                parents: null,
                tags: {
                    visible: null,
                    filtered: null
                }
            };
        }
    },
    componentWillMount: function () {
        this.refreshExpander(this.props, true);
    },
    componentDidMount: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentDidUpdate: function () {
        this.rootParent().expandedTagHash = _.clone(this.rootParent()._expandedTagHash);
        this.rootParent().skipUpdate = false;
    },
    componentWillReceiveProps: function (nextProps) {
        if (this.isRootParent()) {
            this.rootParent().forceExpander = (this.props.filter !== nextProps.filter) && nextProps.filter;

            //if (true) { // refresh expanders always
            if (!this.rootParent().skipUpdate || this.props.filter !== nextProps.filter) { // refresh expanders only on navigate
                if (nextProps.filter) {
                    this.refreshExpanderFilter(nextProps);
                } else {
                    this.refreshExpander(nextProps, this.props.filter !== nextProps.filter);
                }
            } else {
                this.expandedTagHash = {};
                this._expandedTagHash = {};
            }
        }
    },
    hasChecked: function () {
        return this.state.hasChecked || (app.navigation.query && app.navigation.query.tags().length > 1);
    },
    onClick: function (_id, event) {
        this.rootParent().skipUpdate = true;

        this.rootParent().setState({
            hasChecked: false
        });
        app.router.navigate(app.navigation.page + '/' + 'all' + '/' + 'branch:' + _id, { trigger: true, replace: true });
    },
    onCheck: function (_id, event) {
        if (this.isRootParent()) {

            this.rootParent().skipUpdate = true;

            event.preventDefault();
            event.stopPropagation();

            if (!this.hasChecked()) {
                this.setState({ hasChecked: true }, function () {
                });
                app.router.navigate(app.navigation.page + '/' + 'all' + '/' + 'branch:' + _id, { trigger: true, replace: true });
            } else {
                var deselectTag = _.find(app.navigation.query.tags(), function (queryItem) {
                    return queryItem.query === _id;
                });

                if (deselectTag) {
                    if (app.navigation.query.tags().length > 1) {
                        app.navigation.query.all().splice(app.navigation.query.all().indexOf(deselectTag), 1);
                    } else {
                        this.setState({ hasChecked: false });
                        return;
                    }
                } else {
                    app.navigation.query.all().push({
                        type: 'branch',
                        query: _id
                    });
                }

                var query = _.reduce(app.navigation.query.tags(), function (memo, item) {
                    return memo + '&' + item.type + ':' + item.query
                }, '').slice(1);

                app.router.navigate(app.navigation.page + '/' + 'all' + '/' + query, { trigger: true, replace: true });
            }
        } else {
            return this.rootParent().onCheck(_id, event);
        }
    },
    refreshExpander: function (props, force) {
        if (this.isRootParent() && (props.active || force)) { // active is to refresh expander when tags are selected
            this.expandedTagHash = app.data.tags.getParents(_.map(app.navigation.query.tags(), function (item) { return item.query }));
            this._expandedTagHash = _.clone(this.expandedTagHash);
            this.setState({
                tags: {
                    visible: null,
                    filtered: null
                }
            });
        }
    },
    //TODO: add debounce, but in complience with "trackers component" to be streamilned
    refreshExpanderFilter: function (props) {
        if (this.isRootParent() && props.filter) {
            var filter = props.filter.toLowerCase();

            var filteredTags = _.filter(app.data.tags.models, function (tag) {
                return app.lib.searchText(tag.data('tag').name.toLowerCase(), filter);

                //var words = _.words(tag.data('tag').name.toLowerCase());

                //return !!_.find(words, function (word) {
                //    return _.startsWith(word, filter);
                //});
            }, this);

            var filteredIds = _.map(filteredTags, function (item) { return item.get('_id') });

            this.expandedTagHash = app.data.tags.getParents(filteredIds);
            this._expandedTagHash = _.clone(this.expandedTagHash);

            var parentsIds = _.keys(this.expandedTagHash);

            var mergedTags = [].concat(filteredIds, parentsIds);

            this.setState({
                tags: {
                    visible: _.object(mergedTags, mergedTags),
                    filtered: filteredIds
                }
            });
        }
    },
    isExpanded: function (id) {
        if (this.isRootParent()) {
            if (this.expandedTagHash) {
                if (this.expandedTagHash[id]) {
                    // agains recursion
                    this.expandedTagHash[id] = false;
                    return true;
                } else {
                    if (typeof (this.expandedTagHash[id]) === 'undefined' && app.data.tags.get(id).getOptions('autoExpand')) {
                        this.expandedTagHash[id] = true;
                        return true;
                    }

                    return false;
                }
            } else {
                return false;
            }
        }
    },
    isVisible: function (id) {
        if (this.isRootParent()) {
            var visible = app.data.tags.get(id).isActive();

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && (!!this.state.tags.visible[id] || show);
            } else {
                return visible;
            }
        }
    },
    isChildrenVisible: function (id) {
        if (this.isRootParent()) {
            var status = app.data.tags.get(id).data('status');
            var visible = status === 'all' || status === 'inbox';

            if (this.state.tags.visible) {
                var show = _.intersection(app.data.tags.getTree(false)[id].up, this.state.tags.filtered).length > 0
                return visible && show;
            } else {
                return visible;
            }
        }
    },
    //TODO: add "Nothing found" message if rootParent has no items
    //TODO: replace "key:id" with something shorter like "lib.cid()"
    render: function () {
        return (
            React.DOM.div(null,
                _.map(this.props.tree, function (treeItem) {
                    var tag = treeItem.tag;
                    var id = app.data.tags.get(tag).get('_id');

                    var childrenVisible = this.props.isChildrenVisible || this.rootParent().isChildrenVisible(id);
                    var visible = (this.rootParent().isVisible(id) || childrenVisible) && app.data.tags.get(id).isActive();

                    if (visible) {

                        var newTree = _.reduce(treeItem.down, function (memo, subTag) {
                            memo[subTag] = app.data.tags.getTree(false)[subTag];
                            return memo;
                        }, {});

                        newTree = app.data.tags.treeToArray(newTree);

                        var isSelected = this.props.active && !!_.find(app.navigation.query.tags(), function (queryItem) { return queryItem.query === id });

                        return app.view.sidepane.component.checkitem(
                            {
                                key: app.lib.uidmap(id),
                                text: app.data.tags.get(tag).data('tag').name,
                                icon: 'icon-blank',
                                color: app.lib.color(app.data.tags.get(tag).data('color')),
                                click: this.onClick.bind(this, id),
                                toggle: this.onCheck.bind(this, id),
                                checked: this.rootParent().hasChecked() && isSelected,
                                expanded: this.rootParent().isExpanded(id),
                                forceExpanded: this.rootParent().forceExpander,
                                visible: visible,
                                selected: isSelected
                            },
                            treeItem.down.length > 0 ? app.view.sidepane.component.tags({
                                tree: newTree,
                                rootParent: this.props.rootParent || this,
                                active: this.props.active,
                                isChildrenVisible: childrenVisible
                            }) : null
                        );
                    } else {
                        return null
                    }
                }, this)
            )
        );
    }
});
app.view.sidepane.component.types = app.lib.element({
    displayName: 'sidepane.component.types',
    render: function () {
        return (
            React.DOM.div(null,
                app.view.sidepane.component.item({ text: 'Text', icon: 'icon-sort-alphabet' }),
                app.view.sidepane.component.item({ text: 'Stopwatch', icon: 'icon-stopwatch' }),
                app.view.sidepane.component.item({ text: 'List', icon: 'icon-list-bullet' })
            )
        );
    }
});
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
app.view.note.main = app.lib.element({
    displayName: 'note.main',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.isActive],
    getInitialState: function () {
        return {
            view: this.props.view,
            active: false,
            selected: false,
            inflated: this.props.inflated
        };
    },
    componentWillMount: function () {
        //TODO: Important, Dont force update from componentWillMount, this was the problem with this.reset()
        //this.reset();
        this.key = app.lib.uid();
        this.shouldFocus = this.props.focus;
    },

    inflate: function (callback) {
        this.callback = callback;
        this.setState({ inflated: true });
    },
    postInflate: function (callback) {
        this.props.model.on('reset', this.reset, this);
        this.props.model.on('update:color batch:model update:model', this.forceUpdate.bind(this, null), this);
        
        var $note = $(this.getDOMNode());
        $note.data('model', this.props.model);
        
        var size = {
            width: 300,
            height: $note.outerHeight()
        };

        $note.data('noteSize', size);
        $note.data('noteSizeActual', _.clone(size));

        if (callback) {
            callback();
        }
    },

    componentDidMount: function () {
        if (this.state.inflated) {
            this.postInflate();
        }

        if (this.shouldFocus) {
            setTimeout(function () {
                if (app.lib.isMounted(this)) {
                    this.focus();
                }
            }.bind(this), 0);
            this.shouldFocus = false;
        }
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (!prevState.inflated && this.state.inflated) {
            this.postInflate(this.callback);
        }

        if (prevState.view !== this.state.view) {
            this.focus();
        }

        if (this.shouldFocus) {
            setTimeout(function () {
                if (app.lib.isMounted(this)) {
                    this.focus();
                }
            }.bind(this), 0);
            this.shouldFocus = false;
        }
    },
    componentWillUnmount: function () {
        this.setSelected(false);
        this.setActive(false);

        this.callback = null;

        if (this.props.onUnmount) {
            this.props.onUnmount(this);
        }

        this.props.model.off(null, null, this);

        $(this.getDOMNode()).removeData();

        if (this.state.view === 'edit' && !this.props.model.isNew()) {
            if (this.refs.note.save) {
                this.refs.note.save(true);
            }
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextProps.force || nextState.view !== this.state.view || this.state.inflated !== nextState.inflated;
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.inflated && !this.state.inflated) {
            this.setState({
                inflated: true
            });
        }
    },

    focus: function () {
        if (this.refs.note.focus && this.state.view === 'edit') {
            this.refs.note.focus();
        }
    },

    reset: function () {
        this.key = app.lib.uid();
        this.shouldFocus = this.props.focus;
        this.forceUpdate();
    },
    changeView: function (view) {
        this.setState({ view: view});
    },

    toggleSelection: function (event) {
        if (event.ctrlKey || event.shiftKey) {
            this.setSelected(!this.state.selected);
            this.setActive(true);
        } else {
            this.setActive(true);
        }
    },

    setSelected: function (selected) {
        if (this.props.selection && this.state.view==='view') {
            if (selected) {
                this.props.selection.select(this);
            } else {
                this.props.selection.deselect(this);
            }
        }
    },
    setActive: function (active) {
        if (this.props.selection) {
            if (active) {
                this.props.selection.activate(this);
            } else {
                this.props.selection.deactivate(this);
            }
        }
    },

    onSetSelected: function (selected) {
        if (this.isActive() && selected !== this.state.selected) {
            this.setState({
                selected: selected
            });
            this.forceUpdate();
        }
    },
    onSetActive: function (active) {
        if (this.isActive() && active !== this.state.active) {
            this.setState({
                active: active
            });

            if (!active && this.state.view === 'edit' && !this.props.model.isNew()) {
                if (this.refs.note.save) {
                    this.refs.note.save();
                }
            } else {
                this.forceUpdate();
            }
        }
    },

    onResize: function () {
        this.onResizeLogicDebounced = this.onResizeLogicDebounced || _.throttle(this.onResizeLogic, 250, { leading: false });
        this.onResizeLogicDebounced();
    },
    onResizeLogic: function () {
        if (this.isActive()) {
            var $note = $(this.getDOMNode());

            if ($note.data('noteSize')) {
                var nextSize = {
                    width: $note.outerWidth(),
                    height: $note.outerHeight()
                }
                
                var prevSize = $note.data('noteSizeActual');
                
                if (nextSize.height !== prevSize.height || nextSize.width !== prevSize.width) {
                    
                    if (this.state.view === 'edit') {
                        $note.data('noteSizeActual', nextSize);
                    } else {
                        $note.data('noteSize', nextSize);
                        $note.data('noteSizeActual', _.clone(nextSize));
                    }
                    
                    this.props.onResize(this);
                }
            }
        }
    },

    getTagsToHide: function () {
        if (this.props.getTagsToHide) {
            return this.props.getTagsToHide();
        } else {
            return [];
        }
    },

    render: function () {
        if (!this.state.inflated) return null;

        var noteClasses = {};
        var noteStyles = {};

        noteClasses['note'] = true;
        noteClasses['animate'] = true;
        noteClasses[this.state.view] = true;
        noteClasses[this.props.className] = true;
        noteClasses['saved'] = !this.props.model.isNew();
        noteClasses['selected'] = this.state.selected;
        noteClasses['active'] = this.state.active;

        noteStyles['backgroundColor'] = app.lib.color(this.props.model.data().color);

        return (
            React.DOM.div({
                className: window.classnames(noteClasses),
                style: noteStyles,
                onClick: this.toggleSelection
            },
                app.view.note[this.state.view]({
                    ref: 'note',
                    key: this.key,
                    model: this.props.model,
                    changeView: this.changeView,
                    context: this.props.context,
                    onSaved: this.props.onSaved,
                    onResize: this.onResize,
                    rootParent: this
                }),
                React.DOM.div({ className: 'selectholder' },
                    React.DOM.i({ className: 'icon-ok-big' })
                )
            )
        );
    }
});
app.view.note.edit = app.lib.element({
    displayName: 'note.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    getInitialState: function () {
        return {
            context: this.props.context || 'note'
        };
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
        this.events.on('save', this.saveNote, this);
    },
    componentWillUnmount: function () {
        this.events.off();
        this.events = null;
    },
    componentDidMount: function () {
        this.events.on('focus:set', this.focusSet, this);
        this.events.on('focus:remove', this.focusRemove, this);
        //this.focus();
    },
    render: function () {
        return (
            React.DOM.div(null,
                app.view.item.tag.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    switchContext: this.switchContext,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                app.view.item.body.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                app.view.item.timestamp.edit({
                    model: this.props.model,
                    rootParent: this.props.rootParent
                }),

                app.view.note.menu[this.state.context]({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.state.context,
                    events: this.events,
                    rootParent: this.props.rootParent
                }),

                React.DOM.div({ className: "notefooter" },
                    app.view.item.tags.edit({
                        ref: app.lib.cid(),
                        model: this.props.model,
                        events: this.events,
                        context: this.state.context,
                        rootParent: this.props.rootParent
                    }),
                    React.DOM.div({ className: 'enter', onClick: this.saveNote, title: 'Save item' },
                        React.DOM.i({ className: 'icon-enter' }),
                        React.DOM.span({className:'savetext'}, 'save')
                    )
                )
            )
        );
    },
    saveNote: function () {
        this.save();
    },
    save: function (pure) {
        var isValid = true;
        var focusIfInvalid = !pure;

        var children = app.lib.findChildren(this);
        for (var i = 0; i < children.length; i++) {
            if (children[i].validate && !children[i].validate(focusIfInvalid)) {
                isValid = false;
                break;
            }
        }

        if (this.props.context !== 'tag') {
            if (this.props.model.data(this.props.context).items.length <= 0) {
                isValid = false;
            }
        }

        if (isValid) {
            if (this.props.model.isNew()) {
                var note = this.props.model.clone();
                this.props.model.collection.unshift(note);
                note.save(this.state.context);
                this.props.model.reset();
            } else {
                if (!pure) {
                    this.props.changeView('view');
                }
                this.props.model.save(this.state.context);
            }

            if (!pure) {
                if (this.props.onSaved) {
                    this.props.onSaved();
                }
            }
        }
    },
    switchContext: function (context) {
        if (context === 'note' || context === 'tracker') {
            if (!this.props.model.data(context)) {
                var items = {};
                items[context] = { $set: app.model.note.defaults[context]()._data[context] };
                this.props.model.update(items);
            }
        }

        this.setState({
            context: context
        });
    },
    focus: function () {
        //TODO: this construct for some reason leaks DOM
        var elementToFocus = $(':focusable:first', this.getDOMNode());
        if (elementToFocus.parents('.notefooter').length === 0) {
            elementToFocus.focus();

            if (!this.props.model.isNew() && this.props.model.data('tag') && this.props.model.data('tag').name.length > 0) {
                app.lib.focus.next();
            }
        }

        this.rootParent().setActive(true);

        return true;
    },
    focusSet: function (component) {
        if (component) {
            if (component.focus) {
                component.focus();
            }
        }
        else {
            this.focus();
        }
    },
    focusRemove: function (component) {
        if (component) {
            if (component.focus) {
                component.focus();
                app.lib.focus.next();
            }
        }
        else {
            this.focus();
        }
    }
});
app.view.note.view = app.lib.element({
    displayName: 'note.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.props.model.on('change', this.forceUpdate.bind(this, null), this);
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidUpdate: function () {
        this.props.onResize(this);
    },
    getInitialState: function () {
        return {
            context: this.props.context || 'note',
            selected: false
        };
    },
    changeView: function () {
        this.props.changeView('edit');
    },
    switchContext: function (context) {
        this.setState({
            context: context
        });
    },
    render: function () {
        return (
            React.DOM.div({
                onDoubleClick: this.changeView,
                ref: 'container'
            },
                app.view.item.tag.view({
                    model: this.props.model,
                    context: this.state.context,
                    switchContext: this.switchContext,
                    rootParent: this.props.rootParent
                }),
                app.view.item.body.view({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                }),
                app.view.item.timestamp.view({
                    model: this.props.model,
                    rootParent: this.props.rootParent
                }),
                app.view.note.menu.quick({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                }),
                app.view.item.tags.view({
                    model: this.props.model,
                    context: this.state.context,
                    rootParent: this.props.rootParent
                })
            )
        );
    }
});
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
app.view.note.options = app.view.note.options || {};
app.view.note.options.note = app.lib.element({
    displayName: 'note.options.note',
    mixins: [app.view.note.options.base],
    render: function () {
        return (
            React.DOM.div({ className: 'options' },
                app.view.components.checkbox(this.getOptionToggleProps('timestamp', 'Show timestamp'))
            )
        );
    }
});
app.view.note.options = app.view.note.options || {};
app.view.note.options.tag = app.lib.element({
    displayName: 'note.options.tag',
    mixins: [app.view.note.options.base],
    render: function () {
        return (
            React.DOM.div({ className: 'options' },
                app.view.components.checkbox(this.getOptionToggleProps('timestamp', 'Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('autoExpand', 'Auto expand')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.checkbox(this.getOptionToggleProps('noteTimestamp', 'Note - Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('noteInheritColor', 'Note - Same color as tag')),
                app.view.components.checkbox(this.getOptionToggleProps('noteAddToInbox', 'Note - Add to inbox')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.group({ name: 'Note - Extra tags' },
                    app.view.note.options.components.extratags({
                        model: this.props.model,
                        events: this.props.events
                    })
                )
            )
        );
    }
});
app.view.note.options = app.view.note.options || {};
app.view.note.options.tracker = app.lib.element({
    displayName: 'note.options.tracker',
    mixins: [app.view.note.options.base],
    render: function () {
        return (
            React.DOM.div({ className: 'options' },
                app.view.components.checkbox(this.getOptionToggleProps('timestamp', 'Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('hideFromTrackerList', 'Hide from tracker list')),
                app.view.components.checkbox(this.getOptionToggleProps('autoExpand', 'Auto expand')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.checkbox(this.getOptionToggleProps('noteTimestamp', 'Note - Show timestamp')),
                app.view.components.checkbox(this.getOptionToggleProps('noteInheritColor', 'Note - Same color as tracker')),
                app.view.components.checkbox(this.getOptionToggleProps('noteAddToInbox', 'Note - Add to inbox')),
                app.view.components.checkbox(this.getOptionToggleProps('noteLinkToTag', 'Note - Create as tag')),

                React.DOM.div({ className: 'seperator' }),

                app.view.components.group({ name: 'Note - Extra tags' },
                    app.view.note.options.components.extratags({
                        model: this.props.model,
                        events: this.props.events
                    })
                )
            )
        );
    }
});
app.view.note.options = app.view.note.options || {};
app.view.note.options.components = app.view.note.options.components || {};
app.view.note.options.components.extratags = app.lib.element({
    displayName: 'note.options.components.extratags',
    mixins: [app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:options.extratags', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: this.props.model.getOptions('extratags'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events
            })
        );
    },
    addTag: function (tag) {
        this.props.model.data().options = this.props.model.data().options || {};
        this.props.model.data().options.extratags = this.props.model.getOptions('extratags');

        this.props.model.update({
            options: {
                extratags: {
                    $push: [tag]
                }
            }
        });
    },
    removeTag: function (tag) {
        var tags = this.props.model.getOptions('extratags');

        if (tags.length > 1) {
            this.props.model.update({
                options: {
                    extratags: {
                        $splice: [[tags.indexOf(tag), 1]]
                    }
                }
            });
        } else {
            this.props.model.update({
                options: {
                    extratags: {
                        $set: undefined
                    }
                }
            });

            delete this.props.model.data('options').extratags;
        }
    }
});
app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.base = {
    getInitialState: function () {
        return {
            active: (this.props.context === 'note' || this.props.context === 'tracker') ? 'add' : null,
            fullview: true // menu is always visible in edit mode
        };
    },
    componentWillMount: function () {
        this.events = _.clone(Backbone.Events);
    },
    componentDidMount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidUpdate: function () {
        //app.lib.focus.restore();
    },
    componentWillUnmount: function () {
    },

    itemClicked: function (event) {
        var type = $(event.target).data('type');

        this.setState({ active: null });

        switch (type) {
            case 'more':
                app.events.trigger('contextmenu', event.target, {
                    type: 'textmenu',
                    items: [
                        {
                            icon: 'icon-trash-alt',
                            text: 'Delete'
                        },
                        {
                            icon: 'icon-cog',
                            text: 'Settings'
                        }
                    ]
                });
                break;
            case 'archive':
                this.props.model.archiveNote();
                break;
            case 'remove':
                this.props.model.removeNote();
                break;
            case 'tag':
                if (!this.props.model.data().tag) {
                    this.props.model.setTag();
                }
                else {
                    this.props.model.removeTag();
                }
                break;
        }

        this.setState({ active: type });
    },

    render: function () {
        var content = this.renderItems(this.state.active);

        return (
            React.DOM.div({
                className: window.classnames({
                    'noselect': true,
                    'picker': true,
                    'active': this.state.active,
                    'fullview':this.state.fullview
                })
            },
                React.DOM.div({ className: 'hint', onClick: this.itemClicked },
                    React.DOM.i({ className: 'item icon-ellipsis' })
                ),
                React.DOM.div({ className: 'content' },
                    React.DOM.div({ className: 'root' },
                        this.renderItems('root', this.state.active)
                    ),
                    content ? React.DOM.div({ className: 'sub' },
                        content
                    ) : null
                )
            )
        );
    },
    renderItems: function (parent, active) {
        if (parent === 'options') {
            return app.view.note.options[this.props.context]({
                model: this.props.model,
                events: this.props.events
            });
            //return this['render.options.' + this.props.context]();
        }
        else {
            var items = this.commands[parent];
            return _.map(items, function (item, index) {
                return React.DOM.i({
                    key: index,
                    'className': item.icon + ' ' + window.classnames({
                        'item': true,
                        'active': active === item.value
                    }),
                    'data-type': item.value,
                    onClick: this.execute.bind(this, parent, item.value),
                    style: item.color ? { color: app.lib.color(item.color) } : {},
                    title: item.text
                });
            }, this);
        }
    },

    execute: function (parent, command, event) {
        if (this.commands[command] || command === 'options') {
            if (this.state.active === command) {
                this.setState({ active: null });
            }
            else {
                this.setState({ active: command });
            }
        }
        else {
            switch (parent) {
                case 'root': {
                    this.setState({ active: null });
                    switch (command) {
                        case 'more': {
                            this.menu(event);
                            //this['menu.' + this.props.context](event);
                            break;
                        }
                        case 'tag': {
                            this.tag();
                            break;
                        }
                    }
                    break;
                }
                case 'add': {
                    this.props.model.addItem(this.props.context, command);
                    break;
                }
                case 'color': {
                    this.props.model.updateColor(command);
                    break;
                }
            }
        }
    },
    clear: function () {
        //TODO: context avare reset
        this.props.model.reset();
    },
    moveToArchive: function () {
        this.props.model.setStatus(this.props.context, 'archive');
    },
    moveToTrash: function () {
        this.props.model.setStatus(this.props.context, 'trash');
    },
    moveToAll: function () {
        this.props.model.setStatus(this.props.context, 'all');
    },
    moveToInbox: function () {
        this.props.model.setStatus(this.props.context, 'inbox');
    },
    remove: function () {
        this.props.model.remove(this.props.context);
    },

    tag: function () {
        if (!this.props.model.data('tag')) {
            this.props.model.setTag();
        }
        else {
            this.props.model.removeTag();
        }
    },
    releseTag: function () {
        this.props.model.update({ tag: { $set: null } });
        delete this.props.model.data().tag;

        this.props.model.save(this.props.context);
    },
    releseAndDelete: function () {
        this.props.model.update({ tag: { $set: null } });
        delete this.props.model.data().tag;

        this.props.model.save(this.props.context).done(function () {
            this.props.model.collection.remove(this.props.model);
        }.bind(this));
    }
};
app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.quick = app.lib.element({
    mixins: [app.lib.mixins.rootParent],
    getDefaultProps: function () {
        return {
            context: 'note',
            model: null
        }
    },
    componentWillMount: function () {
    },
    componentWillUnmount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    componentDidMount: function () {
    },

    changeStatus: function (status, event) {
        this.props.model.setStatus(this.props.context, status);
    },

    changeColor: function (event) {
        var menu = {
            type: 'colormenu',
            callback: this.applyColor
        };

        app.events.trigger('contextmenu', event.target, menu, 'top', 'middle');
    },
    applyColor: function (color) {
        this.props.model.updateColor(color);
        this.props.model.save(this.props.context);
    },

    permanentlyDelete: function () {
        this.props.model.collection.removeNotes({ ids: [this.props.model.get('_id')] });
    },

    duplicate: function () {
        this.props.model.duplicate(this.props.context);
    },

    select: function () {
        this.rootParent().setSelected(true);
    },

    edit: function () {
        this.rootParent().changeView('edit');
    },

    showMore: function (event) {
        var status = this.props.model.data('status');

        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items.push({
            icon: 'icon-pencil-alt',
            text: 'Edit',
            callback: this.edit
        });

        if (status !== 'inbox') {
            menu.items.push({
                icon: 'icon-inbox',
                text: 'Move to Inbox',
                callback: this.changeStatus.bind(this, 'inbox')
            });
        }

        if (this.props.context === 'note') {
            menu.items.push({
                icon: 'icon-docs',
                text: 'Duplicate',
                callback: this.duplicate.bind(this)
            });
        }

        if (status !== 'trash') {
            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.changeStatus.bind(this, 'trash')
            });
        }

        if (status === 'trash') {
            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Permanently delete',
                callback: this.permanentlyDelete.bind(this)
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },

    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },

    render: function () {
        var status = this.props.model.data('status');
        var className = 'nsm';
        var icon = 'icon-ellipsis-vert';

        if (true) {
            var className = 'nsmb';
            var icon = 'icon-ellipsis';
        }

        return (
            React.DOM.div({ className: className },
                React.DOM.div({ className: 'nsm_main' },
                    React.DOM.div({ className: 'nsm_handle' },
                        React.DOM.i({ className: icon })
                    ),
                    React.DOM.div({
                        className: 'nsm_content picker',
                        style: {
                            backgroundColor: app.lib.color(this.props.model.data('color'))
                        }
                    },
                        React.DOM.div({ className: 'nsm_cont_sub', onClick: this.prevent },
                            React.DOM.i({ className: 'item icon-art-gallery', onClick: this.changeColor, title: 'Change color' }),
                            status !== 'all' ? React.DOM.i({ className: 'item icon-folder-open', onClick: this.changeStatus.bind(this, 'all'), title: 'Move to All' }) : null,
                            status !== 'archive' ? React.DOM.i({ className: 'item icon-archive', onClick: this.changeStatus.bind(this, 'archive'), title: 'Move to Archive' }) : null,
                            React.DOM.i({ className: 'item icon-ellipsis', onClick: this.showMore, title: 'More' }),
                            React.DOM.i({ className: 'item icon-ok right', onClick: this.select, title: 'Check (select)' })
                        )
                    )
                )
            )
        );
    }
});
app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.note = app.lib.element({
    displayName: 'note.menu.note',
    mixins: [app.lib.mixins.rootParent, app.view.note.menu.base, app.lib.mixins.resize],
    menu: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        if (this.props.model.isNew()) {
            menu.items.push({
                icon: 'icon-arrows-cw',
                text: 'Clear',
                callback: this.clear
            });

            if (this.props.model.data('tag')) {
                menu.items.push({
                    icon: 'icon-unlink-01',
                    text: 'Relese from tag',
                    callback: this.tag
                });
            } else {
                menu.items.push({
                    icon: 'icon-link-01',
                    text: 'Link to tag',
                    callback: this.tag
                });
            }
        }
        else {
            menu.items.push({
                icon: 'icon-folder',
                text: 'Move to All notes',
                callback: this.moveToAll
            });

            menu.items.push({
                icon: 'icon-inbox',
                text: 'Move to Inbox',
                callback: this.moveToInbox
            });

            menu.items.push({
                icon: 'icon-archive',
                text: 'Move to Archive',
                callback: this.moveToArchive
            });

            if (this.props.model.data('tag')) {
                menu.items.push({
                    icon: 'icon-unlink-01',
                    text: 'Relese from tag',
                    callback: this.releseTag
                });
            } else {
                menu.items.push({
                    icon: 'icon-link-01',
                    text: 'Link to tag',
                    callback: this.tag
                });
            }

            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.moveToTrash
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },
    commands: {
        root: [
            {
                text: 'Add new item',
                icon: 'icon-plus-alt',
                value: 'add'
            },
            {
                text: 'Change color',
                icon: 'icon-art-gallery',
                value: 'color'
            },
            {
                text: 'Options',
                icon: 'icon-cog',
                value: 'options'
            },
            {
                text: 'More',
                icon: 'icon-ellipsis',
                value: 'more'
            }
        ],
        add: [
            {
                text: 'Text block',
                icon: 'icon-font',
                value: 'text'
            },
            {
                text: 'Check list',
                icon: 'icon-check',
                value: 'list'
            },
            {
                text: 'Link & linked image',
                icon: 'icon-link',
                value: 'link'
            },
            {
                text: 'Numeric',
                icon: 'icon-sort-numeric',
                value: 'numeric'
            },
            {
                text: 'Stopwatch',
                icon: 'icon-stopwatch',
                value: 'stopwatch'
            },
            {
                text: 'Countdown',
                icon: 'icon-hourglass',
                value: 'countdown'
            }
        ],
        color: _.map(app.config.colors, function (color) {
            return {
                text: color,
                icon: 'icon-blank',
                value: color,
                color: color
            };
        })
    }
});
app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.tag = app.lib.element({
    displayName: 'note.menu.tag',
    mixins: [app.lib.mixins.rootParent, app.view.note.menu.base, app.lib.mixins.resize],
    menu: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        if (this.props.model.isNew()) {
            menu.items.push({
                icon: 'icon-arrows-cw',
                text: 'Clear',
                callback: this.clear
            });
        }
        else {
            menu.items.push({
                icon: 'icon-folder',
                text: 'Move to All tags',
                callback: this.moveToAll
            });

            menu.items.push({
                icon: 'icon-archive',
                text: 'Move to Archive',
                callback: this.moveToArchive
            });

            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.moveToTrash
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },
    commands: {
        root: [
            {
                text: 'Change color',
                icon: 'icon-art-gallery',
                value: 'color'
            },
            {
                text: 'Options',
                icon: 'icon-cog',
                value: 'options'
            },
            {
                text: 'More',
                icon: 'icon-ellipsis',
                value: 'more'
            }
        ],
        color: _.map(app.config.colors, function (color) {
            return {
                text: color,
                icon: 'icon-blank',
                value: color,
                color: color
            };
        })
    }
});
app.view.note.menu = app.view.note.menu || {};
app.view.note.menu.tracker = app.lib.element({
    displayName: 'note.menu.tracker',
    mixins: [app.lib.mixins.rootParent, app.view.note.menu.base, app.lib.mixins.resize],
    menu: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        if (this.props.model.isNew()) {
            menu.items.push({
                icon: 'icon-arrows-cw',
                text: 'Clear',
                callback: this.clear
            });
        }
        else {
            menu.items.push({
                icon: 'icon-folder',
                text: 'Move to All trackers',
                callback: this.moveToAll
            });

            menu.items.push({
                icon: 'icon-archive',
                text: 'Move to Archive',
                callback: this.moveToArchive
            });

            menu.items.push({
                icon: 'icon-unlink-01',
                text: 'Relese tag & Delete tracker',
                callback: this.releseAndDelete
            });

            menu.items.push({
                icon: 'icon-trash-alt',
                text: 'Move to Trash',
                callback: this.moveToTrash
            });
        }

        app.events.trigger('contextmenu', event.target, menu);
    },
    commands: {
        root: [
            {
                text: 'Add new item',
                icon: 'icon-plus-alt',
                value: 'add'
            },
            {
                text: 'Change color',
                icon: 'icon-art-gallery',
                value: 'color'
            },
            {
                text: 'Options',
                icon: 'icon-cog',
                value: 'options'
            },
            {
                text: 'More',
                icon: 'icon-ellipsis',
                value: 'more'
            }
        ],
        add: [
            {
                text: 'Text block',
                icon: 'icon-font',
                value: 'text'
            },
            {
                text: 'Check list',
                icon: 'icon-check',
                value: 'list'
            },
            {
                text: 'Choice (combo & dropdown)',
                icon: 'icon-list-bullet',
                value: 'choice'
            },
            {
                text: 'Link & linked image',
                icon: 'icon-link',
                value: 'link'
            },
            {
                text: 'Numeric',
                icon: 'icon-sort-numeric',
                value: 'numeric'
            },
            {
                text: 'Stopwatch',
                icon: 'icon-stopwatch',
                value: 'stopwatch'
            },
            {
                text: 'Countdown',
                icon: 'icon-hourglass',
                value: 'countdown'
            }
        ],
        color: _.map(app.config.colors, function (color) {
            return {
                text: color,
                icon: 'icon-blank',
                value: color,
                color: color
            };
        })
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.body = app.view.item.body || {};
app.view.item.body.edit = app.lib.element({
    displayName: 'item.body.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        switch(this.props.context){
            case 'note':
            case 'tracker':
                return app.view.item.container.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.props.context,
                    events: this.props.events,
                    rootParent: this.props.rootParent
                });
            case 'tag':
                return app.view.item.tagbody.edit({
                    ref: app.lib.cid(),
                    model: this.props.model,
                    context: this.props.context,
                    events: this.props.events,
                    rootParent: this.props.rootParent
                });
        }
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.body = app.view.item.body || {};
app.view.item.body.view = app.lib.element({
    displayName: 'item.body.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        switch (this.props.context) {
            case 'note':
            case 'tracker':
                return app.view.item.container.view({
                    model: this.props.model,
                    context: this.props.context,
                    rootParent: this.props.rootParent
                });
            case 'tag':
                return app.view.item.tagbody.view({
                    model: this.props.model,
                    context: this.props.context,
                    rootParent: this.props.rootParent
                });
        }
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.container = app.view.item.container || {};
app.view.item.container.edit = app.lib.element({
    displayName: 'item.container.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:note.items update:tracker.items', this.forceUpdate.bind(this, null), this);
    },
    componentDidMount: function () {
        //TODO: this creates deattacehd dom leaks (minor)

        $(this.getDOMNode()).sortable({
            containment: "parent",
            items:'.reorder',
            tolerance: 'pointer',
            cursor:'ns-resize',
            axis: 'y',
            handle: ".handle",
            update: this.reorderFinished,
            scroll: false,
            delay: 100,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            helper: this.getHelper,
            appendTo: 'parent'
        });
    },
    getHelper: function (event, element) {
        var helper = element.clone();
        helper.removeAttr('data-reactid');
        helper.find('[data-reactid]').removeAttr('data-reactid');
        return helper;
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
        $(this.getDOMNode()).sortable("destroy");
    },
    reorderFinished: function (event, ui) {
        var indexArray = $(this.getDOMNode()).sortable("toArray", { attribute: 'data-index' });
        var orderedItems = _.map(indexArray, function (index) {
            return this.props.model.data(this.props.context).items[parseInt(index)];
        }, this);

        orderedItems = orderedItems.concat(_.difference(this.props.model.data(this.props.context).items, orderedItems));

        $(this.getDOMNode()).sortable("cancel");
        this.props.model.update(this.props.context, { items: { $set: orderedItems } }, true);
        this.forceUpdate();
    },
    render: function () {
        var items = this.props.model.data(this.props.context) && this.props.model.data(this.props.context).items;
        if (items && items.length) {
            return (
                React.DOM.div({ className: 'container' },
                    _.map(_.filter(items, function (item) { return !item.group; }, this), function (item, index) {
                        return app.view.item.wrapper.edit({
                            ref: app.lib.cid(),
                            index: items.indexOf(item),
                            key: item.uid,
                            data: item,
                            model: this.props.model,
                            canReorder: true,
                            context: this.props.context,
                            events: this.props.events,
                            rootParent: this.props.rootParent
                        });
                    }, this)
                )
            );
        }
        else {
            return React.DOM.div({className:'hide'});
        }
    },
    componentDidUpdate: function () {
        //app.lib.focus.restore();
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.container = app.view.item.container || {};
app.view.item.container.view = app.lib.element({
    displayName: 'item.container.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    render: function () {
        var items = this.props.model.data(this.props.context) && this.props.model.data(this.props.context).items;
        if (items && items.length) {
            return (
                React.DOM.div({ className: "container" },
                    _.map(_.filter(items, function (item) { return !item.group; }, this), function (item, index) {
                        return app.view.item.wrapper.view({
                            key: item.uid,
                            data: item,
                            model: this.props.model,
                            context: this.props.context,
                            rootParent: this.props.rootParent
                        });
                    }, this)
                )
            );
        }
        else {
            return React.DOM.span();
        }
    },
    componentDidUpdate: function () {
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.wrapper = app.view.item.wrapper || {};
app.view.item.wrapper.edit = app.lib.element({
    displayName: 'item.wrapper.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getInitialState: function () {
        return {
            showName: !!this.props.data.name || this.props.context === 'tracker',
            name: this.props.data.name,
            showOptions: (this.props.context === 'tracker' || (this.props.data.type === 'link' || this.props.data.type === 'numeric') || app.data.account.getOptions('noteItemOptions')) && (this.props.data.type !== 'group')
        };
    },
    showOptions: function (item, event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        if (this.props.data.type !== 'group') {
            menu.items.push({
                icon: 'icon-fontsize',
                text: this.state.showName ? 'Remove block name' : 'Add block name',
                callback: this.toggleBlockName
            });
        }

        if (this.refs.item.getMenuItems) {
            menu.items = menu.items.concat(this.refs.item.getMenuItems());
        }

        if (app.view.item[this.props.data.type].edit._class.hasOptions) {
            menu.items.push({
                icon: 'icon-cog',
                text: this.state.showOptions ? 'Hide options' : 'Show options',
                callback: this.toggleOptions.bind(this, item)
            });
        }

        menu.items.push({
            icon: 'icon-trash-alt',
            text: 'Remove block',
            callback: this.remove.bind(this, item)
        });

        app.events.trigger('contextmenu', event.target, menu);
    },
    remove: function (item) {
        this.props.model.removeItem(this.props.context, item.uid);
    },
    toggleOptions: function () {
        if (app.view.item[this.props.data.type].edit._class.hasOptions) {
            this.setState({ showOptions: !this.state.showOptions });
        }
    },
    toggleBlockName: function () {
        this.props.data.name = null;
        this.setState({
            showName: !this.state.showName,
            name: null
        }, this.focus);
    },
    changeName: function (event) {
        this.props.data.name = event.target.value;
        this.setState({
            name: this.props.data.name
        });
    },
    render: function () {
        var classSet = {
            'wrapper': true,
            'hasName': this.state.showName,
            'reorder': this.props.canReorder,
            'group': this.props.data.type === 'group',
            'hasoptions': this.state.showOptions
        };

        var name = null;
        var nameGroup = null;

        if (this.props.data.type === 'group') {
            var blockName = app.data.tags.get(this.props.data.data.trackerId).data('tag').name;
            nameGroup = [
                React.DOM.div({ key: '0', className: 'groupName', style: { 'backgroundColor': app.lib.color(this.props.model.data().color), 'color': app.lib.color(this.props.model.data().color) } }, blockName),
                React.DOM.div({ key: '1', className: 'groupName' }, blockName)
            ];
        } else {
            if (this.state.showName) {
                name = React.DOM.div({ className: 'fieldName' },
                    React.DOM.textarea({ value: this.state.name, rows: 1, onChange: this.changeName, placeholder: app.config.context[this.props.context].placeholder.blockTitle, onKeyDown: this.keyPress, ref: 'groupname' })
                );
            }
        }

        return React.DOM.div({ className: window.classnames(classSet), 'data-index': this.props.index },
            this.props.canReorder ? React.DOM.span({ className: 'handle' }, React.DOM.i({ className: 'icon-menu' })) : null,
            this.props.canReorder ? React.DOM.span({ className: 'more' }, React.DOM.i({ className: 'icon-ellipsis-vert', onClick: this.showOptions.bind(this, this.props.data) })) : null,
            nameGroup,
            React.DOM.div({ className: 'itemgroup' /*, onDoubleClick: this.toggleOptions*/ },
                name,
                app.view.item[this.props.data.type].edit({
                    data: this.props.data,
                    model: this.props.model,
                    showOptions: this.state.showOptions,
                    context: this.props.context,
                    ref: 'item',
                    events: this.props.events,
                    rootParent: this.props.rootParent,
                    remove: this.remove
                })
            )
        );
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();
            event.preventDefault();
        }
    },
    componentDidUpdate: function () {
    },
    focus: function () {
        if (this.refs.groupname) {
            this.refs.groupname.getDOMNode().focus();
            return true;
        } else {
            if (this.refs.item.focus) {
                this.refs.item.focus();
                return true;
            }
        }
        return false;
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.wrapper = app.view.item.wrapper || {};
app.view.item.wrapper.view = app.lib.element({
    displayName: 'item.wrapper.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {
        var hasName = !!this.props.data.name;
        var classSet = {
            'wrapper': true,
            'hasName': hasName,
            'group': this.props.data.type === 'group'
        };

        var nameGroup = null;
        var name = null;

        if (this.props.data.type === 'group') {
            var tracker = app.data.tags.get(this.props.data.data.trackerId);
            var blockName = (tracker && tracker.data('tag') && tracker.data('tag').name) || this.props.data.name;

            nameGroup = [
                React.DOM.div({ key: '0', className: 'groupName', style: { 'backgroundColor': app.lib.color(this.props.model.data().color), 'color': app.lib.color(this.props.model.data().color) } }, blockName),
                React.DOM.div({ key: '1', className: 'groupName' }, blockName)
            ];
        }
        else {
            if (hasName) {
                name = React.DOM.div({ className: 'fieldName' }, this.props.data.name);
            }
        }

        return React.DOM.div({ className: window.classnames(classSet) },
            nameGroup,
            React.DOM.div({ className: 'itemgroup' },
                name,
                app.view.item[this.props.data.type][this.props.itemMode || 'view']({
                    data: this.props.data,
                    model: this.props.model,
                    context: this.props.context,
                    events: this.props.events,
                    rootParent: this.props.rootParent
                })
          )
        );
    },
    componentDidUpdate: function () {
    }
});
app.view.item.group = app.view.item.group || {};
app.view.item.group.edit = app.lib.element({
    displayName: 'item.group.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    render: function () {

        var items = _.filter(this.props.model.data('note').items, function (item) {
            return item.group === this.props.data.uid;
        }, this);

        return (
            React.DOM.div(null,
                _.map(items, function (item, index) {
                    return app.view.item.wrapper.view({
                        ref: app.lib.cid(),
                        index: index,
                        key: item.uid,
                        data: item,
                        model: this.props.model,
                        context: 'note',
                        itemMode: 'edit',
                        events: this.props.events,
                        rootParent: this.props.rootParent
                    });
                }, this),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    null
                ) : null
            )
        );
    },
    focus: function () { },
    statics: {
        hasOptions:false
    }
});
app.view.item.group = app.view.item.group || {};
app.view.item.group.view = app.lib.element({
    displayName: 'item.group.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    render: function () {

        var items = _.filter(this.props.model.data('note').items, function (item) {
            return item.group === this.props.data.uid;
        }, this);

        return (
            React.DOM.div(null,
                _.map(items, function (item, index) {
                    return app.view.item.wrapper.view({
                        index: index,
                        key: item.uid,
                        context: this.props.context,
                        data: item,
                        model: this.props.model,
                        rootParent: this.props.rootParent
                    });
                }, this)
            )
        );
    }
});
app.view.item.link = app.view.item.link || {};
app.view.item.link.edit = app.lib.element({
    displayName: 'item.link.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        this.setImage();
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    onLinkChange: function (event) {
        this.props.data.data.link = event.target.value;
        this.clearImage();
        this.forceUpdate();
    },
    onTitleChange: function (event) {
        this.props.data.data.title = event.target.value;
        this.forceUpdate();
    },
    onBlurLink: function () {
        this.setImage();
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();

            event.preventDefault();
            event.stopPropagation();
        }
    },
    render: function () {
        var data = this.props.data.data;

        if (data.hasImage) {
            var size = {
                width: 0,
                height: 0
            };
            var koef = Math.min(268 / data.size.width, 1);

            size.width = data.size.width * koef;
            size.height = data.size.height * koef;
        }

        return (
            React.DOM.div({ className: 'linkitem' },
                React.DOM.input({ className: 'linkLink', type: 'text', value: data.link, onChange: this.onLinkChange, onBlur: this.onBlurLink, placeholder: 'Link / image URL', onKeyDown: this.keyPress }),
                data.hasTitle ?
                    React.DOM.input({ className: 'linkTitle', type: 'text', value: data.title, onChange: this.onTitleChange, placeholder: 'Link title', onKeyDown: this.keyPress }) :
                    null,
                data.hasImage ?
                    React.DOM.img({ src: data.link, width: size.width, height: size.height }) :
                    null,
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    React.DOM.i({ className: 'icon-fontsize' + (!data.hasTitle ? ' inactive' : ''), onClick: this.toggleTitle, title: 'Toggle title' }),
                    React.DOM.i({ className: 'icon-picture' + (!data.hasImage ? ' inactive' : ''), onClick: this.toggleImage, title: 'Toggle image' })
                ) : null
            )
        );
    },
    update: function () {
        this.forceUpdate();
    },
    toggleTitle: function () {
        this.props.data.data.hasTitle = !this.props.data.data.hasTitle;
        this.update();
    },
    toggleImage: function () {
        if (!this.props.data.data.hasImage) {
            this.setImage();
        } else {
            this.clearImage();
        }
    },
    setImage: function () {
        if (!this.props.data.data.hasImage) {
            var img = new Image();
            var data = this.props.data.data;
            var self = this;
            img.onload = function () {
                data.size = {
                    width: this.width,
                    height: this.height
                };

                data.hasImage = !data.hasImage;

                if (app.lib.isMounted(self)) {
                    self.update();
                } else {
                    self.props.model.save(self.props.context);
                }
            };
            img.src = this.props.data.data.link;
        }
    },
    clearImage: function () {
        if (this.props.data.data.hasImage) {
            this.props.data.data.hasImage = !this.props.data.data.hasImage;
            delete this.props.data.data.size;
            this.update();
        }
    },
    statics: {
        hasOptions: true
    }
});
app.view.item.link = app.view.item.link || {};
app.view.item.link.view = app.lib.element({
    displayName: 'item.link.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var data = this.props.data.data;

        if (data.hasImage) {
            var size = {
                width: 0,
                height: 0
            };
            var koef = Math.min(268 / data.size.width, 1);

            size.width = data.size.width * koef;
            size.height = data.size.height * koef;
        }

        var link = app.lib.getUrl(data.link);

        return (
            React.DOM.div({ className: 'linkitem' },
                !data.hasImage ?
                    React.DOM.div({ className: 'linkLink' },
                        React.DOM.a({ target: '_blank', href: link || '#' }, data.title || data.link || 'Empty link')
                    ):
                    React.DOM.img({ src: data.link, width: size.width, height: size.height })
            )
        );
    }
});
app.view.item.numeric = app.view.item.numeric || {};
app.view.item.numeric.edit = app.lib.element({
    displayName: 'item.numeric.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    onChange: function (event) {
        var value = event.target.value;

        var regex = /^([\+-])?(\d+)?([,\.])?(\d+)?$/gi

        if (regex.test(value)) {
            this.props.data.data.value = value;
            this.forceUpdate();
        }
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();

            event.preventDefault();
            event.stopPropagation();
        }
    },
    onIncrement: function (dir) {
        value = (this.props.data.data.value || '0').replace(',', '.');
        var dec = app.lib.decimals(value);
        var value = parseFloat(value);
        value += dir * Math.pow(10, -dec);
        value = Math.round(value * Math.pow(10, dec)) / Math.pow(10, dec);
        this.props.data.data.value = value.toFixed(dec);

        this.forceUpdate();
    },
    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: 'numeric' + (data.controls ? ' hasControls' : '') },
                React.DOM.div({ className: 'block' },
                    React.DOM.input({
                        className: 'value',
                        value: data.value,
                        onChange: this.onChange,
                        onKeyDown: this.keyPress,
                        placeholder:'Blank value'
                    })
                ),
                data.controls ?
                    React.DOM.div({ className: 'commands' },
                        React.DOM.div({ className: 'left', onClick: this.onIncrement.bind(this, +1) }, React.DOM.i({ className: 'icon-plus' })),
                        React.DOM.div({ className: 'right', onClick: this.onIncrement.bind(this, -1) }, React.DOM.i({ className: 'icon-minus' }))
                    ) : null,

                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    React.DOM.i({ className: 'icon-sort' + (!data.controls ? ' inactive' : ''), onClick: this.toggleControls, title: 'Toggle controls' })
                ) : null
            )
        );
    },
    update: function () {
        this.forceUpdate();
    },
    toggleControls: function () {
        this.props.data.data.controls = !this.props.data.data.controls;
        this.update();
    },
    getMenuItems: function () {
        var items = [];

        items.push({
            icon: 'icon-sort',
            text: this.props.data.data.controls ? 'Remove controls' : 'Add controls',
            callback: this.toggleControls
        });

        return items;
    },
    statics: {
        hasOptions: true
    }
});
app.view.item.numeric = app.view.item.numeric || {};
app.view.item.numeric.view = app.lib.element({
    displayName: 'item.numeric.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    onIncrement: function (dir, event) {
        value = this.props.data.data.value || '0';
        var dec = app.lib.decimals(value);
        var value = parseFloat(value);
        value += dir * Math.pow(10, -dec);
        value = Math.round(value * Math.pow(10, dec)) / Math.pow(10, dec);
        this.props.data.data.value = value.toFixed(dec);

        this.forceUpdate();

        this.save();
    },
    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: 'numeric' + (data.controls ? ' hasControls' : '') },
                React.DOM.div({ className: 'block' },
                    React.DOM.div({ className: 'value' }, data.value || '0')
                ),
                data.controls ?
                    React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                        React.DOM.div({ className: 'left', onClick: this.onIncrement.bind(this, +1) }, React.DOM.i({ className: 'icon-plus' })),
                        React.DOM.div({ className: 'right', onClick: this.onIncrement.bind(this, -1) }, React.DOM.i({ className: 'icon-minus' }))
                    ) : null
            )
        );
    },
});
app.view.item.list = app.view.item.list || {};
app.view.item.list.edit = app.lib.element({
    displayName: 'item.list.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
        this.choice = this.props.data.type === 'choice';
    },

    componentDidMount: function () {
        //TODO: this creates deattacehd dom leaks (minor)

        $('.notelistitems', this.getDOMNode()).sortable({
            containment: "parent",
            items: '.notelistitem',
            tolerance: 'pointer',
            cursor: 'ns-resize',
            axis: 'y',
            handle: ".lihandle",
            update: this.reorderFinished,
            scroll: false,
            delay: 100,
            forceHelperSize: true,
            forcePlaceholderSize: true,
            helper: this.getHelper,
            appendTo: 'parent'
        });
    },

    getHelper: function (event, element) {
        var helper = element.clone();
        helper.removeAttr('data-reactid');
        helper.find('[data-reactid]').removeAttr('data-reactid');
        return helper;
    },

    componentWillUnmount: function () {
        $('.notelistitems', this.getDOMNode()).sortable("destroy");
    },

    reorderFinished: function (event, ui) {
        var indexArray = $('.notelistitems', this.getDOMNode()).sortable("toArray", { attribute: 'data-index' });
        var orderedItems = _.map(indexArray, function (index) {
            return this.props.data.data.items[parseInt(index)];
        }, this);

        orderedItems = orderedItems.concat(_.difference(this.props.data.data.items, orderedItems));

        $('.notelistitems', this.getDOMNode()).sortable("cancel");

        this.props.data.data.items = orderedItems;

        this.forceUpdate();
    },

    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    nextItem: function (index) {
        if (index >= this.props.data.data.items.length - 1) {
            this.newItem();
        } else {
            this.focusItem(index + 1);
        }
    },
    newItem: function (focus) {
        var newItem = {
            text: '',
            uid: app.lib.uid()
        };

        if (this.choice) {
            newItem.tags = [];
        }

        this.props.data.data.items.push(newItem);

        this.forceUpdate(function () {
            if (focus !== false) {
                this.focusItem(this.props.data.data.items.length - 1);
            }
        }.bind(this));
    },

    batchAdd: function (arr) {
        _.each(arr, function (text) {
            text = text.trim();
            var textOriginal = text;
            var text = (text.length < 151 ? text : text.substring(0, 147));

            if(textOriginal.length!==text.length){
                text+='...';
            }

            var newItem = {
                text: text,
                uid: app.lib.uid()
            };

            if (this.choice) {
                newItem.tags = [];
            }

            this.props.data.data.items.push(newItem);
        }, this);

        this.forceUpdate(function () {
            this.focusItem(this.props.data.data.items.length - 1);
        }.bind(this));
    },

    focusItem: function (index) {
        if (index < 0) {
            index = 0;
        }

        if (index > this.props.data.data.items.length - 1) {
            index = this.props.data.data.items.length - 1;
        }

        if (this.refs['item-' + index]) {
            this.refs['item-' + index].focus();
        }
    },
    removeItem: function (index) {
        if (this.props.data.data.items.length === 1 && !this.props.data.data.items[0].text) {
            this.props.remove(this.props.data);
            return;
        }

        this.props.data.data.items.splice(index, 1);
        if (this.props.data.data.items.length === 0) {
            this.newItem(false);
        } else {
            this.forceUpdate();
        }
    },
    singleChoice: function () {
        this.props.data.data.combo = !this.props.data.data.combo;

        if (this.props.data.data.combo) {
            var checkCount = 0;
            _.each(this.props.data.data.items, function (item) {
                item.checked = item.checked && checkCount === 0;
                if (item.checked) { checkCount++; }
            });
        }

        this.forceUpdate();
    },
    hasTags: function () {
        this.props.data.data.hasTags = !this.props.data.data.hasTags;

        if (!this.props.data.data.hasTags) {
            _.each(this.props.data.data.items, function (item) {
                item.tags = [];
            });
        }

        this.forceUpdate();
    },

    render: function () {
        var data = this.props.data.data;

        return (
            React.DOM.div({ className: "notelist hascontrols" },
                React.DOM.div({ className: "notelistitems" },
                    _.map(this.props.data.data.items, function (item, index) {
                        return app.view.item.listitem.edit({
                            key: index,
                            ref: 'item-' + index,
                            index: index,
                            item: item,
                            rootParent: this.props.rootParent,
                            nextItem: this.nextItem,
                            removeItem: this.removeItem,
                            checkItem: this.props.checkItem,
                            focusItem: this.focusItem,
                            batchAdd: this.batchAdd,
                            mode: this.props.mode || 'list',
                            context: this.props.context,
                            model: this.props.model,
                            choice: this.choice,
                            hasTags: this.props.data.data.hasTags
                        });
                    }, this)
                ),
                React.DOM.div({ className: 'newlistitem', onClick: this.newItem },
                    React.DOM.div({ className: 'newicon icon-plus' })
                ),
                this.choice ? (
                    this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                        React.DOM.i({ className: 'icon-tags' + (!data.hasTags ? ' inactive' : ''), onClick: this.hasTags, title: 'Toggle items to have tags' }),
                        React.DOM.i({ className: 'icon-align-justify' + (!data.combo ? ' inactive' : ''), onClick: this.singleChoice, title: 'Toggle block to be added in note as dropdown list' })
                    ) : null
                ) : (
                    this.props.showOptions ? React.DOM.div({ className: 'itemoptions blank' }) : null
                )
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
app.view.item.list = app.view.item.list || {};
app.view.item.list.view = app.lib.element({
    displayName: 'item.list.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.choice = this.props.data.type === 'choice';
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    focusItem: function (index) {
        if (index < 0) {
            index = 0;
        }

        if (index > this.props.data.data.items.length - 1) {
            index = this.props.data.data.items.length - 1;
        }

        if (this.refs['item-' + index]) {
            this.refs['item-' + index].focus();
        }
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    render: function () {
        return (
            React.DOM.div({ className: "notelist" },
                React.DOM.div({ className: "notelistitems" },
                    _.map(this.props.data.data.items, function (item, index) {
                        return app.view.item.listitem.view({
                            key: index,
                            ref: 'item-' + index,
                            index: index,
                            item: item,
                            rootParent: this.props.rootParent,
                            focusItem: this.focusItem,
                            checkItem: this.props.checkItem,
                            mode: this.props.mode || 'list',
                            context: this.props.context,
                            model: this.props.model,
                            choice: this.choice,
                            viewMode: this.props.viewMode,
                            save: this.save
                        });
                    }, this)
                )
            )
        );
    },
    validate: function (focus) {
        return true;
    }
});
app.view.item.listitem = app.view.item.listitem || {};
app.view.item.listitem.edit = app.lib.element({
    displayName: 'item.listitem.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
        if (this.props.choice && this.props.hasTags) {
            this.props.item.tags = this.props.item.tags || [];
        }
        this.resizeTextarea();
    },
    componentDidUpdate: function (prevProps, prevState) {
        this.resizeTextarea();
    },
    getDefaultProps: function () {
        return {
            item: {
                checked:false,
                text: '',
                tags:[],
                value: null
            },
            nextItem: null
        };
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    resizeTextarea: function () {
        this.resizeTextareaThrottled = this.resizeTextareaThrottled || _.throttle(this.resizeTextareaLogic, 150);
        this.resizeTextareaThrottled();
    },
    resizeTextareaLogic: function () {
        if (app.lib.isMounted(this)) {
            var element = this.refs.textarea.getDOMNode();
            element.style.height = '0px';
            element.style.height = Math.max(element.scrollHeight, element.clientHeight) + 'px';
        }
    },
    paste: function (event) {
        if (event.clipboardData.getData) {
            var text = event.clipboardData.getData("Text") || '';
            var arr = text.split('\n');
            if (arr.length > 0) {
                this.textChangedLogic((this.props.item.text || '') + (arr[0] || '').trim());
                arr.shift();
                if (this.props.batchAdd && arr.length > 0) {
                    this.props.batchAdd(arr);
                }

                event.preventDefault();
            }
        }
    },
    textChanged: function (event) {
        this.textChangedLogic(event.target.value);
    },
    textChangedLogic: function (text) {
        var textOriginal = text;
        var text = (text.length < 151 ? text : text.substring(0, 147));

        if (textOriginal.length !== text.length) {
            text += '...';
        }

        this.props.item.text = text;

        this.forceUpdate();
    },
    keyPress: function (event) {
    },
    keyDown: function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            if (this.props.item.text) {
                if (this.props.nextItem) {
                    this.props.nextItem(this.props.index);
                }
            } else {
                app.lib.focus.next();
                this.removeItem();
            }
        }

        if (event.key === 'ArrowDown') {
            if (this.props.focusItem) {
                event.preventDefault();
                event.stopPropagation();
                this.props.focusItem(this.props.index + 1);
            }
        }

        if (event.key === 'ArrowUp') {
            if (this.props.focusItem) {
                event.preventDefault();
                event.stopPropagation();
                this.props.focusItem(this.props.index - 1);
            }
        }

        if (event.key === 'Backspace' && !this.props.item.text) {
            event.preventDefault();
            event.stopPropagation();
            this.removeItem();
        }
    },
    removeItem: function () {
        if (this.props.removeItem) {
            this.props.removeItem(this.props.index);
        }
    },
    checkItem: function () {
        this.props.item.checked = !this.props.item.checked;

        if (this.props.checkItem) {
            this.props.checkItem(this.props.index);
        }

        this.forceUpdate();
    },
    render: function () {
        var checkClass = this.props.item.checked ? 'icon-ok-blank' : 'icon-blank-empty';

        var textStyle;
        
        if (this.props.mode === 'list') {
            var textStyle = this.props.item.checked ? 'item-list-checked' : 'item-list-unchecked';
        } else {
            var textStyle = this.props.item.checked ? 'item-combo-checked' : 'item-combo-unchecked';
        }

        return (
            React.DOM.div({
                className: 'notelistitem ' + textStyle,
                'data-index': this.props.index
            },
                React.DOM.i({ className: 'licheck pointer ' + checkClass, onClick: this.checkItem }),
                React.DOM.textarea({
                    ref: 'textarea',
                    className: 'litext',
                    rows: 1,
                    placeholder: 'List item',
                    onChange: this.textChanged,
                    //onKeyDown: this.keyPress,
                    onKeyDown: this.keyDown,
                    onPaste: this.paste,
                    value: this.props.item.text
                }),
                this.props.choice && this.props.hasTags ?
                    React.DOM.div({ className: 'lichoice' },
                        app.view.content.component.choicetags({
                            tags: this.props.item.tags
                        })
                    )
                    : null,
                React.DOM.i({ className: 'lihandle icon-menu' }),
                React.DOM.i({ className: 'liremove icon-cancel', onClick: this.removeItem })
            )
        );
    },
    focus: function () {
        this.refs.textarea.getDOMNode().focus();
        return true;
    },
    validate: function (focus) {
        return true;
    }
});
app.view.item.listitem = app.view.item.listitem || {};
app.view.item.listitem.view = app.lib.element({
    displayName: 'item.listitem.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getDefaultProps: function () {
        return {
            item: {
                checked: false,
                text: '',
                tags: [],
                value: null
            },
            nextItem: null
        };
    },
    getInitialState: function () {
        return {};
    },
    componentWillReceiveProps: function (nextProps) {
    },
    checkItem: function () {
        if (!this.props.choice) {
            this.props.item.checked = !this.props.item.checked;
            this.forceUpdate();
            this.props.save();
        } else {
            if (this.props.choice && this.props.viewMode === 'edit') {
                this.props.item.checked = !this.props.item.checked;

                if (this.props.checkItem) {
                    this.props.checkItem(this.props.index);
                }

                this.forceUpdate();
            }
        }
    },
    prevent: function (event) {
        if (!this.props.choice) {
            event.preventDefault();
            event.stopPropagation();
        }
    },
    render: function () {
        var checkClass = this.props.item.checked ? 'icon-ok-blank' : 'icon-blank-empty';

        var textStyle;

        if (this.props.mode === 'list') {
            var textStyle = this.props.item.checked ? 'item-list-checked' : 'item-list-unchecked';
        } else {
            var textStyle = this.props.item.checked ? 'item-combo-checked' : 'item-combo-unchecked';
        }

        var style = {};
        if (!this.props.item.text) {
            style['color'] = 'rgba(10, 10, 10, 0.40)';
        }

        var canCheck = !this.props.choice || (this.props.choice && this.props.viewMode === 'edit');

        return (
            React.DOM.div({ className: 'notelistitem ' + textStyle },
                React.DOM.i({ className: 'licheck ' + checkClass + (canCheck ? ' pointer' : ''), onClick: this.checkItem, onDoubleClick: this.prevent }),
                React.DOM.div({
                    style: style,
                    className: 'litext'
                }, this.props.item.text || 'List item')
            )
        );
    },
    focus: function () {
        return true;
    },
    validate: function (focus) {
        return true;
    }
});
app.view.item.combo = app.view.item.combo || {};
app.view.item.combo.edit = app.lib.element({
    displayName: 'item.combo.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    componentDidUpdate: function (prevProps, prevState) {
    },

    getInitialState: function () {
        return {};
    },

    componentWillReceiveProps: function (nextProps) {
    },

    onChange: function (index) {
        if (index >= 0) {
            this.props.data.data.items[index].checked = true;
            this.props.checkItem(index);
        } else {
            this.props.checkItem(index);
        }
    },

    onClick: function (event) {
        var menu = {
            type: 'textmenu',
            items: []
        };

        menu.items = _.map(this.props.data.data.items, function (item, index) {
            return {
                icon: item.checked ? 'icon-dot-circled' : 'icon-circle-empty',
                text: item.text,
                callback: this.onChange.bind(this, index)
            }
        }, this);

        menu.items = _.filter(menu.items, function (item) {
            return item.text;
        });

        if (menu.items.length > 0) {
            menu.items.push({
                icon: 'icon-cancel',
                text: 'Unselect',
                callback: this.onChange.bind(this, -1)
            });
        }

        app.events.trigger('contextmenu', event.target, menu, 'bottom', 'middle');
    },

    render: function () {
        var selected = _.find(this.props.data.data.items, function (item) {
            return item.checked;
        });

        return (
            React.DOM.div({ className: 'combo', onClick: this.onClick },
                React.DOM.div({ className: 'combo-content' }, selected ? selected.text : '- Not selected -'),
                React.DOM.i({ className: 'combo-indicator icon-down-dir' })
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
app.view.item.combo = app.view.item.combo || {};
app.view.item.combo.view = app.lib.element({
    displayName: 'item.combo.view',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],

    componentWillMount: function () {
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    componentDidUpdate: function (prevProps, prevState) {
    },

    getInitialState: function () {
        return {};
    },

    componentWillReceiveProps: function (nextProps) {
    },

    render: function () {
        var selected = _.find(this.props.data.data.items, function (item) {
            return item.checked;
        });

        return (
            React.DOM.div({ className: 'combo' },
                React.DOM.div({ className: 'combo-content' }, selected ? selected.text : '- Not selected -'),
                this.props.context==='tracker'?
                    React.DOM.i({ className: 'combo-indicator icon-down-dir' }):
                    null
            )
        );
    }
});
app.view.item.choice = app.view.item.choice || {};
app.view.item.choice.edit = app.lib.element({
    displayName: 'item.choice.edit',

    checkItem: function (index) {
        if (index==-1 || this.props.data.data.combo && this.props.data.data.items[index].checked) {
            _.each(this.props.data.data.items, function (item, itemIndex) {
                if (itemIndex !== index && item.checked) {
                    item.checked = false;
                    this.checkItem(itemIndex);
                }
            }, this);

            if (index >= 0) {
                this.props.data.data.items[index].checked = true;
            }

            this.forceUpdate();
        }

        if (index >=0 && this.props.context === 'note') {
            var item = this.props.data.data.items[index];
            if (item && item.tags && item.tags.length>0) {
                if (item.checked) {
                    _.each(item.tags, function (tag) {
                        this.props.model.appendTag(tag, this.props.context);
                    }, this);
                } else {
                    var checkedTags = _.reduce(this.props.data.data.items, function (memo, item) {
                        if (item.checked && item.tags && item.tags.length>0) {
                            memo.push(item.tags);
                        }
                        return memo;
                    }, [], this);

                    checkedTags = _.uniq(_.flatten(checkedTags));

                    var diff = _.difference(item.tags, checkedTags);

                    var tagsToRemove = diff.length > 0 ? diff : item.tags;

                    _.each(tagsToRemove, function (tag) {
                        this.props.model.deleteTag(tag, this.props.context);
                    }, this);
                }
            }
        }
    },

    render: function () {
        var props = _.clone(this.props);

        props.choice = true;
        props.mode = 'choice';
        props.checkItem = this.checkItem;

        if (this.props.context === 'tracker') {
            return app.view.item.list.edit(props);
        } else {
            if (!this.props.data.data.combo) {
                props.viewMode = 'edit';
                return app.view.item.list.view(props);
            } else {
                props.viewMode = 'edit';
                return app.view.item.combo.edit(props);
            }
        }
    },
    validate: function (focus) {
        return true;
    },
    statics: {
        hasOptions: true
    }
});
app.view.item.choice = app.view.item.choice || {};
app.view.item.choice.view = app.lib.element({
    displayName: 'item.choice.view',
    render: function () {
        var props = _.clone(this.props);

        props.choice = true;
        props.mode = 'choice';

        if (this.props.context === 'tracker') {
            if (!this.props.data.data.combo) {
                return app.view.item.list.view(props);
            } else {
                return app.view.item.combo.view(props);
            }
        } else {
            if (!this.props.data.data.combo) {
                props.viewMode = 'view';
                return app.view.item.list.view(props);
            } else {
                props.viewMode = 'view';
                return app.view.item.combo.view(props);
            }
        }
    }
});
app.view.item.stopwatch = app.view.item.stopwatch || {};
app.view.item.stopwatch.edit = app.lib.element({
    displayName: 'item.stopwatch.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.update();
        this.toggleTickListner();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {
            running: false,
            ellapsed: 0,
            editing: null
        };
    },
    update: function () {
        var ellapsed = this.props.data.data.ellapsed;
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            ellapsed += app.lib.dateUTC().getTime() - periods[periods.length - 1].started;
        }

        this.setState({
            ellapsed: ellapsed
        });
    },
    start: function () {
        this.view();
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();
    },
    stop: function () {
        this.view();
        var periods = this.props.data.data.periods;
        if (periods && periods.length > 0) {
            periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
            this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        }
        this.toggleTickListner();
    },
    reset: function () {
        this.view();
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();
    },
    toggleTickListner: function () {
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            app.events.on('tick:seconds', this.update, this);
            this.setState({ running: true });
        } else {
            app.events.off('tick:seconds', null, this);
            this.setState({ running: false });
        }
    },
    edit: function () {
        var date = new Date(this.state.ellapsed);
        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        this.stop();

        this.setState({
            editing: dateString
        }, function () {
            this.refs.input.getDOMNode().focus()
        }.bind(this));
    },
    view: function () {
        if (this.state.editing !== null) {
            this.setState({
                editing: null
            }, this.update);
        }
    },
    onChange: function (event) {
        var regex = /^(((\d+)?(:([0-5]?\d)?)?(:([0-5]?\d)?)?)|((\d+)?([,\.])?(\d+)?))$/gi
        var value = event.target.value;

        if (regex.test(value)) {
            //var value = this.state.editing;
            var val = 0;
            if (value.indexOf(':') >= 0) {
                var arr = value.split(':');

                if (arr[0]) {
                    val += parseInt(arr[0]) * 1000 * 60 * 60;
                }
                if (arr[1]) {
                    val += parseInt(arr[1]) * 1000 * 60;
                }
                if (arr[2]) {
                    val += parseInt(arr[2]) * 1000;
                }
            } else {
                value = value.replace(',', '.');
                val = Math.round(parseFloat(value) * 1000 * 60 * 60);
            }

            this.props.data.data.periods = [];
            this.props.data.data.periods.push({
                started: 0,
                stopped: val
            });

            this.props.data.data.ellapsed = val;

            this.setState({
                editing: value
            });
        }
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands' },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands' },
                    React.DOM.div({ className: 'left', onClick: this.stop }, React.DOM.i({ className: 'icon-pause' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
        }

        var date = new Date(this.state.ellapsed);

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        return (
            React.DOM.div({ className: 'stopwatch field' },
                React.DOM.div({ className: 'block' },
                    this.state.editing !== null ?
                        React.DOM.input({
                            className: 'value',
                            value: this.state.editing,
                            onBlur: this.view,
                            ref: 'input',
                            placeholder: 'Blank time',
                            onChange: this.onChange
                        }) :
                        React.DOM.div({
                            className: 'value',
                            onClick: this.edit
                        }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions blank' }) : null
            )
        );
    },
    focus: function () {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
app.view.item.stopwatch = app.view.item.stopwatch || {};
app.view.item.stopwatch.view = app.lib.element({
    displayName: 'item.stopwatch.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.update();
        this.toggleTickListner();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {
            running: false,
            ellapsed: 0
        };
    },
    update: function () {
        var ellapsed = this.props.data.data.ellapsed;
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            ellapsed += app.lib.dateUTC().getTime() - periods[periods.length - 1].started;
        }

        this.setState({
            ellapsed: ellapsed
        });
    },
    start: function () {
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();

        this.save();
    },
    stop: function () {
        var periods = this.props.data.data.periods;
        periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
        this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        this.toggleTickListner();

        this.save();
    },
    reset: function () {
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();

        this.save();
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    toggleTickListner: function () {
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            app.events.on('tick:seconds', this.update, this);
            this.setState({ running: true });
        } else {
            app.events.off('tick:seconds', null, this);
            this.setState({ running: false });
        }
    },
    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.stop }, React.DOM.i({ className: 'icon-pause' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
        }

        var date = new Date(this.state.ellapsed);
        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        return (
            React.DOM.div({ className: 'stopwatch field' },
                React.DOM.div({ className: 'block' },
                    React.DOM.div({ className: 'value' }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    null
                ) : null
            )
        );
    },
    focus: function () {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
app.view.item.countdown = app.view.item.countdown || {};
app.view.item.countdown.edit = app.lib.element({
    displayName: 'item.countdown.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.update();
        this.toggleTickListner();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {
            running: false,
            ellapsed: 0,
            editing: null
        };
    },
    update: function () {
        var ellapsed = this.props.data.data.ellapsed;
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            ellapsed += app.lib.dateUTC().getTime() - periods[periods.length - 1].started;
        }

        this.setState({
            ellapsed: ellapsed
        });
    },
    start: function () {
        this.view();
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();
    },
    stop: function () {
        this.view();
        var periods = this.props.data.data.periods;
        if (periods && periods.length > 0) {
            periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
            this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        }
        this.toggleTickListner();
    },
    reset: function () {
        this.view();
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();
    },
    toggleTickListner: function () {
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            app.events.on('tick:seconds', this.update, this);
            this.setState({ running: true });
        } else {
            app.events.off('tick:seconds', null, this);
            this.setState({ running: false });
        }
    },
    edit: function () {
        var date = new Date(Math.max(this.props.data.data.start - this.state.ellapsed, 0));

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        this.stop();

        this.setState({
            editing: dateString
        }, function () {
            this.refs.input.getDOMNode().focus()
        }.bind(this));
    },
    view: function () {
        if (this.state.editing !== null) {
            this.setState({
                editing: null
            }, this.update);
        }
    },
    onChange: function (event) {
        var regex = /^(((\d+)?(:([0-5]?\d)?)?(:([0-5]?\d)?)?)|((\d+)?([,\.])?(\d+)?))$/gi
        var value = event.target.value;

        if (regex.test(value)) {
            //var value = this.state.editing;
            var val = 0;
            if (value.indexOf(':') >= 0) {
                var arr = value.split(':');

                if (arr[0]) {
                    val += parseInt(arr[0]) * 1000 * 60 * 60;
                }
                if (arr[1]) {
                    val += parseInt(arr[1]) * 1000 * 60;
                }
                if (arr[2]) {
                    val += parseInt(arr[2]) * 1000;
                }
            } else {
                value = value.replace(',', '.');
                val = Math.round(parseFloat(value) * 1000 * 60 * 60);
            }

            this.props.data.data.periods = [];
            this.props.data.data.periods.push({
                started: 0,
                stopped: val
            });

            this.props.data.data.start = val;
            this.props.data.data.ellapsed = 0;

            this.setState({
                editing: value
            });
        }
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands' },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands' },
                    React.DOM.div({ className: 'left', onClick: this.stop }, React.DOM.i({ className: 'icon-pause' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
        }


        var ms = this.props.data.data.start - this.state.ellapsed;

        var date = new Date(Math.max(ms, 0));

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        return (
            React.DOM.div({ className: 'stopwatch field' },
                React.DOM.div({ className: 'block' },
                    this.state.editing !== null ?
                        React.DOM.input({
                            className: 'value' + (ms < 0 ? ' blink' : ''),
                            value: this.state.editing,
                            onBlur: this.view,
                            ref: 'input',
                            placeholder: 'Blank time',
                            onChange: this.onChange
                        }) :
                        React.DOM.div({
                            className: 'value' + (ms < 0 ? ' blink' : ''),
                            onClick: this.edit
                        }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions blank' }) : null
            )
        );
    },
    focus: function () {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
app.view.item.countdown = app.view.item.countdown || {};
app.view.item.countdown.view = app.lib.element({
    displayName: 'item.countdown.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.update();
        this.toggleTickListner();
    },
    componentWillUnmount: function () {
        app.events.off(null, null, this);
    },
    componentDidMount: function () {
    },
    componentDidUpdate: function (prevProps, prevState) {
    },
    getInitialState: function () {
        return {
            running: false,
            ellapsed: 0
        };
    },
    update: function () {
        var ellapsed = this.props.data.data.ellapsed;
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            ellapsed += app.lib.dateUTC().getTime() - periods[periods.length - 1].started;
        }

        this.setState({
            ellapsed: ellapsed
        });
    },
    start: function () {
        this.props.data.data.periods.push({
            started: app.lib.dateUTC().getTime(),
            stopped: null
        });
        this.toggleTickListner();

        this.save();
    },
    stop: function () {
        var periods = this.props.data.data.periods;
        periods[periods.length - 1].stopped = app.lib.dateUTC().getTime();
        this.props.data.data.ellapsed += periods[periods.length - 1].stopped - periods[periods.length - 1].started;
        this.toggleTickListner();

        this.save();
    },
    reset: function () {
        this.props.data.data.periods = [];
        this.props.data.data.ellapsed = 0;
        this.update();
        this.toggleTickListner();

        this.save();
    },
    save: function () {
        this._save = this._save || _.debounce(this.saveLogic, 1500);
        this._save();
    },
    saveLogic: function () {
        this.props.model.save(this.props.context);
    },
    componentWillReceiveProps: function (nextProps) {
    },
    toggleTickListner: function () {
        var periods = this.props.data.data.periods;
        if (periods.length > 0 && !periods[periods.length - 1].stopped) {
            app.events.on('tick:seconds', this.update, this);
            this.setState({ running: true });
        } else {
            app.events.off('tick:seconds', null, this);
            this.setState({ running: false });
        }
    },
    prevent: function (event) {
        event.preventDefault();
        event.stopPropagation();
    },
    render: function () {
        var commands;

        switch (this.state.running) {
            case false:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.start }, React.DOM.i({ className: 'icon-play' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
            case true:
                commands = React.DOM.div({ className: 'commands', onClick: this.prevent, onDoubleClick: this.prevent },
                    React.DOM.div({ className: 'left', onClick: this.stop }, React.DOM.i({ className: 'icon-pause' })),
                    React.DOM.div({ className: 'right', onClick: this.reset }, React.DOM.i({ className: 'icon-arrows-cw' }))
                );
                break;
        }

        var ms = this.props.data.data.start - this.state.ellapsed;
        var date = new Date(Math.max(ms, 0));

        var dateString = app.lib.pad((date.getUTCDate() - 1) * 24 + date.getUTCHours(), 2) + ':' + app.lib.pad(date.getUTCMinutes(), 2) + ':' + app.lib.pad(date.getUTCSeconds(), 2);

        return (
            React.DOM.div({ className: 'stopwatch field' },
                React.DOM.div({ className: 'block' },
                    React.DOM.div({ className: 'value' + (ms < 0 ? ' blink' : '') }, dateString),
                    commands
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    null
                ) : null
            )
        );
    },
    focus: function () {
        return true;
    },
    statics: {
        hasOptions: false
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.tag = app.view.item.tag || {};
app.view.item.tag.edit = app.lib.element({
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.focus],
    displayName: 'item.tag.edit',
    toggle: function () {
        this.forceUpdate(this.refocus);
    },
    componentWillMount: function () {
        this.props.model.on('update:tag', this.toggle, this);
        this.props.model.on('update:tag.name', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    changeText: function (event) {
        this.props.model.update({ tag: { name: { $set: event.target.value } } });
    },
    keyPress: function (event) {
        if (event.key === 'Enter') {
            app.lib.focus.next();
            event.preventDefault();
        }
    },
    render: function () {
        if (this.props.model.data('tag')) {
            var status = this.props.model.getStatus();
            var color = { 'color': app.lib.color(this.props.model.data().color) };

            var placeholder = (this.props.context==='tag' && this.props.model.tags().length > 0)?
                'Sub tag name':
                app.config.context[this.props.context].placeholder.header;

            return (
                React.DOM.div({ className: "notetag" },
                    app.view.item.contextswitch.edit({
                        context: this.props.context,
                        switchContext: this.props.switchContext,
                        model: this.props.model
                    }),
                    React.DOM.textarea({
                        ref: 'input',
                        rows: 1,
                        onKeyDown: this.keyPress,
                        placeholder: placeholder,
                        value: this.props.model.data().tag.name,
                        onChange: this.changeText
                    }),
                    React.DOM.div({ className: 'tagstatus' },
                        status === 'link' ? React.DOM.i({ className: 'link icon-link-alt', style: color }) : null,
                        status === 'error' ? React.DOM.i({ className: 'error icon-error' }) : null
                    )
                )
            );
        }
        else {
            return (
                React.DOM.div({className:'hide'})
            );
        }
    },
    focus: function () {
        if (this.props.model.data('tag')) {
            this.refs.input.getDOMNode().focus();
            return true;
        }
        return true;
    },
    validate: function (focus) {
        var status = this.props.model.getStatus();
        if (status === 'error') {
            if (focus) {
                this.focus();
            }
            return false;
        }
        if (this.props.model.data('tag')) {
            if (_.trim(this.props.model.data('tag').name).length === 0) {
                if (focus) {
                    this.focus();
                }
                return false;
            }
        }
        return true;
    },
    refocus: function () {
        this.props.events.trigger('focus:set');
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.tag = app.view.item.tag || {};
app.view.item.tag.view = app.lib.element({
    displayName: 'item.tag.view',
    mixins: [app.lib.mixins.rootParent],
    render: function () {
        if (!!this.props.model.data().tag) {
            return (
                React.DOM.div({ className: "notetag" },
                    app.view.item.contextswitch.view({
                        context: this.props.context,
                        switchContext: this.props.switchContext,
                        model: this.props.model
                    }),
                    React.DOM.div({ className: 'name' }, this.props.model.data().tag.name)
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.tagbody = app.view.item.tagbody || {};
app.view.item.tagbody.edit = app.lib.element({
    displayName: 'item.tagbody.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:tag.name', this.forceUpdate.bind(this, null), this);
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    changeText: function (text) {
        this.props.model.update({ tag: { name: { $set: text } } });
    },
    render: function () {

        return (
            React.DOM.div({ className: 'container' },
                React.DOM.div({ className: 'wrapper' },
                    React.DOM.div({ className: 'itemgroup' },
                        app.view.item.text.edit({
                            ref: app.lib.cid(),
                            model: this.props.model,
                            data: {
                                data: {
                                    text: this.props.model.data().tag.name
                                }
                            },
                            changed: this.changeText,
                            context: 'tag',
                            events: this.props.events,
                            rootParent: this.props.rootParent
                        })
                    )
                )
            )
        );
    }
});
/// <reference path="../../../lib/react.js" />

app.view.item.tagbody = app.view.item.tagbody || {};
app.view.item.tagbody.view = app.lib.element({
    displayName: 'item.tagbody.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        return (
            React.DOM.div({ className: 'container' },
                React.DOM.div({ className: 'wrapper' },
                    React.DOM.div({ className: 'itemgroup' },
                        app.view.item.text.view({
                            data: {
                                data: {
                                    text: this.props.model.data().tag.name
                                }
                            },
                            rootParent: this.props.rootParent
                        })
                    )
                )
            )
        );
    }
});
app.view.item.tags = app.view.item.tags || {};
app.view.item.tags.edit = app.lib.element({
    displayName: 'item.tags.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize, app.lib.mixins.focus],
    componentWillMount: function () {
        this.props.model.on('update:tags', this.forceUpdate.bind(this,null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        return (
            app.view.components.tagbox({
                ref: app.lib.cid(),
                tags: _.pluck(this.props.model.data('tags'), '_id'),
                addTag: this.addTag,
                removeTag: this.removeTag,
                events: this.props.events,
                onClickTag: this.onClickTag,
                save: true,
                rootParent: this.props.rootParent
            })
        );
    },
    replaceTag: function (prev, next) {
        this.props.model.deleteTag(prev, this.props.context);
        this.props.model.appendTag(next, this.props.context);
    },
    onClickTag: function (event, tag) {
        var id = tag.get('_id');
        var tags = app.data.account.tagLinkHash[id];

        if (tags) {
            var menu = {
                type: 'tagmenu',
                tags: tags,
                tag: id,
                onClick: this.replaceTag
            };

            app.events.trigger('contextmenu', event.target, menu, 'bottom');
        }
    },
    addTag: function (tag) {
        this.props.model.appendTag(tag, this.props.context);
    },
    removeTag: function (tag) {
        this.props.model.deleteTag(tag, this.props.context);
    }
});
app.view.item.tags = app.view.item.tags || {};
app.view.item.tags.view = app.lib.element({
    displayName: 'item.tags.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.resolveTags();
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidBlur: function (event) {
    },
    componentWillReceiveProps: function () {
        this.resolveTags();
    },
    resolveTags: function () {

        var tags = _.difference(_.pluck(this.props.model.tags(),'_id'), this.rootParent().getTagsToHide());

        var selected = _.map(tags, function (tag) {
            return app.data.tags.get(tag);
        });

        this.setState({
            selected: selected
        });
    },
    getInitialState: function () {
        return {
            selected: []
        };
    },
    render: function () {
        var showInboxTag = app.navigation.view !== 'inbox' && this.props.model.data('status') === 'inbox';

        if (!showInboxTag && this.state.selected.length === 0) {
            return null
        }

        return (
            React.DOM.div({ className: "notefooter" },
                React.DOM.div({ className: 'tags' },
                    showInboxTag ?
                        app.view.components.tag({
                            tag: app.data.misc.inboxTag,
                        }) : null,
                    _.map(this.state.selected, function (tag) {
                        return app.view.components.tag({
                            key: app.lib.uidmap(tag.get('_id')),
                            tag: tag,
                            onClickTag: this.onClickTag
                        });
                    }, this)
                )
            )
        );
    },
    replaceTag: function (prev, next) {
        this.props.model.deleteTag(prev, this.props.context);
        this.props.model.appendTag(next, this.props.context);

        this.resolveTags();
        this.props.model.save(this.props.context);
    },
    onClickTag: function (event, tag) {
        var id = tag.get('_id');
        var tags = app.data.account.tagLinkHash[id];

        if (tags) {
            var menu = {
                type: 'tagmenu',
                tags: tags,
                tag: id,
                onClick: this.replaceTag
            };

            app.events.trigger('contextmenu', event.target, menu, 'bottom');
        }
    }
});
app.view.item.text = app.view.item.text || {};
app.view.item.text.edit = app.lib.element({
    displayName: 'item.text.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
    },
    componentDidMount: function () {
        this.resizeTextareaLogic();
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.text !== prevState.text) {
            this.resizeTextarea();
        }
    },
    update: function () {
        this.forceUpdate(function () {
            this.resizeTextarea();
        });
    },
    getInitialState: function () {
        return {
            text: this.props.data.data.text
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({ text: nextProps.data.data.text });
    },
    resizeTextarea: function () {
        this.resizeTextareaThrottled = this.resizeTextareaThrottled || _.throttle(this.resizeTextareaLogic, 150);
        this.resizeTextareaThrottled();
    },
    resizeTextareaLogic: function () {
        var element = this.refs.textarea.getDOMNode();

        element.style.height = '0px';
        var newHeight = Math.max(element.scrollHeight, element.clientHeight) + 'px';

        element.style.height = newHeight;
        this.refs.wrapper.getDOMNode().style.height = newHeight;
    },
    paste: function (event) {
        if (!this.props.data.data.text) {
            if (event.clipboardData.getData) {
                event.preventDefault();
                this.changeTextLogic(event.clipboardData.getData('Text').trim());
            }
        }
    },
    changeTextLogic: function (text) {
        if (text.length < app.config.maxNoteLength+1) {
            this.props.data.data.text = text;
        } else {
            this.props.data.data.text = text.substring(0, app.config.maxNoteLength);
        }

        if (this.props.changed) {
            this.props.changed(text);
        }

        this.setState({
            text: this.props.data.data.text
        });
    },
    changeText: function (event) {
        this.changeTextLogic(event.target.value)
    },
    fontStyle: function () {
        var length = this.state.text && this.state.text.length || 0;
        var size = this.props.data.data.size || app.lib.getFontSize(length);

        var style = {
            fontSize: size + 'px'
        };

        if (size < 22) {
            style['fontWeight'] = 300;
        }

        if (this.props.data.data.bold) {
            style['fontWeight'] = size < 22 ? 400 : 300;
        }

        if (this.props.data.data.underline) {
            style['textDecoration'] = 'underline';
        }

        if (this.props.data.data.italic) {
            style['fontStyle'] = 'italic';
        }

        if (this.props.data.data.center) {
            style['textAlign'] = 'center';
        }

        return style;
    },
    keyPress: function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            app.lib.focus.next();

            event.preventDefault();
            event.stopPropagation();
        }
    },
    render: function () {
        var placeholder = (this.props.context === 'tag' && this.props.model.tags().length > 0) ?
            'Sub tag name' :
            app.config.context[this.props.context].placeholder.blockValue;

        var data = this.props.data.data;

        return (
            React.DOM.div({ className: "text inputwrapper" },
                React.DOM.div({ ref: 'wrapper' },
                    React.DOM.textarea({
                        ref: 'textarea',
                        className: "textarea",
                        onChange: this.changeText,
                        onPaste: this.paste,
                        value: this.state.text,
                        style: this.fontStyle(),
                        onFocus: this.onFocus,
                        placeholder: placeholder,
                        onKeyDown: this.keyPress
                    })
                ),
                this.props.showOptions ? React.DOM.div({ className: 'itemoptions' },
                    React.DOM.i({ className: 'icon-bold' + (!data.bold ? ' inactive' : ''), onClick: this.toggleBold, title: 'Toggle bold' }),
                    React.DOM.i({ className: 'icon-underline' + (!data.underline ? ' inactive' : ''), onClick: this.toggleUnderline, title: 'Toggle underline' }),
                    React.DOM.i({ className: 'icon-italic' + (!data.italic ? ' inactive' : ''), onClick: this.toggleItalic, title: 'Toggle italic' }),
                    React.DOM.i({ className: 'icon-align-center' + (!data.center ? ' inactive' : ''), onClick: this.toggleCenter, title: 'Toggle center alignment' }),
                    React.DOM.i({ className: 'icon-fontsize' + (data.size !== 17 ? ' inactive' : ''), onClick: this.toggleSize, title: 'Toggle force small font size' })
                ) : null
            )
        );
    },
    validate: function (focus) {
        return true;
    },
    onFocus: function () {
        this.focus();
    },
    focus: function () {
        this.refs.textarea.getDOMNode().focus();
        return true;
    },
    toggleBold: function () {
        this.props.data.data.bold = !this.props.data.data.bold;
        this.update();
    },
    toggleUnderline: function () {
        this.props.data.data.underline = !this.props.data.data.underline;
        this.update();
    },
    toggleItalic: function () {
        this.props.data.data.italic = !this.props.data.data.italic;
        this.update();
    },
    toggleCenter: function () {
        this.props.data.data.center = !this.props.data.data.center;
        this.update();
    },
    toggleSize: function () {
        this.props.data.data.size = this.props.data.data.size ? null : 17;
        this.update();
    },
    getMenuItems: function () {
        var items = [];

        items.push({
            icon: 'icon-bold',
            text: this.props.data.data.bold ? 'Remove bold' : 'Make bold',
            callback: this.toggleBold
        });

        return items;
    },
    statics: {
        hasOptions: true
    }
});
/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.item.text = app.view.item.text || {};
app.view.item.text.view = app.lib.element({
    displayName: 'item.text.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    componentDidUpdate: function () {
    },
    getInitialState: function () {
        return {};
    },
    fontStyle: function () {
        var text = this.props.data.data.text;

        var length = text && text.length || 0;

        var size = this.props.data.data.size || app.lib.getFontSize(length);

        var style = {
            fontSize: size + 'px'
        };

        if (size < 22) {
            style['fontWeight'] = 300;
        }

        if (this.props.data.data.bold) {
            style['fontWeight'] = size < 22 ? 400 : 300;
        }

        if (this.props.data.data.underline) {
            style['textDecoration'] = 'underline';
        }

        if (this.props.data.data.italic) {
            style['fontStyle'] = 'italic';
        }

        if (this.props.data.data.center) {
            style['textAlign'] = 'center';
        }

        if (!this.props.data.data.text /*this.props.context === 'tracker'*/) {
            style['color'] = 'rgba(10, 10, 10, 0.40)';
        }

        return style;
    },
    render: function () {
        var text = (/*this.props.context === 'tracker' &&*/ !this.props.data.data.text) ?
            app.config.context[this.props.context].placeholder.blockValue :
            this.props.data.data.text;

        return (
            React.DOM.div({ className: 'text field' },
                React.DOM.div({ className: "value", style: this.fontStyle() }, text)
            )
        );
    }
});
app.view.item.timestamp = app.view.item.timestamp || {};
app.view.item.timestamp.edit = app.lib.element({
    displayName: 'item.timestamp.edit',
    mixins: [app.lib.mixins.rootParent, app.lib.mixins.resize],
    componentWillMount: function () {
        this.props.model.on('update:options.timestamp', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        if (this.props.model.getOptions('timestamp') && this.props.model.data('created')) {
            return (
                React.DOM.div({ className: "timestamp" },
                    app.lib.dateTimeToString(this.props.model.data('created'))
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});
app.view.item.timestamp = app.view.item.timestamp || {};
app.view.item.timestamp.view = app.lib.element({
    displayName: 'item.timestamp.view',
    mixins: [app.lib.mixins.rootParent],
    componentWillMount: function () {
        this.props.model.on('update:options.timestamp', this.forceUpdate.bind(this, null), this);
    },
    componentWillUnmount: function () {
        this.props.model.off(null, null, this);
    },
    render: function () {
        if (this.props.model.getOptions('timestamp') && this.props.model.data('created')) {
            return (
                React.DOM.div({ className: "timestamp" },
                    app.lib.dateTimeToString(this.props.model.data('created'))
                )
            );
        }
        else {
            return (
                React.DOM.div({ className: 'hide' })
            );
        }
    }
});
app.view.item.contextswitch = app.view.item.contextswitch || {};
app.view.item.contextswitch.edit = app.lib.element({
    displayName: 'item.contextswitch.edit',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        var color = { 'color': app.lib.color(this.props.model.data().color) };

        return (
            React.DOM.div({ className: 'contextswitch', ref: 'contextswitch' },
                React.DOM.div({ className: 'currenctcontext' },
                    React.DOM.i({ className: app.config.context[this.props.context].icon, style: color })
                )
            )
        );
    }
});
app.view.item.contextswitch = app.view.item.contextswitch || {};
app.view.item.contextswitch.view = app.lib.element({
    displayName: 'item.contextswitch.view',
    componentWillMount: function () {
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    switchContext: function (context, event) {
        this.refs['contextswitch'].getDOMNode().style.display = 'none';
        setTimeout(function () {
            if (app.lib.isMounted(this)) {
                this.refs['contextswitch'].getDOMNode().style.display = null;
            }
        }.bind(this), 0);

        if (this.props.switchContext) {
            this.props.switchContext(context);
        }
    },
    render: function () {
        var color = { 'color': app.lib.color(this.props.model.data().color) };
        var contextList = _.filter(app.config.contextList, function (context) { return !!this.props.model.data(context.name); }, this);

        var colorBG = app.lib.color(this.props.model.data().color);


        if (contextList.length > 1) {
            return (
                React.DOM.div({ className: 'contextswitch view', ref: 'contextswitch' },
                    React.DOM.div({ className: 'currenctcontext' },
                        React.DOM.i({ className: app.config.context[this.props.context].icon, style: color }),

                        React.DOM.div({ className: 'contextindicator' },
                            _.map(contextList, function (context) {
                                return React.DOM.div({ className: 'item', key: context.name, style: (context.name === this.props.context ? { 'backgroundColor': colorBG } : {}) });
                            }, this)
                        )
                    ),
                    React.DOM.div({ className: 'switchcontext' },
                        _.map(_.sortBy(contextList, function (context) { return context.name === this.props.context ? 0 : 1; }, this), function (context) {
                            return React.DOM.i({ className: context.icon, style: color, key: context.name, onClick: this.switchContext.bind(this, context.name) });
                        }, this)
                    )
                )
            );
        } else {
            return app.view.item.contextswitch.edit(this.props);
        }
    }
});
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