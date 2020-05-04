<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;
//use Auth;
use App\User;
use Illuminate\Support\Facades\Redirect;

class MyGlobalMiddleware
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

       // print_r(Auth::user()->role->id);

       // echo $request->path(); //return the current path


       //echo 'This is Global Middleware!';

          
        //return $next($request);

        //User::first();
        //print_r(User::first());

        //print_r($request->user());
        //print_r(Auth::user());
        //if(User::first()->name == 'Sumon'){
            //return Redirect::to('/dashboard');
           // return redirect('dashboard');
            
        //}
        //print_r(auth()->user());


        return $next($request);
    }
}
