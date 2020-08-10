var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		bundle: './src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index_bundle.js',
	},
	module: {
		rules: [
			{
				use: { loader: 'babel-loader' },
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	plugins: [
		//   new webpack.optimize.CommonsChunkPlugin({
		//     names: ['vendor', 'manifest']
		//   }),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		//   new webpack.DefinePlugin({
		//     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		//   })
	],
}
