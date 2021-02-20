<?php  ///not use, just sample for markdown

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserNotification extends Mailable
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
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        //return $this->markdown('emails.user_notification');
        return $this->from( systemSettingsAll()->notify_by_email )
                    ->subject('Notification From Shorboraho')
                    ->markdown('emails.user_notification')
                    ->with('data', $this->data );
    }
}
