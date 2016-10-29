/**
 * Created by comyn on 16-10-29.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        chunks: false
    }
}).listen(3000, '0.0.0.0', err => {
    if (err) {
        console.log(err)
    } else {
        console.log("listen on 3000")
    }
});