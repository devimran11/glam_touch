<?php

namespace App\Http\Controllers\Admin;

use Picqer;
use Exception;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\Credit;
use App\Models\Courier;
use App\Models\Product;
use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\CustomerDue;
use App\Models\OrderBarcode;
use Illuminate\Http\Request;
use App\Models\CustomerWallet;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\ResellerOrderDetails;
use App\Services\HelperService;
use App\Services\SmsService;

class OrderController extends Controller
{


    public function index(Request $request){

        //return "hello";
        //get all order with order filtering
        //firstly order separate in conditionally
        // here is make firstly 4 condition
        //1 is when no $request data
        //2 is when only $request start date
        //3 is when filtering with start and end date
        //4 is when order filtering with courier

        // when no $request data
        if(empty($request->start_date) && empty($request->end_date) && empty($request->courier_id)){
           return Order::ordersAll($request);
        }
        // when only $request start date
        if(!empty($request->start_date) && empty($request->end_date) && empty($request->courier_id)){
            return Order::orderFilterWithStartDate($request);
        }
        // when  $request start date and end date
        if(!empty($request->start_date) && !empty($request->end_date) && empty($request->courier_id)){
            return Order::orderFilterWithStartAndEndDate($request);
         }
         //filtering with courier
         if(!empty($request->courier_id)){
            return Order::orderFilterWithCourier($request);
         }

      }




