const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/service');
    config.resolve.alias['@constants'] = path.resolve(
      __dirname,
      '../src/constants',
    );
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles');
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets');
    return config;
  },
};
