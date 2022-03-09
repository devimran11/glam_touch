<?php

namespace App\Services ;

use Exception;
use App\Models\Loan;
use App\Models\LoanPaid;
use App\Models\Purchase;
use App\Models\EmployeeSalary;
use App\Models\GeneralSetting;
use App\Models\SalaryPerMonth;
use App\Models\ProductForPrint;
use App\Models\SupplierPayment;
use App\Models\PrintHousePayment;


class SmsService{


   public static  $setting = '' ;

   public  function __construct() {

     self::$setting= GeneralSetting::latest()->first();

   }



     public static function sendMessageToShowroomCustomer($showroom_name,$customer,$sale){

            $sms = 'Dear '.$customer->name  .', Thanks for purchase from ' . $showroom_name . ' the payable amount is '.$sale->total.' BDT and your invoice number is '.$sale->invoice_no. '.' ;   // put here your dynamic message text here
            return self::smsApi($customer->phone,$sms);

        }



   public   static function SendMessageToInvestor($investor,$amount,$profit_month){

        $sms = 'Assalamualikum, You have received '.number_format($amount).'/=BDT, as your investment profit of '.$profit_month.'  from the' . self::$setting->title. ' Thanks for being with us';   // put here your dynamic message text here
        return self::smsApi($investor->mobile_no,$sms);
   }



   public   static function SendMessageToPrintHouse($print_house,$amount){

        $print_house_amount=ProductForPrint::where('company_id',$print_house->id)->sum('total_cost');
        $print_house_paid_amount=PrintHousePayment::where('print_house_id',$print_house->id)->sum('amount');
        $due_amount=$print_house_amount - $print_house_paid_amount;
        $sms = 'Thank you for the recent payment of '.number_format($amount).'/=BDT, You have received from the'. self::$setting->title.' and your due amount is '.number_format($due_amount).'/=BDT';
        return self::smsApi($print_house->mobile_no,$sms);
  }


   public   static function SendMerchantPasswordResetCode($contacts,$code){

       $sms = "Your password reset code is ".$code.' Thanks by' .self::$setting->title;
       return self::smsApi($contacts,$sms);

   }


   public   static function SendMessageToLoaner($loaner,$amount){
        //get supplier due amount
        $loans=Loan::where('loaner_id',$loaner->id)->sum('amount');
        $loanPaid=LoanPaid::where('loaner_id',$loaner->id)->sum('amount');
        $due_amount=$loans-$loanPaid;
        $sms = 'Thank you for the recent payment of '.number_format($amount).'/=BDT, You have received from the '.self::$setting->title.' and your due amount is '.number_format($due_amount).'/=BDT';
        return self::smsApi($loaner->mobile_no,$sms);
    }


    public   static function sendMessageToLoanerForNewLoan($loaner,$amount){
        //get supplier due amount
        $loans=Loan::where('loaner_id',$loaner->id)->sum('amount');
        $loanPaid=LoanPaid::where('loaner_id',$loaner->id)->sum('amount');
        $due_amount=$loans-$loanPaid;
        ///send message
        $sms =  'Assalamualaikum, Dear '.$loaner->name. ','.self::$setting->title.' has taken '.number_format($amount).'/=BDT as a loan from you. Total amount is '.number_format($loans).'/=BDT, and due amount is '.number_format($due_amount).'/=BDT';
        return self::smsApi($loaner->mobile_no,$sms);
    }


    public   static function SendMessageCustomer($number,$name,$invoice){

        $sms = 'Dear '.$name.','. 'Your order has been received. Invoice number is '.$invoice. '.' .'If you have any query please contact with us .'.self::$setting->header_contact_number.'. Thanks by  '.self::$setting->title;
        return self::smsApi($number,$sms);

    }


    public   static function sendReturnMessage($admin_name,$invoice_no,$amount){

        $sms = 'Order has been returned, invoice number  '.$invoice_no. ', amount '.$amount.'Tk, Returned by '. $admin_name;   // put here your dynamic message text here
        return self::smsApi(self::$setting->header_contact_number,$sms);

    }


    public   static function sendShipmentMessage($order){

        $total=0;
        if(!empty($order->total)){
          $total=($order->total)-($order->paid+$order->discount)+$order->shipping_cost;
        }
        $courier=$order->courier->name;
        $name=$order->customer->name;
        $sms = 'Dear ' . $name .'.'. ' Your order has been shipped to '.$courier.' Courier.'.' memo number is. ' .$order->memo_no.' and payable amount '.$total.' Tk.'.' Thanks by '.self::$setting->title;   // put here your dynamic message text here
        return  self::smsApi($order->customer_phone,$sms);
    }



