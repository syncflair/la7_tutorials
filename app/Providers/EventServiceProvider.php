<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [ SendEmailVerificationNotification::class, ],

        \App\Events\AdminCustomer\CustomerCreatedEvent::class => [ \App\Listeners\AdminCustomer\CustomerListener::class, ],
        \App\Events\AdminCustomer\CustomerUpdatedEvent::class => [ \App\Listeners\AdminCustomer\CustomerListener::class, ],
        \App\Events\AdminCustomer\CustomerDeletedEvent::class => [ \App\Listeners\AdminCustomer\CustomerListener::class, ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
