module.exports = {
	publicPath: './',
	//runtimeCompiler: true,

	css: {
		loaderOptions: {
			sass: {
				data: '\n          @import "@/assets/scss/index.scss";\n        '
			}
		}
	}
}
