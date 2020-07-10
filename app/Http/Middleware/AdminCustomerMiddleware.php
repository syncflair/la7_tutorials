<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminCustomerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       //my Custome Code
         /*customer type = 1 for customer*/
        //if (Auth::guard('customer')->check() && Auth::guard('customer')->user()->customerType->id ==1) {
        if (Auth::guard('customer')->check() ) {
            return $next($request);
        }else{
            return redirect()->route('customer.login');
        }
        
    }
}
