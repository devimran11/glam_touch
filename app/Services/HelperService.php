<?php
 namespace App\Services ;
use Throwable;
use App\Models\Sale;
use App\Models\Order;
use App\Models\Purchase;
use App\Models\ShowroomSale;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;

class   HelperService{


   public static function uniqueInvoiceMaker($invoice_type){
        // 1 for order Invoice
        // 2 for sale Invoice
        // 3 for purchase Invoice
        // 4 showroom sale invoice_no

        $order_invoice_no = 22 + Order::max('id') ;
        $sale_invoice_no = 22 + Sale::max('id') ;
        $purchase_invoice_no = 22 + Purchase::max('id') ;
        $showroom_sale_invoice_no = 22 + showroomSale::max('id') ;
        //checking in order  table
        if ($invoice_type==1) {
            $isExistInvoice = self::isExist(new Order(),'invoice_no',$order_invoice_no) ;
            return !empty($isExistInvoice) ? self::uniqueInvoiceMaker($invoice_type) : $order_invoice_no ;
        }
        //checking in sale  table
        if ($invoice_type==2) {
            $isExistInvoice = self::isExist(new Sale(),'invoice_no',$sale_invoice_no) ;
            return !empty($isExistInvoice) ? self::uniqueInvoiceMaker($invoice_type) : $sale_invoice_no ;
        }
         //checking in sale  table
        if ($invoice_type==3) {
            $isExistInvoice = self::isExist(new Purchase(),'invoice_no',$purchase_invoice_no) ;
            return !empty($isExistInvoice) ? self::uniqueInvoiceMaker($invoice_type) : $purchase_invoice_no ;
        }
         //checking in sale  table
        if ($invoice_type==4) {
            $isExistInvoice = self::isExist(new ShowroomSale(),'invoice_no',$showroom_sale_invoice_no) ;
            return !empty($isExistInvoice) ? self::uniqueInvoiceMaker($invoice_type) : $showroom_sale_invoice_no ;
        }
   }



   public static function isExist($model,$column,$invoice_no){

        return  $model->where($column,$invoice_no)->first() ?? null;
   }




   //optional
   function uniqueInvoiceNumber($tableName, $columName, $oldNumber = 0){

        $query = DB::table($tableName)->query();
        if ($oldNumber) {
            $query->where($columName, '!=', $columName);
        }
        $invoiceNumber = $query->max($columName);
        return $invoiceNumber;
    }




    //slug creator
    public static function slugCreator($string, $delimiter = '-') {
        // Remove special characters
          $string = preg_replace("/[~`{}.'\"\!\@\#\$\%\^\&\*\(\)\_\=\+\/\?\>\<\,\[\]\:\;\|\\\]/", "", $string);
        // Replace blank space with delimiter
        $string = preg_replace("/[\/_|+ -]+/", $delimiter, $string);
        return $string;
    }




    public static function successMessage(){

        return response()->json([
            'success' => true,
            'message' => 'action success'
        ],201);

    }


    public static function failMessage($message){

        return response()->json([
            'status' => 0,
            'message' => $message,
        ],401);

    }







    public function demoFunction(Request $request)
    {


       DB::beginTransaction();
        try{

            // $data=$request->validated();
            // $data['status'] = 1 ;
            // if ($request->hasFile('size_chart')) {

            // }
            // Product::query()->create($data);
            DB::commit();
            return HelperService::successMessage();

        }catch(Throwable $th){

            DB::rollBack();
            LogTracker::failLog($th,session()->get('admin')) ;
            return HelperService::failMessage($th->getMessage());

        }

    }




 }









?>