<!-- CSS Part Start-->
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('frontend/js/bootstrap/css/bootstrap.min.css')); ?>" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('frontend/css/stylesheet-skin3.css')); ?>"/>
<link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>

<link rel="stylesheet" type="text/css" href="<?php echo e(asset('frontend/css/scrol.css')); ?>"/>
<link rel="stylesheet" href="<?php echo e(asset('admin/css/sweetalert2.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('frontend/css/header.css')); ?>"/>
<script src="<?php echo e(asset('admin/js/objectToFormData.js')); ?>"></script>
<script src="<?php echo e(asset('admin/js/sweetalert2.all.js')); ?>"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">


<?php
$color=App\Models\BackgroundAndColor::first();
?>
<style>

:root {
    --primary-color: <?php echo $color->primary_color; ?>;
    --body-backgroud: <?php echo $color->primary_background_color; ?>;
     --primary-text-color: <?php echo $color->primary_text_color ?>;
    --menu-text-color: <?php echo $color->menu_text_color ?>;
    --menu-background: <?php echo $color->menu_background_color ?>;

}

    body{
        overflow-x: hidden;
    }

    a{
        color: var(--primary-text-color) ;
        font-family: 'Poppins', sans-serif;
    }
    a:hover{
        text-decoration: none;
    }
    .tab-content {
        display: block !important;
    }


    .list-group .active {
        background: var(--primary-color) !important;
    }

    .caption {
        text-align: center;
    }

   .product {
    height: 100%;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    }

    .product-content {
        margin-top: 7px;
    }

    .single-product.mt-2 {
        margin-top: 20px;
    }

    .slider_background{
        background:var(--primary-color);
        margin-left: 0px;
        margin-right: 0px;
    }

    span.outstcok {
        background: yellow;
        color: #000;
    }

    .product-side-category {
        margin-left: 8px;
        margin-top: 7px;
    }

    .toasted.toasted-primary.success {
        width: 400px;
        height: 55px;
        font-size: 18px;
    }

    .toasted.toasted-primary.error {
        width: 400px;
        height: 55px;
        font-size: 18px;
        font-weight: bolder;
    }

    .image img {
        max-width: 200px;
        max-height: 200px;
    }

    table img.img-thumbnail {
        width: 50px;
        height: 50px;
    }

    .product-content .product-thumb {

        margin-bottom: 12px;
    }

    .quantityUpdat {
        font-size: 20px;
        cursor: pointer;
    }

    .cart-empy {
        text-align: center;
        padding: 0;
        margin: 0;
        border: 1px solid #eeeeee;
    }

    .cart-empy p {
        margin-top: 0px;
        font-size: 20px;
    }

    .cart-empy img {
        margin-bottom: 0px;
        margin-top: 0;
    }

    .custom-box {
        width: 100%;
        height: auto ;
        background: #fff ;
        padding: 15px 68px ;
        margin-top: 20px !important;
        margin: auto;
        border-radius: 10px ;
        /* box-shadow: 3px 3px 3px #ddd ; */
    }

    .title { margin:0px 0px 20px 0px; }

    .custom-box .title {
        font-family: 'Montserrat';
        font-weight: bold;
        color: #070707;
        font-size: 18px;
        border-bottom: 2px solid var(--primary-color);
    }

    .is-invalid {
        border: 1px solid red;
    }

    .invalid-feedback {
        color: red;
    }


    .cart-total {
        background: #21180F;
        width: 100%;
        padding: 0px;
        font-size: 15px;
        color: #F9AF5F;
    }
    span.badge-danger {
        background: red;
    }

    span.badge-success {
        background: var(--primary-color);
    }

    span.badge-warning {
        background: #f39c12;
        color: #000 !important;
    }

    span.badge-primary {
        background: #3c8dbc;
    }

    .related_products .sub-title {
        text-align: center;
        border-bottom: 2px solid #ddd;
        margin-bottom: 45px;
    }

    .search-content {
        position: absolute;
        z-index: 1000;
        top: 53%;
        width: 41%;
        height: auto;
        overflow-y: scroll;
        margin-left: 5%;
    }

    .search-content li:hover {
        background: var(--primary-color);
        color: #fff;
    }

    .search-content li .search-router-link:hover {
        color: #fff;
    }

    .search-content li .search-router-link {
        color: #000;
    }

     .__search_porducts_details {
         display: flex ;
         padding: 5px 8px ;
     }
     .search_result_img {
         max-width: 50px;
     }

    .search_name_price {
          margin-left: 10px;
        }


.btnQuick:hover {
  background: var(--primary-color);
}


.displayeBlok{
  display: none;
}



.product-header {
    position: relative;
    padding: 0px;
    margin: 0px 0px 20px 0px;
    line-height: normal;
    font-size: 20px;
    color: #000000;
    border-bottom: 2px solid #ddd;
    padding-bottom: 3px;
}

nav#top li a {
    color: #fff !important;
}

#header .htop {
    background-color: var(--primary-color);
}

.left-top {
    background-color: var(--primary-color)!important;
}

#header .button-search {
    width: 69px !important;

    color: #fff;
    background: var(--primary-color);
}

/*
start left sideb bar css */
ul.side-nav {
    width: 267px;
    height: 450px;
    list-style: none;
    background: #c2eaaa;
    box-shadow: 3px 4px 7px 1px #ddd;
    border-radius: 4px
}

ul.side-nav li {
    line-height: 4rem;
    border-bottom: 1px solid #f6f6f6;

    position: relative;
    left: -23px;
    vertical-align: middle;
    cursor: pointer;
    transition: 3ms;
}

ul.side-nav .nav-main-item {
    color: #000;
    font-size: 14px;
    margin-left: 14px;
    transition: 3ms;

}

.side-nav li:hover {
    background-color: #fff;
}

.nav-main-item:hover {
    color: var(--primary-color);


}

ul.left-sub-menu {
    position: fixed;
    box-shadow: 3px 4px 7px 1px #ddd;
    background: #c2eaaa;
    width: 195px;
    z-index: 100;
    list-style: none;
    top: 120px;
    max-height: 420px;
    display: none;
    left: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 420px;
}

ul.left-sub-menu .last-sider-bar {
    border: 1px solid #ddd;
    border-left: none;
    border-top: none;
    left: 52rem;
    position: fixed;
    background: #c2eaaa;
    list-style: none;
    top: 130px;
    max-height: 420px;
    display: none;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 420px;
    width: 195px;
}

ul.left-sub-menu .last-sider-bar li {
    border: none;
    left: -15px;
}

ul.side-nav li:hover>.left-sub-menu {
    display: block;
}

.left-sub-menu li:hover>.last-sider-bar {
    display: block;
}

.show-sub {
    display: none;
    float: right;
    margin-top: 17px
}



.menu-show {
    display: block;
}

.category_icon_image {
    max-width: 20px;
    max-height: 20px;
}

.pull-right {
    background: var(--primary-color) !important;
}

.chat-icon {
    float: right !important;
    position: fixed;
    text-align: right;
    left: 93%;
    z-index: 10000;
    top: 283px;
    vertical-align: middle;

    width: 75px;
    height: 120px;
    text-align: center;

    background: transparent;
    padding: 30px 0px;
    border: 2px solid var(--primary-color)
}

.product_carousel.sale_campaign h3 {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--primary-color);

}
.sale_campaign{
    margin-bottom: 40px;
    text-align: center;
    padding: 0px;
    background-color: #fff;

}
 .wrapper-wide{
    background-color:var( --body-backgroud);
}
.container{
    padding-left: 0;
    padding-right: 0;
}
.product-card {
    width: 100%;
    height: 270px;
    background: #F4F1F0;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 6px;
}
.best-selling .product-card img{
    border-radius: 40px;;
}

.content_card:hover>.content_card_footer{
    display: block;
    margin-top: -45px;
    animation: fly 1s ease 1;
}

