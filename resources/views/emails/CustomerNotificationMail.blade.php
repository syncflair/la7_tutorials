
@extends('layouts.EmailLayoutConfirmation.email_master')
@section('title')
  Register
@endsection


@section('extra_css')
  <!--Extra CSS-->
@endsection 

@section('content')

  <h2 >Hello,  <strong> {{$email_data['userInfo']['name']}}</strong></h2>
    
   

    @if($email_data['tag'] == 'inactiveByAdmin')

      <p class="mt-10 mb-10">
        <strong>Opps!</strong> <br>

        Your account  <strong> inactive </strong> by admin.
      </p>  
      <p class="mt-10 mb-10">
        Please contact with support team of <a class="btn btn-default link-style"  target="_blank" href="https://sorboraho.com">Sorboraho</a> to re-active your account.
      </p> 
    
    @elseif($email_data['tag'] == 'activeByAdmin')

      <p class="mt-10 mb-10">
        <strong>Congratulation !</strong>
      <p class="mt-10 mb-10">
        Your account is <strong> active </strong> by admin, Now you can <a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">login</a> to your account 
      <p>

    @elseif($email_data['tag'] == 'varifyByAdmin')

      <p class="mt-10 mb-10">
        <strong>Congratulation !</strong>
      <p>
      <p class="mt-10 mb-10">
        Your account is <strong> varified </strong> by Admin, Now you can <a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">login</a> to your account
      <p>

    @elseif($email_data['tag'] == 'registerByAdmin')

      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, You are registered by sorboraho.com admin.
      </p>

      <p class="mt-10 mb-10">
        Keep your login credetial safe. Your Login credential details bellow: 
      </p>

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
          <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
          <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>
          <tr> 
              <td>Login:</td> 
              <td><a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">Login</a> </td>
          </tr>
        </table>
      </div>

    @elseif($email_data['tag'] == 'sendEmailVerificationCode')

      <p class="mt-10 mb-10">
        Your email change verification code : <strong> {{ $email_data['userInfo']['generate_email_verification_code'] }} </strong><br>
      </p>

    @elseif($email_data['tag'] == 'sendEmailToInactiveCustomer')
      <p class="mt-10 mb-10">
        You last login to <a href="https://sorboraho.com">sorboraho</a> 

          {{ \Carbon\Carbon::parse($email_data['userInfo']['last_login_at'])->diffForHumans() }}.

         please <strong> <a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">Login</a> </strong><br>
      </p>

    @elseif($email_data['tag'] == 'emailHasBeenChanged')
      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, Your email is now registered to sorboraho.com. Your details bellow: 
      </p><br> <br>

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr> <td>Name:</td> <td>{{$email_data['userInfo']['name']}} </td></tr>
          <tr> <td>Old Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
          <tr> <td>Email:</td> <td>{{$email_data['userInfo']['new_email']}} </td></tr>
          <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
          <tr> 
            <td>Login:</td> 
            <td><a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">Login</a> </td>
          </tr>
        </table>
      </div>


    @elseif($email_data['tag'] == 'NewCustomerRegister')

      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, You are registered to sorboraho.com. 
      </p>

      <p class="mt-10 mb-10">
        Please confirm your verification link: <a href="{{ url('customer/verify', $email_data['userInfo']['email_verification_code'] )}}">Verify you email</a>.
      </p>
      
      <div style="margin-top: 20px;">
        <a class="btn btn-default link-style"  target="_blank" href="{{ url('auth/login') }}">Login</a>    
      </div>

    @endif




@endsection

@section('extra_script')
  <!--Extra Script-->
@endsection 


