<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\SaleCampaign ;
use App\Models\OccasionProduct ;
use App\Models\SeasonalProduct;
use App\Models\BuyOneGetOneOffer;

class SaleCampaignController extends Controller
{



public function get_sale_campaign_list() {

        $sale_campaigns = SaleCampaign::orderBy('id','desc')->get();
            return response()->json([
                'status' => "OK",
                 'sale_campaigns' => $sale_campaigns,
            ]);

}



public function store_sale_campaign(Request $request)
 {

      $validatedData = $request->validate([
          'name'  => 'required',
          'expired_date'  => 'required',
          'border_width'  => 'required',

      ]);

      $sale_campaign =new SaleCampaign();
      $sale_campaign->name=$request->name;
      $sale_campaign->expired_date=$request->expired_date;
      $sale_campaign->background_color=$request->background_color;
      $sale_campaign->border_color=$request->border_color;
      $sale_campaign->border_width=$request->border_width;
      $sale_campaign->order_by=$request->order_by;
      $sale_campaign->status=1;

      if ($sale_campaign->save()) {
          return response()->json([
              'status' => 'SUCCESS',
              'message' => 'Sale capmaign addedsuccessfully',
          ]);
      }else{
          return response()->json([
              'status' => 'FAIL',
              'message' => 'Expire date is required and something went wrong',
          ]);
      }
}




public function active_sale_campaign($id) {

    $sale_campaign = SaleCampaign::findOrFail($id);
    $sale_campaign->status=1 ;
    if ($sale_campaign->save()) {
        return response()->json([
            "status" => "OK",
            "message" => "this campaign activated",
        ]);
    }

}




public function de_active_sale_campaign($id) {

    $sale_campaign = SaleCampaign::findOrFail($id);
    $sale_campaign->status=0 ;
    if ($sale_campaign->save()) {
        return response()->json([
            "status" => "OK",
            "message" => "this campaign de-activated",
        ]);
     }
  }




    public function destroy_sale_campaign($id) {

            $sale_campaign = SaleCampaign::findOrFail($id);
            if ($sale_campaign->delete()) {
                return response()->json([
                    "status" => "OK",
                    "message" => "this campaign destroyed",
                ]);
        }
    }






    public function get_edit_campaign($id) {

        $sale_campaign = SaleCampaign::findOrFail($id);
            return response()->json([
                'status' => "OK",
                'sale_campaign'=>$sale_campaign,
            ]);

        }





