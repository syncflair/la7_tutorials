<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

use Illuminate\Support\Carbon;
use Laravel\Passport\Passport; //for passport

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //custome Gate for future use
        // Gate::define('isAdmin', function($user){
        //     return $user->user_id === '1';
        // });

        //for passport route
        // if (! $this->app->routesAreCached()) {
        //     Passport::routes();
        // }
        // Passport::routes();
        Passport::routes($callback = null); //not working

        // Passport::routes(function ($router) {
        //     $router->forAccessTokens();
        //     $router->forPersonalAccessTokens();
        //     $router->forTransientTokens();
        // });


        //Implicit Grant Tokens
        //Passport::enableImplicitGrant();

        //for multi auth with passport
        Passport::tokensCan([
            'customer' => 'Access Customer App',
            'supplier' => 'Access Supplier App',
        ]);

        //set default scope
        // Passport::setDefaultScope([
        //     'customer',
        //     'supplier'
        // ]);


        //Token Lifetimes
        // Passport::tokensExpireIn(now()->addDays(15));
        // Passport::refreshTokensExpireIn(now()->addDays(30));
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));

        // Passport::tokensExpireIn(Carbon::now()->addDays(1));
        Passport::tokensExpireIn(Carbon::now()->addSeconds(40));
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(90));

    }
}



/*

php artisan passport:client --client

protected $signature = 'passport:client
        {--personal : Create a personal access token client}
        {--password : Create a password grant client}
        {--client : Create a client credentials grant client}
        {--name= : The name of the client}
        {--provider= : The name of the user provider}
        {--redirect_uri= : The URI to redirect to after authorization }
        {--user_id= : The user ID the client should be assigned to }
        {--public : Create a public client (Auth code grant type only) }';

*/