@keyframes  fly {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

.product-card-body img {
    padding: 10px;
    width: 100%;
    height: 180px;
    transition: .3s;
}
.product-card-body img:hover {
   transform: scale(1.5);
}

.product-detail h4 {
    font-size: 12px;
    padding: 5px;
}
.content_card_footer {
    display: none;
    background: var(--primary-color);
    padding: 5px;
    height: 40px;
    transition: .1s ease-in;
}
.detls_prodcut{
    color:#fff ;
    background:transparent;
}
.best-selling .product-card {
    width: 220px;
}
.banner img{
    max-width: 165px;
    max-height: 165px;
     border: 1px solid #eee;
     border-radius: 5px;
}
.product-link{
    color: #000;
    transition: .3s;
}
.product-link:hover {
    color: var(--primary-color);
}
.category-heading{
    display: inline;
    font-weight: bold;

}

.s-category{
    display: inline;
    float: right;
}

.sub-category-name:hover {
    color: var(--primary-color);

}
.c-v-all {
    background: #000;
    color: #fff;
    padding: 5px 18px;
    width: 22px;
    height: 38px;
    display: inline;
    border-radius: 4px;
    transition: .5s;
}
.c-v-all:hover {

    border-radius:0px;
    color: #fff;
    background: var(--primary-color);

}

.c-product {
    margin-top: 10px;
}
.c-product-header {
    margin-bottom: 8px;
    padding: 6px 0px;
    border-bottom: 1px solid #ddd;
}

.single-product-box {
    background: #fff;
    padding: 15px 65px;
    border-radius: 5px;
    height: auto;
}


.product-description{
      background: #fff;
      padding: 15px 25px;
      box-shadow: 3px 3px 3px #ddd;
      border-radius: 5px;
      height: auto;
      margin-top: 20px;
}
.realted-producs{
    margin-top: 20px;
}
.realted-producs h3{
    margin-left: 15px;
}
.bg-white{
    background: #fff;
}
.shadow{
     /* box-shadow: 3px 3px 3px #ddd; */
}
.c-box{
    padding: 20px 25px;
}
.cart-dropdown {
    position: absolute;
    width: 350px;
    right: 0;
    height: 400px;

    z-index: 999;
}
.cart {
    position: fixed;
    z-index: 999999999999999999;
    right: 0;
    background: #fff;
    bottom: 0;
    height: 80%;
    width: 0px;
    transition: .5s;
    margin-bottom: 3.5%;
}
.colapse-cart{
    width: 350px;
    height: 84%;
}
.cart-header {
    padding: 12px 15px;
    background: #E4E0E1;
   text-transform: uppercase;
    font-weight: bold;
    color: var(--primary-color);
}
/* .cart-header {
    padding: 1px 15px;
       color: #fff;
    
} */
.cart-body {
    padding: 15px 15px;
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.placebtn{
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 18px;
}
.placebtn:hover{
    color: #000;
}
.cart-footer{
    float: left;
    bottom: 0;
    width: 60%;
    background-color: #AA8153;
    color: #fff;
}
.cart-fiiter{
    padding: 15px 15px ;
}
 #exitcart {
    color: #7B7B7B;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
    width: 50%;
}

.cart-open {
    position: fixed;
    right: 0;
    z-index: 999;

    top: 50%;

    width: 80px;
   /* background: var(--primary-color); */
   background: #AA8153;
    text-align: center;
    height: 95px;
    cursor: pointer;
}
.cart-open i {
    font-size: 33px;
    color: #F9AF5F;
    margin-top: 10px;
}
.cart-item-total {
    color: #F9AF5F;
    font-family: 'Montserrat';
}

.user-side-bar {
    padding: 10px 10px;
    margin-bottom: 30px;
}
.profile.clearfix {
    text-align: center;
}
.order-histrory {
    padding: 10px 20px;
    margin-left: 25px;
}
.overlaw-offer {

    opacity: 0;
    position: absolute;
    top: 49%;
    left: 49%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    background: var(--primary-color);
    transition:  .5s;
    width: 165px;
    height: 165px;

}
.overlaw-offer:hover{

 width: 100px;
 opacity: .7;
}
.overlaw-offer-height:hover{
  height: 80px;
   width: 165px;
}
.sub-category-name {
    margin-right: 8px;
    background: #fff;
    padding: 5px 4px;
    font-size: 13px;
    font-weight: bold;
    width: 250px;
    color: var(--primary-color);
}

.product-details-tabe {
    background: #fff;
    margin-top: 25px;
    padding: px;
    /* box-shadow: 3px 3px 3px #ddd; */
    border-radius: 10px;
    margin-left: 15px;
}
ul.details-tab-menu-list {
    width: 100%;
    display: flex;
    text-transform: uppercase;
    /* background: #ddd; */
    border-radius: 2px;
}

.details-tab-menu-item {
    padding: 0px;
    color: #adadad;
    cursor: pointer;
    margin-left: 10px;
    font-family: 'Montserrat';
    font-weight: bold;
    margin-right: 35px;
}


.tab-menu-item-active {
    border-bottom: 4px solid var(--primary-color);
}
.product-tab-content {
    padding: 15px 15px;
    min-height: 250px;
}
.product-details{
    display: none;
}
.how-to-buy{
    display: none;
}
.block{
    display: block;
}
li.h-b-li {
    list-style-type: square;
    padding: 2px;
    font-family: 'Montserrat';
    font-weight: 400;
    color: #1a1a1a;
    font-size: 15px;

}
.product-thumb .image:hover {
    transform: scaleX(-1);
}

.banner .row{
 background: #fff;
 padding: 12px 12px;
 border-radius: 10px
}




img.responsive-image.choosed-thumb {
    max-width: 60px !important;
}

img.zoomer-control.responsive-image {
    max-width: 40px !important;
}

.nav-active {
    display: block !important;
}

.content_card_footer {
    padding: 3px;
}

.btnQuick:hover {
    background: var(--primary-color);
}


.parallax_inside {
    position: absolute;
    width: 40%;
    height: 200px;
}

.parallax_content {
    margin: 10px;
    position: absolute;
    width: 96%;
    height: 175px;
    text-align: center;
}

.parallax_content h4 {
    margin-top: 30px;
}

.parallax_offer {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
}




/* menu css....... */

.category-menu {
    margin-top: 10px;
    width: 250px;
    background: var(--menu-background) !important;
    min-height: 450px;
    margin-left: -28px;
}

.menu-heading {
    background: var(--primary-color);
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
}

img.category-img {
    width: 20px;
    height: 20px;
}

.category-menu-list {
    margin: 0;
    padding: 0;
    background: #fff;
    min-height: 450px;
}

.category-name {
     padding: 9px;
    vertical-align: middle;
    font-size: 14px;
    border: 1px solid var(--primary-color);
}

.category-link {
    color: #000;
}

li.category-name:hover {
    box-shadow: 3px 3px 3px 3px #ddd;
    transition: .3s;
    color: #000;
}

ul.sub-category-menu-list {
    min-width: 850px;
    z-index: 9;
    position: absolute;
    min-height: 450px;
    background: #fff;
    display: none;
    TOP: 5%;
    left: 90%;
    flex-wrap: wrap;
    padding: 20px 20px;
    max-height: 450px;
    overflow-y: auto;
    box-shadow: 4px 4px 4px 4px #ddd;

}

li.category-name:hover>.sub-category-menu-list {
    display: flex;
}

.sub-category-link {
    color: #000;
    border-bottom: 1px solid #ddd;
}

ul.sub-sub-category-list {
    margin-top: 10px;
    padding: 0px 20px;
}

.slider {
    margin-top: 10px;
}
.nav-active {
    display: block !important;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999999999;
}

.q-i-d {
    cursor: pointer;

}

ul.p-image-name li {
    padding: 5px 2px;
    font-size: 12px;
}

button.btn.btn-primary.btnQuick {
    background: var(--primary-color);
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-family: 'poppins';
    width: 50%;
    height:35px;
}


li {
    list-style: none;
}

.header {
    position: relative;
    width: 100%;
    height: 118px;
}

.header-top {
    width: 100%;
    height: 29px;
    display: flex;
    background: var(--primary-color);
    border-bottom: 1px solid #ddd;
    color: #fff;

}

.header-top-left {
    display: flex;
    list-style: none;
}

.header-top li {
    padding: 5px 4px;
    font-size: 14px;
}

.flex {
    display: flex;
    padding-right: 0px;
    margin-right: 0px;
}

.header-top-right {
    margin-left: auto;
    display: flex;
}

.header-top li span {
    padding-right: 9px;
    padding: 3px;
}

.header-top li i {
    color: #fff;
}

.main-header {
    background: #fff;
}

.main-header li {
    padding: 0px 8px;
    font-size: 14px;
}

img.site-logo {
    max-width: 180px;
    max-height: 110px;
    margin-left: 20%;
}


.auto_writer {
    position: absolute;
    z-index: 11111;
    top: 30px;
    left: 20%;
    opacity: .6;
}


.search-input {
    width: 41%;
    height: 42px;
    border-radius: 5px;
    transition: .5s;
    background-color: #F7F8FA;
    border: 1px solid #ddd;
    padding: 10px;
    position: absolute;
    top: 16%;
    margin-left: -42%;
    font-family: 'Montserrat';
    font-weight: Regular;
    font-size: 15px;
}

.search-btn {
    height: 42px;
    border: 2px solid var(--primary-color);
    border-radius: 0px 5px 5px  0px;
    transition: .5s;
    right: 9px;
    background: var(--primary-color);
    color: #fff;
    width: 90px;
    position: absolute;
    top: 20%;
    left: 53%;
}


.main-header-left {
    display: flex;
}

.main-header-right {
    display: flex;
    margin-left: auto;
    padding: 13px;
    float: right;
}


.main-header-right li {
    font-size: 28px;
    padding: 10px 12px;
}

.main-header-right li i {
    color: #494A4A
}

.menu {
    position: relative;
    width: 100%;
}

.menu-list {
    width: 100%;
    position: relative;
    /* background: var(--primary-color); */
    height: 40px;
    display: flex;
    justify-content: center;
}

.menu-item {
    padding: 10px 15px;
    font-size: 14px;
    transition: .5s;
}

.menu-item::after {
  font-size: 10px;
}


.menu-item-link {
    color: #000;
    transition: .3s;
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: bold;
}

.menu-item-link:hover {
    color: #BA9E6E;

}

.menu-icon {
    display: none;
}


.sub-item-list {
    display: flex;
    width: 90%;
    height: auto;
    position: absolute;
    background: #fff;
    left: 5%;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    box-shadow: 1px 0px 1px 1px #eee;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 600px;
    overflow-y: scroll;
    z-index: 99999999999;
    margin-top: 30px;
    padding-bottom: 20px;
}

.menu-item:hover>.sub-item-list {
    opacity: 1;
    visibility: visible;
}

.sub-item {
    width: 200px;
    min-height: 220px;
    margin-top: 10px;

}

.sub-item-link {
    text-transform: uppercase;
    color: var(--primary-text-color);
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
}

.sub-item-link:hover {
    color: var(--primary-color);

}

.sub-sub-item {
    text-transform: none;
    padding: 3px 0px !important;

}

.sub-sub-item-list {
    padding: 0px 8px;
    margin-top: 5px;
}

#toggle-menu {
    display: none;
}

.sub-menu-icon {
    display: none;
}


/* =========FOR ICON ROTATE======== */
.rotate {
    transform: rotate(180deg);
}

span.price-new {
    /* color: var(--primary-text-color); */
    color: #202021;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: 19px;
    margin-left: 10px;
}

span.price-old {
    font-size: 19px;
    text-decoration: line-through;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #202021;
}

    #footer{
        margin-top: 30px;
    }
    #footer .fpart-first {
        padding-bottom: 10px !important;
        padding-top: 30px;
    }


    #footer .column a {
        text-decoration: none;
        display: block;
        padding: 3px 0;
        line-height: 24px;
        font-size: 12px;
        font-family: 'Montserrat';
        font-weight: bold;
        color: #d0d0d0;
    }

    #footer .line {
        width: 72px;
        height: 2px;
        background: var(--primary-color);
        margin-top: -10px;
        margin-bottom: 12px;
    }

    #footer .link_line li {
        color: #d0d0d0;
        font-family: 'Montserrat' !important;
        font-weight: Regular;
        font-size: 14px;
        margin-left: -40px; 
    }


    #footer .social-icon {
        margin: 30px;
    }

    #footer .social-wrape {
        float: left;
        width: 40px;
        height: 40px;
        border: 2px dashed;
        border-radius: 50%;
        margin-left: 10px;
    }

    #footer .social-wrape:hover {
        background: var(--primary-color);
    }

    #footer .f_info_left {
        position: absolute;
        margin-top: 15px;
        margin-left: 400px;
        color: #fff;
        font-size:17px;
    }

    #footer .f_info_right {
        float: right;
        margin-top: 15px;
        margin-right:30px;
        color:#fff;
        font-size:17px;

    }

#footer .f-icon {
    margin: 11px;
    cursor: pointer;
    color: white;
}

#footer #powered {
    border-bottom-color: var(--primary-color);
    margin-top: -20px;
}

#footer .powered_text p {
    line-height: 18px;
    margin: -19px;
}


.footer_info_row{
  margin-left: 0px !important;
  margin-right: 0px !important;
  background: var(--primary-color);
  height: 50px;
  width: 100%;
  margin-top:0px;

}

#footer .email_icon_container {
    background: var(--primary-color);
    float: right;
    margin-top: -34px;
    padding: 6px 17px;
}

#footer .email_icon_container i {
    color: #fff;
}
.sub-sub-category-name {
    color: #000;
}
.s-menu {
    position: absolute;
    display: flex;
    right: 15%;
    top: 52%;
}

.s-menu li {
    background: var(--primary-color);
    color: #fff;
    padding: 5px 10px;
    margin-right: 15px;
    border-radius: 10px;
    font-size: 12px;
}
.s-menu li a{
    color: #fff;
}
.product-thumb.clearfix {

    background: #F4F1F0;
    height: 290px;
    border:none !important;
    box-shadow: none !important;
}
.sale_campaign{
    padding: 5px 5px;
}



#_qvm .modal_overlay{
      background: #00000073;
}
#_qvm .quick_view_image {
  width: 250px !important;
  height: 250px !important;
}

#_qvm .close_sign {
  font-size: 40px !important;
  margin-top: -19px !important;
  color: var(--primary-color) !important;
}
 

#_qvm .animator {
  margin-top: 100px;
  padding: 100px;
}

#_qvm .animator i {
  font-size: 70px;
}

#_qvm .modal-body h4 p {
  margin-left: 20px !important;
}

#_qvm .modal-dialog {
  width: 90% !important;
  position: absolute;
  left: 10%;
  transition: .3s;
}

#_qvm .quick_content{
  background: #fff;
}
#_qvm .quick_description {
  font-size: 14px;
}



#_qvm .r_p_title{
  font-size: 12px ;
  color: var(--primary-color);
}

#_qvm .r_p_image {
   width:110px;
   height:100px;
   border-radius: 5px;
}

#_qvm .r_p_button {
    margin-left: 35px;
    border-radius: 5px;
}

#_qvm .r_p_button:hover {
    border-radius: 50px;
    background: var(--primary-color);
}
#_qvm .related_quick_row[data-v-587a0637] {
    margin: 5px;
    max-height: 180px;
    overflow-y: scroll;
}

#_qvm .r_quick_body {
    padding: 15px 10px;
}

.main-header-right li {
    font-size: 16px;
    padding: 12px 14px;
}

#_qvm .col-md-2 {
    margin-bottom: 25px;
}
.btn-primary{
    background: var(--primary-color) !important;
}

.cart-footer {
   color: #fff;

    /* background-color: var(--primary-color); */
}
.placebtn{
    color: #fff;
}
.btn_search{
    background: var(--primary-color) !important;
}
.show{

    display: block;

}
.hide{
    display:none;
}



