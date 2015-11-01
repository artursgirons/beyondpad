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