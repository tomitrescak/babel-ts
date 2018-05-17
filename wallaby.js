// module.exports = function(wallaby) {
//   const testPathExp = 'src/**/*.test.ts?(x)';

//   process.env.NODE_ENV = 'test';

//   // var path = require('path');
//   // process.env.NODE_PATH +=
//   //   path.delimiter +
//   //   path.join(__dirname, 'node_modules/react-scripts/node_modules') +
//   //   path.delimiter +
//   //   path.join(__dirname, 'node_modules');

//   return {
//     files: [
//       'tsconfig.json',
//       'tsconfig.test.json',
//       'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
//       `!${testPathExp}`
//     ],

//     tests: [testPathExp],

//     env: {
//       type: 'node',
//       runner: 'node'
//     },

//     compilers: {
//       '**/*.ts?(x)': wallaby.compilers.babel({
//         sourceMap: true,
//         compact: false,
//         presets: ['@babel/react', '@babel/typescript'],
//         plugins: ['module:jsx-control-statements']
//       })
//     },

//     setup: wallaby => {
//       const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(
//         p => require.resolve('react-scripts/' + p),
//         '.',
//         []
//       );
//       Object.keys(jestConfig.transform || {}).forEach(
//         k => ~k.indexOf('^.+\\.(ts|tsx|js|jsx)') && void delete jestConfig.transform[k]
//       );
//       console.log(jestConfig);
//       delete jestConfig.testEnvironment;
//       wallaby.testFramework.configure(jestConfig);
//     },

//     testFramework: 'jest'
//   };
// };

module.exports = function(wallaby) {
  const testPathExp = 'src/**/*.test.ts?(x)';

  process.env.NODE_ENV = 'test';

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
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'es6',
        jsx: 'jsx'
      })
    },

    preprocessors: {
      '**/*.js?(x)': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: ['react-app'],
          plugins: ['module:jsx-control-statements', 'babel-plugin-styled-components']
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
