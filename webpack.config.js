const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.js|jsx/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
			path: path.resolve(__dirname, 'dist'),
		}),
	],
};
