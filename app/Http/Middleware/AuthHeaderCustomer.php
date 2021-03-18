<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthHeaderCustomer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        // if (!$request->bearerToken()) {
            if ($request->hasCookie('_spac_at')) {
                $token = $request->cookie('_spac_at');
                $request->headers->add(['Authorization' => 'Bearer ' . $token]);
            }
        // }

        return $next($request);
    }
}