.slider_imge {
    height: 200px;
    min-height: 200px !important;
}
.s-menu{
    display: none;
}
.campaign-text{
    text-align: left !important;
}
.__sub_category{
    display: none;
}

}

.__sub_category {
    min-height: 589px;
    max-height: 600px;
    background: #fff;
    box-shadow: 3px 3px 3px #ddd;
    width: 190px;
    text-align: left;
    margin: 0;
    padding: 0;
    margin-top: -8px;
}

.__sub-category_name {
    padding: 10px;
}
.__sub-category_name::before {content: "•"; color: green;
  display: inline-block; width: 1.5em;
 }

 .__sub-category_name::after {content: "•"; color: blue;
  float: right; width: 1em;
 }

.__sub-category_name:hover{
    color: var(--primary-color)
}

.__list_headig {
    padding: 10px 10px;
    background:var(--primary-color);
    width: 190px;
    color: #fff;
}

.__sub_category_link {
    color: #000;
   padding: 8px;
   }


.__product_category{
    margin-bottom: 50px;
}


/* start responsieve side menu css  */



/* =========START THE  MENU RESPONISVE CSS======== */


.slider_row{
  margin-top: 2px;
}

.arrival_heading{
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 0px;

}

.new_arrival_section{
  margin-top: 0px;
  margin-bottom:0px;
  overflow: hidden;
}

.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: -22px !important;
}

.new_arrival_container{
    width: 180px;
    height: 300px;

}


.new_arrival_card{
    width: 180px;
    height: 180px;
    background: #F4F1F0;
    border-radius: 50%;
}

.new_arrival_card_body img{

    width: 130px;
    height: 130px;
    margin: 24px;
    border-radius: 50%;

}

.vhl-navigation[data-v-8b923bbc] {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: -60px !important;
}

.vhl-btn-left {
    margin-left: 10px !important;
    margin-top: 6% !important;
}

.vhl-btn-right {
    margin-right: 10px !important;
    margin-top: 6% !important;
}

.arrival_link{
    font-size: 14px;
    margin: 5px;

}

   .banner_title{
      margin-left: 3px;
      font-weight: bold;
    }


.nav-active {
  display: block !important;
}

.offer_collection{

    margin-left: 0px;
    margin-right: -10px;
    margin-bottom: 50px;
}

.collection_left{
    background-size: cover;
    height: 324px;
    width:48%;
}

.collection_right{
    background-size: cover;
    height: 324px;
    width:48%;
    margin-left: 30px;
}

.container_offer_header{
    margin-top: 185px;
    background: #eb3e41;
    width: 95%;
    height: 108px;
    opacity: 0.8;
}

.container_offer_header p{
    padding-top: 30px;
    color:#fff;
}

.container_offer_header h4{
    font-weight: bold;
    color:#fff;
}
.collection_content{
  background: #fff;
  margin-top:30px;
  margin-left:-20px;
  display: flex;
}

.collect_sub_data {
  float:right;
}
.collect_sub_data .p1{
    font-size: 12px;
    padding: 3px;
    line-height: 15px;
    padding-top: 8px;
}

.collect_sub_data .p2{
    font-size: 18px;
    padding: 6px;
    line-height: 5px;
    padding-top: 6px;
}

.btn_more{
    background: #4D4D4D;
    width: 120px;
    color: #fff;
}
.btn_more:hover>.arrow_right_icon{
    margin-left: 20px;
}

.arrow_right_icon{
  padding-left: 10px;
}

.collection_content img{
    width: 100px;
    height: 105px;
    padding: 3px;

}


.parallax_background {
  width: 100%;
  height: 800px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0px;
}

