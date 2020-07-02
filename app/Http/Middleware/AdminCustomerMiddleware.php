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
         /*client type = 1 for customer*/
        //if (Auth::guard('client')->check() && Auth::guard('client')->user()->clientType->id ==1) {
        if (Auth::guard('client')->check() ) {
            return $next($request);
        }else{
            return redirect()->route('client.login');
        }
        
    }
}
