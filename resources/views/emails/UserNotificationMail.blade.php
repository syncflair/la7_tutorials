
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
    
    @elseif($email_data['tag'] == 'verifyByAdmin')

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
          <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>
        </table>
      </div><br>

      <p class="mt-10 mb-10">
       Your <a class="btn btn-default link-style"  target="_blank" href="{{ url('login-abc') }}">Login</a> url. Don't share your login URL to other
      </p> <br>

    @elseif($email_data['tag'] == 'registerByAdminWithVerify')
      <p class="mt-10 mb-10">
        <strong>Congratulation</strong>, You are registered by sorboraho.com admin. Your Login credential details bellow:
      </p> <br> 

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr> <td>Email:</td> <td>{{$email_data['userInfo']['email']}} </td></tr>
          <tr> <td>Password:</td> <td>{{$email_data['userInfo']['password']}} </td></tr>    
        </table>
      </div><br>

      <p class="mt-10 mb-10">
        Note: Your email not verified. You will get an email verification email soon from sorboraho.com. First you verify your email and login to sorboraho.com.
      </p>
      <p class="mt-10 mb-10">
        Your <a class="btn btn-default link-style"  target="_blank" href="{{ url('login-abc') }}">Login</a> url. Don't share your login URL to other
      </p> <br> 

    @endif





@endsection

@section('extra_script')
  <!--Extra Script-->
@endsection 


