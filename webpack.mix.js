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

mix.js('resources/js/app.js', 'public/js') //user for only admin  
   .js('resources/js/admin_childs_js/ac_main.js', 'public/js')  //user for admin childs
   .js('resources/js/website_js/w_main.js', 'public/js')  //use for website or auth client or customer

   .sass('resources/sass/app.scss', 'public/css') //user for all 
   .sass('resources/sass/style.scss', 'public/css') //user for only admin 
   .sass('resources/sass/auth_user_css/au_style.scss', 'public/css') // only auth client or customer 
   .sass('resources/sass/admin_childs_css/ac_style.scss', 'public/css') //user for admin childs
   .sass('resources/sass/website_css/w_style.scss', 'public/css'); //user for website
   //.version(); //if need to using cach, it is good for increasing speed. must be use to production server
   //.copy('node_modules/asap/asap.js', 'public/js'); //if need to copy some css or js file

//move vue chunks file to js/chunks folder. By default this will generated in Public folder 
mix.webpackConfig({
    output: {
        //chunkFilename: 'js/chunks/[name].[chunkhash].js',//replace with your path
        //chunkFilename: mix.inProduction() ? 'js/chunks/production/[name].[chunkhash].js' : 'js/chunks/[name].js'
        chunkFilename: mix.inProduction() ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js'
    },
});





