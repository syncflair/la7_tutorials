<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
   /* public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            //return redirect(RouteServiceProvider::HOME);
            return redirect(RouteServiceProvider::DASHBOARD);
        }

        return $next($request);
    }//*/

     public function handle($request, Closure $next, $guard = null)
    {
        
        switch ($guard) {
            case 'customer':
                    if (Auth::guard('customer')->check() ){
                         // return redirect()->route('dashboard-customer'); //call by route name
                         // return redirect()->route('/auth/my-dashboard');
                         return redirect()->route('customer-dashboard'); //call by route name
                         


                    }
                break;

            case 'supplier':
                    if(Auth::guard('supplier')->check() ){
                         return redirect()->route('dashboard-supplier');
                    }
                break;
            
            default:
                    if (Auth::guard($guard)->check() && Auth::user()->role->id == in_array(Auth::user()->role->id, RoleId() ) ) { /*Compare with multiple role id. RoleId come from AuthRolePermissionHelper.php*/
                        return redirect()->route('dashboard');
                    }        
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==7){ /*Sales = 7*/
                        return redirect()->route('dashboard-sales');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==8){ /*Purchase = 8*/
                        return redirect()->route('dashboard-purchase');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==9){ /*Store = 9*/
                        return redirect()->route('dashboard-storage');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==10){ /*Order = 10*/
                        return redirect()->route('dashboard-order');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==11){ /*Packaging = 11*/
                        return redirect()->route('dashboard-packaging');
                    }
                    elseif ( Auth::guard($guard)->check() && Auth::user()->role->id==13){ /*Delivery = 13*/
                        return redirect()->route('dashboard-delivery');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==14){ /*Supervisor = 14*/
                        return redirect()->route('dashboard-supervisor');
                    }
                    elseif (Auth::guard($guard)->check() && Auth::user()->role->id==17){ /*Supervisor = 14*/
                        return redirect()->route('dashboard-guest-user');
                    }
                break;
        }
        
        return $next($request);


        // if($guard == "customer"){
        //    // For customers Table user 
        //     if (Auth::guard($guard)->check() &&  Auth::guard('customer')->user()->customerType->id ==1 ){
        //          return redirect()->route('dashboard-customer');
        //     }elseif(Auth::guard($guard)->check() &&  Auth::guard('customer')->user()->customerType->id ==2 ){
        //          return redirect()->route('dashboard-supplier');
        //     }                
        //     return $next($request);
        // }else{
        //     //My Custom Code
        //     //if (Auth::guard($guard)->check() && Auth::user()->role->id==1) { /*Compare with single role id*/
        //     if (Auth::guard($guard)->check() && Auth::user()->role->id == in_array(Auth::user()->role->id, RoleId() ) ) { /*Compare with multiple role id. RoleId come from AuthRolePermissionHelper.php*/
        //         return redirect()->route('dashboard');
        //     }        
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==7){ /*Sales = 7*/
        //         return redirect()->route('dashboard-sales');
        //     }
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==8){ /*Purchase = 8*/
        //         return redirect()->route('dashboard-purchase');
        //     }
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==9){ /*Store = 9*/
        //         return redirect()->route('dashboard-store');
        //     }
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==10){ /*Order = 10*/
        //         return redirect()->route('dashboard-order');
        //     }
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==11){ /*Packaging = 11*/
        //         return redirect()->route('dashboard-packaging');
        //     }
        //     elseif ( Auth::guard($guard)->check() && Auth::user()->role->id==13){ /*Delivery = 13*/
        //         return redirect()->route('dashboard-delivery');
        //     }
        //     elseif (Auth::guard($guard)->check() && Auth::user()->role->id==14){ /*Supervisor = 14*/
        //         return redirect()->route('dashboard-supervisor');
        //     }
        //     else {
        //         return $next($request);
        //     }

        // }

    }


}   
