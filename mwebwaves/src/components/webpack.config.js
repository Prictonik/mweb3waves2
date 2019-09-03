module.export = {
	entry: [
		'./src/main.js'
	],
	output: {
		filename: 'build.js'
	},
	module: {
		rules: [

	   {
		text: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: "bable-loader"
		}
	   }
		]
	}
}
