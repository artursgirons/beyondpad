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