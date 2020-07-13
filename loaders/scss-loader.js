const sass = require('node-sass');

module.exports = function loader(scss) {

  let css = sass.renderSync({
    data: scss,
    outputStyle: 'compressed',
  });

  return ' module.exports = decodeURIComponent("' + encodeURIComponent(css.css.toString())
  + '");';

}