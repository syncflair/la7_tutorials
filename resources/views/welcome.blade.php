@extends('layouts.app')
@section('title', 'Home | Laravel')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('home.welcome')}}</div>

               

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