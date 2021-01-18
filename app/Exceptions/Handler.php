<?php

namespace App\Exceptions;


use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Arr;

use Illuminate\Support\Facades\Auth;


class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    /*public function render($request, Throwable $exception)
    {
        return parent::render($request, $exception);
    } /*/

    public function render($request, Throwable $exception)
    {

        /*if ($exception->getStatusCode() == 404 ) {
            return response()->view('errors.404_master_dashboard', [], 404);
        }//*/

        /*//error page 
        if($this->isHttpException($exception)){
            $StatusCode =$exception->getStatusCode();
            if($StatusCode == 404){
                return response()->view('errors.404_master_dashboard');
            }
        }//*/

        return parent::render($request, $exception);
    }//*/


    //my custome for multiAuth redirect login route
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        //$guard = array_get($exception->$guards(), 0); //return string, get from auth guard like 'web','supplier' or 'customer' 
        $guard = Arr::get($exception->guards(), 0);
        switch ($guard) {
            case 'customer':
                $login = 'customer.login';
                // $login = 'customer.login';
                break;

            case 'supplier':
                $login = 'supplier.login';
                break;

            default:
                $login = 'login-abc';
                break;
        }

        
        return redirect()->guest(route($login)); //redirect dynamicaly
    }
}