    public   static function SendMessageToCustomer($customer,$amount,$invoice){

        $sms = 'Dear '.$customer->name .', Thank you for your purchase from '.self::$setting->title.'. Invoice number is S-'.$invoice.' & payable amount is ' .$amount.'/=BDT';   // put here your dynamic message text here
        return  self::smsApi($customer->phone,$sms);
    }



    public   static function SendMessageToCompany($company,$amount,$invoice){

        $sms = 'Dear '.$company->name .', Thank you for your purchase from '.self::$setting->title.'. Invoice number is S-'.$invoice.' & payable amount is ' .$amount.'/=BDT';
        return  self::smsApi($company->phone,$sms);
    }




    public   static function SendMessageToSupplier($supplier,$amount){

        //get supplier due amount
        $supplier_purchase_amount=Purchase::where('supplier_id',$supplier->id)->sum('total');
        $supplier_paid_amount=SupplierPayment::where('supplier_id',$supplier->id)->sum('amount');
        $supplier_due_amount=$supplier_purchase_amount-$supplier_paid_amount;

        $sms = 'Thank you for the recent payment of '.number_format($amount).'/=BDT, You have received from the' .self::$setting->title.' and your due amount is '.number_format($supplier_due_amount).'/=BDT';
         return self::smsApi($supplier->phone,$sms);
    }


     public   static function SendReverseSaleMessageToSupplier($supplier,$invoice_no,$amount){

        //get supplier due amount
        $supplier_purchase_amount=Purchase::where('supplier_id',$supplier->id)->sum('total');
        $supplier_paid_amount=SupplierPayment::where('supplier_id',$supplier->id)->sum('amount');
        $supplier_due_amount=$supplier_purchase_amount - $supplier_paid_amount;

        $sms = 'Assalamualikum, Dear '.$supplier->company_name.' you have purchased '.$amount.' BDT from' .self::$setting->title.'  invoice No is '.$invoice_no.' your due amount is '.$supplier_due_amount.' BDT' ;   // put here your dynamic message text here
         return self::smsApi($supplier->phone,$sms);

    }




    public   static function sendNewPurchaseMessage($supplier,$amount,$invoice_no)  {

            //get supplier due amount
            $supplier_purchase_amount=Purchase::where('supplier_id',$supplier->id)->sum('total');
            $supplier_paid_amount=SupplierPayment::where('supplier_id',$supplier->id)->sum('amount');
            $supplier_due_amount=$supplier_purchase_amount-$supplier_paid_amount;

            $sms = 'Assalamualaikum Dear '.$supplier->name .','. self::$setting->title .'  has a new purchase '.number_format($amount).'/=BDT from you. Invoice is : '.$invoice_no.' and total due amount is '.number_format($supplier_due_amount).'/=BDT Thanks from' .self::$setting->title;    // put here your dynamic message text here
            return self::smsApi($supplier->phone,$sms);
    }





    public   static function sendMessageToEmployer($employee,$amount){

        $total_taken_amount=EmployeeSalary::where('employee_id',$employee->id)->sum('amount');
        $total_paid_amount=SalaryPerMonth::where('employee_id',$employee->id)->sum('amount');
        $due_amount= intval($total_taken_amount)  - intval($total_paid_amount) ;

        $sms = 'Assalamualikum, '. $employee->name.' you have received a payment as your salary ' .$amount.'/= BDT, from the '.self::$setting->title.' and your due/advance amount is ' .$due_amount.'/=BDT';
        return self::smsApi($employee->phone,$sms);
    }



    public    static function  verifyLogin($number,$sms){

        return self::smsApi($number,$sms);
    }

    public  static function sendOtpCode($number,$code){

        $sms =$code.' is your OTP by '.self::$setting->title;
        return self::smsApi($number,$sms);

    }



    public static function SendUserPasswordResetCode($contacts,$code){

         $sms = "Your password reset code is ".$code.' Thanks by '.self::$setting->title ;   // put here your dynamic message text here
         return self::smsApi($contacts,$sms);

    }



    public  static   function   smsApi($contacts,$sms){

        $api_key = "C200842360d46fec549020.69644003";
        $senderid = '8809612436210';
        $URL = "http://sms.esmsbd.com/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
        //  print_r($output);
        } catch (Exception $ex) {
        return back();
        }
        return $output;


    }








}







?>