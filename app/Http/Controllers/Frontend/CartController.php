<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\ProductAttribute;
use App\Http\Controllers\Controller;
use Gloudemans\Shoppingcart\Facades\Cart;


class CartController extends Controller
{
    public function addCart(Request $request){

        $product=Product::where('slug',$request->slug)->first();
        $product_attribute=ProductAttribute::where('product_id',$product->id)->with('attribute')->get();

        if($product->stock <= 1){
            return response()->json([
            'status'=>'error',
            'message'=>"Product Stock Out"
            ]);
        }

        if($request->quantity > $product->stock){
            return response()->json([
                    'status'=>'error',
                    'message'=>"Product Highest Quantity '$product->stock'"
            ]);
        }

         if($product_attribute->count()>=1 && $request->attribute_id==null){
            return response()->json([
                'status'=>'error',
                'message'=>'product '.$product->attribute->name. 'required' ,
             ]);
        }


        Cart::add([
            'id' => $product->id,
            'name'=>$product->name,
            'qty' => $request->quantity ?? 1,
            'price' => $product->price,
            'weight' => 0,
            'tax' => 0,
            'options' =>
                    [
                        'attribute_id' => $request->attribute_id,
                        'variant_id'=>$request->variant_id,
                        'image'=>$product->thumbnail_img
                    ]
        ]);

        return response()->json([
            'status'=>'SUCCESS',
            'message'=>$product->name.' added to cart'
        ]);



 }

 public function carToContent(){

    $cart_content=Cart::content();
    $cart_total=Cart::total();

        return response()->json([
            'cart_total'=>$cart_total,
            'cart_content'=>$cart_content,
            'item_count'=>Cart::count()
        ]);

    }



    public  function carToUpdate(Request $request){

        $rowId =$request->rowId ;
        if(Cart::update($rowId, $request->qty)){
            return response()->json([
                'status'=>'SUCCESS',
            ]);
        }

    }

    public  function carToDestroy(Request $request){

       // return $request->all();
        $rowId =$request->rowId ;
        Cart::remove($rowId);
        return response()->json([
            'status'=>'SUCCESS',
        ]);
    }







    public function addWishlist($id){

           $product=Product::findOrFail($id);
           Cart::instance('wishlist')->add($product->id,$product->name,1,$product->price,00,['slug' => $product->slug ,'stock' => $product->stock,'old_price' => $product->sale_price,'image' => $product->thumbnail_img ?? 'noimage.png' ]);
            return response()->json([
                'status'=>'OK',
                'message'=>$product->name.' added to  wishlist',
            ]);
    }



    public function viewWishlist(){

        $wishlist_content=Cart::instance('wishlist')->content();
        return response()->json([
                'status'=>'OK',
                'wishlist_content'=>$wishlist_content,
                'item_count'=> Cart::instance('wishlist')->count() ,
            ]);

    }




    public  function wishlistDestroy($rowId){

            Cart::instance('wishlist')->remove($rowId);
            return response()->json([
                'status'=>'OK',
                'message' => 'item removed from your wishlist',
            ]);


    }






}
