
@extends('layouts.EmailLayoutConfirmation.email_master')
@section('title')
  Register
@endsection


@section('extra_css')
  <!--Extra CSS-->
@endsection 

@section('content')

  <h2 >Hello,  <strong>{{$email_data['name']}}</strong></h2>
    
   

    <p class="mt-10 mb-10">
      <strong>Congratulation</strong>, You are registered to sorboraho.com. Please Confirm your verification link: <br>
    </p>

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr>
            <td>
              <a href="{{ url('customer/verify', $email_data['email_verification_code'] )}}">Verify Email</a>
            </td>
          </tr>
        </table>
      </div>

    
    <div >
      <a class="btn btn-default link-style"  target="_blank" href="{{ url('customer/login') }}">Login</a> here      
    </div>



@endsection

@section('extra_script')
  <!--Extra Script-->
@endsection 


