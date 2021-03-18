<?php //Custome Artisan command by sumon (php artisan make:command commandName)

namespace App\Console\Commands;

use Illuminate\Console\Command;

// use Carbon\Carbon;
use Illuminate\Support\Carbon;
use App\Models\Customer;
use App\Jobs\CustomerNotificationEmailJob;

class MailToInactiveCustomer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:email-to-inactive-customer';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email to inactive customer those are not login last 15 days';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $DayBefore15 = Carbon::now()->subDay(15);
        //$this->info($DayBefore15); //for only check command output

        $inactive_customer = Customer::where('last_login_at','<', $DayBefore15)
                                ->select('id','name','email','last_login_at')->get();
        //$this->info($inactive_customer);//for only check command output


        foreach ($inactive_customer as $customer ) {
            // $customer->notify(new NotifyInactiveUser());
            //$this->info('Email send to '.$customer->name);// show display message


            $data = ["userInfo" => $customer, "tag" => "sendEmailToInactiveCustomer"];
            // send all mail in the queue.
            $job = (new CustomerNotificationEmailJob($data))
                        ->delay( Carbon::now()->addSeconds(5) ); 
            dispatch($job);
        }

       // return 0; //default
    }
}
