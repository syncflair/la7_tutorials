<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings\Setting;

class SettingController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if($id == 1){
            return Setting::find($id);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($id == 1)
            
        $this->validate($request, [
            'site_title' => 'required|min:2|max:100'
        ]);

        $data =array();
        $data['site_title']=$request->site_title;
        $data['site_admin_email']=$request->site_admin_email;
        $data['site_desc']=$request->site_desc;
        $data['site_keys']= $request->site_keys;//slug_generator get from helper 
        $data['site_url']=$request->site_url; 
        $data['language_id']=$request->language_id; 
        $data['currency_id']=$request->currency_id; 
        $data['image_store_to']=$request->image_store_to;
        $data['aws_s3_url']=$request->aws_s3_url; 
        $data['watermark_by']=$request->watermark_by; 
        $data['watermark_icon']=$request->watermark_icon; 
        $data['watermark_text']=$request->watermark_text; 
        $data['image_resolution']=$request->image_resolution;  //JSON format

        $data['updated_by']= \Auth::user()->id; 

      

        //Setting::where($id)->update($data);      
        Setting::find($id)->update($data);
        return response()->json(['success'=>'Update successfull.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
