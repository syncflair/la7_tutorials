<?php

namespace App\Http\Middleware;

use Closure;

class MyGroupMiddleware
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

        //echo $request->path(); //return the current path
        //echo 'This is group Middleware.';
        return $next($request);
    }
}
