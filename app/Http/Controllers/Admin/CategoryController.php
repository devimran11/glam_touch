<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\HelperService;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::orderby('id', 'desc')->paginate(10);
        return response()->json([
            'categories' => $categories,
            'status' => 'SUCCESS'
        ]);
    }


    public function categoryList(){

        $categories = Category::where('status', 1)->get();
        return response()->json([
            'categories' => $categories,
        ]);
    }




    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|unique:categories|',
        ]);

        //for category slug
        $id = Category::max('id') ?? 0;
        $category = new Category();
        $category->name = $request->name;
        $category->is_selected = 1;
        $category->status = 1;
        $category->slug = HelperService::slugCreator(strtolower($request->name)).'-'.$id ;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/category', 'public');
            $category->icon_image = $path;
        }
        if ($category->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'category add successfully'
            ]);
        }
    }

    public function unselected($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->is_selected = 0;
            if ($category->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'category unselected successfully'
                ]);
            }
        }
    }

    public function selected($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->is_selected = 1;
            if ($category->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'category selected successfully'
                ]);
            }
        }
    }

    public function active($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->status = 1;
            if ($category->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'category active successfully'
                ]);
            }
        }
    }



    public function deActive($id)
    {
        $category = Category::findOrFail($id);
            $category->status = 0;
            if ($category->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'category de-active successfully'
                ]);
            }
    }



    public function search($search)
    {
        $categories = Category::where('name', 'like', '%' . $search . '%')->orderBy('id', 'DESC')->paginate(10);

        if ($categories) {
            return response()->json([
                'categories' => $categories,
                'status' => 'SUCCESS'
            ]);
        }
    }



    public function edit($id)
    {
        $category = Category::findOrFail($id);
            return response()->json([
                'status' => 'SUCCESS',
                'category' => $category
            ]);
    }


    public function update(Request $request, $id)
    {

        $this->validate($request, [
            'name' => 'required|unique:categories,name,'.$id,
        ]);
        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = HelperService::slugCreator(strtolower($request->name)).'-'.$id ;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/category', 'public');
            $category->icon_image = $path;
        }
        if ($category->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'category update successfully'
            ]);
        }
    }

    public function categoryWiseSubCategory($id){

        $subCategories=SubCategory::where('category_id',$id)->get();
        if ($subCategories){
            return response()->json([
                'status' => 'SUCCESS',
                'subCategories' =>$subCategories
            ]);
        }
    }



}
