<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminPurchaseMiddleware
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
        /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \Closure  $next
         * @return mixed
         */
       
       //my Custome Code
        if (Auth::check() && Auth::user()->role->id ==8) { /*PUrchase = 8*/
            return $next($request);

        }else{
            return redirect()->route('login');
        }
        
    }
}
