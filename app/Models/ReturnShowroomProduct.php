<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnShowroomProduct extends Model
{
      public function showroom(){
          return $this->belongsTo('App\Models\Showroom','showroom_id') ;
      }


     public function product(){
          return $this->belongsTo('App\Models\product','product_id') ;
      }


}
