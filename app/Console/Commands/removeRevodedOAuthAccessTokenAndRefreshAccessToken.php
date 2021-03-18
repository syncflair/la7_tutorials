<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class removeRevodedOAuthAccessTokenAndRefreshAccessToken extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remove:revoked-oauth-token';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove/Delete all revoked OAuth access token and refresh access token';

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
        // return 0;
        //delete all revoked tokens from  oauth_access_tokens & oauth_refresh_tokens
        DB::table('oauth_access_tokens')->where('revoked', '=', 1)->delete();
        DB::table('oauth_refresh_tokens')->where('revoked', '=', 1)->delete();

    }
}
