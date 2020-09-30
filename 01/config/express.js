const response = require('../node_modules/express/lib/response');

module.exports = function () {
    const _render = response.render;

    response.render = function (viewName, data) {
        console.log(this, viewName, { ...data, name: 'demo', layout: false });
        _render.call(this, viewName, { ...data, name: 'demo', layout: false });
    }
}