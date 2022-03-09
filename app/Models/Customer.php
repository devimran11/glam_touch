<?php

namespace App\Models;
use App\Services \SmsService;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{


    public function customerCity(){

         return $this->belongsTo('App\Models\City','city_id');

      }

      public static function sendMessageToWholeSaleCustomer($customers,$message){

            $contact='';
            foreach($customers as  $key => $customer){

            if (strlen($customer->phone) > 11 ) {
                  if(substr($customer->phone,0,3)=='+88'){
                        $customer->phone=trim($customer->phone,'+88');
                  }elseif(substr($customer->phone,0,2)=='88'){
                        $customer->phone=trim($customer->phone,'88');
                  }
                      //after filtering country code checking again number
                  if( strlen($customer->phone) > 11  ){

                    return  response()->json([
                              "status" => "FAIL",
                              "message" => "Error Found this number.$customer->phone)",
                              "sub_message" => "number len is:".strlen($customer->phone) ,
                               ]);
                    }

                  }

               $contact.=$customer->phone.(count($customers)==$key+1 ? '' : '+');
            }

          return SmsService::smsApi($contact,$message);

      }


      public static function sendMessageToRetailSaleCustomer($customers,$message){

           $contact='';
            foreach($customers as  $key => $customer){

            if (strlen($customer->phone) > 11 ) {
                  if(substr($customer->phone,0,3)=='+88'){
                        $customer->phone=trim($customer->phone,'+88');
                  }elseif(substr($customer->phone,0,2)=='88'){
                        $customer->phone=trim($customer->phone,'88');
                  }
                      //after filtering country code checking again number
                   if( strlen($customer->phone) > 11  ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$customer->phone)",
                                  "sub_message" => "number len is:".strlen($customer->phone) ,
                                   ]);
                        }

                   }
              $contact.=$customer->phone.(count($customers)==$key+1 ? '' : '+');

            }

         return  SmsService::smsApi($contact,$message);

      }


      public static function sendMessageToOfficeSaleCustomer($customers,$message){

           $contact='';
            foreach($customers as  $key => $customer){

            if (strlen($customer->phone) > 11 ) {
                  if(substr($customer->phone,0,3)=='+88'){
                        $customer->phone=trim($customer->phone,'+88');
                  }elseif(substr($customer->phone,0,2)=='88'){
                        $customer->phone=trim($customer->phone,'88');
                  }
                  //after filtering country code checking again number
                  if( strlen($customer->phone) > 11  ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$customer->phone)",
                                  "sub_message" => "number len is:".strlen($customer->phone) ,
                                   ]);
                     }

                  }

               $contact.=$customer->phone.(count($customers)==$key+1 ? '' : '+');
            }

         return SmsService::smsApi($contact,$message);

      }


      public static function sendMessageToAdmins($admins,$message){

          //  return $admins;
            $contact='';
            foreach($admins as  $key => $admin){

            if (strlen($admin->phone) > 11 ) {
                  if(substr($admin->phone,0,3)=='+88'){
                         $admin->phone=trim($admin->phone,'+88');

                  }else if(substr($admin->phone,0,2)=='88'){
                        $admin->phone=trim($admin->phone,'88');
                  }

                  //after filtering country code checking again number
                  if( strlen($admin->phone) > 11   ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$admin->phone)",
                                  "sub_message" => "number len is:".strlen($admin->phone) ,
                                   ]);
                         }

                    }

               $contact.=$admin->phone.(count($admins)==$key+1 ? '' : '+');
            }

          return SmsService::smsApi($contact,$message);

      }



      public static function sendMessageToMerchants($merchants,$message){
            $contact='';
            foreach($merchants as  $key => $merchant){

            if (strlen($merchant->phone) > 11 ) {
                  if(substr($merchant->phone,0,3)=='+88'){
                        $merchant->phone=trim($merchant->phone,'+88');
                  }elseif(substr($merchant->phone,0,2)=='88'){
                        $merchant->phone=trim($merchant->phone,'88');
                  }

                  //after filtering country code checking again number
                  if( strlen($merchant->phone) > 11  ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$merchant->phone)",
                                  "sub_message" => "number len is:".strlen($merchant->phone) ,
                                   ]);
                      }

                   }

             $contact.=$merchant->phone.(count($merchants)==$key+1 ? '' : '+');

            }

       return  SmsService::smsApi($contact,$message);


      }



     public static function sendMessageToResellers($resellers,$message){

            $contact='';
            foreach($resellers as  $key => $reseller){

            if (strlen($reseller->phone) > 11 ) {
                  if(substr($reseller->phone,0,3)=='+88'){
                        $reseller->phone=trim($reseller->phone,'+88');
                  }elseif(substr($reseller->phone,0,2)=='88'){
                        $reseller->phone=trim($reseller->phone,'88');
                  }
                  //after filtering country code checking again number
                  if( strlen($reseller->phone) > 11   ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$reseller->phone)",
                                  "sub_message" => "number len is:".strlen($reseller->phone) ,
                          ]);
                        }

                     }
                $contact.='0'.$reseller->phone.(count($resellers)==$key+1 ? '' : '+');
             }

        return   SmsService::smsApi($contact,$message);

   }


  //this is Instant static method
  public static function sendMessageToInstantCustomers($instant_customers,$message){
      //explode will remove pipe and it will make an array
        $contact_numbers= explode("|",$instant_customers) ;
        $contact="";
        foreach ($contact_numbers as $key => $number) {

            if (strlen($number) > 11 ) {
                  if(substr($number,0,3)=='+88'){
                        $number=trim($number,'+88');
                  }elseif(substr($number,0,2)=='88'){
                        $number=trim($number,'88');
                  }
                  //after filtering country code checking again number
                  if( strlen($number) > 11   ){

                        return  response()->json([
                                  "status" => "FAIL",
                                  "message" => "Errorr Found this number.$number)",
                                  "sub_message" => "number len is:".strlen($number) ,
                          ]);
                     }
                 }

              $contact .= $number.(count($contact_numbers) == $key+1 ? '' : '+' ) ;
           }

           return   SmsService::smsApi($contact,$message) ;

     }




  public static function sendMessageToCustomCustomers($custom_customers,$message){


   }









}