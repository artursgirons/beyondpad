/// <reference path="../misc/globals.js" />
/// <reference path="../../lib/jquery.js" />
/// <reference path="../../lib/underscore.js" />
/// <reference path="../../lib/backbone.js" />
/// <reference path="../../lib/react.js" />
/// <reference path="../../lib/json2.js" />

app.view.layout.header = app.lib.element({
    displayName: 'layout.header',
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },
    render: function () {
        return (
            React.DOM.div({ id: "header" },
                React.DOM.span({ id: "title" }, 'Beyondpad'),
                React.DOM.span({ id: "search" },
                    React.DOM.input({ type: "text" }),
                    React.DOM.button(null,
                        React.DOM.i({ className: "icon-search" })
                    )
                ),
                React.DOM.div({ id: "account" },
                    React.DOM.span({ id: "accountname" }, 'Arturs Girons'),
                    React.DOM.span({ id: "accounticon" },
                    React.DOM.i({ className: "icon-user-round" }))
                )
            )
        );
    }
});