<?php 
// # php artisan schedule:run  (run this command all the time) // schedule all custome command here 
// Add php artisan schedule:run commend to chron job of live server...

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
//use App\Console\Commands\MailToInactiveCustomer;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\MailToInactiveCustomer::class,
        \App\Console\Commands\removeRevodedOAuthAccessTokenAndRefreshAccessToken::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->command('mail:email-to-inactive-customer')->dailyAt('13:00'); //->daily(); run this command dayly at 1:00 PM
        $schedule->command('remove:revoked-oauth-token')->dailyAt('14:00'); //->daily(); run this command dayly at 2:00 PM
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
