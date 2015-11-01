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