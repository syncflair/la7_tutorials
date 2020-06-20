<?php

namespace App\Http\Controllers\Admin\MultiComponent;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;
use Illuminate\Support\Str; //for str::random
use Illuminate\Support\Facades\File; //for file management
use Illuminate\Support\Facades\Validator;

class MultiComponentController extends Controller
{
    
     public function index(Request $request)
    {
       
       if(!empty($request->perPage)){
            $perPage = $request->perPage;
       }else{
            $perPage = 10;
       }


       //$category = Category::orderBy('id', 'DESC')->paginate(10);

       $category = Category::
            select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')

            ->paginate($perPage);
       
        return response()->json($category);
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
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name',
            //'cat_slug' => 'required',
        ]);

        $data =array();
        //$data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper
        //$data['cat_desc']=$request->cat_desc;
        $data['created_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        Category::create($data);        
        return response()->json(['success'=>'Category Created successfully.']); 
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
        $this->validate($request, [
            'cat_name' => 'required|min:2|max:40|unique:categories,cat_name,'.$id,
            //'cat_slug' => 'required',
        ]);

        $data =array();
        //$data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper
        //$data['cat_desc']=$request->cat_desc;
        $data['created_by']= \Auth::user()->id;         
        
        // if($request->is_enabled == NULL){
        //     $data['is_enabled'] = 0;
        // }else{
        //    $data['is_enabled']=$request->is_enabled; 
        // }

        Category::whereId($id)->update($data); 
            //$category = Category::findOrFail($id); 
            //$category->update($data); 
            
        return response()->json(['success'=>'Category Update successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {               
        $data = Category::findOrFail($id)->delete();        
        if($data){
            return response()->json(['success'=> 'Record is successfully deleted']);
        }else{
            return response()->json(['errors'=> 'Something is wrong..']);
        }//*/
    }

    public function CategoryListById($id){
        $category = Category::where('parent_id', $id)->get();
        return response()->json($category);
    }

    public function searchCategoryData(Request $request){

        if(!empty($request->perPage)){
            $perPage = $request->perPage;
        }else{
            $perPage = 10;
        }        

        $type = 1; //tst perpose
        $search = \Request::get('q');
        //if($search = \Request::get('q')){
            $searchResult = Category::where(function($query) use ($search, $type){
                
                $query->where('categories.cat_name','LIKE','%'.$search.'%')
                        //->orWhere('.categories.cat_slug','LIKE','%'.$search.'%')
                       ->orWhere('categories.is_enabled','LIKE','%'.$search.'%');
                        //->orWhere('updated_at','LIKE','%'.$search.'%');
            })
            ->select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
            ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
            ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')
            ->paginate($perPage);

        // }else{
        //     //$searchResult = Category::latest()->paginate(10);
        //     $searchResult = Category::select('categories.id', 'categories.cat_name', 'categories.cat_slug', 'categories.is_enabled', 'categories.parent_id', 'categories.cat_img', 'categories.created_by', 'CAT2.cat_name as cat2_name', 'CAT3.cat_name as cat3_name')
        //     ->leftJoin('categories as CAT2', 'categories.parent_id','=', 'CAT2.id')
        //     ->leftJoin('categories as CAT3', 'CAT2.parent_id','=', 'CAT3.id')
        //     ->paginate(20);

        // }

        return $searchResult;
    }

    public function testQuery(){
       // return 'Ok';
       $category = Category::whereNull('parent_id')->with('childrenCategories')->where('is_enabled', '1')->get();
       //$category = Category::all();

        return response()->json($category);
    }



    public function saveMultiField(Request $request){
       //$data =$request->input(); //work
       //$data = json_decode($request->getContent() , true);
       //return $request;

       // $validate = Validator::make($request->all(), [
        $validate = $this->validate($request, [
                '*.cat_name' => 'required|min:2|max:40|unique:categories,cat_name',
            ]
            ,
            [
                '*.cat_name.required' => 'The category name field is required.',
                '*.cat_name.min' => 'The category name must be at least 2 characters.',
                '*.cat_name.unique' => 'The category name has already been taken',
            ]
        );
        //])->validate();

       if($validate){

            // foreach( $request->input() as $key => $value )
            // {
            //     Category::create([
            //         'cat_name' => $value['cat_name'],
            //         'cat_slug' => slug_generator($value['cat_name']),
            //         'cat_desc' => $value['cat_desc'],
            //         'created_by' => \Auth::user()->id,
            //     ]);
            // }

            return response()->json(['success'=>'Category Created successfully.']); 
       }

       
       // if($validate->passes()){
       //      return response()->json(['success'=>'Success']);
       // }
       
        //return response()->json($request->input('*.cat_name'));
        //return response()->json($request->all());
        //$data = response()->json($request->input()); //'*.cat_name'
      //   $data = $request->all();
      //   //return $data;
       // $input = $request->all();

        // $rules = [];
        // //foreach($request->input(json_decode('multiField')) as $key => $value) {
        // foreach( $request->input() as $key => $value) {
        //    $rules["{$key}"] = 'required';
        //    // return {$key};
        // }
        // // //$validator = Validator::make($request->all(), $rules);
        // $validate = $this->validate($request->input(), $rules);

        // $this->validate($request->input(), [
        //     //'cat_name' => 'required|min:2|max:40|unique:categories,cat_name',
        //     'cat_name.*' => 'required',
        // ]);
        //$category = $request->all;
        //return 'Ok';
       

        // foreach (json_decode($request->input('multiField')) as $data_array)
        // {
        // // print_r($data_array); // this is your object name/party
        //  //return response()->json($data_array);
        //     return print_r($data_array);
        // }
      

       //  return response()->json(['success'=>'Category Created successfully.']); 

        //return response()->json(['error'=>$validator->errors()->all()]);
    }


}
