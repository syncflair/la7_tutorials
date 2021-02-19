<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Mail\CustomerNotificationMail;
use Illuminate\Support\Facades\Mail;

class CustomerNotificationMailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $data;
    //protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
 
        $email = new CustomerNotificationMail($this->data);
        Mail::to($this->data['userInfo']['email'])->send($email);

        // $data = ["userInfo" => $this->customer, "tag" => "NewCustomerRegister"]; //pass tag
        // $email = new CustomerNotificationMail($data);
        // Mail::to($data['userInfo']['email'])->send($email);
    }
}
