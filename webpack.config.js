var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: APP_DIR,
        port: 3333
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {   test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
}

module.exports = config
