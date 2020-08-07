//引入babel 可以让.js文件 使用import
//注意得node start 而不是 node preparetest
//现在不需要用这个文件 improt都改成require了 留作纪念
require('babel-register') ({
    presets: [ 'env' ]
})

module.exports = require('./preparetest.js')
