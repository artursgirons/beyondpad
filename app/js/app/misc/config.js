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