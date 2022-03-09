<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductChildrenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_children', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id')->comment('parent product id ');
            $table->unsignedBigInteger('color_id')->comment('color  id ');
            $table->text('slug')->nullable()->comment('slug create by combination of product name and self code');
            $table->text('thumbnail_img')->nullable();
            $table->integer('code')->comment('unique code of every child');
            $table->text('barcode')->comment('unique barcode of every child');
            $table->integer('position')->default(0)->comment('display position of every child');
            $table->integer('show_home_page')->default(0)->comment('public display condition of products');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_children');
    }
}
