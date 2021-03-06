const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("src/js/main.js", "assets/js/main.js")
	.sass("src/scss/style.scss", "assets/css/style.css")
	.options({
		watchOptions: {
			ignored: /node_modules/,
		},
	});

if (mix.inProduction()) {
	mix.version();
}
