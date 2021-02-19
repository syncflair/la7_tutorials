
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
        <strong>Opps!</strong>, Your account  <strong> inactive </strong> by admin, Please contact with admin to re-active your account.
      </p>  <br>
    
    @elseif($email_data['tag'] == 'activeByAdmin')

      <p class="mt-10 mb-10">
        <strong>Congratulation !</strong>, Your account is <strong> active </strong> by admin, Now you can login to your account 
      </p> <br>
    
    @elseif($email_data['tag'] == 'varifyByAdmin')

      <p class="mt-10 mb-10">
        <strong>Congratulation !</strong>, Your account is <strong> varified </strong> by Admin, Now you can login to your account
      </p>  <br>

    @elseif($email_data['tag'] == 'registerByAdminWithoutVerify')
      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, You are registered by sorboraho.com admin. Your Login credential details bellow:
      </p> <br> <br>

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
          <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
          <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>     
        </table>
      </div><br>

      <p class="mt-10 mb-10">
        Your <a class="btn btn-default link-style"  target="_blank" href="{{ url('supplier/login') }}">Login</a> URL, Please don't share your login url.
      </p> 

    @elseif($email_data['tag'] == 'registerByAdminWithVerify')
      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, You are registered by sorboraho.com admin.
      </p> <br> 

      <p class="mt-10 mb-10">
        Your email is not verified. Please confirm your verification link: <a href="{{ url('supplier/verify', $email_data['userInfo']['generate_email_verification_code'] )}}">Verify you email</a>.
      </p><br>

      <p class="mt-10 mb-10">
        Your Login credential details bellow:
      </p>
      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
          <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
          <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>     
        </table>
      </div><br>

      <p class="mt-10 mb-10">
        Your <a class="btn btn-default link-style"  target="_blank" href="{{ url('supplier/login') }}">Login</a> URL, Please don't share your login url.
      </p>

    @elseif($email_data['tag'] == 'sendEmailVerificationCode') 

      <p class="mt-10 mb-10">
        Your email change verification code : <strong> {{ $email_data['userInfo']['generate_email_verification_code'] }} </strong>
      </p><br>

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
            <td><a class="btn btn-default link-style"  target="_blank" href="{{ url('sspa/login') }}">Login</a> </td>
          </tr>
        </table>
      </div>

    @endif



 <!--  @if($email_data['tag'] == 'register')
  <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
    <table class="table">
      <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
      <tr> <td>Phone:</td> <td>{{$email_data['userInfo']['phone']}} </td></tr>
      <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>
      <tr> 
        <td>Login:</td> 
        <td><a class="btn btn-default link-style"  target="_blank" href="{{ url('sspa/login') }}">Login</a> </td>
      </tr>
    </table>
  </div>
  @endif -->


@endsection

@section('extra_script')
  <!--Extra Script-->
@endsection 


