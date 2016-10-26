var path = require("path")
  , webpack = require('webpack')
  
module.exports = {
	cache: true,
	entry: "./app/entry.js",
	output: {
		publicPath: "",
		filename: "web.js",
	},
	module: {
		noParse: /sigma\.min\.js/,
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.jade$/, loader: "jade-loader" },
			{ test: /\.css$/,  loader: "style-loader!css-loader" },
			{ test: /\.png$/,  loader: "url-loader?limit=5000&minetype=image/png" }
		]
	},
  externals: {
    'fs': 'window',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
};