.btn_shop_now{
    background: #000;
    width: 200px;
    margin-top: 12%;
    margin-right: 25%;
    height: 40px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 400;
    color:#fff;

}

    .btn_shop_now:hover{
        width: 210px;
        color:greenyellow;
    }


    .new_product_row{
    /* margin-bottom: 40px; */
    }


    .mens_womens_collection_container{
        width: 100%;
        display: flex;
    }
    .mens_womens_collection_container>.banner_content {
        width: 48%;
        margin: 0% 1%;
    }
    .mens_womens_collection_container>.banner_content img{
        width: 100%;
        max-height: 630px;
    }


    .top_selling_banner{
        width: 100%;
    }

    .section_title {
        text-transform: uppercase;
        margin-top: 34px;
        margin-left: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 28px;
        color: #191919;
    }

    .random_heading{
    font-weight: bold;
    }

    .content_heading{
    font-weight: bold;
    }

    .content_card_container {
        margin-top: 20px;
        margin-bottom: 10px !important;
    }

    .content_card {
        width: 290px;
        height: 540px;
        transition: .1s ;
    }

    .content_card:hover {
       /* box-shadow: 0 1pt 12pt rgb(150 165 237) ; */
    }

    .content_card_body img {
        width: 290px;
        height: 434px;
        margin: 5px;
    }

    .content_link{
        font-size: 16px;
        color: var(--primary-text-color);
        font-family: 'Montserrat-Regular';
        margin-left: 5px !important;
        margin: 0 0 0px;
    }

    .price{
        margin-left: 5px;
    }

    /* .content_link:hover{
        text-decoration: none;
    } */

    .list_content_card {
        width: 280px;
        height: 290px;
        background: #F4F1F0;
        box-shadow: 2px 2px 2px #ddd;
        border-radius: 6px;
        transition: .1s;
    }

    .list_content_card:hover {
       box-shadow: 0 1pt 12pt rgb(150 165 237) ;
    }

    .list_content_card_body img {
        width: 95%;
        height: 280px;
        margin: 5px;
    }

    .list_content_p_heading {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }

    .list_content_details {
        height: 230px;
        overflow-y: auto;
    }

    .list_content_price {
        display: flex;
        margin: 2% 28%;
        padding-top: 20px;
    }

   .list_content_price>.s_price{
        color:var(--primary-text-color);
    }

   .list_content_price>.d_price{
        padding-left:5px;
        text-decoration:line-through;
        color:red;
    }

    .list_content_btn_1{
        width: 50%;
        height: 36px;
        background: var(--primary-color);
        color: #fff;
    }


    .list_content_btn_1 {
        width: 60%;
        height: 36px;
        background: var(--primary-color);
        color: #fff;
        margin-bottom: 10px;
    }


    .list_content_btn_2 {
        width: 60%;
        height: 36px;
        color: #000;
        margin-bottom: 10px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
        font-size: 16px;
         font-family: 'Poppins', sans-serif;
    }

    .list_content_btn_2>i {
        color: var(--primary-color);
        font-size: 16px;
        margin: 3px 4px;
    }

    .banner_container{
        margin-top:50px;
    }

    .banner_image{
        width: 120px;
        height: 120px;

    }

    .campaign_clock{
    position: absolute;
    margin-top: -38px;
    margin-left: -107px;
    }




    .service_row {
        width: 100%;
        height: 135px;
        margin-top: 50px;
        margin-bottom: 50px;
    }


    .service_outer {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: #C0C4C8;
        margin: 20px 80px;

    }

    .service_inner {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--primary-color);
        margin: 6.5px 6px;

    }


    .service_icon {
        margin: 12px;
        color: #fff;
        font-size: 35px;
    }

    .service_container h4{
        margin-top: -10px;
    }

    .service_container p{
        font-size: 14px;
        line-height: 12px;
    }

    .service_outer:hover>.service_inner>.service_icon {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        cursor: pointer;
        transition: 0.5s;
    }


    .single_product_img_container {
        width: 100%;
        max-height: 470px;
        overflow: hidden;
    }

    .single_product_img_container .single_product_image{
        width: 80%;
        height: 100% ;
    }

    .discount {
        background: red;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 12px;
        font-weight: 600;
        height: 50px;
        width: 50px;
        line-height: 40px;
        position: absolute;
        right:-2px;
        text-align: center;
        top: 22px;
        transform: translate(-50%, -50%) rotate(-30deg);

    }

    .discount_star {
        position: absolute;
        z-index: -5;
        margin: -9px;
        color: red;
        font-size: 30px;
    }

    .d_off{
        position: absolute;
        margin-left: -18px;
        margin-top: 12px;
    }
    .discount-item{
        margin-top: 8px;
    }
    .best_selling_discount {
        background: #A616B6;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 11px;
        font-weight: 600;
        height: 45px;
        width: 45px;
        line-height: 38px;
        position: absolute;
        right: -2px;
        text-align: center;
        top: 22px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }
    .discount {
        background: #A616B6;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 11px;
        font-weight: 600;
        height: 45px;
        width: 45px;
        line-height: 40px;
        position: absolute;
        right: -15px;
        text-align: center;
        top: 24px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }
    .d_off_category {
        position: absolute;
        margin-left: -20px;
        margin-top: 11px;
    }
    .best_s_star {
        position: absolute;
        z-index: -5;
        margin: -9px;
        color: red;
        font-size: 30px;
    }
    .new_product_discount {
        background: #A616B6;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 11px;
        font-weight: 600;
        height: 45px;
        width: 45px;
        line-height: 40px;
        position: absolute;
        left: 256px;
        text-align: center;
        top: 28px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }

    .flas_selling_discount {
        background: red;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 12px;
        font-weight: 600;
        height: 50px;
        width: 50px;
        line-height: 40px;
        position: absolute;
        right: -5px;
        text-align: center;
        top: 29px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }

    .flash_s_star {
        position: absolute;
        z-index: -5;
        margin: -9px;
        color: red;
        font-size: 30px;
    }


    /* .new_product_discount {
        background: red;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 12px;
        font-weight: 600;
        height: 50px;
        width: 50px;
        line-height: 40px;
        position: absolute;
        right: 9px;
        top:29px;
        text-align: center;
        transform: translate(-50%, -50%) rotate(-30deg);
    } */

    .new_p_star {
        position: absolute;
        z-index: -5;
        margin: -9px;
        color: red;
        font-size: 30px;
    }



    .__footer_nav {
        display: none;
    }


    .shop_by_category_row{
       margin-top: 20px;
    }

    .margin_container{
        margin-bottom: 24px;
    }


   .shop_by_category_container {
        padding-left: 4px !important;
        padding-right: 8px !important;
    }

   .shop_by_category_container>.content {
        background: #fff;
        text-align: center;
        margin-bottom: 20px;
        box-shadow: 2px 2px 2px #ddd;
        border-radius: 6px;
        width: 100%;
        height: 270px;
        transition: .1s ;
    }

    .shop_by_category_container>.content:hover{
        box-shadow: 0 1pt 12pt rgb(150 165 237) ;
    }


    .shop_by_category_container>.content img{
        width: 100%;
        height: 270px;
    }

    .shop_by_category_container>.content_footer{
        cursor: pointer;
    }

    .shop_by_category_container>.content_footer>.sub_c_name {
        color: var(--primary-text-color);
        margin: 2rem auto;
        width: 80%;
        height: 40px;
        border-radius: 5px;
        position: relative;
        display: block;
        box-shadow: 0 0 10px -5px #000000;
        padding: 10px 10px;
        transition: 1s;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    .shop_by_category_container>.content_footer>.sub_c_name:hover {
        text-decoration: none;
    }
      .shop_by_category_container>.content_footer>.sub_c_name:hover > .sub_category_angle {
         padding-left: 30px;
    }

    .shop_by_category_container>.content_footer .focus-link {
            width: 100%;
            background-color: transparent;
            color: #000000;
            margin: 0;
    }

    .sub_category_angle {
        padding-left: 20px;
    }

   .c_new_arrival_offer_container>.c_content {
        background: #fff;
        text-align: center;
        margin-bottom: 20px;
        box-shadow: 2px 2px 2px #ddd;
        border-radius: 6px;
        width: 100%;
        height: 270px;
        transition: .1s ;
    }

    .c_new_arrival_offer_container>.c_content:hover{
        box-shadow: 0 1pt 12pt rgb(150 165 237) ;
    }


    .c_new_arrival_offer_container>.c_content img{
        width: 100%;
        height: 270px;
    }

    .c_new_arrival_offer_container>.c_content_footer{
        cursor: pointer;
    }

   .c_new_arrival_offer_container>.c_content_footer>a {
        color: var(--primary-text-color);
        margin: 2rem auto;
        width: 80%;
        height: 40px;
        border-radius: 5px;
        position: relative;
        display: block;
        box-shadow: 0 0 10px -5px #000000;
        padding: 11px 10px;
        transition: 1s;
    }

    .c_new_arrival_offer_container>.c_content_footer>a:hover>span {
         padding-left: 30px;
    }


    .socail_login_container{
        display: flex;
    }

    .facebook_btn {
        background: #2B5C93;
        color: #ffff;
        width: 43%;
        font-size: 16px;
         font-family: 'Poppins', sans-serif;
        font-weight: bold;
        margin: 0% 4%;
    }

    .google_btn {
        background: #D9534F;
        color: #ffff;
        width: 43%;
        font-size: 16px;
         font-family: 'Poppins', sans-serif;
        font-weight: bold;
        margin-left: 2%;
    }

    .login_with_password_btn {
        background: #eee;
        padding: 4px;
        border-radius: 15px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        box-shadow: 1px 1px  #ddd;
    }


    .login_with_otp_btn {
        color: #fff;
        background-color: #df5c39;
        margin: 3% 4%;
        width: 92%;
        height: 36px;
        padding: 8px 5px;
         font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    .suggest_category_list {
        margin-top: 10px;
        padding: 5px 0px;
        height: auto;
        min-height: 100px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
    }

    .suggest_category_list>li {
        width: 13%;
        height: 33px;
        margin: 5px 7px;
        float: left;
        background: #F4F1F0;
        padding: 6px;
    }

   .suggest_category_list>li>a {
        font-size: 16px;
         font-family: 'Poppins', sans-serif;
    }

    .filter_row {
        /* margin: 20px 0px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
        padding: 10px 0px;
        height: 80px; */
    }

    .filter_button_container>button {
        height: 60px;
        margin: 0% 3%;

    }
    .filter_button_container>button>i {
        font-size: 28px;
    }

    .filter_list_container>select {
        /* height: 50px !important;
        padding: 6px 12px;
        font-size: 16px !important;
        color: var(--primary-text-color) !important;
         font-family: 'Poppins', sans-serif;
        border-radius: 25px;
        margin-top: 5px; */
    }

    .filter_customize_button{
        display: none;
    }

    .__view_type_active {
        border: 1.5px solid var(--primary-color);
        border-radius: 10px;
    }



     .__search_porducts_details {
         display: flex ;
         padding: 5px 8px ;
     }
     .search_result_img {
         max-width: 50px;
     }

    .search_name_price {
          margin-left: 10px;
        }

    .product-attributes {
        margin-top: 10px;
    }

    .attribute-name {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    /* preview images of products  */
    .preview_img_box_container{
        display: flex;
    }
    .__preview_image_box {
        width: 100px;
        height: 100px;
        margin: 5px 5px;
    }

    .__preview_img {
        cursor: pointer;
        width: 70px;
        height: 96px;
        margin: 0 15px;
        text-align: center;
    }

    .__active_border{
        border: 1.5px solid #B3B3B3;
    }

     /* start attribute and variant awesome css  */




        .Black {
        background-color: #000;
        }
        .Red {
        background-color: red;
        }
        .Green {
        background-color: green;
        }

        .Yellow {
        background-color: yellow;
        }

        .Navy {
        background-color: navy;
        }



        .attribute-swatches-wrapper.form-group {
        margin-bottom: 10px;
        }

        .product__color {
        padding-bottom: 10px;
        }

        .product__attribute {
            align-items: center;
            display: flex;
            flex-flow: row nowrap;
        }

        .product__attribute>label {
            margin-bottom: 9px;
            max-width: 60px;
            margin-right: 0px;
            font-family: 'Montserrat';
            color: #000;
        }


        .product__attribute>* {
          flex-basis: 100%;
        }

        .ps-product--detail .ps-product__info {
        text-align: left;
        }


    .attribute-values ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }


        .product__color .color-swatch li {
        display: inline-block;
        margin-right: 5px;
        vertical-align: top;
        }

        .custom-checkbox label, .custom-radio label {
        display: block;
        }

        .text-swatch li input[type=checkbox], .text-swatch li input[type=radio] {
        display: none;
        }
        .text-swatch li input[type=checkbox]:checked~span, .text-swatch li input[type=radio]:checked~span {
        border: 1px solid var(--primary-color);
        }

        .custom-checkbox input[type=checkbox], .custom-checkbox input[type=radio], .custom-radio input[type=checkbox], .custom-radio input[type=radio] {
        display: none;
        }


        .product__attribute .form-control {
        border: none;
        }

        .product__color .color-swatch li span {
        margin-bottom: 0;
        }
        .product__color .color-swatch li {
        display: inline-block;
        margin-right: 5px;
        vertical-align: top;
        }

        * {
        font-family: 'Montserrat', sans-serif ;
        font-weight: 600;
        }

        *, ::after, ::before {
        box-sizing: border-box;
        }


        .text-swatch li span {
            background-color: #fff;
            border: 1px solid #ccc;
            cursor: pointer;
            display: inline-block;
            overflow: hidden;
            padding: 2px 9px;
            position: relative;
            transition: .2s;
            margin-top: 3px;
            color: #9e9e9e;
        }

        .custom-checkbox input[type=checkbox]:checked~span:before, .custom-checkbox input[type=radio]:checked~span:before, .custom-radio input[type=checkbox]:checked~span:before, .custom-radio input[type=radio]:checked~span:before {
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        bottom: -4px;
        content: "";
        display: block;
        left: -4px;
        position: absolute;
        right: -4px;
        top: -4px;
        }

        .text-swatch li input[type=checkbox]:checked~span:before, .text-swatch li input[type=radio]:checked~span:before {
        border: 23px solid transparent;
        border-bottom: 16px solid var(--primary-color);
        bottom: 0px;
        content: "";
        position: absolute;
        right: -22px;
        }

        .text-swatch li input[type=checkbox]:checked~span:after, .text-swatch li input[type=radio]:checked~span:after {
        bottom: -5px;
        color: #fff;
        content: "✓";
        font-family: Linearicons!important;
        font-size: 14px;
        height: 19px;
        overflow: hidden;
        position: absolute;
        right: -5px;
        width: 16px;
        }

        [type=checkbox], [type=radio] {
        box-sizing: border-box;
        padding: 0;
        }


        button, input {
        overflow: visible;
        }

        button, input, select, textarea {
        font: inherit;
        margin: 0;
        }


      .custom-checkbox span, .custom-radio span {
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 25px;
        position: relative;
        width: 25px;
        }


    /* end attribute and variant awesome css  */



    .s_price_container_3 {
        display: flex;
     }

    .s_price_container_2 {
            display: flex;
        }

    .s_price_container_1 {
          display: flex;
    }

     .s_price_container_1 h4{
            font-size: 18px;
            font-weight: 600;
             font-family: 'Poppins', sans-serif;
        }

    .s_price_container_2 h4{
            font-size: 18px;
            font-weight: 600;
             font-family: 'Poppins', sans-serif;
     }

    .s_price_container_3 h4{
            font-size: 18px;
            font-weight: 600;
             font-family: 'Poppins', sans-serif;
     }

    .single_price_new{
        padding-left: 32px;
    }

     .s_price_container_1 p{
        margin-left: 15px;
       font-size: 18px;
        margin-top: 10px;
        color: var(--primary-text-color);
        font-family: 'Montserrat';
        font-weight: bold;
        color: #202021;
    }

    .s_price_container_2 p {
        margin-left: 0px;
        font-size: 18px;
        margin-top: 10px;
        text-decoration: line-through;
        font-family: 'Montserrat';
        font-weight: bold;
        color: #202021;
    }

    .s_price_container_3 p {
        margin-left: 6px;
       font-size: 18px;
        font-weight: bold;
        margin-top: 7px;
         font-family: 'Poppins', sans-serif;
        color: var(--primary-text-color);
    }

    .s_price_container_3 p>span{
        font-size: 16px;
        font-weight: bold;
         font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        color: var(--primary-text-color);
        }



     .qty_container {
         display: flex;
         color: #9e9e9e;
     }

    .qty_container>h4 {
        font-size: 18px;
        font-weight: 600;
         font-family: 'Poppins', sans-serif;
    }

    /* .input_qty {
        padding: 18px 23% !important;
        margin-left: 5%;
        font-size: 16px;
        font-weight: bold;
        height: 36px !important;
        width:195px !important ;
    } */

.input_qty {
    padding: 14px 0% !important;
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    height: 27px !important;
    width: 30px !important;
    margin-top: -8px;
    margin-right: 10px;
    text-align: center;
}

    .incrementor_plus {
        cursor: pointer;
        position: absolute;
        margin-left: 23%;
        background: var(--primary-color);
        padding: 9px;
        color: #fff;
    }

    .incrementor_minus {
        cursor: pointer;
        position: absolute;
        margin-left: 70%;
        background: var(--primary-color);
        padding: 9px;
        color: #fff;
    }

    .btn_buy_cart {
        color: #fff;
        transition: .1s ease;
        height: 30px;
        font-size: 13px;
        font-family: 'Montserrat';
        background: #CC8D46;
        font-weight: bold;
        width: auto;
        margin-top: -7px;
    }

     .btn_buy_cart:hover {
       color: white;
     }

        .single_p_right_section{
            height: 470px;
            background: #FFF8E5;
        }

         .single_p_right_section ul {
             padding-top: 20px;
             margin-left: -10px;
         }

         .single_p_right_section ul li {
             padding:10px 5px;
         }

          .single_p_right_section ul li i {
            font-size:18px;
         }

         .social_media_share{
             margin-top: 10px;
             display: block;
         }

        .instagram_share_icon{
            font-size: 32px !important;
            margin-top: 0px;
            position: absolute;
            margin-left: 5px;
        }


        .p_code {
            margin-left: 40px;
            font-size: 20px;
            font-family: 'Poppins', sans-serif;
        }

      .single_p_name {
            margin-top: 2px;
            font-size: 20px;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            color: #939494;

        }

        .single_p_code {
                font-size: 18px;
                font-weight: 600;
                 font-family: 'Poppins', sans-serif;
            }


    .user_login  {
        font-size: 18px;
         font-family: 'Poppins', sans-serif;
    }

    .user_login>i {
        font-size: 26px;
    }

    .merchant_login  {
        font-size: 14px;
        font-family: 'Montserrat';
        font-weight: Regular;
        margin-right: 20px;
        background: none;
        border: none;
    }

    .merchant_login>i{
        font-size: 26px;
    }

    .header_wishlist>img{
        width: 28px;
        height: 30px;
    }

    .header_wishlist>sub {
        padding: 3px 6px;
        background: #D6A74E;
        color: #000;
        border-radius: 50%;
        font-size: 12px;
        font-weight: bold;
         font-family:serif;
         margin-left: -15px;
    }

    .header_cart>img {
        width: 30px;
        height: 28px;
    }

    .header_cart>sub {
        font-size: 12px;
        font-weight: bold;
         font-family:serif;
        padding: 3px 6px;
        background: var(--primary-color);
        border-radius: 50%;
        color: #fff;
    }

    .header_currency {
        border: none;
        font-size: 15px;
        font-weight: bold;
         font-family: 'Poppins', sans-serif;
        padding: 0px 5px;
        margin-top: -2px;
    }

    .login_user_name {
       box-shadow: 0 1pt 12pt rgb(150 165 237) ;
       font-size: 16px;
        font-family: 'Poppins', sans-serif;
       min-width: 100px;
    }

    .slider_container{
        width: 100%;
    }
    .related_p_heading {
        font-size: 22px;
        font-family: 'Montserrat';
        text-align: center;
        font-weight: bold;
    }

    .mobile_menubar_header{
        display: none;
    }

    .mobile_menubar_search{
        display: none;
     }

    .single_p_wishlist_btn {
        width: 100%;
        height: 36px;
        color: #000;
        margin-top: 45px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    .box-category ul li {
        padding: 6px 0;
        margin-left: -22%;
        width: 100%;
        display: flex;
        /* border-bottom: 1px solid rgba(0,0,0,.08); */
        transition: all .2s ease;
    }

    .box-category ul li a {
        font-family: 'Montserrat';
        font-size: 14px;
        font-weight: 400;
        margin-left: 5px;
    }

    .box-category ul li:hover {
        background-color: #0111331c;
        padding-left: 0.275rem;
    }

    .box-category ul li a:hover {
        /* text-decoration: none; */
    }


    .category_filerting_active {
        border: 1px dotted var(--primary-color);
        background: #eee;
        padding: 2px !important;
    }


    .category_filtering_on_mobile{
        display: none;
    }


    .mobile_category_filtering_list {
        margin-top: 10px;
        padding: 5px 0px;
        height: auto;
        min-height: 85px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
    }


    .mobile_category_filtering_list>li {
        cursor: pointer;
        width: 20%;
        float: left;
        min-height: 34px;
        margin: 0px 5px;
        padding: 3px;
        max-height: 40px;
        line-height: 17px;
    }

    .mobile_category_filtering_list>li>a {
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }
@media  only screen and (max-width: 1200px) {
    .discount {
        background: #A616B6;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 10px;
        font-weight: 600;
        height: 40px;
        width: 40px;
        line-height: 37px;
        position: absolute;
        right: -34px;
        text-align: center;
        top: 25px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }
    .d_off_category {
        position: absolute;
        margin-left: -17px;
        margin-top: 10px;
    }

    
    
}
@media  only screen and (max-width: 1024px) {

}
@media  only screen and (max-width: 900px) {

    
    .header-top {
        display: none;
    }

    #toggle-menu {
        display: block;
        position: absolute;
        left: 2%;
        font-size: 30px
    }

    img.site-logo {
        position: absolute;
        left: 28%;
        top: 2%;
    }

    .main-header-left {
        width: 100%;
        /* position: absolute; */
        /* z-index: 999999999; */
        background: #fff;
        justify-content: center;
        height: 45px;
    }

    .main-header-right {
        z-index: 99999999999;
        top: -10%;
        position: absolute;
        right: 0;
    }

    .menu-item:hover>.sub-item-list {
        opacity: 1;
        visibility: visible;
    }

    /* =========MAIN MENU DIFFRENT STYLE IN  RESPONSIVE VIEW======== */
    .menu-list {
        display: flex;
        flex-direction: column;
        width: 80%;
        min-height: 600px;
        display: none;
        opacity: 1;
        transition: .2s;
        justify-content: left !important;
        height: 100vh;
        position: fixed;
        z-index: 7777777777;
        top: 0;
        overflow-y: scroll;
      }




    }




    .collapse-manu {
        display: block;;
        opacity: 1;
    }

    .menu-overlaw {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgb(0, 0, 0, 0.5);
        top: 0;
        z-index: 0;

    }

    .menu-item {
        padding: 10px 20px;
        display: flex;
    }

    .main-header {
        height:75px;
        width: 80%;
        margin: 0 auto;
    }

    .sub-item {
        width: auto;
        min-height: auto;
        font-weight: normal;
        text-transform: none;
        padding: 8px 12px !important;
    }




}


@media  only screen and (max-width: 850px) {


    .nav-list {
        width: 100% !important;
        height: 100vh !important;
        width: 100% !important;
        background-color: var(--primary-color) !important;
        flex-direction: column !important;
        display: none !important;


    }

    .nav-list li {
        font-size: 16px;
        left: 0px !important;
        border-bottom: 1px solid #fff;
        color: #000000;
    }

    .nav-list li .nav-router {
        text-align: left !important;
        color: #000000;
    }

    .nav-list li:hover>.sub-menu {
        display: none;
    }

    .menu-icons {
        display: block;
        top: -203px;
    }

    body {
        overflow-x: hidden;
    }


}



@media  screen and (max-width: 768px) {


    .policy_section{
        display: none;
    }
    .loved-category{
        display: none;
    }
    .loved_categories_carousel{
        display: block !important;
    }
    .address{
        text-align: center;
    }

    .footer-color{
        text-align: center;
    }
    .info_left{
        float: left;
        width: 50%;
    }

     .info_left{
        float: right;
        width: 50%;
    }

    #link_line_contact{
        text-align: center;
        width: 50%;
        margin: 10px auto;
    }

    .facebook_page{
        display: none;
    }

    .quick_link{
        margin-left: 0px;
    }

    .payment-card{
        margin-bottom: 40px;
    }

    .best_product{
        text-align: left !important;
    }

    .section_title{
        margin-left: 0px;
        margin-bottom: 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 19px;
    }

    .line{
        margin-left: 0 !important;
        margin-bottom: 10px !important;
        width: 110px !important;
    }

    .service_row {
        width: 100%;
        height: 40px;
        margin-top: 25px;
        margin-bottom: 50px;
    }

    .breadcrumb{
        margin-top: 31px;
        text-align: center;
        margin-bottom: 0px;
    }

    .home_icon{
        display: block !important;
    }

    .home_icon_desktop{
        display: none;
    }

    .margin_container{
        text-align: left !important;
    }
    .coupon_top{
        margin-top: 0px;
    }

    .sort {
        float: left;
        margin-left: -65px !important;
        margin-top: 15px !important;
    }
    .filter_line_top{
        border: 1px solid #E1E1E1;
    }

     .filter_line_bottom{
        border: 1px solid #E1E1E1;
        margin-top: 5px;
    }

    .filter_list_container{
        margin-top: 8px;
    }
    .form-control{
        height: 35px !important;
    }

    .modal-title{
        font-size: 20px;
    }
    .close_sign{
        margin-top: 42px;
    }

    .modal-dialog{
        margin-left: -5% !important;
        overflow-y: initial;
    }

    .attribute-values{
        margin-top: -12px;
    }
    .product-details-tabe{
        margin-left: 0px;
    }

    .product-tab-content{
        padding: 15px 0px;
    }

    .details-tab-menu-item{
        margin-left: 0px;
    }
    ul.details-tab-menu-list{
        padding-left: 23px;
    }

    .filter-box{
        padding: 0px 10px;
    }

    .box-category-filter{
        padding: 6px 0;
        margin-left: -12%;
        /* width: 100%; */
        display: flex;
        border-bottom: 1px solid rgba(0,0,0,.08);
        transition: all .2s ease;
    }

    #cat_accordion_responsive li{
        font-size: 18px;
        font-weight: 400;
    }
    #cat_accordion_category li{
        font-size: 20px;
    }
    #cat_accordion_category li{
        font-size: 18px;
        margin-left: -39px;
        font-weight: 400;
    }
    #cat_accordion_category{
        height: 100px;
        overflow-x: auto;
        /* width: 100%; */
    }
    .done{
    background: #CC8D46;
    text-align: center;
    color: #fff;
    float: right;
    width: 50%;
}
    .done p{
        padding: 7px 0px;
        margin: 0;
    }
    .clear_all{
        float: left;
        bottom: 0;
        width: 50%;
        background-color: #424242;
        color: #fff;
    }

    .vm--modal{
        left: 0 !important;
        /* top: 0 !important; */
        z-index: 99999999999;
        /* position: absolute; */
    }
    
    #footer .link_line li {
        font-weight: 400;
    }
    #footer .column a{
        font-size: 18px;
    }

    .checkout-title{
        margin-left: 0px !important;
    }

    .checkout-login{
        margin-left: 0px !important;
    }

    .return-customer{
        float: none !important;
        
    }
    .return-customer p{
        text-align: center !important;
    }
    .promo_code{
        margin-left: 0 !important;
    }
    .custom-box .title{
        text-align: center;
        margin-bottom: 10px;
    }

    .cart-items{
        text-align: center;
    }
    .payment-title{
        text-align: center;
    }

    .google-login{
        float: right !important;
        margin-left: 0px !important;
    }
    .address-area{
        margin-bottom: 10px !important;
    }








    












    .custom-box {
        padding: 20px 10px ;
        margin-top: 20px !important;
        margin: auto;
        border-radius: 10px ;
        /* box-shadow: 0 1pt 12pt rgb(150 165 237) ; */
    }


        .landing_slider_img {
            min-height: 300px;
            max-height: 370px;
        }

        .category_filtering_on_mobile {
            position: absolute;
            z-index: 22222222;
            background: #ffff;
            height: 14000px;
            width: 100%;
        }

        .collapse_category_filtering{
            display: block;
        }

        .row{
            margin-left: -5px !important;
            margin-right: -5px !important;
        }

        .single_p_wishlist_btn {
            width: 100%;
            margin-top: 0px;
            margin-bottom: 20px;
        }

        .mobile_menubar_header{
            display: block;
            position: absolute;
            z-index: 999999;
            margin-left: -86%;
            margin-top: 15px;
        }
        .mobile_menubar_header>i{
           font-size: 28px;
        }
        .mobile_menubar_search {
            display: block;
            position: absolute;
            margin-left: 70%;
            margin-top: 4%;
            color: var(--primary-color);
            width: 30%;
        }
        .mobile_menubar_search>a {
            font-size: 22px;
            padding:0% 10%;
        }

        .single_product_img_container {
            max-height: 400px;
        }

       .btn_buy_cart {
            font-size: 14px;
            height: 33px;
        }


        .s_price_container_1,.s_price_container_2,.s_price_container_3 {
            height: 35px;
         }

         .attribute-name {
            font-size: 18px;
            margin-top: -10px;
        }

        .s_price_container_3 p {
            margin-top: 8px;
        }




       .filter_button_container {
           display: flex;
        }
        .filter_product_count{
           display: none;
         }

        .filter_customize_button{
           display: block;
           margin-left: -18px;
           margin-top: 0px;
         }

        .main-header-left {
          width: 96%;
        }

        .product__attribute>label {
            margin-left: -10px;
            /* margin-right: 35px; */
        }

        .qty_container>h4 {
            margin-left: -10px;
        }

        .input_qty {
            margin-left: 3%;
            /* width: 100% !important;
            padding: 18px 34% !important; */
        }

        .incrementor_plus {
            margin-left: 17%;
        }

        .incrementor_minus {
            margin-left: 89%;
        }



       .margin_design {
          width: 80%;
        }

        .offer_collection {
            display: none;
        }

       .shop_by_category_container {
            padding-left: 5px !important;
            padding-right: 5px !important;
        }

        .shop_by_category_container>.content {
            margin-bottom: 15px;
            height: auto;
        }

        .shop_by_category_container>.content img {
            width: 100%;
            height: auto;
        }

        .shop_by_category_container>.content_footer>.sub_c_name {
            width: 90%;
            padding: 11px 5px;
            font-size: 14px;
        }

       .sub_category_angle {
            padding-left: 5px;
        }


        .content_card_container {
            margin-bottom: 10px !important;
            padding-left: 5px !important;
            padding-right: 5px !important;
        }

        .content_card {
            width: 100%;
            height: auto;
            padding-bottom: 10px;
            max-height: 360px;
            min-height: 360px;
        }

        .content_card_body img {
            width: 96%;
            height: auto;
            margin: 5px;
            max-height: 300px;
            min-height: 300px;
        }

        .single-product-box {
            padding: 10px 0px;
        }


        .list_content_container{
           padding-left: 0px !important ;
           padding-right: 8px !important ;
        }

        .list_content_card {
            width: 100%;
            height: auto;
            max-height: 310px;
            min-height: 310px;
        }

        .list_content_card_body img {
            width: 96%;
            height: auto;
            margin: 5px;
            max-height: 300px;
            min-height: 300px;
        }

        .list_content_p_heading {
            font-size: 16px;
        }

        .list_content_price {
            display: flex;
            margin: 0% 28%;
            padding-top: 0px;
        }

        .content_card_on_slider{
            width: 280px;
            height: auto;
            padding-bottom: 10px;
            max-height: 360px;
            min-height: 360px;
        }

        .suggest_category_list {
            min-height: 70px;
        }

        .suggest_category_list>li {
            width: 31%;
            height: 36px;
            margin: 6px 5px;
            padding: 5px;
        }

        .suggest_category_list>li>a {
            font-size: 14px;
             font-family: 'Poppins', sans-serif;
        }

        .c_new_arrival_offer_container>.c_content {
            height: auto;
        }

        .c_new_arrival_offer_container>.c_content img {
            height: auto;
        }

        .header {
            height: 75px;
        }

       .mens_womens_collection_container{
            display: block;
        }

        .mens_womens_collection_container>.banner_content {
            width: 100%;
            margin: 2% 0%;
        }
        .mens_womens_collection_container>.banner_content img{
            width: 100%;
            max-height: 600px;
        }

        .menu-item:hover>.sub-item-list {
            display: none;
        }

    .menu-item {
            padding: 10px 15px;
            display: flex;
        }

    .sub-menu-icon {
        display: block;
        font-size: 24px;
        font-weight: bold;
        margin-top: -10px;
    }

    .menu-icon {
        display: block;
        color: #fff;
        font-weight: bold;
        justify-content: space-between;
        margin-left: auto;
        font-size: 32px;
        margin-right: 10px;
        margin-top: -10px;
    }

     .cart-open {
            display: none;
      }

      /* .colapse-cart {
            width: 43%;
            height: 94%;
        } */

        ul.p-image-name li {
            padding: 0px 5px !important;
            font-size: 12px;
        }

       .main-header-right {
           display: none;
       }

        .__footer_nav {
            width: 100%;
            position: fixed;
            bottom: 0;
            background: #fff;
            height: 6rem;
            z-index: 99999999999999999;
            left: 0;
            box-shadow: 5px 10px 18px #333e48;
            padding-top: .45rem;
            color: #333;
            display: block;
        }

        .__footer_nav ul {
            display: flex;
            list-style: none;
            margin-top: 8px;
            padding-left: 8px;
        }

        .__footer_nav ul li {
            font-size: 1.55rem;
            width: 20%;
            text-align: center;
        }


        .__footer_nav ul li p {
            font-size: 12px;
             font-family: 'Poppins', sans-serif;
            margin-left: 2px;
        }

        .footer_icon{
            font-size: 26px ;
            color: var(--primary-color) ;
            cursor: pointer;
            margin-bottom: 2px;
        }

        .customize_c_item {
            margin-top: 16px;
            background: var(--primary-color);
            border-radius: 50%;
            position: absolute;
            width: 14px;
            height: 14px;
            color: #fff;
            padding: 7px 4.5px;
            margin-left: 23px;
            font-size: 10px;
        }

        .header_search_form {
            display: none;
            width: 900px;
            background: #ffff;
            position: absolute;
            z-index: 9999999999999999999;
            height: 2000px;
            margin-left: -65%;
            margin-top: 9%;
        }

        .search-input {
            width: 64%;
            margin-left: 0%;
            margin-top: -305px;
        }

        .search-btn {
            position: absolute;
            display: block;
            top: 15px;
            left: 72%;
            width: 70px;
        }

        .search-content {
            z-index: 1000;
            top: 3%;
            width: 65%;
            margin-left: 15%;
        }

        .search_toggle{
            display: block ;
        }


       .subscribe-input {
              width: 80% !important;
             margin-left: -12px;

          }

        .footer_info_row{
             height: 80px;
             margin-top:-5px;
           }

        .end_footer p{
            text-align: center;
            font-size: 16px;
        }

        #footer .f_info_left {
            margin-top: 15px;
            margin-left: 10%;

        }

        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 23%;
            color:#fff;
        }

        /* header respoonsive */
        img.site-logo {
            position: absolute;
            left: 4%;
            top: 6%;
        }

        /* header section responsive */

        .main-header-right li {
            font-size: 16px;
            padding: 15px 10px;
        }


        span.price-new {
          /* font-size:13px ;
          margin-left:-5% ; */
        }

        .single_p_price {
                font-size: 20px !important;
                margin-left: -35% !important;
                padding: 0px 45px;
            }
       /* new arrival section responsive issue */

       .arrival_heading {
        text-transform: uppercase;
        margin-top: 5px;
        font-size: 12px;
      }

       .new_arrival_section{
        margin-top: 0px;
        padding: 30px 0;
        margin-bottom:0px;
        }

        .new_arrival_container{
            width: 130px;
            height: 230px;
        }

        .new_arrival_card{
            width: 120px;
            height: 120px;
            background: #F4F1F0;
            border-radius: 50%;
        }

        .new_arrival_card_body img{
            width: 90px;
            height: 90px;
            margin: 15px;
            border-radius: 50%;
        }

        .vhl-item[data-v-8b923bbc] {
            box-sizing: content-box;
            padding-top: 20px !important;
            padding-bottom: 20px !important;
            z-index: 1;
            min-height: 1px;
        }

        .arrival_link{
            font-size: 12px;
            font-weight:normal;
            text-transform: none;
            line-height:15px;

        }

        /* service section responsive */

        .service_container{
        width:50%;
        float: left;
        }

        .service_outer{
            margin: 20px 100px;
        }

        .parallax_background {
            width: 100%;
            height: 350px;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 10px 0px;
        }

        .btn_shop_now{
            margin-top: 25%;
           margin-right: 40%;
        }
      /* collection responsive */
      .offer_collection{
        margin-bottom: 10px;
        }
        .collection_left{
            margin-left: -5px;
            width:100%;
            height:600px !important ;

        }

        .collection_right{
            width: 100%;
            height:600px !important ;
            margin-left: -5px;
            margin-top: 20px;
        }

        .container_offer_header {
            text-align: center;
            margin-top: 160px;
            width: 80%;
            margin-left: 10%;
            height: 108px;
        }

        .collection_content {
            display: block;
            background: #fff;
            margin: 1%;
            width: 48%;
            float: left;
        }
        .collection_content img {
            width: 100%;
            height: 200px;
            padding: 10px;
        }

         .collect_sub_data {
             text-align: center;
             float: none;
         }

          .collect_sub_data .p1 {
               font-size: 14px;
            }

         .collect_sub_data .p2 {
            font-size: 16px;
            padding: 5px;
            line-height: 7px;
            padding-top: 0px;
        }

         .btn_more{
            margin-bottom:10px;
        }


       /* campaign responsive */

        .campaign_clock {
            position: absolute;
            margin-top: -36px;
            margin-left:22% ;
         }

         .random_heading{
            text-align: center;
         }

            .arrow_icon{
            display: inline-block;
            }

            .sub_category_view{
            display: none;
            margin-top: 15px;
            }


            .sub-category-name {
                border-bottom: 1px solid var(--primary-color);
                background: #fff;
                padding: 0px 7px;
                font-size: 13px;
                font-weight: bold;
                margin-left: 5px;
                float: left;
                margin-bottom: 10px;
                border-block-end-style: none;
            }


            .c-v-all {
                background: #000;
                color: #fff;
                padding: 5px 13px;
                width: 22px;
                height: 38px;
                display: inline;
                border-radius: 4px;
                transition: .5s;
            }


            .search-content {
                    text-align: left;
                }

            .product-image-viewe {
                width: 85% ;
                margin-bottom: 60px !important;

            }

            img.responsive-image.preview-box {
                width: 85%;
                margin-bottom: 25px !important;
            }


            /* starte the custome nav css*/

            header.main-menu {
                position: relative;
                left: 0;
                top: 0;

            }

            nav.menu {
                display: flex;
                width: 100%;
            }

            ul.nav-list {
                display: flex;
                width: 100%;
                height: 40px;
                width: 100%;
                background-color: var(--primary-color);

            }

            ul.nav-list li {
                line-height: 2.5rem;
                position: relative;
                text-align: center;
                top: 9px;
                left: 9rem;


            }

            ul.nav-list li .nav-item {
                color: #fff;
                padding: 0 12px;
            }

            .menu-icons {
                color: var(--primary-color);
                font-size: 4rem;
                position: absolute;
                top: -40px;
                z-index: 1500;
                right: 2rem;
                transform: translateY(50%);
                display: none;
            }

            .sub-menu {
                background-color: #fff;
                color: #fff;
                top: 29px;
                left: 12px;
                width: 170px;
                z-index: 100000000;
                position: absolute;
                border-top: 3px solid var(--primary-color);
                font-size: 12px;
                text-align: left;
                display: none;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                border-left: 1px solid #ddd;


            }

            .sub-menu .sub-menu {

                top: 0px;
                left: 162px;
                border-top: none;
                border-top: 2px solid var(--primary-color)
            }

            .sub-menu::before {
                content: "";
                position: absolute;
                top: -16px;
                left: 0;
                border: 7px solid transparent;
                border-bottom-color: #fff;
            }

            .sub-menu .sub-menu::before {

                top: -4px;
                left: -14px;
                border: 7px solid transparent;
                border-right-color: #fff;
            }

            .nav-list li:hover>.sub-menu {
                display: block;
            }

            ul.sub-menu li {
                text-align: left;
                padding: 5px 0 0;
                border-bottom: 1px solid #ddd;
                background: #fff;
                margin-left: 5px;
                left: 0px;
            }

            .nav-router {
                color: #000;
            }



       /* in small view device quick view button won't display */

            .btnQuick{

                display: none ;
            }


            /* frontend common responsive issue is start from here  */

            img.responsive-image.preview-box
            {
            width: 85%;
            margin-left: 20px;
            }


            /* landing responsive code is start from here  */

            .container{
            margin:5px;
            }
            .banner_container{
            margin-left:-13px;
            }


        .banner img {
            max-width: 120px;
            max-height: 130px;
            border: 1px solid #eee;
            border-radius: 5px;
            }


            .c-product-header{
                display:none ;
            }


           .product-card {
                width:100%;
                height: auto;
                background: #F4F1F0;
                border: 1px solid #ddd;
                text-align: center;
                padding-top: 5px;
                margin-bottom: 15px;
            }

            .content_card:hover>.content_card_footer{
                display: none;
            }

            .product-card p {
            font-size: 13px;
            margin-top: -15px;

            }

            .product-detail h4 {
                font-size: 16px;
                padding-bottom: 10px;
                margin-top: -5px;
            }

            .product-card-body img {
                width: 95% !important;
                height: 100% !important;
                padding: 5px 0px !important;
            }




        /* contact us responsive code is here  */
        .address_container {
            margin-top: 30px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px !important;
        }
        .contact_row {
            margin-top: -15px !important;
        }



        .short_desc_footer {
            position: relative;
            font-size: 14px;
            line-height: 24px;
            margin-left: -10px;
        }

        .box {
            margin: 10px;
        }



        /* single display product responsive isssue is start from here ; */



        .product-details{
            margin-left:0px;
        }

        .product-details ul {

        list-style: none;
        margin-left: -16px;
        margin-right: 3px;

        }

        .r_title {
            margin-left:20px;
        }

        .single_product_heading h4 { font-size: 16px ; }

        .list-unstyled h2 { font-size: 20px ; }



        .details-tab-menu-list li{

            font-size: 11px !important;

        }

        /* cart responsive is start from here */

        .cart_row{
            padding-bottom: 25px;
        }


        .cart_responsive_price{
            margin-left: 270px;
            margin-top: -44px;

        }


        .cart_responsive_total{

            margin-left: 310px;
            margin-top: -24px;
        }

        .cart_responsive_remove{
            cursor: pointer;
        }



        /* blog responsive issue is start from here */

        .desc_info p {
            font-size: 12px;
            line-height: 24px;
            font-style: normal;
        }
        .feature_image {
            width: 311px !important;
            height: 230px !important;
            margin-top: 18px !important;
            border: 3px dashed;
        }


        /* carrier details page responsive is here */

        .carrier_description {
            font-size: 14px;
            line-height: 24px;
        }


        .carrier_feature_image {
        width: 205px;
        height: 132px;
        border-radius: 10px;
        }

        /* cart responsive is start from here */

        .cart-open {
            height: 70px;
        }

        .cart-open i {
            font-size: 18px;
            
        }

        .cart-total {
            background: #21180F;
            width: 100%;
            padding: 0px;
            border: 1px solid #ddd ;
            font-size: 14px;
        }


        .cart-total h5 {
            margin-top: 2px !important;
            font-size: 14px;
        }


        /* footer responsive code is start from  here */
        .quick_link{
            margin-left:0px;
        }

        .news_letter{
            margin-left: 25px;
        }



        .best_selling_discount {
            line-height: 40px;
            right: -36px;
            top: -133px;
            font-size: 11px;

        }
        .best_selling_discount {
            background: #A616B6;
            border-radius: 100%;
            color: #fff;
            display: block;
            font-size: 10px;
            font-weight: 600;
            height: 40px;
            width: 40px;
            line-height: 37px;
            position: absolute;
            right: -66px;
            text-align: center;
            top: 25px;
            transform: translate(-50%, -50%) rotate(-30deg);
        }
        .d_off {
            position: absolute;
            margin-left: -18px;
            margin-top: 10px;
        }
        .discount {
            background: #A616B6;
            border-radius: 100%;
            color: #fff;
            display: block;
            font-size: 10px;
            font-weight: 600;
            height: 35px;
            width: 35px;
            line-height: 36px;
            position: absolute;
            right: -12px;
            text-align: center;
            top: 19px;
            transform: translate(-50%, -50%) rotate(-30deg);
        }
        .d_off_category {
            position: absolute;
            margin-left: -17px;
            margin-top: 10px;
        }

        

    }



  .flip-card { font-size: 1.5rem !important; }

