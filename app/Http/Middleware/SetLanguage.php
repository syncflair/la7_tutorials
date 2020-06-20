<?php

namespace App\Http\Middleware;

use Closure;
//use Session; //for session

class SetLanguage
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
        \App::setLocale($request->locale);
        //app()->setLocale($request->segment(1));

        session()->put('locale', $request->locale);


        // if (session()->has('locale')) {
        //     \App::setLocale(session()->get('locale'));
        // }

        return $next($request);
    }
}
