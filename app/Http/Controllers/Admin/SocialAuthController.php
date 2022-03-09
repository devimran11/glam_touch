<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirectToProvider($provider){

     return Socialite::driver($provider)->redirect();

 }


 public function handleProviderCallback($provider){

        $provider_user = Socialite::driver($provider)->stateless()->user();
        //dd($provider_user);
        //if users login with google
        $token = Hash::make(rand(1111,9999));
        if ($provider=='google') {
            $my_user= User::where('email',$provider_user->email)->first();
            if ($my_user) {
                Auth::loginUsingId($my_user->id);
                return redirect('/user/dashboard?user_token='.$token) ;
            }else{
                $user=new User();
                $user->mobile_no=null;
                $user->password=Hash::make($provider_user->name);
                $user->name=$provider_user->name;
                $user->email=$provider_user->email;
                $user->image=$provider_user->avator ?? null;
                $user->city_id=null;
                $user->address=null;
                $user->status=1;
                $user->save();

                Auth::loginUsingId($user->id);
                return redirect('/user/dashboard?user_token='.$token) ;
            }
        }


        //if users login with facebook
        if ($provider=='facebook') {
            $my_user= User::where('mobile_no',$provider_user->phone)->first();
            if ($my_user) {
                Auth::loginUsingId($my_user->id);
                return redirect('/user/dashboard?user_token='.$token) ;
            }else{
                $user=new User();
                $user->mobile_no=$provider_user->name;
                $user->password=Hash::make($provider_user->name);
                $user->name=$provider_user->name;
                $user->email=$provider_user->email ?? null;
                $user->image=$provider_user->avator ?? null;
                $user->city_id=null;
                $user->address=null;
                $user->status=1;
                $user->save();
                Auth::loginUsingId($user->id);
                return redirect('/user/dashboard?user_token='.$token) ;
            }
        }

    }



}
