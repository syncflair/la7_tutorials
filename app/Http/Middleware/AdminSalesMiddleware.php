<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminSalesMiddleware
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
        if (Auth::check() && Auth::user()->role->id ==7) { /*Sales = 7*/
            return $next($request);

        }else{
            return redirect()->route('login-abc');
        }
        
    }
}
