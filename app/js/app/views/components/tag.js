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