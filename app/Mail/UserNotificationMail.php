<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->email_data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        //return $this->markdown('emails.user_notification');
        // return $this->from('info@sorboaho.com')
        //             ->subject('Notification From Shorboraho')
        //             ->markdown('emails.user_notification')
        //             ->with('data', $this->data );

        return $this
            ->from('info@sorboraho.com')
            ->subject('Welcome to Sorboraho.com')
            ->view('emails.UserNotificationMail', ['email_data' => $this->email_data]);
    }
}
