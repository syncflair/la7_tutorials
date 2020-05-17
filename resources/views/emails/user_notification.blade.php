
@component('mail::message')

![alt text]( {{ asset($data['avatar']) }} ) 

## Hello Mr {{ $data['name'] }}



Your information has changed by system **Admin**



@if($data->email_verified_at == null )

<span style="color:blue">	
Your account is Un-verifyed. Please check your email and verify your 
email first. Otherwase you not able to access SORBORAHO resources.
</span>
	
	
@else

	@if($data->status_id == 1)
	Your account is active
	@elseif($data->status_id == 2)
		Your account is Inactive. Please contact with admin	
	@elseif($data->status_id == 3)
		Your account is Pending. Please contact with admin
	@elseif($data->status_id == 4)
		Your account is Block. Please contact with admin	
	@endif

@endif



@component('mail::button', ['url' => 'http://sorboraho.com'])
	Go to Sorboraho
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
