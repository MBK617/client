module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            containers: './src/containers',
            components: './src/components',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
