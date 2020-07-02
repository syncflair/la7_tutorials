<?php /*My Custome Middleware for redirect to Delivery admin dashboard*/

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class AdminDeliveryMiddleware
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
        if (Auth::check() && Auth::user()->role->id ==13) { /*User = 14*/
            return $next($request);

        }else{
            return redirect()->route('login');
        }
        
    }


}
