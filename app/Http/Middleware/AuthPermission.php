<?php /*My Custome Middleware*/

namespace App\Http\Middleware;

use Closure;

class AuthPermission
{

    use \App\Traits\AuthPermission;  /*Call AuthPermission files from traits folder*/

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $this->checkRequestAuthPermission(); //Call function form Traits\AuthPermission file
        //dd('TeSt');
        return $next($request);
    }
}
