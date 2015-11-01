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