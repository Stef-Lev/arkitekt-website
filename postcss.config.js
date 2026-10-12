const path = require('node:path');

module.exports = {
  plugins: {
    tailwindcss: {},
    '@csstools/postcss-global-data': {
      files: [path.join(__dirname, 'src/styles/media.css')],
    },
    'postcss-custom-media': {},
    autoprefixer: {},
  },
};
