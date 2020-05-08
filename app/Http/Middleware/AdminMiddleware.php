<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;
//use App\Role;

class AdminMiddleware
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
       // echo 'This is route Middleware.';

         /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \Closure  $next
         * @return mixed
         */
        
         //my Custome Code
        //if (Auth::check() && Auth::user()->role->id==1) { /*Compare with single role id*/
        if (Auth::check() && Auth::user()->role->id == in_array( Auth::user()->role->id, RoleId() )  ) { /*Compare with multiple role id. RoleId come from AuthRolePermissionHelper.php*/
            return $next($request);

        }else{
            return redirect()->route('login');
        }
    }


}