  public function update_sale_campaign(Request $request,$id){

    $validatedData = $request->validate([
        'name'  => 'required',
        'expired_date'  => 'required',
        'border_width'  => 'required',

    ]);

    $sale_campaign = SaleCampaign::findOrFail($id);
    $sale_campaign->name=$request->name;
    $sale_campaign->expired_date=$request->expired_date;
    $sale_campaign->background_color=$request->background_color;
    $sale_campaign->border_color=$request->border_color;
    $sale_campaign->border_width=$request->border_width;
    $sale_campaign->order_by=$request->order_by;
    $sale_campaign->status=1;

    if ($sale_campaign->save()) {
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'Sale capmaign updated successfully',
        ]);
    }else{
        return response()->json([
            'status' => 'FAIL',
            'message' => 'Expire date is required and something went wrong',
        ]);
     }

 }




    // occasion campaign is start from here

    public function get_occasional_campaign() {

        $campaign = OccasionProduct::latest()->take(1)->first();
        if ($campaign) {
            return response()->json([
                "status" => "OK",
                "campaign" => $campaign ,
            ]);
        }

    }



    public function edit_occasional_campaign(Request $request,$id){

        $validatedData = $request->validate([
            'heading' => 'required',
            'quote' => 'required',
            'product_code_one' => 'required',
            'product_code_two' => 'required',
        ]);

        $campaign = OccasionProduct::findOrFail($id);
        $campaign->heading=$request->heading;
        $campaign->quote=$request->quote;
        $campaign->status=$request->status;
        $campaign->product_code_one=$request->product_code_one;
        $campaign->product_code_two=$request->product_code_two;
        if ($request->hasFile('campaign_background') ) {
            $background_path = $request->file('campaign_background')->store('images/occasion_campaign', 'public');
            $campaign->background_image = $background_path;
        }
        if ($campaign->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Seasional campaign updated successfully',
            ]);
        }

    }


     //seasonal camapaign is start from here
     public function get_seasional_campaign() {

            $campaign = SeasonalProduct::latest()->take(1)->first();
            if ($campaign) {
                return response()->json([
                    "status" => "OK",
                    "campaign" => $campaign ,
                ]);
            }

        }



    public function edit_seasional_campaign(Request $request,$id)
        {

         $validatedData = $request->validate([
                'heading' => 'required',
                'quote' => 'required',
                'product_code_one' => 'required',
                'product_code_two' => 'required',
            ]);

            $campaign = SeasonalProduct::findOrFail($id);
            $campaign->heading=$request->heading;
            $campaign->quote=$request->quote;
            $campaign->status=$request->status;
            $campaign->product_code_one=$request->product_code_one;
            $campaign->product_code_two=$request->product_code_two;
            if ($request->hasFile('campaign_background') ) {
                $background_path = $request->file('campaign_background')->store('images/seasion_campaign', 'public');
                $campaign->background_image = $background_path;
            }
            if ($campaign->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'Seasional campaign updated successfully',
                ]);
            }

        }






     //buy one get one is here
     public function get_buy_one_get_one_campaign(){

            $campaign = BuyOneGetOneOffer::latest()->take(1)->first();
            if ($campaign) {
                return response()->json([
                    "status" => "OK",
                    "campaign" => $campaign ,
                ]);
            }

        }



     public function edit_buy_one_get_one_campaign(Request $request,$id){

         $validatedData = $request->validate([
                'url' => 'required',
                'status' => 'required',
            ]);

            $campaign = BuyOneGetOneOffer::findOrFail($id);
            $campaign->url=$request->url;
            $campaign->status=$request->status;
            if ($request->hasFile('banner') ) {
                $banner_path = $request->file('banner')->store('images/buy_one_get_one', 'public');
                $campaign->banner = $banner_path;
            }
            if ($campaign->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => ' updated successfully',
                ]);
            }

        }



        public function BannerLIst(){
            $banners= Banner::get();
            return response()->json([
                'status' => 'OK',
                'banners' => $banners ,
            ]);
        }



    public function AddBanner(Request $request){

         $validatedData = $request->validate([
                'url' => 'required',
                'placement' => 'required',

            ]);
         $banner = new Banner();
         $banner->url=$request->url ;
         $banner->placement=$request->placement ;
         $banner->status=1 ;
         if ($request->hasFile('banner')) {
             $path= $request->file('banner')->store('images/banner','public');
             $banner->banner= $path ;
         }
         $banner->save();

         return response()->json([
                'status' => 'OK',
                'message' => 'added successfully' ,
            ]);
    }



     public function GetBanner(Request $request,$id){
            $banner= Banner::findOrFail($id);
            return response()->json([
                'status' => 'OK',
                'banner' => $banner ,
            ]);
        }

    public function UpdateBanner(Request $request,$id){

         $validatedData = $request->validate([
                'url' => 'required',
                'placement' => 'required',
            ]);
         $banner = Banner::findOrFail($id);
         $banner->url=$request->url ;
         $banner->placement=$request->placement ;
        if ($request->hasFile('banner')) {
             $path= $request->file('banner')->store('images/banner','public');
             $banner->banner= $path ;
         }
         $banner->save();

         return response()->json([
                'status' => 'OK',
                'message' => 'updateed successfully' ,
            ]);
    }





    public function activeBanner($id){

        $banner = Banner::findOrFail($id);
        $banner->status = 1;
        $banner->save();
        return response()->json([
            'status' => 'OK',
            'message' => 'activated'
        ]);

    }




    public function DeActiveBanner($id){

        $banner = Banner::findOrFail($id);
        $banner->status = 0;
        $banner->save();
        return response()->json([
            'status' => 'OK',
            'message' => 'de-activated'
        ]);

    }






    public function DestroyBanner($id){

        $banner = Banner::findOrFail($id);
        $banner->delete();
        return response()->json([
            'status' => 'OK',
            'message' => 'removed'
        ]);

    }





}









