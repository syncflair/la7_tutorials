
@component('mail::message')
Hello Mr {{ $data['name'] }}



Your information has changed by system Admin

@if($data->status_id == 1)
	Your account is active


@elseif($data->status_id == 2)
	Your account is Inactive. Please contact with admin	

@elseif($data->status_id == 3)
	Your account is Pending. Please contact with admin	

@elseif($data->status_id == 4)
	Your account is Block. Please contact with admin	

@endif




@component('mail::button', ['url' => 'http://sorboraho.com'])
	Visit Our site
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