@media  screen and (max-width:700px) {

    .header_search_form {
        margin-left: -65%;
        margin-top: 11%;
    }

    .search-input {
        width: 55%;
        margin-left: -3%;
    }

    .search-btn {
        left: 60%;
    }

    .search-content {
        z-index: 1000;
        top: 3%;
        width: 55%;
        margin-left: 12%;
    }
    .best_selling_discount {
        background: #A616B6;
        border-radius: 100%;
        color: #fff;
        display: block;
        font-size: 10px;
        font-weight: 600;
        height: 35px;
        width: 35px;
        line-height: 35px;
        position: absolute;
        right: -78px;
        text-align: center;
        top: 18px;
        transform: translate(-50%, -50%) rotate(-30deg);
    }


}

@media  screen and (max-width:600px) {

    .header_search_form {
        margin-left: -65%;
        margin-top: 12%;
    }

    .search-input {
        width: 47%;
        margin-left: -5%;
    }

    .search-btn {
        left:50%;
    }


    .search-content {
        z-index: 1000;
        top: 3%;
        width: 55%;
        margin-left: 12%;
    }


    .auto_writer {
        top: 30px;
        left: 11%;
    }

      .content_card_on_slider{
            width: 250px;
        }


        .content_card {
            max-height: 335px;
            min-height: 335px;
        }

        .content_card_body img {
            max-height: 260px;
            min-height: 260px;
        }

       .list_content_card {
            max-height: 270px;
            min-height: 270px;
        }


        .list_content_card_body img {
            max-height: 260px;
            min-height: 260px;
        }



    .discount {
        margin: -7px;
        right: -4px;
        top: 25px;
    }
    /* .discount {
        margin: -7px;
        right: -4px;
        top: 25px;
    } */
    .discount_star {
        font-size:24px;
    }

    .card-body {
    margin:10px;
   }

    .user_profile_icon {
        width: 50px; height: 50px;
    }

    .table_container{
      overflow-x: scroll;
       margin:10px;
    }



       .best_s_star {
          margin: 2px;
         font-size: 12px;
         color:#fff;
       }

        .flas_selling_discount {
           right: -27px;
           top: -172px;
           width: 50px;
           height: 50px;
           font-size: 11px;
           font-weight: 600;
        }

        .flash_s_star {
            margin: 2px;
            font-size: 12px;
            color:#fff;
        }

        /* .new_product_discount{
          right: -8px;
          top: -152px;
          width: 42px;
          height: 42px;
          font-size: 11px;
          font-weight: 600;
        } */

        .new_p_star {
            margin: 2px;
            font-size: 12px;
            color:#fff;
        }


        .cart-empy img {
            height: 130px;
        }

        .best_selling_discount {
            font-size: 9px;
            right: -80px;
        }
        .d_off {
            position: absolute;
            margin-left: -16px;
            margin-top: 10px;
        }



    }



