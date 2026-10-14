const path = require('node:path');

module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [path.join(__dirname, 'src/styles/media.css')],
    },
    'postcss-custom-media': {},
    autoprefixer: {},
  },
};
