<?php

namespace App\Http\Controllers\Outlet;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Models\Customer;
use App\Models\ShowroomCustomerDue;
use App\Models\Showroom;
use App\Models\ShowroomSale;
use App\Models\ShowroomSaleItem;
use App\Models\ShowroomProduct;
use App\Models\ShowroomCredit;
use App\Services\HelperService;
use App\Services\SmsService;
use Barryvdh\DomPDF\Facade as PDF;
use Exception;


class SaleController extends Controller
{


    public  function searchCustomer($mobile_no){

             $customer=Customer::where('phone',$mobile_no)->first();
             if ($customer) {
                 return response()->json([
                 'status' => 'OK',
                 'message' => 'welcome',
                 'customer' => $customer,
                 ]);
             }else{
                return response()->json([
                  'message' => 'new customer',
                 ]);
             }
      }



    public function sales(Request $request ){

           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];

          if ($request->search) {
              $sales =ShowroomSale::where('showroom_id',$showroom_id)
                                  ->where('invoice_no','LIKE','%'.$request->search.'%')
                                  ->orWhere('customer_name','LIKE','%'.$request->search.'%')
                                  ->orWhere('customer_phone','LIKE','%'.$request->search.'%')
                                  ->orWhere('customer_address','LIKE','%'.$request->search.'%')
                                  ->orderBy('id','desc')->paginate($item);

            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);

          }else{

              if (!empty($request->start_date) &&   empty($request->end_date)) {
                  $sales=ShowroomSale::where('showroom_id',$showroom_id)->whereDate('created_at',$request->start_date)->orderBy('id','desc')->paginate($item);
              }
              else if (!empty($request->start_date) &&   !empty($request->end_date)) {
                  $sales=ShowroomSale::where('showroom_id',$showroom_id)
                                       ->whereDate('created_at','>=',$request->start_date)
                                       ->whereDate('created_at','<=',$request->end_date)
                                       ->orderBy('id','desc')->paginate($item);
              }else{
                  $sales=ShowroomSale::where('showroom_id',$showroom_id)->orderBy('id','desc')->paginate($item);
              }

               return response()->json([
                    'status' => 'SUCCESS',
                    'sales' => $sales
               ]);

          }


    }


    public function exportSalesRecord($start_date,$end_date)
    {


            $showroom_id=session()->get('manager')['showroom_id'] ;
            $sales=ShowroomSale::where('showroom_id',$showroom_id)
                                    ->whereDate('created_at', '>=', $start_date)
                                    ->whereDate('created_at', '<=', $end_date)
                                    ->orderBy('id','desc')->with('sale_items')->get();
            $pdf = PDF::loadView('admin.pdf.outlet_sales_report',['sales' => $sales,
                                                                 'start_date' => $start_date,
                                                                 'end_date' => $end_date,
                                                                 'total_amount' => $sales->sum('total') ,
                                                                 'total_discount' => $sales->sum('discount') ,
                                                                 'total_paid' => $sales->sum('paid') ,
                                                                 'total_due' => $sales->sum('due_amount') ,
                                                                 'outlet' => Showroom::where('id',$showroom_id)->first() ,
                                                                ]);
           return $pdf->stream();
    }




    public function retailSales(Request $request ){
           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];
           $sales=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',1)->orderBy('id','desc')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);
    }


    public function wholeSales(Request $request ){
           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];
           $sales=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',2)->orderBy('id','desc')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);
    }


    public function saleDetails($id){

           $showroom_id=session()->get('manager')['showroom_id'];
           $sale=ShowroomSale::where('showroom_id',$showroom_id)->where('id',$id)->first();
           $sale_items=ShowroomSaleItem::where('showroom_sale_id',$sale->id)->with('product.productImage','variant')->get();
           $showroom=Showroom::where('id',$showroom_id)->first();
           return response()->json([
                'status' => 'SUCCESS',
                'sale' => $sale,
                'sale_items' => $sale_items,
                'showroom' => $showroom,
            ]);

    }


    public function storeSale(Request $request)
    {
            //   return $request->all();
            $data = $request->validate([
                    'customer_phone' => 'required',
                    'customer_name' => 'required',
                    'customer_address' => 'nullable',
                    'total' => 'required',
                    'paid_by' => 'required',
                    'paid' => 'nullable',
                    'sale_type' => 'required',
                    'discount_type' => 'nullable',
                    'discount' => 'nullable',
                    'due' => 'nullable',
            ]);

          DB::beginTransaction();
          try {

            $showroom=Showroom::findOrFail(session()->get('manager')['showroom_id']);
            //firstly check customer and if not exist then save customer data
            $customer = Customer::where('phone', $request->customer_phone)->first();
            if ($customer) {
                $customer->name = $request->customer_name;
                $customer->address = $request->customer_address ?? null;
                $customer->save();
            } else {
                $customer = new Customer();
                $customer->name = $request->customer_name;
                $customer->phone = $request->customer_phone;
                $customer->address = $request->customer_address ?? 'Dhaka';
                $customer->city_id = 2;
                $customer->customer_type = 1;
                $customer->save();
            }

            //inserting sale
            $sale=new ShowroomSale();
            $sale->showroom_id=$showroom->id;
            $sale->sale_type=$request->sale_type;
            $sale->invoice_no=HelperService::uniqueInvoiceMaker(4);
            $sale->customer_name=$request->customer_name ?? null ;
            $sale->customer_phone=$request->customer_phone ?? null ;
            $sale->customer_address=$request->customer_address ?? null ;
            $sale->paid=$request->paid ?? 0;
            $sale->paid_by=$request->paid_by;
            $sale->discount=$request->discount ;
            $sale->discount_type=$request->discount_type ;
            $sale->due_amount=$request->due ?? 0 ;
            $sale->total=$request->total ;
            $sale->save();
            if (!empty($request->customer_phone)) {
                 SmsService::sendMessageToShowroomCustomer($showroom->name,$customer,$sale);
            }
            //save the sale item
           foreach ($request->products as $item) {
            //manage product stock
            $product = ShowroomProduct::where('product_id', $item['id'])->first();
            $product->stock = $product->stock - $item['quantity'];
            $product->save();
            //save sale items
            $sale_item = new ShowroomSaleItem();
            $sale_item->showroom_sale_id = $sale->id;
            $sale_item->product_id = $item['id'];
            $sale_item->attribute_id = $item['attribute_id'] ?? null;
            $sale_item->variant_id = $item['variant_id'] ?? null ;
            $sale_item->price = $item['price'];
            $sale_item->quantity = $item['quantity'];
            $sale_item->total=$item['price'] * $item['quantity'];
            $sale_item->save();

            }

            //if customer not paid total amount,then create a customer dues
             if($sale->paid < $sale->total ){
                $due= new ShowroomCustomerDue();
                $due->showroom_id=$showroom->id;
                $due->showroom_sale_id= $sale->id;
                $due->amount=$sale->due_amount;
                $due->save();
            }

            //create a credit.......
           if ($sale->paid > 0) {
                $credit = new ShowroomCredit();
                $credit->showroom_id = $showroom->id;
                $credit->purpose = "showroom sale";
                $credit->amount = $sale->paid;
                $credit->credit_in=$sale->paid_by;
                $credit->comment ='sale invoice no. '.$sale->invoice_no;
                $credit->date = date('Y-m-d');
                $credit->insert_manager_id=session()->get('manager')['id'];
                $credit->save();
            }

            DB::commit();
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'new sale  added',
                'sale_id' => ShowroomSale::max('id'),
            ]);

            }catch(Exception $e){

                DB::rollBack();
                return response()->json([
                        'status' => 'FAILED',
                        'message' => $e->getMessage(),
                    ]);
            }



    }







    public function invoicePrint($id){
        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom = Showroom::where('id', $showroom_id)->first();
        $sale=ShowroomSale::where('showroom_id',$showroom->id)->where('id',$id)->with('sale_items')->first();
        $pdf = PDF::loadView('outlet.pdf.print.invoicePrint', compact('sale', 'showroom'));
        //$pdf->stream();
        return view('outlet.pdf.print.invoicePrint', compact(['sale','showroom'] ));

    }




    // public function invoicePrintSmall($id){
    //     $showroom_id=session()->get('manager')['showroom_id'];
    //     $sale=ShowroomSale::where('showroom_id',$showroom_id)->where('id',$id)->first();
    //     $sale_items=ShowroomSaleItem::where('showroom_sale_id',$sale->id)->with('product.productImage','variant')->get();
    //     $showroom=Showroom::where('id',$showroom_id)->first();
    //   return view('manager.pdf.print.smallPrint', compact(['sale','sale_items','showroom'] ));
    // }








}
