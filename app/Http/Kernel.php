<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \App\Http\Middleware\TrustProxies::class,
        \Fruitcake\Cors\HandleCors::class,
        \App\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        //\App\Http\Middleware\MyGlobalMiddleware::class, /*My custome global Middleware*/
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [

            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,

            //\App\Http\Middleware\SetLanguage::class, /*Custome Middleware*/

        ],

        'api' => [
            'throttle:60,1',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,


        //Header
        'customer_header_api' => \App\Http\Middleware\AuthHeaderCustomer::class,
        'supplier_header_api' => \App\Http\Middleware\AuthHeaderSupplier::class,

        //passport / My custome middleware
        'refresh_token_customer' => \App\Http\Middleware\RefreshTokenForAdminCustomerMiddleware::class,

        //Passport includes two middleware
        'scopes' => \Laravel\Passport\Http\Middleware\CheckScopes::class,
        'scope' => \Laravel\Passport\Http\Middleware\CheckForAnyScope::class,


        //my Custome
        //'MyRouteMid' => \App\Http\Middleware\MyRouteMiddleware::class,       
        'AuthPermission' => \App\Http\Middleware\AuthPermission::class,
        'SetLanguage' => \App\Http\Middleware\SetLanguage::class,

        'admin' => \App\Http\Middleware\AdminMiddleware::class, //Super Admin 
        
        'AdminDelivery' => \App\Http\Middleware\AdminDeliveryMiddleware::class,
        'AdminStorage' => \App\Http\Middleware\AdminStorageMiddleware::class,
        'AdminOrder' => \App\Http\Middleware\AdminOrderMiddleware::class,
        'AdminPackaging' => \App\Http\Middleware\AdminPackagingMiddleware::class,
        'AdminSales' => \App\Http\Middleware\AdminSalesMiddleware::class,
        'AdminPurchase' => \App\Http\Middleware\AdminPurchaseMiddleware::class,
        'AdminSupervisor' => \App\Http\Middleware\AdminSupervisorMiddleware::class,

        'AdminCustomer' => \App\Http\Middleware\AdminCustomerMiddleware::class,
        'AdminSupplier' => \App\Http\Middleware\AdminSupplierMiddleware::class,
        'AdminReport' => \App\Http\Middleware\AdminReportMiddleware::class,
        'AdminMonitoring' => \App\Http\Middleware\AdminMonitoringMiddleware::class,
        'GuestUser' => \App\Http\Middleware\GuestUserMiddleware::class,


    ];
}
