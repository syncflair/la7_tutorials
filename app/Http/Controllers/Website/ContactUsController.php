<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator; //for vlidation
use App\Mail\ContactUsMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Session;



class ContactUsController extends Controller
{
    Public function index(){

    	return view('Website.contact_us');
    }

    Public function sendMessageQuery(Request $request){

    	$validator = $this->validate($request, [
            'name' => 'required|max:40', 
            'email' => 'required|email', 
            'visitor_message' => 'required'
        ]);


        $data = array();
        $data['name'] = $request->name;
        $data['email'] = $request->email;
        $data['visitor_message'] = $request->visitor_message; 

		//return $data;

        Mail::to('admin@sorboraho.com')->send(new ContactUsMail($data));
        return back()->with('success', 'Your email send successfully');
        //Session::put('success','Permission added successfully'); //massage after insert


        //return Redirect::to('permission'); //*/   
    	//return back()->with('success', 'Your email send successfully');
    	//return reditect()->back();

    }

    public function sendVisitorQuery(Request $request)
    {
        $this->validate($request, [
            'firstName' => 'required|min:3|max:20',
            'lastName' => 'required|min:3|max:20',
            'email' => ['required','email','max:255'],
            'subject' => ['required'],
            'visitorQuery' => ['required'],
        ],[
            'firstName.required' => 'Please enter your First Name',
            'lastName.required' => 'Please enter your Last Name',
        ]);

        $data = array();
        $data['firstName']=$request->firstName;
        $data['lastName']=$request->lastName;
        $data['email']=$request->email;
        $data['phone']=$request->phone;
        $data['subject']=$request->subject;
        $data['visitorQuery']=$request->visitorQuery;
         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        // Unit::create($data);        
        // return response()->json(['success'=>'Unit Created.']); 
    }
}
