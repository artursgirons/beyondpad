var tagData = function (ownerId) {
    var created = Date.now();
    var tag = {
        "__v": 0,
        "_data": {
            "status": "all",
            "color": "orange",
            "created": created,
            "modified": created,
            "tag": {
                "order": 830603559400.0,
                "name": "Tricks & Tips"
            }
        },
        "_owner": ownerId,
        "_demo": true
    };
    return tag;
}

var noteData = function (ownerId, tagId) {
    var created = Date.now();

    var data = [
        {
            "_data": {
                "status": "inbox",
                "color": "white",
                "created": created,
                "modified": created,
                "note": {
                    "order": 830748576300.0,
                    "items": [{
                        "data": {
                            "center": true,
                            "text": "Welcome to Beyondpad"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "3c9f"
                    }, {
                        "data": {
                            "hasImage": true,
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "text": "/img/demo/logo.png ",
                            "title": "",
                            "link": "/img/demo/logo.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "8ab5"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830705760763.0,
                    "items": [{
                        "uid": "fe5e",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Shift + Click"
                        }
                    }, {
                        "uid": "0681",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/multiselect.png",
                            "title": "",
                            "text": "/img/demo/multiselect.png ",
                            "size": {
                                "width": 260,
                                "height": 260
                            },
                            "hasImage": true
                        }
                    }, {
                        "uid": "80f1",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "or Ctrl + Click to select multiple notes at once",
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830652939900.0,
                    "items": [{
                        "uid": "93c0",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Context Bar"
                        }
                    }, {
                        "uid": "cd9b",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/contextbar.png",
                            "title": "",
                            "text": "/img/demo/contextbar.png ",
                            "size": {
                                "width": 260,
                                "height": 260
                            },
                            "hasImage": true
                        }
                    }, {
                        "uid": "08b6",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Three little dots on the top near search box forces context bar to show up to access more functions. Bar will automatically show up when selecting multiple notes",
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748471820.0,
                    "items": [{
                        "data": {
                            "center": true,
                            "text": "Navigation Panel\nMulti Select"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "9ddb"
                    }, {
                        "data": {
                            "hasImage": true,
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "text": "/img/demo/navigation.png ",
                            "title": "",
                            "link": "/img/demo/navigation.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "8621"
                    }, {
                        "data": {
                            "size": 17,
                            "text": "Tags created will appear in navigation panel. You can click on color icon to select multiple tags (used for filtering and populating tags field for new notes)"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "20f8"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748372800.0,
                    "items": [{
                        "uid": "942a",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Lists",
                            "bold": false
                        }
                    }, {
                        "uid": "d6cf",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "link": "/img/demo/lists.png",
                            "title": "",
                            "text": "/img/demo/lists.png ",
                            "hasImage": true
                        }
                    }, {
                        "uid": "11bb",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Lists make up boards. You can easily drag note between lists and they will change tags appropriately. Lists are basically custom filters and input conditions for notes",
                            "center": false,
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_owner": ownerId,
            "_demo": true,
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748374800.0,
                    "items": [{
                        "data": {
                            "bold": false,
                            "text": "Linked Tags",
                            "center": true
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "942a"
                    }, {
                        "data": {
                            "hasImage": true,
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "text": "/img/demo/linkedtags.png ",
                            "title": "",
                            "link": "/img/demo/linkedtags.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "d6cf"
                    }, {
                        "data": {
                            "size": 17,
                            "center": false,
                            "text": "Easily switch between related tags. Linked tags can be created under Settings"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "11bb"
                    }]
                }
            }
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748472980.0,
                    "items": [{
                        "data": {
                            "bold": false,
                            "text": "Types",
                            "center": true
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "942a"
                    }, {
                        "data": {
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "hasImage": true,
                            "text": "/img/demo/types.png ",
                            "title": "",
                            "link": "/img/demo/types.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "d6cf"
                    }, {
                        "data": {
                            "size": 17,
                            "center": false,
                            "text": "You can add types like checklist, stopwatch, numeric, link and choice (combo-box & drop-down list)"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "11bb"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748374300.0,
                    "items": [{
                        "data": {
                            "bold": false,
                            "text": "Boards",
                            "center": true
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "942a"
                    }, {
                        "data": {
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "hasImage": true,
                            "text": "/img/demo/boards.png ",
                            "title": "",
                            "link": "/img/demo/boards.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "d6cf"
                    }, {
                        "data": {
                            "size": 17,
                            "center": false,
                            "text": "Custom groups of related notes. Boards contain lists which are simply set of tags that act as filters and input conditions"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "11bb"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748431988.0,
                    "items": [{
                        "uid": "998c",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Trackers"
                        }
                    }, {
                        "uid": "6656",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/trackers.png",
                            "title": "",
                            "text": "/img/demo/trackers.png ",
                            "size": {
                                "width": 260,
                                "height": 260
                            },
                            "hasImage": true
                        }
                    }, {
                        "uid": "c621",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Trackers are like templates for notes. Useful to create things like default shopping list, work or expense trackers and more;\nTracker can be added to a note as tags, doing so will add tracker block to a note",
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "inbox",
                "color": "white",
                "created": created,
                "modified": created,
                "note": {
                    "order": 830748476300.0,
                    "items": [{
                        "uid": "96a3",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Tricks & Tips",
                            "center": true
                        }
                    }, {
                        "uid": "3467",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/tricksandtips.png",
                            "title": "",
                            "text": "/img/demo/tricksandtips.png ",
                            "size": {
                                "width": 260,
                                "height": 260
                            },
                            "hasImage": true
                        }
                    }, {
                        "data": {
                            "size": 17,
                            "text": "For what Beyondpad can do explore notes under \"Tricks & Tips\" tag. When you are done feel free to delete those notes and \"Tricks & Tips\" tag"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "44c1"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830645788300.0,
                    "items": [{
                        "data": {
                            "bold": false,
                            "text": "Options",
                            "center": true
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "942a"
                    }, {
                        "data": {
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "hasImage": true,
                            "text": "/img/demo/listoptions.png ",
                            "title": "",
                            "link": "/img/demo/listoptions.png"
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "d6cf"
                    }, {
                        "data": {
                            "size": 17,
                            "center": false,
                            "text": "Notes, tags, trackers and lists have additional options you can play around. Check them when you see three dots or a cog"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "11bb"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748475300.0,
                    "items": [{
                        "uid": "96a3",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Notes",
                            "center": true
                        }
                    }, {
                        "uid": "3467",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "size": {
                                "height": 260,
                                "width": 260
                            },
                            "link": "/img/demo/simplenote.png",
                            "title": "",
                            "text": "/img/demo/simplenote.png ",
                            "hasImage": true
                        }
                    }, {
                        "data": {
                            "size": 17,
                            "text": "As in any other note taking application you can easily create simple notes, but Beyondpad goes beyond..."
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "44c1"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748472400.0,
                    "items": [{
                        "uid": "9744",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Tags"
                        }
                    }, {
                        "uid": "6ad3",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/graph.png",
                            "title": "",
                            "text": "/img/demo/graph.png ",
                            "size": {
                                "width": 260,
                                "height": 260
                            },
                            "hasImage": true
                        }
                    }, {
                        "uid": "1094",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Tag is the central element for organizing notes, tags and trackers. They can be nested (tagged) and notes accessed by traversing tree of relations. You can also view graph as shown above under tags",
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830748375300.0,
                    "items": [{
                        "uid": "942a",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Choice Items",
                            "bold": false
                        }
                    }, {
                        "uid": "d6cf",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/choice.png",
                            "title": "",
                            "text": "/img/demo/choice.png ",
                            "hasImage": true,
                            "size": {
                                "width": 260,
                                "height": 260
                            }
                        }
                    }, {
                        "uid": "11bb",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Trackers can have combo-box & drop-down list. These items can have tags and trackers attached to them which when chosen will be added to a note",
                            "center": false,
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830663148725.0,
                    "items": [{
                        "data": {
                            "bold": false,
                            "text": "Lifecycle",
                            "center": true
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "942a"
                    }, {
                        "data": {
                            "hasImage": true,
                            "text": "/img/demo/status.png ",
                            "title": "",
                            "link": "/img/demo/status.png",
                            "size": {
                                "width": 260,
                                "height": 260
                            }
                        },
                        "name": null,
                        "type": "link",
                        "group": null,
                        "uid": "d6cf"
                    }, {
                        "data": {
                            "size": 17,
                            "center": false,
                            "text": "Notes can have four states, \"All\" and \"Inbox\" notes are accessible from Navigation Panel, \"Archived\" notes are not, but you can search for them and view them under \"Archived\" or by changing view mode from context bar.\nWhen you are done with a note but want to receive insights on it, \"Archive\" is the thing to do"
                        },
                        "name": null,
                        "type": "text",
                        "group": null,
                        "uid": "11bb"
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        },
        {
            "_data": {
                "status": "all",
                "color": "white",
                "created": created,
                "modified": created,
                "tags": [{
                    "_id": tagId
                }],
                "note": {
                    "order": 830649364100.0,
                    "items": [{
                        "uid": "942a",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "center": true,
                            "text": "Item Options",
                            "bold": false
                        }
                    }, {
                        "uid": "d6cf",
                        "group": null,
                        "type": "link",
                        "name": null,
                        "data": {
                            "link": "/img/demo/itemtypes.png",
                            "title": "",
                            "text": "/img/demo/itemtypes.png ",
                            "hasImage": true,
                            "size": {
                                "width": 260,
                                "height": 260
                            }
                        }
                    }, {
                        "uid": "11bb",
                        "group": null,
                        "type": "text",
                        "name": null,
                        "data": {
                            "text": "Different note items have different options, options are by default expanded when creating Trackers, but they are accessible from simple notes too by clicking on three dots",
                            "center": false,
                            "size": 17
                        }
                    }]
                }
            },
            "_owner": ownerId,
            "_demo": true
        }
    ];

    return data;
};

var Notes = require('./notes');
var db = require('../../setup/database');

module.exports = {
    create: function (ownerId, next) {
        ownerId = db.Types.ObjectId(ownerId);

        var tag = new Notes(tagData(ownerId));

        tag.save(function (err, tag) {
            if (err) {
                next();
            } else {
                var tagId = tag._id.toString();
                var notes = noteData(ownerId, tagId);
                Notes.collection.insert(notes, { multi: true }, function (err) {
                    next();
                });
            }
        });
    }
};
