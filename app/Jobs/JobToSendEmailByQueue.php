<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Mail\CustomerRegisterVerificationMail;
use Illuminate\Support\Facades\Mail;

class JobToSendEmailByQueue implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public $customer;
    //protected $customer;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($customer)
    {
        $this->customer = $customer;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $email = new CustomerRegisterVerificationMail($this->customer);
        //Mail::to($this->details['email'])->send($email);
        Mail::to($this->customer['email'])->send($email);
        // Mail::to($customer->email)->send(new CustomerRegisterVerificationMail($customer));
    }
}
