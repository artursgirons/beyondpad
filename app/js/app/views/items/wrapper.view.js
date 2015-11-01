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