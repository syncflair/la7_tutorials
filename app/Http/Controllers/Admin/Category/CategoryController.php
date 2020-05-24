<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $category = Category::orderBy('id', 'DESC')->paginate(10);
       //$category = Category::get();
        //return $category;
        return response()->json($category);
        //return response($category->jsonSerialize(), Response::HTTP_OK);
        //return response($category->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper
        
        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }

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
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
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
            //'cat_slug' => 'required|unique:categories,cat_slug,'.$id,
        ]);

        $data =array();
        $data['parent_id']=$request->parent_id;
        $data['cat_name']=$request->cat_name;
        //$data['cat_slug']=$request->cat_slug;
        $data['cat_slug']= slug_generator($request->cat_name);//slug_generator get from helper

        

        if($request->is_enabled == NULL){
            $data['is_enabled'] = 0;
        }else{
           $data['is_enabled']=$request->is_enabled; 
        }


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

    public function searchCategory(Request $request){
        //$search = $request->q;

        if($search = \Request::get('q')){
            $searchResult = Category::where(function($query) use ($search){
                $query->where('cat_name','LIKE','%'.$search.'%')
                        ->orWhere('cat_slug','LIKE','%'.$search.'%')
                        ->orWhere('is_enabled','LIKE','%'.$search.'%');
                        //->orWhere('updated_at','LIKE','%'.$search.'%');
            })->paginate(10);
        }else{
            $searchResult = Category::latest()->paginate(10);
        }

        return $searchResult;

    }

    public function countCategory(){
            $count = Category::select('id')->get();
            return $count = $count->count();
    }

    public function unactiveCategory($id){       
        $category = Category::find($id);
        $category->is_enabled = 0;
        $category->save();

        return response()->json(['success'=> 'Category Inactive Now']);
    }

    public function activeCategory($id){
        $category = Category::find($id);
        $category->is_enabled = 1;
        $category->save();

        return response()->json(['success'=> 'Category Active Now']);
    }

    public function getParentCategory(){
        $parentCategory = Category::whereNull('parent_id')
                           ->select('id','cat_name')
                           ->get();
        return $parentCategory;
    }


}
