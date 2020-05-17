@component('mail::message')

New Email From: {{ $data['email'] }}

<p>Hi this is {{ $data['name'] }} </p>

<p>Message: {{ $data['visitor_message'] }}</p>



Thanks,<br>
{{ config('app.name') }}
@endcomponent
