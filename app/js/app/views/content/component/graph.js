app.view.content.component.graph = app.lib.element({
    displayName: 'content.component.graph',
    render: function () {
        return (
            React.DOM.div({ className: 'graph' })
        );
    },
    componentDidMount: function () {
        var self = this;

        var visibleModels = _.filter(app.data.tags.models, function (tagModel) { return tagModel.isVisible(); });

        var nodes = _.map(visibleModels, function (tag) {
            return {
                data: {
                    id: tag.get('_id'),
                    name: tag.data('tag').name,
                    color: app.lib.color(tag.data('color')),
                    width: tag.data('tag').name.length * 12,
                    height: 25
                }
            };
        });

        var edges = _.map(app.data.tags.getEdges(), function (edge) {
            return {
                data: {
                    source: edge.child,
                    target: edge.parent
                }
            };
        });

        var options = {
            showOverlay: true,
            minZoom: 0.1,
            maxZoom: 2,
            layout: {
                name: 'springy',
                maxSimulationTime: 15000,
                ungrabifyWhileSimulating: false,
                fit: true,
                random: false
            },
            style: cytoscape.stylesheet()
              .selector('node')
                .css({
                    'shape': 'roundrectangle',
                    'content': 'data(name)',
                    'font-family': 'Roboto Slab, serif',
                    'font-size': 14,
                    'text-outline-width': 0,
                    'text-outline-color': '#fff',
                    'text-valign': 'center',
                    'color': '#444',
                    'width': 'data(width)',
                    'height': 'data(height)',
                    'border-width': 0.75,
                    'border-color': '#999',
                    'background-color': 'data(color)'
                })
              .selector(':selected')
                .css({
                    'border-width': 2,
                    'border-color': '#666',
                    'line-color': '#666',
                    'target-arrow-color': '#666',
                })
              .selector('edge')
                .css({
                    'width': 2,
                    'target-arrow-shape': 'triangle'
                }),
            elements: {
                nodes: nodes,
                edges: edges
            },
            ready: function () {
                self.cy = this;
                self.cy.boxSelectionEnabled(false);
            }
        };

        $('.graph').cytoscape(options);
    },
    componentWillUnmount: function () {
        if (this.cy) {
            this.cy.remove('*');
        }
    }
});