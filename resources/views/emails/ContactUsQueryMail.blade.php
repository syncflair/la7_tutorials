@component('mail::message')

New Email From: {{ $data['email'] }}

<p>Hi this is {{ $data['firstName'] .' '. $data['lastName'] }} </p>
<p>Phone: {{ $data['phone'] }} </p>
<p>Subject: {{ $data['subject'] }} </p>

<p>Message: {{ $data['visitorQuery'] }}</p>



Thanks,<br>
{{ config('app.name') }}
@endcomponent