@media  screen and (max-width:530px) {
        #footer .column a{
            font-size: 12px;
        }

        .header_search_form {
            margin-left: -65%;
            margin-top: 14%;
            font-size: 12px;
        }

        .search-input {
            width: 42%;
            margin-left: -6%;
        }

        .search-btn {
            left:44%;
        }

        .search-content {
            z-index: 1000;
            top: 3%;
            width: 47%;
            margin-left: 9%;
        }


        .incrementor_plus {
            margin-left: 22%;
        }

        .incrementor_minus {
            margin-left: 85%;
        }


        .content_card_on_slider{
            width: 230px;
        }

        .content_card {
            max-height: 310px;
            min-height: 310px;
        }
        .content_card_body img {
            max-height: 240px;
            min-height: 240px;
        }

        .list_content_card {
            max-height: 250px;
            min-height: 250px;
        }

        .list_content_card_body img {
            max-height: 240px;
            min-height: 240px;
        }
        .best_selling_discount {
            font-size: 9px;
            right: -95px;
        }
        .d_off {
            position: absolute;
            margin-left: -16px;
            margin-top: 10px;
        }



    }




@media  screen and (max-width: 480px) {

    .content_link {
        font-size: 12px;
        line-height: 16px;
      }

    .header_search_form {
        margin-left: -65%;
        margin-top: 13%;
    }

    .auto_writer {
        top: 37px;
        left: 11%;
        font-size: 12px;
    }

    .content_card_on_slider{
        width: 210px;
    }


        .content_card {
            max-height: 300px;
            min-height: 300px;
        }
        .content_card_body img {
            max-height: 230px;
            min-height: 230px;
        }


        .list_content_card {
            max-height: 300px;
            min-height: 300px;
        }

        .list_content_card_body img {
            max-height: 230px;
            min-height: 230px;
        }
         .best_selling_discount {
            font-size: 9px;
            right: -95px;
        }
        .d_off {
            position: absolute;
            margin-left: -16px;
            margin-top: 10px;
        }

}




