const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/websiteJS/main.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/websiteCSS/main.scss', 'public/css');
   //.version(); //if need to using cach, it is good for increasing speed. must be use to production server
   //.copy('node_modules/asap/asap.js', 'public/js'); //if need to copy some css or js file

//move vue chunks file to js/chunks folder. By default this will generated in Public folder 
mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js',//replace with your path
    },
});


// // Override mix internal webpack output configuration

// mix.config.webpackConfig.output = {
//    //chunkFilename: 'js/[name].bundle.js',
//    publicPath: 'chunk/',
// };

/*mix.webpackConfig(webpack => {
	return {
		output: {
			publicPath: 'js/',
			//filename: '[name].js',
			//chunkFilename: 'js/[name].js',
		},
	};
});//*/

// mix.webpackConfig({
//     output: {
//         chunkFilename: 'js/[name].[chunkhash].js',
//     },
// });


