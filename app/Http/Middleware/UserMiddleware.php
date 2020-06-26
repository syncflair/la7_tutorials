<?php /*My Custome Middleware for redirect to User dashboard*/

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class UserMiddleware
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
        if (Auth::check() && Auth::user()->role->id ==14) { /*User = 14*/
            return $next($request);

        }else{
            return redirect()->route('login');
        }
        
    }


}
