<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;


class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
   /* public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            //return redirect(RouteServiceProvider::HOME);
            return redirect(RouteServiceProvider::DASHBOARD);
        }

        return $next($request);
    }//*/

     public function handle($request, Closure $next, $guard = null)
    {
        //My Custom Code
        if (Auth::guard($guard)->check() && Auth::user()->role->id==1) {
            return redirect()->route('dashboard');
        } elseif (Auth::guard($guard)->check() && Auth::user()->role->id==2){
            return redirect()->route('home');
        } else {
            return $next($request);
        }

    }


}
