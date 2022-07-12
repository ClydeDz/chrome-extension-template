const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
	  "background": ["./src/background/index.js"],
	  "content_scripts": ["./src/content_scripts/index.js"],
	  "options": ["./src/options/scripts/index.js", "./src/options/styles/options.scss"],
	  "popup": ["./src/popup/scripts/index.js", "./src/popup/styles/popup.scss"],
	  "newtab": ["./src/newtab/scripts/index.js", "./src/newtab/styles/newtab.scss"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].css",
						}
					},
					{
						loader: "extract-loader"
					},
					{
						loader: "css-loader?-url"
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
						loader: "babel-loader",
						options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			}
		]
	},
  	plugins: [
		new CopyWebpackPlugin({
		patterns: [
			{ from: "./src/manifest.json" },
			{ from: "./src/options/options.html" },
			{ from: "./src/popup/popup.html" },
			{ from: "./src/newtab/newtab.html" },
			{ from: "icons/*", to: path.resolve(__dirname, "dist"), context: "src/" }
		]
		}),
	]
};
