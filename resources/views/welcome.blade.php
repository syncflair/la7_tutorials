@extends('layouts.app')
@section('title', 'Home | Laravel')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('home.welcome')}}</div>

               <!-- Auth::user()->name -->
               <!-- {{Auth::user()}} -->
               <!-- {{Auth::user()->name}} -->

              <br>
                    @if (Auth::guard('customer')->check())
                        {{ Auth::guard('customer')->user() }}
                    @endif
                    <br>
                    <!-- {{ Auth::guard('customer')->user() }} -->
                    
                    
                

               <img width="100" src="{{asset('FilesStorage/CommonFiles/avatar.png')}}">

               <!-- <img height="200" src="{{ public_path('settings/sorboraho-kRm1rP7X4ZHpyvgYUcqWlggTt277sx8o5zkHkfKe.png')}}" alt="" /> -->
               <!--  -->
               <!-- <img height="200" src="{{ public_path('storage/settings/sorboraho-kRm1rP7X4ZHpyvgYUcqWlggTt277sx8o5zkHkfKe.png')}}" alt="" /> -->

                <!-- <div class="card-header">{{ trans_choice('home.welcome', 1)}}</div> -->

                <!--<div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>-->
            </div>
        </div>
    </div>
</div>
@endsection