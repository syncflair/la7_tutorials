<!DOCTYPE html>
<html>
  <head>
    <title>Welcome Email</title>
  </head>
  <body>

    <h2 >Hello,  <strong>{{$email_data['name']}}</strong></h2>
    

    <p style="margin-bottom: 15px; margin-top: 15px;">
    Your registered email-id is {{$email_data['email']}} , Please click on the below link to verify your email account
    </p>

    <div>
      <a href="{{ url('customer/verify', $email_data['email_verification_code'] )}}">Verify Email</a>

      <span> {{$email_data['email_verification_code']}}</span>
    </div>


    
    <div style="margin-bottom: 15px; margin-top: 15px;">
      <span> Best regards </span><br>
      <h3 style="color:#f6993f; font-weight: 800;"> Sorboraho.com</h3>
    </div>

  </body>
</html>