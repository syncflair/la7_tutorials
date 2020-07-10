<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CustomerRegisterVerificationMail extends Mailable
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
        return $this
            ->from('info@sorboraho.com')
            ->subject('Welcome to Sorboraho.com')
            ->view('emails.CustomerRegisterVerificationMail', ['email_data' => $this->email_data]);

        // return $this->from('info@sorboaho.com')
        //             ->subject('New Customer Enqery')
        //             ->markdown('emails.contact_us_email')
        //             ->with('data', $this->data );

    }
}