    public function store(Request $request){
       // return $request->all();
        $validatedData = $request->validate([
            'customer_mobile' => 'required|digits:11 ',
            'customer_name' => 'required ',
            'customer_address' => 'required ',
            'city' => 'required',
            'courier' => 'required',
            'shipping_cost' => 'required',
            'paid_by'=>'required',
            'sub_city' => 'required',
        ]);

        //check order status.product quantity,and stock
        if($request->status==3){
            foreach($request->products as $item){
                $product=Product::where('id',$item['id'])->first();
                if($product->stock<=0){
                    return response()->json($product->product_code.'- Stock out');
                }
                else if($product->stock < $item['quantity']){
                    return response()->json("this product ".$product->product_code.' Stock Available-'.$product->stock.'. But request quantity ' .$item['quantity']);
                }else{
                    $product->stock=$product->stock - $item['quantity'];
                    $product->save();
                }
            }
        }
        DB::transaction(function() use($request){
            //first find find the customer
            $customer=Customer::where('phone',$request->customer_mobile)->first();
            $customer_type=1;
            if($request->order_type==3){
                $customer_type=2;
            }
            //if not customer then save, as a new customer
            if(!$customer){
                $customer=new Customer();
                $customer->name=$request->customer_name;
                $customer->phone=$request->customer_mobile;
                $customer->address=$request->customer_address;
                $customer->city_id=$request->city;
                $customer->customer_type=$customer_type;
                $customer->save();
            }else{
                $customer->user_id=0;
                $customer->name=$request->customer_name;
                $customer->address=$request->customer_address;
                $customer->city_id=$request->city;
                $customer->customer_type=$customer_type;
                $customer->save();
            }

            $order=new Order();
            $order->customer_id=$customer->id;
            $order->customer_phone=$request->customer_mobile;
            $order->invoice_no=HelperService::uniqueInvoiceMaker(1);
            $order->order_type=$request->order_type;
            $order->city_id=$request->city;
            $order->courier_id=$request->courier;
            $order->shipping_cost=$request->shipping_cost ?? 0;
            $order->discount=$request->discount ?? 0;
            $order->paid=$request->paid??0;
            $order->total=$request->total;
            $order->status=$request->status;
            $order->create_admin_id=session()->get('admin')['id'];
            $order->paid_by=$request->paid_by;
            $order->sub_city_id=$request->sub_city;

            //store who is approved
            if($request->status==3){
                $order->approved_admin_id=session()->get('admin')['id'];
                $order->approved_date=Carbon::now();
            }
            //store who is update
            if($request->status==2){
                $order->pending_admin_id=session()->get('admin')['id'];
                $order->pending_date=Carbon::now();
            }
            $order->save();
            //if order save then save the order details
            foreach($request->products as $product){
                //update product stock
                $product_stock=Product::where('id',$product['id'])->first();
                $product_stock->stock=$product_stock->stock - $product['quantity'];
                $product_stock->save();
                //inserting order item
                $details=new OrderItem();
                $details->order_id=$order->id;
                $details->product_id=$product['id'];
                $details->price=$product['price'];
                $details->quantity=$product['quantity'];
                $details->total=$product['quantity']*$product['price'];
                $details->attribute_id=$product['attribute_id'] ?? null;
                $details->variant_id=$product['variant_id'] ?? null;
                $details->save();
            }
            //update credit
            if( $order->paid > 0){
                $credit = new Credit();
                $credit->purpose = "Order Paid From Order";
                $credit->order_id = $order->id;
                $credit->amount = $request->paid;
                $credit->credit_in=$order->paid_by;
                $credit->comment ="Order Paid Amount '$order->paid'  Order Invoice Number '$order->invoice_no";
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->save();
            }
            (new SmsService())::SendMessageCustomer($order->customer_phone,$customer->name,$order->invoice_no);

        });
        return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order created successfully'
            ]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   public function update(Request $request, $id){
         //return $request->all();
        $validatedData = $request->validate([
            'customer_mobile' => 'required|digits:11 ',
            'customer_name' => 'required ',
            'customer_address' => 'required ',
            'city' => 'required',
            'courier' => 'required',
            'shipping_cost' => 'required',
            //'commission' => 'required',
            'sub_city' => 'required',

        ]);
        DB::beginTransaction();
        try{
            //first find find the customer
            $customer=Customer::where('phone',$request->customer_mobile)->first();
            $order=Order::findOrFail($id);
            if($order->status!=1 && $order->status!=2){
                return \response()->json('Order New Or Pending not now');
            }
            //if not customer then save, as a new customer
            if(!$customer){
                $customer=new Customer();
                $customer->name=$request->customer_name;
                $customer->phone=$request->customer_mobile;
                $customer->address=$request->customer_address;
                $customer->city_id=$request->city;
                $customer->save();
            }else{
            $customer->name=$request->customer_name;
                $customer->address=$request->customer_address;
                $customer->city_id=$request->city;
                $customer->save();
            }
            $order->customer_id=$customer->id;
            $order->customer_phone=$request->customer_mobile;
            $order->city_id=$request->city;
            $order->courier_id=$request->courier;
            $order->shipping_cost=$request->shipping_cost ?? 0;
            $order->discount=$request->discount ?? 0;
            $order->paid=$request->paid??0;
            $order->total=$request->total;
            $order->sub_city_id=$request->sub_city;
            //store who is approved
            if($request->status==3){
                $order->approved_admin_id=session()->get('admin')['id'];
                $order->approved_date=Carbon::now();
            }
            //store who is update
            if($request->status==2){
                $order->pending_admin_id=session()->get('admin')['id'];
                $order->pending_date=Carbon::now();
            }
            $order->save();
            //update credit
            if( $order->paid > 0){
                $credit=Credit::where('order_id',$order->id)->first();
                if($credit){
                    $credit->amount=$request->paid ;
                    $credit->save();
                }else{
                    $credit = new Credit();
                    $credit->purpose = "Order Paid Amount(From Order Update)";
                    $credit->order_id = $order->id;
                    $credit->amount = $request->paid;
                    $credit->credit_in=$request->paid_by;
                    $credit->comment ="Order Paid Amount '$order->paid'  Order Invoice Number '$order->invoice_no";
                    $credit->date = date('Y-m-d');
                    $credit->insert_admin_id=session()->get('admin')['id'];
                    $credit->save();
                }
            }
            $order_items=OrderItem::where('order_id',$id)->get();
            //many of times when update order item, some item remove or some item add, so here we are delete previous item and insert new $rquest item
            foreach($order_items as $order_item){
            //update product stock before delete items
               $product_stock=Product::where('id',$order_item->product_id)->first();
               $product_stock->stock=$product_stock->stock + $order_item->qty;
               $product_stock->save();
               $order_item->delete();
            }

            foreach($request->products as $product){
                //update product stock before insert item
                $product_item=Product::where('id',$product['product_id'])->first();
                $product_item->stock=$product_item->stock - $product['quantity'];
                $product_item->save();

                $details=new OrderItem();
                $details->order_id=$order->id;
                $details->product_id=$product['product_id'];
                $details->price=$product['price'];
                $details->quantity=$product['quantity'];
                $details->total=$product['quantity']*$product['price'];
                $details->attribute_id=$product['attribute_id'] ?? null;
                $details->variant_id=$product['variant_id'] ?? null;
                $details->save();
             }

            DB::commit();
            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order updated successfully'
            ]);

        }catch(Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }

    }




    public function approved($id){

        DB::beginTransaction();
        try{

            $order=Order::findOrFail($id);
            if($order->status==2 && $order->create_admin_id != null){
                $order->status=3;
                $order->approved_admin_id=session()->get('admin')['id'];
                $order->approved_date=Carbon::now();
            }else{
                $order->status=3;
                $order->approved_admin_id=session()->get('admin')['id'];
                $order->approved_date=Carbon::now();
            }
            $order->save();
            DB::commit();
            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order  approved  successfully'
            ]);

        }catch(Exception $e){
           DB::rollBack();
           return $e->getMessage();
        }

    }



    public function pending($id){

        $order=Order::findOrFail($id);
        $order->status=2;
        $order->pending_admin_id=session()->get('admin')['id'];
        $order->pending_date=Carbon::now();
        $order->save();
        return response()->json([
            'status'=>'SUCCESS',
            'message'=>'Order  pending  successfully'
        ]);

    }

    public function delivered(Request $request,$id){

        //  return $request->all();
        $order=Order::findOrFail($id);
        if($order->status!=4){
            return response()->json("order not shipment");
        }

        DB::transaction(function() use($request,$order){
            $order->status=5;
            $order->delivered_admin_id=session()->get('admin')['id'];
            $order->delivery_date=Carbon::now();
            $order->save();
            //when order delivered,then order amount is created at a new credit.....
            $total=$order->total-($order->paid+$order->discount)+$order->shipping_cost;
            if($total > 0){
                $comment='Delivered Order. Order Amount BDT '.$total.' Order Invoice number is '.$order->invoice_no;
                $credit = new Credit();
                $credit->purpose = "Delivered Order";
                $credit->amount =( $order->total+$order->shipping_cost)-($order->paid+$order->discount);
                $credit->comment =$comment;
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->credit_in=$request->credit_in;
                $credit->save();
            }

            $order_items=OrderItem::where('order_id',$order->id)->get();
            $my_wallet=0 ;
            foreach ($order_items as $item) {
                $product=Product::where('id',$item->product_id)->first();
                $my_wallet += $product->wallet_point * $item->quantity ;
            }
           //inserting to customer wallet
             $w_customer=CustomerWallet::where('user_id',$order->customer_id)->first();
             if (empty($w_customer)) {
                $wallet= new CustomerWallet();
                $wallet->user_id=$order->customer_id ;
                $wallet->point=$my_wallet ;
                $wallet->save();
             } else {
               $w_customer->point= $w_customer->point + $my_wallet ;
               $w_customer->save();
             }

        });

         return response()->json([
                      'status'=>'SUCCESS',
                     'message'=>'Order  delivered successfully'
                ]);

    }

    public function shipment($id){

            $order=Order::findOrFail($id);
            $order->status=4;
            $order->shipment_admin_id=session()->get('admin')['id'];
            $order->shippment_date=Carbon::now();
            $order->save();
            (new SmsService())::sendShipmentMessage($order);
             return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was shipped successfully'
                ]);
    }


    public function return($id){

        $order=Order::findOrFail($id);
        $details=OrderItem::where('order_id',$order->id)->get();
        if(count($details) > 0){
            foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock + $detail->quantity;
                $product->save();
             }
        }
        $order->status=7;
        $order->return_admin_id=session()->get('admin')['id'];
        $order->return_date=Carbon::now();
        $order->save();
        $due=CustomerDue::where('sale_id',$order->invoice_no)->first();
        if($due){
                $due->status=1;
                $due->save();
        }

        return response()->json([
            'status'=>'SUCCESS',
            'message'=>'Order was return successfully'
        ]);


    }




    public function cancel($id){

        $order=Order::find($id);
        if($order){
            $details=OrderItem::where('order_id',$order->id)->get();
           if($order->status !=1 &&  $order->status!=2){
               foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
            }
           }

            $order->status=6;
            $order->cancel_admin_id=session()->get('admin')['id'];
            $order->cancel_date=Carbon::now();

            if($order->save()){
                return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was cancel successfully'
                ]);
            }
        }
    }

    public function OrderCoutierUpdate(Request $request,$id){

        $order=Order::find($id);
      //  return $request->all();
        if($order){
            $order->courier_id=$request->courier_id;
            $order->memo_no=$request->memo_no;
            if($order->save()){
                $courier=Courier::where('id',$order->courier_id)->first();
                return response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Courier Update Was Successfully',
                    'order'=>$order,
                    'courier'=>$courier
                ]);

            }

        }
    }


    public function OrderFilter(Request $request){

      // return $request->all();

        $orders='';
        $paginate=$request->item??10;
        if(!empty($request->start_date) && empty($request->end_date)){

            if($request->status!='all'){
                $orders=Order::whereDate('created_at','=',$request->start_date)
                               ->where('status',$request->status)
                              ->with(['customer','createAdmin','courier','reseller'])
                              ->paginate($paginate);
            }else{
                $orders=Order::whereDate('created_at','=',$request->start_date)
                              ->with(['customer','createAdmin','courier','reseller'])
                             ->paginate($paginate);
            }

        }
        if(!empty($request->end_date) && !empty($request->start_date)){

            if($request->status!='all'){
                $orders=Order::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->where('status',$request->status)
                                ->with(['customer','createAdmin','courier','reseller'])
                                ->paginate($paginate);
            }else{
                $orders=Order::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->with(['customer','createAdmin','courier','reseller'])
                                ->paginate($paginate);
            }

         }

        return response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }

    public function OrderStatusWise(Request $request){

      //  return $request->all();

        $paginate=$request->item ?? 20;
        $orders=Order::orderBy('id','DESC')->where('status',$request->status)->with(['customer','createAdmin','courier'])->paginate($paginate);

        return \response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }


    public function orderSearchStatusWise(Request $request,$search){


   //  return $request->all();

   if(strlen($search)==11){

    $orders = Order::where('customer_phone','like', '%' . $search . '%')
                    ->where('status',$request->status)
                    ->orderBy('id', 'DESC')
                    ->with(['customer','createAdmin','courier','reseller'])
                    ->paginate(30);

   }else{

    $orders = Order::where('invoice_no', 'like', '%' . $search . '%')
                    ->where('status',$request->status)
                    ->orderBy('id', 'DESC')
                   ->with(['customer','createAdmin','courier','reseller'])
                    ->paginate(30);

   }


        return response()->json([
                'status'=>'SUCCESS',
                'orders'=>$orders
        ]);
    }
    public function orderSearch($search){

        $orders = Order::where('invoice_no', 'like', '%' . $search . '%')
                            ->orWhere('customer_phone','like', '%' . $search . '%')
                            ->orderBy('id', 'DESC')
                         ->with(['customer','createAdmin','courier','reseller'])
                            ->paginate(10);

              return response()->json([
                    'status'=>'SUCCESS',
                    'orders'=>$orders
                ]);
    }

    public function OrderFilterStatusWise(Request $request){

        $orders='';
        if(!empty($request->start_date) && empty($request->end_date)){

        $orders=Order::whereDate('created_at','=',$request->start_date)
                  ->with(['customer','createAdmin','courier','reseller'])
                  ->where('status',$request->status)->paginate(30);
        }
        if(!empty($request->end_date) && !empty($request->start_date)){
            $orders=Order::whereDate('created_at', '>=', $request->start_date)
                             ->whereDate('created_at', '<=', $request->end_date)
                            ->where('status',$request->status)
                            ->with(['customer','createAdmin','courier','reseller'])
                            ->paginate(30);
         }

        return response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }

    public function orderView($id){
        $order=Order::where('id',$id)->with(['customer','courier','city','sub_city','approvedBy','orderBarcode','resellerOrderDetails'])->first();
        $order_items=OrderItem::where('order_id',$order->id)->with(['product.productVariant.variant.attribute','attribute','variant','product.productImage'])->get();

        return response()->json([
                 'status'=>'SUCCESS',
                 'order'=>$order,
                 'items'=>$order_items
         ]);
    }




    public function labelPrint($id){

      $order_id=explode(',',$id);
      $orders=Order::whereIn('id',$order_id)->get();
      return view('admin.pdf.print.labelPrint', \compact('orders'));

    }

    public function approvedAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
         foreach($orders as $order){


          $order_items=OrderItem::where('order_id',$order->id)->get();

            //check product srock before order approved
            foreach($order_items as $order_item){
              $product=Product::where('id', $order_item->product_id)->first();
                if($product->stock<=0){
                    return \response()->json($product->code.'- Stock out');
                }
                else if($product->stock < $order_item->quantity){
                    return \response()->json("this product ".$product->product_code.' Stock Available-'.$product->stock.'. But created quantity ' .$order_item->quantity);
                }else{
                    $product->stock=$product->stock-$order_item->quantity;
                    $product->save();
                }

            }


            $order->status=3;
            $order->approved_admin_id=session()->get('admin')['id'];
            $order->approved_date=Carbon::now();
            $order->save();

            return \response()->json([
                'status'=>"OK",

            ]);
        }

        return \response()->json('Order successfully approved');
    }

     public function pendingAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
        foreach($orders as $order){
            $order->status=2;
            $order->pending_admin_id=session()->get('admin')['id'];
            $order->pending_date=Carbon::now();
            $order->save();
        }

        return \response()->json('Order successfully pending');
    }

     public function shipmentAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
         foreach($orders as $order){

         if(!empty($order->courier_id) && !empty($order->memo_no)){
                $order->status=4;
                $order->shipment_admin_id=session()->get('admin')['id'];
                $order->shippment_date=Carbon::now();
                $order->save();

                //add customer due if paid amount smaller then  total amount......
            //     if($order->paid < $order->total+$order->shipping_cost){
            //        $customer=Customer::where('phone',$order->customer_phone)->first();
            //         DB::table('customer_dues')->insert([
            //             'order_invoice_no'=>$order->invoice_no,
            //             'customer_mobile_no'=>$customer->phone,
            //             'customer_name'=>$customer->name,
            //             'due_type'=>'Order Due',
            //             'amount'=>( $order->total+$order->shipping_cost)-($order->paid+$order->discount),
            //         ]);
            //    }
           }else{
                return \response()->json('Invoice_no-'.$order->invoice_no.'- courier or memmo number not set');
            }
        }

        return \response()->json([
            'status'=>"OK",
            'message'=>'Order successfully shipment'
        ]);
    }

     public function deliveredAll($id){
        $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
        foreach($orders as $order){

            if($order->status==5){
                 return \response()->json($order->invoice_no.'Order all ready elievred');
            }
            $order->status=5;
            $order->delivered_admin_id=session()->get('admin')['id'];
            $order->delivery_date=Carbon::now();
            $order->save();

            //when order delievered,then order amount is created at a new credit.....
            $total=$order->total-($order->paid+$order->discount)+$order->shipping_cost;
            $comment='Delievred Order. Order Amount BDT '.$total.' Order Invoice number is '.$order->invoice_no;
            $credit = new Credit();
            $credit->purpose = "Delivered Order";
            $credit->amount = ($order->total+$order->shipping_cost)-($order->paid+$order->discount);
            $credit->comment =$comment;
            $credit->date = date('Y-m-d');
            $credit->credit_in="Cash";
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();

            //if order has dues....
            //remove dues when order delievred....
            $due=CustomerDue::where('sale_id',$order->invoice_no)->first();
            if($due){
                $due->status=1;
                $due->save();
            }

        }
         return \response()->json('Order successfully Delievred');
    }


     public function returnAll($id){

        $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();

        foreach($orders as $order){
            $order->status=7;
            $order->return_admin_id=session()->get('admin')['id'];
            $order->return_date=Carbon::now();
            $order->save();
             $details=OrderItem::where('order_id',$order->id)->get();

          //when order return,then update product stock
           if(count($details) > 0){
                foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
            }
        }


        }

        return \response()->json('Order successfully Returned');
    }

     public function cancellAll($id){
         $order_id=explode(',',$id);
         $orders=Order::whereIn('id',$order_id)->get();

        foreach($orders as $order){

            // when order cancel,then update product stock
             $details=OrderItem::where('order_id',$order->id)->get();
            if($order->status !=1 &&  $order->status !=2){
                foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
                }
            }
            $order->status=6;
            $order->cancel_admin_id=session()->get('admin')['id'];
            $order->cancel_date=Carbon::now();
            $order->save();


        }

        return \response()->json('Order successfully Canceld');
    }
    public function invoicePrint($id){

      $order_id=explode(',',$id);
      $orders=Order::whereIn('id',$order_id)->get();
      return view('admin.pdf.print.invoicePrint', compact('orders'));
    }

    public function comment(Request $request){

        $order=Order::where('id',$request->order_id)->first();
        $order->comment=$request->comment;
        $order->save();
        return response()->json([
            "status" => "OK",
            "message" => $order->comment."  is added as comment ",
        ]);

    }

    public function updateResellerCommison(Request $request,$id){

        return $request->all();
       $reseller_order=ResellerOrderDetails::where('order_id',$id)->first();
       $reseller_order->total_amount=$request->commission;
        if($reseller_order->save()){
             return response()->json('whole sale');
      }
  }

  public function returnItem($id){
    $item=OrderItem::find($id);

    if($item){
        if($item->status==2){
            return response()->json('Item Already Returned');
        }
        $item->status=2;
        if($item->save()){
            //update order
            $order=Order::where('id',$item->order_id)->first();
            $order->total=$order->total-$item->total;
            $order->save();

            //update product stock

            $product=Product::where('id',$item->product_id)->first();
            $product->stock=$product->stock+$item->quantity;
            $product->save();

            return \response()->json([
                'success'=>"OK",
                'message'=>"Order Was Update"
            ]);

        }
    }else{
        return response()->json('Item Not Found');
    }
  }
}
