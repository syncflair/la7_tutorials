<?php //not used / not ok

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use App\Models\OauthAccessToken;

class RefreshTokenForAdminCustomerMiddleware
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
        

        //my Custome Code
        // if ( auth('api-customer')->user()->token->hasExpired() ) {
        if ( auth('api-customer')->user()->token->hasExpired() ) {
        // if ( Auth::guard('api-customer')->user()->token->hasExpired() ) {
           // return redirect('/api/refreshtoken');
        }else{
             return $next($request);
        }




         /**
         * Check token has expired or not || gte() - greater than or equal to the current date
         */
        public function hasExpired(Request $request){
            // return Carbon::now()->gte( $this->updated_at->addSeconds($this->expires_in) );
            return now()->gte( $this->updated_at->addSeconds($this->expires_in) );
        }



        //return $next($request);
    }
}
