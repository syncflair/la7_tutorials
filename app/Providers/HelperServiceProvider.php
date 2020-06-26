<?php /*My Custome Providers to register all helper to globally*/

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider
{
    //this is my custome helper


    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        /*Single Helper file Load*/
        /*$file = app_path('Helpers/Helper.php');
        if (file_exists($file)) {
            require_once($file);
        } */

        /*Multiple Helper File load from Helpers Folder*/
        ///*
        foreach (glob(app_path() . '/Helpers/*.php') as $file) {
            require_once($file);
        }
        //*/
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
