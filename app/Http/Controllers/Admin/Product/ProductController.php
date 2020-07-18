<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\Product;

class ProductController extends Controller
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
        $product = Product::latest()->paginate(10);
       //$product = Product::get();
        //return $Product;
        return response()->json($product);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Product::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    public function searchProduct(Request $request){
        //$search = $request->q;

        if($search = \Request::get('q')){
            $searchResult = Product::where(function($query) use ($search){
                $query->where('pro_name','LIKE','%'.$search.'%')
                        ->orWhere('pro_slug','LIKE','%'.$search.'%')
                        ->orWhere('is_enabled','LIKE','%'.$search.'%');
                        //->orWhere('updated_at','LIKE','%'.$search.'%');
            })->paginate(10);
        }else{
            $searchResult = Product::latest()->paginate(10);
        }

        return $searchResult;

    }

    public function countProduct(){
            $count = Product::select('id')->get();
            return $count = $count->count();
    }

    public function unactiveProduct($id){       
        $product = Product::find($id);
        $product->is_enabled = 0;
        $product->save();

        return response()->json(['success'=> 'Product Inactive Now']);
    }

    public function activeProduct($id){
        $product = Product::find($id);
        $product->is_enabled = 1;
        $product->save();

        return response()->json(['success'=> 'Product Active Now']);
    }
}
