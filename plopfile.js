const generateComponent = require('./generate/component');
// const generatePage = require('./generate/page');

module.exports = function (plop) {
  plop.setGenerator('component', generateComponent);
  // plop.setGenerator('page', generatePage);
};
