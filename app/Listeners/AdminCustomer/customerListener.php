<?php

namespace App\Listeners\AdminCustomer;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use App\Models\Customer;
use App\Models\Customer\CustomerAddress;
use Illuminate\Support\Facades\Cache;

class customerListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        
        Cache::forget('cacheCustomerData');
        // $data = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')->take(100)->get();

        $data = Customer::with('belongsToCustomerGroup','belongsToCustomerMembership','hasManyAddress')->paginate(100);
        // Cache::put('cacheCustomerData', $data, now()->addMinutes(2));
        Cache::put('cacheCustomerData', $data);
    }
}
