const path = require('path');

module.exports = [{
    name: 'test',
    entry: './spec/index.spec.js',
    mode: 'production',
    output: {
        path: path.resolve('test/nodejs'),
        filename: 'test.js'
    }
}]