@media  screen and (max-width: 450px) {

           .incrementor_plus {
                margin-left: 20%;
            }

            .incrementor_minus {
                 margin-left: 86%;
             }

            .header_search_form {
                margin-left: -65%;
                margin-top: 14%;
            }


            .search-input {
                width: 40%;
                margin-left: -7%;
                margin-top: -295px;
            }

            .search-btn {
                left: 41%;
                top: 25px;
            }

            .search-content {
                z-index: 1000;
                top: 3.5%;
                width: 42%;
                margin-left: 8%;
            }

            .auto_writer {
                top: 40px;
                left: 9%;
                font-size: 12px;
            }

            .filter_button_container>button {
                height: 60px;
                margin: 0% 2%;
                font-size: 10px;
            }

            .filter_list_container>select {
                height: 40px !important;
                padding: 6px 12px;
                font-size: 15px !important;
                border: 1px solid var(--primary-color) !important;
                 font-family: 'Poppins', sans-serif;
                border-radius: 15px;
                margin-top: 10px;
                margin-left: 3px;
            }

        .content_card {
            max-height: 270px;
            min-height: 270px;
        }

        .content_card_on_slider{
            width: 185px;
        }

        .content_card_body img {
            max-height: 200px;
            min-height: 200px;
        }

        .list_content_card_body img {
            max-height: 200px;
            min-height: 200px;
        }

        .content_link {
            font-size: 12px;
            line-height: 16px;
        }

       .flip-card { font-size: 1rem !important; }

        .container{
            margin:5px !important;
            }
        .subscribe-input {
            width: 90% !important;
          }

        /* footer responsive  */
        .footer_info_row{
            height: 110px;
             margin-top:-5px;
           }

        .end_footer p{
            text-align: center;
            font-size: 14px !important;
        }
        #footer .f_info_left {
            margin-top: 15px;
            margin-left: 5%;

        }

        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 16%;
            color:#fff;


        }

        .product-detail h4 {
                font-size: 12px;
                padding-bottom: 10px;
                margin-top: -5px;
                }


       /* servie reseponsive */
         .service_outer {
            width: 55px;
            height: 55px;
            margin: 10% 35%;
        }

        .service_inner {
            width: 40px;
            height: 40px;
            margin: 6.5px 6px;

            }

         .service_icon {
            margin: 9px;
            font-size: 22px;
            }

            .service_container p{
            font-size: 12px;
            line-height: 12px;
            }

            .service_container h4 {
                font-size: 14px;
            }



        /* categories and readom section responsive  */
        .banner_image {
            width: 100px;
            height: 100px;
        }

        /* new arrival responsive issue */
        .new_arrival_section{
            margin-top:15px ;
        }
        .new_arrival_container{
            width: 120px;
            height: 190px;
            margin-top: 25px;
        }

        .new_arrival_card{
            width: 105px;
            height: 105px;
            background: #F4F1F0;
        }

        .new_arrival_card_body img{
            width: 85px;
            height: 85px;
            margin: 10px;
        }


        .collection_content img {
            width: 100%;
            height: 165px;
            padding: 10px;
        }
         /* header-section responsive */
        .main-header-right li {
            font-size: 12px;
            padding: 15px 5px;
        }

        .campaign_clock {
            margin-top: -9%;
            margin-left: 11%;
        }

        .sale_campaign {
            margin-bottom: 20px !important;
        }

        .sale_campaign h3 {
             margin-left: -32%;
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .product-thumb.clearfix {

            height: 220px !important;

            }
        .best_selling_discount {
            font-size: 9px;
            right: -80px;
            top: 35px;
        }
        .d_off {
            position: absolute;
            margin-left: -16px;
            margin-top: 10px;
        }

}




@media  screen and (max-width: 400px) {

        .header_search_form {
            margin-left: -65%;
            margin-top: 15%;
        }

        .search-input {
            width: 38%;
            margin-left: -8%;
        }

        .search-btn {
            left: 38%;
        }

        .search-content {
            z-index: 1000;
            top: 3.5%;
            width: 39%;
            margin-left: 7%;
        }

        .content_card {
            max-height: 265px;
            min-height: 265px;
        }

        .content_card_body img {
            max-height: 190px;
            min-height: 190px;
        }

        .list_content_card {
            max-height: 200px;
            min-height: 200px;
        }

        .list_content_card_body img {
            max-height: 180px;
            min-height: 180px;
        }

        .list_content_details {
            height: 150px;
            overflow-y: auto;
        }

    }

