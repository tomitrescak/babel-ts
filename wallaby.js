module.exports = function(wallaby) {
  const testPathExp = 'src/**/*.test.ts?(x)';

  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    wallaby.projectCacheDir +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules');

  return {
    files: [
      'tsconfig.json',
      'tsconfig.test.json',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      `!${testPathExp}`
    ],

    tests: [testPathExp],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('@babel/core'),
        presets: ['react-app']
      }),
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'React'
      })
    },

    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(
        p => require.resolve('react-scripts/' + p),
        '.',
        ['src']
      );
      Object.keys(jestConfig.transform || {}).forEach(
        k => ~k.indexOf('^.+\\.(ts|tsx|js|jsx)') && void delete jestConfig.transform[k]
      );
      console.log(jestConfig);
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};
