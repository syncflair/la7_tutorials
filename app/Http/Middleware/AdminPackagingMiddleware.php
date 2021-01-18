<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminPackagingMiddleware
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
        if (Auth::check() && Auth::user()->role->id ==11) { /*User = 11*/
            return $next($request);

        }else{
            return redirect()->route('login-abc');
        }
        
    }

}
