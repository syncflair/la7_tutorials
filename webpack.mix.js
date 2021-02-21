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

mix.js('resources/js/app.js', 'public/js') //user for all admins and website
   .js('resources/js/app-admin.js', 'public/js').vue({ version: 2 }); //user for all admins

   //.version(); //if need to using cach, it is good for increasing speed. must be use to production server
   //.copy('node_modules/asap/asap.js', 'public/js'); //if need to copy some css or js file

mix.sass('resources/sass/app.scss', 'public/css') //user for all 
   .sass('resources/sass/style.scss', 'public/css') //user for only admin 

   .sass('resources/sass/admin_child_style.scss', 'public/css') //user for only admin childs panel
   
   .sass('resources/sass/auth_user_style.scss', 'public/css'); // only auth client or customer 


   //.sass('resources/sass/admin_childs_css/ac_style.scss', 'public/css') //user for admin childs
   //.sass('resources/sass/website_css/w_style.scss', 'public/css'); //user for website
  

/*
*You can also combine multiple JavaScript files into a single file using the scripts() method.
*/ 
// mix.scripts([
//     'public/js/admin.js',
//     'public/js/dashboard.js'
// ], 'public/js/all.js');


/*
* If you would just like to concatenate some plain CSS stylesheets into a single file, you may use the styles method.
*/
// mix.styles([
//     'public/css/vendor/normalize.css',
//     'public/css/vendor/videojs.css'
// ], 'public/css/all.css');

/*
* Versioning / Cache Busting
* versioned files are usually unnecessary in development, you may instruct the versioning process to only run during npm run prod:
*/
if (mix.inProduction()) {
    mix.version();
}

/*
* move vue chunks file to js/chunks folder. By default this will generated in Public folder 
*/
mix.webpackConfig({   

    output: {
        //chunkFilename: 'js/chunks/[name].[chunkhash].js',//replace with your path
        //chunkFilename: mix.inProduction() ? 'js/chunks/production/[name].[chunkhash].js' : 'js/chunks/[name].js'
        chunkFilename: mix.inProduction() ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js'
    },

    // resolve: {
    //   alias: {
    //     vue: 'vue/dist/vue.js'
    //   }
    // },
    
});

/*
* BrowserSync can automatically monitor your files for changes, and inject your changes into the browser without
* requiring a manual refresh. You may enable support for this by calling the mix.browserSync() method
* dependency:  npm install browser-sync browser-sync-webpack-plugin@2.2.2 --save-dev --legacy-peer-deps
*/
// mix.browserSync({
//     proxy: 'http://192.168.0.100:8000'
//     // files: [
//     //     './app/**/*',
//     //     './routes/**/*',
//     //     './public/css/*.css',
//     //     './public/js/*.js',
//     //     './resources/views/**/*.blade.php',
//     //     './resources/lang/**/*',
//     // ]
// });


/*
* Mix will now ignore the node_modules/ directory when watching files for changes. This allows for a nice performance boost.
* However, if your project depends on that functionality, you may override the generated webpack configuration, like so:
*/
// mix.override((config) => {
//     delete config.watchOptions;
// });


/*
* Webpack 5 no longer automatically includes polyfills for Node-specific objects like Buffer and process. However,
* it's possible that your project, or one of its dependencies, still requires access to these variables. If so, 
* you can force Mix to include the necessary Node polyfills via the legacyNodePolyfills option.
*
* Keep in mind that this might result in a slightly larger bundle. If possible, take the necessary steps to eventually 
* remove these references from your front-end code - and then turn off legacyNodePolyfills to reduce your bundle size.
*/
// mix.options({
//     legacyNodePolyfills: true
// });








