<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class ShowroomSale extends Model
{


     protected $fillable=['id', 'showroom_id', 'sale_type', 'invoice_no', 'customer_name', 'customer_phone', 'customer_address', 'paid', 'paid_by', 'discount', 'discount_type', 'due_amount', 'total', 'created_at', 'updated_at'];

     public function sale_items(){
         return $this->hasMany("App\Models\ShowroomSaleItem",'showroom_sale_id') ;
     }



}
