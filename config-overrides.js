const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@styles': 'src/styles',
    '@utils': 'src/service',
    '@constants': 'src/constants',
    '@assets': 'src/assets'
  })(config);
  return config;
};
