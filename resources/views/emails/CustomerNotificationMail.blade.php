
@extends('layouts.EmailLayoutConfirmation.email_master')
@section('title')
  Register
@endsection


@section('extra_css')
  <!--Extra CSS-->
@endsection 

@section('content')

  <h2 >Hello,  <strong> {{$email_data['userInfo']['name']}}</strong></h2>
    
   

    <p class="mt-10 mb-10">

      @if($email_data['tag'] == 'inactive')
        <strong>Opps!</strong>, Your account  <strong> inactive </strong> by admin, Please contact with admin to re-active your account.  <br>
      
      @elseif($email_data['tag'] == 'active')
        <strong>Congratulation !</strong>, Your account is <strong> active </strong> by admin, Now you can login to your account  <br>
      
      @elseif($email_data['tag'] == 'varify')
        <strong>Congratulation !</strong>, Your account is <strong> varified </strong> by Admin, Now you can login to your account  <br>

      @endif

    </p>

      <div  style="padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">
        <table class="table">
          <tr>
            <td>

                

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


