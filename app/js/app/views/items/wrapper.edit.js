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