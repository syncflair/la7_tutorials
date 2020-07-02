<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminSupplierMiddleware
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
        /*client type = 2 for supplier*/        
        //if (Auth::guard('client')->check() && Auth::guard('client')->user()->clientType->id ==2) { 
        if (Auth::guard('supplier')->check()) { 
            return $next($request);

        }else{
            return redirect()->route('supplier.login');
        }
        
    }
}
