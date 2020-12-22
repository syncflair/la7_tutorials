<?php
use App\Models\User;
use App\Models\Purchase\PurchaseOrder;
use Illuminate\Http\Request;


function FirstHelper(){

	return 'this is my first Helper.';
}

function TodayDate(){
	return date('Y-m-d');
}

function DateFormate($date){
	//return $date('Y-m-d');
	return \Carbon\Carbon::parse($date)->format('d M y');
}

function GetUserName(){
	 $user = User::first();
	return $user->name;
}

function CurrentPath(){
	 
	return $request->path();
}

function BackPath(){
	return url()->previous();
}

function CustomeBreadcrumbs(){

	echo '<ol class="breadcrumb float-sm-left">
			  <li class="breadcrumb-item active-"><a data-toggle="tooltip" title="Go Back" href="'.url()->previous().'"> <i class="fas fa-backspace"></i>  </a></li>
              <li class="breadcrumb-item "><a data-toggle="tooltip" title="Dashboard" href="/dashboard"> <i class="nav-icon fas fa-tachometer-alt"></i></a></li>
              <li class="breadcrumb-item"><a href="">'.ucfirst(\Request::segment(1)).'</a></li>              
            </ol>';
}

function slug_generator($string){
	$string = str_replace(' ', '-', $string);
	$string = preg_replace('/[^A-Za-z0-9\-]/', '', $string);
	return strtolower(preg_replace('/-+/', '-', $string));

}






/*
--Helper load Using Provider:

# php artisan make:provider HelperServiceProvider

Check out inside HelperServiceProvider file

--go to config/app.php and add to 

"provider" 
App\Providers\HelperServiceProvider::class,

"alias"
'Helper' => App\Helpers\Helper::class,







//
//get last record
$record = RecordModel::latest()->first();
$expNum = explode('-', $record->invoiceno);

//check first day in a year
if ( date('l',strtotime(date('Y-01-01'))) ){
    $nextInvoiceNumber = date('Y').'-0001';
} else {
    //increase 1 with last invoice number
    $nextInvoiceNumber = $expNum[0].'-'. $expNum[1]+1;
}

function invoiceNumber()
{
    $latest = App\Order::latest()->first();

    if (! $latest) {
        return 'arm0001';
    }

    $string = preg_replace("/[^0-9\.]/", '', $latest->invoice_number);

    return 'arm' . sprintf('%04d', $string+1);
}




*/