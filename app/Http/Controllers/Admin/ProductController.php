<?php

namespace App\Http\Controllers\Admin;

use Picqer;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\Product;
use App\Models\Variant;
use App\Models\Category;
use App\Models\Customer;
use App\Models\SubCategory;
use Illuminate\Support\Str;
use App\Models\ProductImage;
use App\Models\Purchaseitem;
use Illuminate\Http\Request;
use App\Models\ProductBarcode;
use App\Models\ProductVariant;
use App\Models\SubSubCategory;
use App\Services\HelperService;
use Illuminate\Validation\Rule;
use App\Models\ProductAttribute;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Services\FileUpload;
use App\Services\LogTracker;
use Throwable;

class ProductController extends Controller{

    use FileUpload ;

    public function ThumbnailImageMakerFromExistingFile(){

        $products=Product::query()->where('thumbnail_img')->get();
        foreach($products as $product){
            if($product->productImages->count()>0){
                $product_img=ProductImage::where('product_id',$product->id)->first();
                //make thumbnail image
                if (file_exists('storage/'.$product_img->product_image)) {
                    $filename =$product_img->product_image;
                    $explodeName = explode("/",$filename);
                    $image_resize = Image::make('storage/'.$product_img->product_image);
                    $image_resize->resize(400, 400, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $image_resize->save(public_path('storage/images/product_thumbnail_img/'.$explodeName[2]));
                    $data['thumbnail_img']=$explodeName[2];
                    DB::table('products')->where('id', $product->id)->update($data);
                }
            }
        }


    }



    public function index(Request $request){

      //  return $request->all();
        $paginate = $request->item ?? 30;
        if($request->status=="all"){
            $products = Product::orderBy('id', 'DESC')->select('id','name','sale_price','price','discount','status','wallet_point','show_home_page')->paginate($paginate);
        }else{
            $products = Product::orderBy('id', 'DESC')->select('id','name','sale_price','price','discount','status','wallet_point','show_home_page')->where('status',$request->status)->paginate($paginate);
        }
        return response()->json([
            'status' => 'ok',
            'products' => $products
        ]);
    }





    public function store(StoreRequest $request)
    {

       DB::beginTransaction();
        try{

            $data=$request->validated();
            $data['status'] = 1 ;
            if ($request->hasFile('size_chart')) {
               $files=$request->file('size_chart') ;
               $data['size_chart'] = FileUpload::singleFileUpload($files[0],'product_size_chart');
            }
            Product::query()->create($data);
            DB::commit();
            return HelperService::successMessage();

        }catch(Throwable $th){

            DB::rollBack();
            LogTracker::failLog($th,session()->get('admin')) ;
            return HelperService::failMessage($th->getMessage());

        }

    }





    public function edit($id)
    {
        $product = Product::findOrFail($id);
        if ($product) {

            return response()->json([
                'success' => true,
                'product' => $product,
            ]);
        }

    }


    public function search($search){

        $products = Product::where('product_code',$search)->select('id','name','product_code','stock','sale_price','price','discount','status','wallet_point','thumbnail_img')->with(['productBarcode','purchaseItem'])->paginate(110);
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }


    public function approved($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 1;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product approved successfully'
                ]);
            }
        }
    }



    public function pending($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 2;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product pending successfully'
                ]);
            }
        }
    }




    public function deny($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->status = 3;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product deny successfully'
                ]);
            }
        }
    }




    public function stockUpdate(Request $request, $id)
    {

        $product = Product::find($id);
        if ($product) {
            $product->stock = $request->stock;
            if ($product->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'product - ' . $product->product_code . ' - stock updated'
                ]);
            }
        }
    }




    public function updateBasicInformation(UpdateRequest $request, $id)
    {
       $product=Product::findOrFail($id);
       DB::beginTransaction();
        try{

            $data=$request->validated();
            $data['status'] = 1 ;
            if ($request->hasFile('size_chart')) {
               if(!empty($product->image)){
                  unlink('storage/'.$product->size_chart);
               }
               $files=$request->file('size_chart') ;
               $data['size_chart'] =  FileUpload::singleFileUpload($files[0],'product_size_chart');
            }
            $product->update($data);
            DB::commit();
            return HelperService::successMessage();

        }catch(Throwable $th){

            DB::rollBack();
            LogTracker::failLog($th,session()->get('admin')) ;
            return HelperService::failMessage($th->getMessage());

        }


    }



    public function updateProperties(Request $request, $id)
    {


        //return $request->all();
        $validatedData = $request->validate([
            'attribute' => 'required ',
            'variant' => 'required',
        ]);

        if (Product::findOrFail($id)) {
            //find product old attribute
            if (isset($request->attribute) && !empty($request->attribute)) {
                    $product_attribute =ProductAttribute::where('product_id',$id)->first();
                    if($product_attribute){
                         $product_attribute->attribute_id = $request->attribute;
                         $product_attribute->save();
                    }else{
                         $product_attribute =new ProductAttribute();
                         $product_attribute->attribute_id = $request->attribute;
                         $product_attribute->product_id = $id;
                        $product_attribute->save();
                     }

              }
              //find product old variant
            $product_old_variants = ProductVariant::whereIn('product_id', [$id])->get();
            //delete product old variant
            foreach ($product_old_variants as $product_old_variant) {
                $product_old_variant->delete();
            }
            //save the new variant
            foreach ($request->variant as $variant) {
                $p_variant = new ProductVariant();
                $p_variant->product_id = $id;
                $p_variant->variant_id = $variant;
                $p_variant->save();
            }
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'product properties updated successfully'
            ]);
        }


    }

    public function UpdateProductImage(Request $request, $id)
    {
        $product= Product::findOrFail($id);
        //save product multiple image in store directory
        if ($request->hasFile('image')) {
            $files = $request->file('image');
                //make thumbnail image
                $filename = time() .$files[0]->getClientOriginalName();
                $image_resize = Image::make($files[0]->getRealPath());
                $image_resize->resize(400, 400, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $image_resize->save(public_path('storage/images/product_thumbnail_img/'.$filename));
                $product->thumbnail_img = $filename;
                $product->save();

            foreach ($files as $file) {
                $product_image = new ProductImage();
                $product_image->product_id = $id;
                $path = $file->store('images/products', 'public');
                $product_image->product_image = $path;
                $product_image->save();
            }
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'product image updated successfully'
            ]);
        }

    }

    public function deleteImage(Request $request, $id)
    {

       $product_image=ProductImage::where('product_id',$id)->get();
       if ($product_image[$request->index]->delete()){
           return response()->json([
                'status'=>'SUCCESS',
               'message'=>'product image was deleted'
           ]);
       }

    }

    public function searchWithCode($code){
        $product=Product::where('product_code',$code)->where('status',1)->first();
         if($product){
            $product->{'purchase_price'}= intval(Purchaseitem::where('product_id',$product->id)->avg('price')) ;
            $product_attributes=ProductAttribute::where('product_id',$product->id)->with('attribute')->get();
            $product_variants=ProductVariant::where('product_id',$product->id)->with('variant')->get();
            $data[] = array_merge($product->toArray(),['attributes' => $product_attributes, 'variants' =>$product_variants]);
            return \response()->json([
                'status'=>'SUCCESS',
                'product'=>$data
               ]);
        }


    }




    public function copyProduct($id,$copy_items){
            $c_product=Product::findOrFail($id);
            DB::transaction(function() use($c_product,$copy_items){
                for ($p=1; $p <= $copy_items ; $p++) {
                     //get products tables max id
                    $max_id = Product::max('id') ;
                    $product_code = 1001 + $max_id ;
                    $product = new Product() ;
                    $product->name = $c_product->name;
                    $product->category_id = $c_product->category_id;
                    $product->sub_category_id = $c_product->sub_category_id ?? null;
                    $product->sub_sub_category_id = $c_product->sub_sub_category_id ?? null;
                    $product->product_code = $product_code;
                    $product->slug =  HelperService::slugCreator(strtolower($c_product->name)).'-'. $product_code;
                    $product->sale_price = $c_product->sale_price;
                    $product->price = $c_product->price;
                    $product->discount = $c_product->discount ?? null;
                    $product->thumbnail_img = $c_product->thumbnail_img;
                    $product->status = 1;
                    $product->stock = 0;
                    $product->details = $c_product->details;
                    $product->product_placement = $c_product->product_placement ?? 0;
                    $product->product_position = $c_product->product_position ?? 0;
                    $product->save();


                    //save product Image
                    $c_product_variants_img=ProductImage::where('product_id',$c_product->id)->first();
                    if (!empty($c_product_variants_img)) {
                        $product_image = new ProductImage();
                        $product_image->product_id = $product->id;
                        $product_image->product_image = $c_product_variants_img->product_image;
                        $product_image->save();
                    }

                    //if product save then generate product barcode
                        $generator = new Picqer\Barcode\BarcodeGeneratorHTML();
                        $barcode = $generator->getBarcode($product->product_code, $generator::TYPE_CODE_128);
                        $product_barcode = new ProductBarcode();
                        $product_barcode->product_id = $product->id;
                        $product_barcode->barcode = $barcode;
                        $product_barcode->barcode_number = $product->product_code;
                        $product_barcode->save();

                        //save the product
                         $c_product_attribute=ProductAttribute::where('product_id',$c_product->id)->first();
                         if (!empty($c_product_attribute)) {
                            $product_attribute = new ProductAttribute();
                            $product_attribute->product_id = $product->id;
                            $product_attribute->attribute_id = $c_product_attribute->attribute_id;
                            $product_attribute->save();
                         }

                         $c_product_variants=ProductVariant::where('product_id',$c_product->id)->get();
                         if (!empty($c_product_variants)) {
                             foreach ($c_product_variants as  $item) {
                                $product_variant = new ProductVariant();
                                $product_variant->product_id = $product->id;
                                $product_variant->variant_id = $item->variant_id;
                                $product_variant->save();
                            }
                         }


                  }


              });

              return response()->json([
                  'status' => 'success',
                  'message' => 'product duplicated -'.$copy_items. ' times' ,
              ]);


    }

    public function productStock(Request $request){

          $item=$request->item??20;
          $products=Product::where('status',1)->where('stock','>',0)->with('purchaseItem')->paginate($item);
          return response()->json($products);

    }

    public function printBarcode($id,$howmany){

        $product=Product::FindOrFail($id);
        $product_barcode=ProductBarcode::where('product_id',$id)->first();
        $pdf=PDF::loadView('admin.pdf.barcode',compact('product_barcode','howmany','product'));
        $pdf->stream();
        return view('admin.pdf.barcode',compact('product_barcode','howmany','product'));

    }



    public function searchCustomer(Request $request,$number){

        if(!$request->ajax()){
                return \abort(404);
        }

       $customer=Customer::where('phone',$number)->first();

      if(!empty($customer)){
        $customer_order=Order::where('customer_id',$customer->id)->orderBy('id','DESC')->first();
        return response()->json([
                'message'=>"customer al ready register.",
                'customer'=>$customer
        ]);

      }else{
        return response()->json([
            'message'=>"new customer for us",
          ]);
      }

    }

    public function get_suggested_product(Request $request){

        $paginate_item= $request->item ?? 10 ;
        $products=Product::orderBy('id','DESC')->where('status', 1)->where('stock', '>=', 1 )->with(['productImage'])->paginate($paginate_item);
        return response()->json([
               'status' => "OK",
               'products' => $products ,
        ]);
    }


    public function search_suggested_product($product_code){

        $products=Product::where('product_code', 'like', '%'.$product_code.'%')->with(['productImage'])->paginate(20);
        return response()->json([
            'status' => "OK",
            'products' => $products ,
        ]);
    }


    public function search_suggested_product_code_name($data){


        $products=Product::where('product_code', 'like', '%'.$data.'%')
                            ->orWhere('name', 'like', '%'.$data.'%')
                            ->with(['productImage','purchaseItem','productBarcode','purchaseItem'])
                            ->paginate(20);
        return response()->json($products);
    }



    public function searchSingleProduct($code){
        $product=Product::where('product_code',$code)->first();
            return response()->json([
                'status' => "OK",
                'product' => $product ,
            ]);
    }




    public function filterProductForPrintBarcode(Request $request){
        //   return $request->all();
        $products=PurchaseItem::whereIn('product_id',$request->products_id)
                                 ->whereDate('created_at','>=',$request->start_date)
                                 ->whereDate('created_at','<=',$request->end_date)
                                 ->select(DB::raw('SUM(insert_quantity) as total_stock, product_id'))
                                 ->groupBy('product_id')->get()->each(function($item){
                                       $item->{'product'} = Product::where('id',$item->product_id)->select('id','name','price','product_code','thumbnail_img')->with('productBarcode:product_id,barcode,barcode_number')->first();
                                    });

        return response()->json([
             'status' => 1,
             'products' => $products,
        ]);


    }




    public function bulkPrintBardCodeSetSession(Request $request){

            session()->forget('print_products');
            session()->put('print_products', (array)$request->params['products']) ;
            return response()->json([
                'status' => 1,
            ]);

    }




    public function bulkPrintBardCode(){

        $products = session()->get('print_products') ;
        $pdf=PDF::loadView('admin.pdf.bulk_barcode',compact('products'));
        $pdf->stream();
        return view('admin.pdf.bulk_barcode',compact('products'));


    }





    public function stockReportCategoryWise($category_id){

            $category = Category::where('id',$category_id)->with('subCategory.subSubCategory')->first();
            //fetched products of this category and calculated it's stock and amount ;
            $products = Product::where('stock','>',0)->where('category_id',$category_id)->select('id','stock')->with(['purchaseItem:id,product_id,price,stock'])->get();
            $category->{'total_stock'}=  $products->sum('stock');
            $category->{'total_amount'}=  self::getCategoryStockAmount($products) ;
            //collecting sub categories stock and amount report
            self::getSubCategoryStock('sub_category_id',$category->subCategory);

            // return $category ;
             $pdf=PDF::loadView('admin.pdf.stock_report_category_wise',compact('category'));
             return $pdf->stream();

    }




    public function stockReportAllCategory(){

          $categories = Category::select('id','name')->with('subCategory.subSubCategory')->get();
          foreach ($categories as $key => $value) {
                $products = Product::where('stock','>',0)->where('category_id',$value->id)->select('id','stock')->with(['purchaseItem:id,product_id,price,stock'])->get();
                $value->{'total_stock'} = $products->sum('stock');
                $total_amount = 0;
                //fetched average purchase price
                foreach($products as $item){
                    count($item->purchaseItem) > 0 ? $total_amount += round($item->stock * self::averagePurchasePrice($item->purchaseItem),0) : 0 ;
                }
                $value->{'total_amount'} = $total_amount;
               //collecting sub categories stock and amounts
                 self::getSubCategoryStock('sub_category_id',$value->subCategory);
           }

            //  return $categories ;
             $pdf=PDF::loadView('admin.pdf.stock_report_all_category_wise',compact('categories'));
             return $pdf->stream();

    }





    public static function getSubCategoryStock($category_column_name,$categories) {
            foreach ($categories as $key => $value) {
                $products = Product::where('stock','>',0)->where($category_column_name,$value->id)->select('id','stock')->with(['purchaseItem:id,product_id,price,stock'])->get();
                $value->{'total_stock'} = $products->sum('stock');
                $total_amount = 0;
                //fetched average purchase price
                foreach($products as $item){
                    count($item->purchaseItem) > 0 ? $total_amount += round($item->stock * self::averagePurchasePrice($item->purchaseItem),0) : 0 ;
                }
                $value->{'total_amount'} = $total_amount;
                 //collecting sub sub categories stock and amounts
                $value->{'sub_sub_categories'}= self::getCategoryWiseProductStock('sub_sub_category_id',$value->subSubCategory);
            }
            return ;
    }








    public static function getCategoryStockAmount($products) {

            $total_amount = 0;
            //fetched average purchase price
            foreach($products as $item){
                count($item->purchaseItem) > 0 ? $total_amount += round($item->stock * self::averagePurchasePrice($item->purchaseItem),0) : 0 ;
            }
            return $total_amount   ;
    }





    public function productStockReports(Request $request){

          $item=$request->item??20;
          $categories = Category::select('id','name')->get();
          if (!empty($categories)) {
             self::getCategoryWiseProductStock('category_id',$categories);
          }
          $sub_categories='';
          $sub_sub_categories='';

          if ( !empty($request->category_id)  || !empty($request->sub_category_id)  || !empty($request->sub_sub_category_id) ) {
                //fetched sub category and stock
                $sub_categories = $request->category_id ? SubCategory::where('category_id',$request->category_id)->select('id','name')->get() : '';
                if (!empty($sub_categories)) {
                    self::getCategoryWiseProductStock('sub_category_id',$sub_categories);
                }

                $sub_sub_categories = $request->sub_category_id ? SubSubCategory::where('subcategory_id',$request->sub_category_id)->select('id','name')->get() : '' ;
                if (!empty($sub_sub_categories)) {
                    self::getCategoryWiseProductStock('sub_sub_category_id',$sub_sub_categories);
                }

                $category_column_name='';
                $category_id='';

                //only category wise
                if ( !empty($request->category_id) && $request->category_type=='category' ) {
                       $category_column_name='category_id' ;
                       $category_id=$request->category_id;
                       $products= self::getCategoryWiseProducts($category_column_name,$category_id,$item);
                 }
                //category and sub category wise
                if (!empty($request->sub_category_id) && $request->category_type=='sub_category' ) {
                       $category_column_name='sub_category_id' ;
                       $category_id=$request->sub_category_id;
                       $products= self::getCategoryWiseProducts($category_column_name,$category_id,$item);
                }

                //category and sub sub category wise
                if (!empty($request->sub_sub_category_id) && $request->category_type=='sub_sub_category' ) {
                       $category_column_name='sub_sub_category_id' ;
                       $category_id=$request->sub_sub_category_id;
                       $products= self::getCategoryWiseProducts($category_column_name,$category_id,$item);
                }

                return response()->json([
                    'categories' => $categories,
                    'products' => $products,
                    'sub_categories' => $sub_categories,
                    'sub_sub_categories' => $sub_sub_categories,
                ]);


          }else{

             $products=Product::where('stock','>',0)->select('id','name','category_id','sub_category_id','sub_sub_category_id','stock','product_code','price','sale_price')->with('purchaseItem')->paginate($item);
            return response()->json([
                'categories' => $categories,
                'products' => $products,
            ]);

          }


    }



    public static function  getCategoryWiseProducts($category_column_name,$category_id,$paginate_item){

       return Product::where($category_column_name,$category_id)
                 ->where('stock','>',0)
                 ->select('id','name','category_id','sub_category_id','sub_sub_category_id','stock','product_code','price','sale_price')
                 ->with('purchaseItem')->paginate($paginate_item);

    }


    public static function getCategoryWiseProductStock($category_column_name,$categories) {
            foreach ($categories as $key => $value) {
                $products = Product::where('stock','>',0)->where($category_column_name,$value->id)->select('id','stock')->with(['purchaseItem:id,product_id,price,stock'])->get();
                $value->{'total_stock'} = $products->sum('stock');
                $total_amount = 0;
                //fetched average purchase price
                foreach($products as $item){
                    count($item->purchaseItem) > 0 ? $total_amount += round($item->stock * self::averagePurchasePrice($item->purchaseItem),0) : 0 ;
                }
                $value->{'total_amount'} = $total_amount;
            }
            return ;
    }






    public static  function averagePurchasePrice($purchase_items){

            $total_price = 0 ;
            $purchase_time = 0 ;
            foreach ($purchase_items as $key => $purchase) {
                    $total_price += $purchase->price ;
                    $purchase_time++ ;
            }
            //average price
            $price = $total_price / $purchase_time ;
            return round($price,2) ;
    }













}