@media  screen and (max-width:380px){

        .header_search_form {
            margin-left: -65%;
            margin-top: 16%;
        }

      .search-input {
            width: 37%;
            margin-left: -9%;
        }

        .search-btn {
            left: 36%;
        }


        .search-content {
            z-index: 1000;
            top: 3.5%;
            width: 37%;
            margin-left: 7%;
        }

        .auto_writer {
            left: 7%;
            font-size: 11px;
        }

        .incrementor_plus {
            margin-left: 24%;
        }

       .input_qty {
        padding: 18px 32% !important;
        }


        .incrementor_minus {
            margin-left: 83%;
        }
        .suggest_category_list {
            min-height: 60px;
        }

        .suggest_category_list>li {
            width: 33%;
            height: 30px;
            margin: 5px 3px;
            line-height: 14px;
        }

        .suggest_category_list>li>a {
            font-size: 13px;
             font-family: 'Poppins', sans-serif;
        }

        .content_card {
            max-height: 255px;
            min-height: 255px;
        }


        .content_card_on_slider{
            width: 165px;
        }


        .list_content_card {
            max-height: 255px;
            min-height: 255px;
        }

        .list_content_card_body img {
            max-height: 180px;
            min-height: 180px;
        }


        .content_card_body img {
            max-height: 175px;
            min-height: 175px;
        }

        .list_content_card {
            max-height: 185px;
            min-height: 185px;
            margin-top: 10px;
        }

        .list_content_card_body img {
            max-height: 175px;
            min-height: 175px;
        }

        .list_content_details {
            height: 134px;
        }

        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 10%;
            color:#fff;
        }


        .cart_responsive_item {
            margin-left: 200px;
        }

        .cart_responsive_price {
            margin-left: 218px;
        }
        .cart_responsive_total {
            margin-left: 252px;
        }
        .cart_responsive_remove {
                margin-left: 297px;
            }

}

@media  screen and (max-width:370px){

        .search-input {
            width: 35%;
            margin-left: -9%;
        }

        .search-btn {
            left: 35%;
        }
        .best_selling_discount {
        font-size: 9px;
        right: -88px;
        top: 35px;
        }
        .d_off {
            position: absolute;
            margin-left: -16px;
            margin-top: 10px;
        }

}

@media  screen and (max-width:350px){

    .search-content {
        z-index: 1000;
        top: 3.5%;
        width: 35%;
        margin-left: 6%;
    }

    .search-btn {
      left: 35%;
     }

    .campaign_clock {
            margin-top: -12%;
            margin-left: 15%;
    }


   .flip-card { font-size: 1rem !important; }

    .flip-clock__slot{
        display: none !important;
    }


   #footer .f_info_left {
        margin-left:2%;
    }



}


//Glam Touch
.vl {
    border-left: 1px solid rgb(215, 215, 215);
    height: 40px;
    margin-top: 6px;
}

.search-input{
    border: none;
}

input[type='text']::placeholder
{   
    /* text-align: right;      */
    margin-right: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 400;
    height: 50px;
}

input::placeholder
{   
    margin-right: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 50px;
    color: #929292;
}
label
{   
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #929292;
}
.search-icon {
    height: 42px;
    transition: .5s;
    right: 9px;
    color: #353233;
    width: 90px;
    position: absolute;
    top: 24%;
    left: 65%;
    font-size: 21px;
}

hr {
  margin-top: -15px;
}

.policy{
    padding: 10px 0;
}

.miss-img{
    margin-bottom: 11px;
    margin-left: 11px;
}
.miss-img img{
    height: 211px;
}
.suggetion_product_row{
    margin-top: 9px;
}

.add-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}


sup {
    padding: 2px 3px;
    background: #fff;
    color: #cd8f46;
    border-radius: 50%;
    font-size: 9px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    border: 1px solid #cd8f46;
    margin-top: -9px;
    margin-left: -7px;
}
.footer-img{
    background-image: url('storage/images/footer/Footer-Background.jpg');
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer-number{
    color: #cc8e46;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 30px;
    font-weight: 600;
}
.gown_kurtis{
    margin-top: 10px;
}

.sort{
    float: left;
    margin-left: 25px;
    margin-top: 15px;
}
.filter_list_container{
    float: right;
}
.breadcrumb{
    margin-left: 30px;
    background-color: white;
}
.filter-color{
    font-weight: bold;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
}
.filter-checkbox{
    margin-right: 5px !important;
}

.filter-radio{
    margin-right: 5px !important;
}
#cat_accordion{
    height: 250px;
   overflow-x: auto;
   width: 100%;
}
::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-track{
    /* background: #03071e; */
}

::-webkit-scrollbar-thumb{
    background: #AEAEAE;
    border-radius: 10px;
    height: 10%;
}

 .line {
    width: 309px;
    height: 2px;
    background: #a98153;
    margin-top: -22px !important;
    margin: auto;
}

.line-left {
    width: 220px;
    height: 2px;
    background: #AA8153;
    margin-top: -22px !important;
}

.loved-category {
   padding: 0 !important;
   margin: 0 !important;
}
.content_link a {
    color: #939494;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    font-size: 19px;
}

.section_title_left{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 22px;
}

.plus-minus{
    margin: 0px !important;
    padding:  0px !important;
}
.add_wishlist{
    margin-top: 15px;
}

.share_to{
    margin-top: 10px;
    font-weight: 400;
    color: #858585;
}
.share_to h4{
    float: left;
    
}
.share_to_icon i{
    padding: 0px 5px;
    font-size: 32px;
}
.related_produc{
    margin-top: 15px;
}
input[data-v-c157765e] {
    height: 44px;
}
.product-img{
    float: left;
    margin-right: 20px;
}

.product-content{
   
}
.product-title{
    color: #A6A6A6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 13px;
}
.product-size{
    font-weight: bold;
}
.input_quantity {
    padding: 12px 4% !important;
    margin-left: 1%;
    font-size: 16px;
    font-weight: bold;
    height: 32px !important;
    width: 32px !important;
    margin-top: -7px;
    margin-right: 5px;
}

.total_carts_products{
    margin-bottom: 20px; 
    height: 255px;
    overflow-x: auto;
}

.carts-products{
    margin-bottom: 10px;
}

.promo_code{
    margin-left: 50px;
}

.coupon_code{
    height: 35px !important;
    width: 60%;
    float: left;
    margin-right: 10px;
}
.code_btn{
    background-color: #555555;
    color: white;
}
.modal-header {
    padding: 3px;
    background: #E8E8E8;
}
.modal-title{
    text-align: center;
    color: #463420 !important;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: bold;
}
.modal-body{
    height: 520px;
    overflow-y: auto;
}
.coupon_top{
    margin-top: 28px;
}
.work_time{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
     font-size: 14px;
     color: #d0d0d0;
}
.link_line li{
    color: #848383;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 17px;
}


.close{
    font-size: 40px !important;
    margin-top: -42px !important;
    color: #424242 !important;
}
.color_att{
    height: 25px;
    width: 20px;
}

.zoom_btn {
    text-align: center;
    color: #B3B5B8;
    margin-top: 15px;
    float: left;
    margin-left: 20px;
}
.single_img_view{
    border: 1px solid #B3B5B8;
}
.quick_preview_img{
    margin-left: 85px;
}
.merchant_login i{
    color: #fff;
    text-shadow: 0 0 1px #000;
}
.header-line{
    border: 1px solid #E8E8E8;
    width: 800px;
    float: right;
    margin-right: 46px;
    margin-top: -12px;
}
.carts{
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    background: #cc8e46;
}
.cart_amount h5{
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}
.footer-color{
    color: #cc8e46;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
}
.attribute-values{
    margin-left: 5px;
}

.call-us{
    background: #CC8E46;
    width: 220px;
    border-radius: 55px;
    margin-top: 20px;
}
.call-background{

}
.call-background h4{
    padding: 2px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-left: 70px;
    /* background: #fff; */
    border-radius: 20%;
}
.phone_icon{
    float: left;
    font-size: 40px;
    margin-left: 3px;
    font-weight: bold;
    margin-top: -15px;
    color: #914E22;
}
.detail_btn {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.checkout-title{
    margin-left: 70px;
    padding: 8px 0px;
}
.checkout-title h3{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #040404;
}

.checkout-login{
    margin-left: 70px;
}
.checkout-line{
    height: 1px;
    border: 1px solid #0F549A;
}
.return-customer{
    float: left;
}
.facebook-login{
    float: left;
    margin-left: 0px;
}
.google-login{
    float: left;
    margin-left: 15px;
}
.login{
    padding: 15px;
}
.facebook{
    background: #0F549A;
    color: white;
    padding: 3px 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
.google{
    background: #E43E2B;
    color: white;
    padding: 3px 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
.payment-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: black;
    font-size: 15px;
}
.payment-line{
    border: 1px solid #B7B7B7;
}

.cart-items{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #484848;
    font-size: 14px;
}
.price_old{
    text-decoration: line-through;
    
}
.qty_container p{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;
}

.product-title i{
    float: right;
    margin-right: 12px;
    font-size: 18px;
    margin-top: 5px;
}
.cart_total_calculation{
    width: 100%;
    padding: 0px;
    font-size: 15px;
    color: #070707;
}

.coupon h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #202021;
}
.place-order{
    margin-top: 20px;
    text-align: center;
    
}
.place_btn{
    background: #AA8153;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
.cash_radio{
    margin-top: 18px;
    margin-left: 10px;
}
/* .cash_input{
    margin-top: 20px;
    margin-left: 18px;
} */

.cart_content_sty{
    padding: 9px 0px;

}
.cart_content_name{
    font-size: 12px;
    color: #ACACAC;
    margin-top: -12px;
}
.cart_content_name p{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
.___place{
    background: #463420;
    text-align: center;
    color: #fff;
    float: right;
    width: 40%;
}
.___place p{
    padding: 7px 0px;
    margin: 0;
}
.contact-page{
    max-width: 90%;
    margin: 15px auto;
}
.address-area{
    border: 2px solid #9B9B9B;
    padding: 25px 20px;
    max-width: 85%;
    border-radius: 5px;
    margin: 0 auto;
    height: 180px;
}
.address-icon{
    text-align: center;
    margin-bottom: 11px;
}
.address-title{
    text-align: center;
}

.app {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.sidebar {
  flex-basis: 260px;
  flex-shrink: 0; /* just one way to do it */
  height: 100%;
  overflow: auto;
  padding: 10px;
}

.map-area {
  flex-basis: 100%;
}
.full-map{
    width: 86%;
    margin: 30px auto;
}
.get_in_touch{
    width: 60%;
    margin: 20px auto;
    text-align: center;
}
.form-control{
    height: 45px;
}
.contact_btn{
    float: right;
    background: #292929;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 10px 18px;
}
.get_title{
    color: #a98153;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    
}
.get_line{
    border-bottom: 3px solid #BFBFBF;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 40px;
}

.subtitle{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 20px;
}
.filter_footer_line{
    border: 1px solid #AEAEAE;
    margin-bottom: 15px;
}
.box-category{
    margin-top: 35px;
}
.filter_by_line{
    border: 1px solid #AEAEAE;
    width: 80px;
}
.modal_header_login{
    height: 45px;
    padding: 10px;
    background: #E8E8E8;
}
.facebook-login-user{
    float: left;
    margin-left: 100px;
}
.login_form{
    width: 45%;
    margin-left: 10px;
    padding: 10px 10px;
    float: left;
}

.register_form{
    width: 45%;
    margin-right: 10px;
    padding: 10px 10px;
    float: right;
}

.login_form .form-control{
    height: 34px;
}
.register_form label{
    font-size: 14px;
}
.register_form .form-control{
    height: 34px;
}

.login_form label{
    font-size: 14px;
}
.user_register{
    background: #AA8153;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #fff;
}

.user_logins{
    background: #AA8153;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #fff;
}
.cart_amount_cal{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.cart_close{
    color: #747273; 
    margin-top: -34px; 
    border: 3px solid #616060;
    padding: 5px; 
    cursor: pointer;
    width: 20%;
    float: right;
}

.phn_num{
    padding: 1px;
}
hr{
    border: 1px solid#d9d9d9;
}


</style><?php /**PATH D:\xampp\htdocs\Project\glam_touch\resources\views/frontend/partials/css.blade.php ENDPATH**/ ?>