const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
    mode: 'production',
    devtool: 'source-map',
		output: {
			filename: '[name]_[hash].js',
			path: commonPaths.outputPath
		},
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
				new htmlWebpackPlugin({
					title: 'React-Project',
					filename: 'index.html',
					template: commonPaths.template,
					favicon: commonPaths.favicon,
					'base': '/',
					hash: true
				})
    ]
};

module.exports = config;