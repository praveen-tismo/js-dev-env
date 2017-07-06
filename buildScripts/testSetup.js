//not transpiled, so must use commonjs & es5

// register babel to transpile code before tests run
require('babel-register')();

// disable features that Mocha doesn't understand
require.extensions['.css'] = function(){};
