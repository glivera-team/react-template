const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
	entry: {
		main: ['./src/index.js']
	},
	output: {
		filename: '[name].js',
		path: commonPaths.outputPath
	},
	module: {
		rules: [
			// {
			//     enforce: 'pre',
			//     test: /\.js$/,
			//     loader: 'eslint-loader',
			//     options: {
			//         failOnWarning: false,
			//         failOnerror: false
			//     },
			//     exclude: /node_modules/
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
			,
			{
				test: /\.(png|cur|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'i/[name].[ext]'
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new ExtractTextPlugin('[name].css'),
		new CleanPlugin(['../public'], {allowExternal: true}),
		new HtmlPlugin({
			filename: 'index.html',
			template: commonPaths.template,
			favicon: commonPaths.favicon,
			inject: true
		})
	]
};

module.exports = config;