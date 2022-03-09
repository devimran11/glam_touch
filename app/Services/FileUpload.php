<?php
 namespace App\Services;
 use Intervention\Image\Facades\Image;


 trait  FileUpload{


      public static function singleFileUpload($file,$dir_name)
      {

                $path = $file->store('images/'.$dir_name,'public');
                return $path ;

      }


      public static function singleFileUploadWithIntervention($file,$dir_name,$width=300,$height=300)
      {

                //make thumbnail image
                $filename = time() .$file->getClientOriginalName();
                $image_resize = Image::make($file->getRealPath());
                $image_resize->resize($width, $height, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $image_resize->save(public_path('storage/images/'.$dir_name.'/'.$filename));
                return $filename ;

      }



        public static function fileUnlink($path){

            return  unlink($path) ;
        }



 }



?>