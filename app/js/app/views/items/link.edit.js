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