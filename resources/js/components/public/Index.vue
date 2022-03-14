<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div class="row slider_row">
      <div class="slider_container">
        <carousel
          v-if="sliders"
          :items="1"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="4000"
        >
          <a v-for="slider in sliders" :href="slider.url" :key="slider.id">
            <img class="landing_slider_img" :src="base_url + slider.image" />
          </a>
        </carousel>
      </div>
    </div>


    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="policy">
                <img class="img-fluid" src="/storage/images/policy/first_shipping.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="policy">
                <img class="img-fluid" src="/storage/images/policy/Easy-return.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="policy">
                <img class="img-fluid" src="/storage/images/policy/online_support.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="policy">
                <img class="img-fluid" src="/storage/images/policy/new_design.png" width="100%">
              </div>
            </div>
          </div>
      </div>
      

    
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin_container text-center">
          <h4 class="section_title">DON'T MISS OUR MOST LOVED CATEGORIES</h4>
          <br>
          <hr>
          <div class="line"></div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="col-md-3 loved-category">
            <img src="/storage/images/don't_miss/best-sealing-1.png" alt="" class="img-fluid" height="434px" width="100%">
          </div>
          <div class="col-md-9 loved-category">
            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid"  width="100%">
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid" width="100%">
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid" width="100%">
              </div>
            </div>


            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid" width="100%">
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid" width="100%">
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-6 loved-category">
              <div class="miss-img">
                <img src="/storage/images/don't_miss/Gown-and-kurtis.png" alt="" class="img-fluid" width="100%">
              </div>
            </div>
          </div>
        </div>

         
      </div>




      <div class="new_arrival_section">
        <div class="row new_product_row">
          <div class="col-lg-12 col-md-12 col-xs-12 text-center">
            <h4 class="section_title">BEST SELLING PRODUCTS</h4>
            <br>
            <hr>
            <div class="line"></div>
          </div>

          <!-- <NewProductsHorizontalSlide /> -->
          <TopSellingProducts />
        </div>

        <!-- <TopSellingProducts /> -->
      </div>

      <div>
        <SessionalAndOccationalCampaign />
      </div>




      <div class="row suggetion_product_row">
        <div class="col-lg-12 col-md-12 col-xs-12 margin_container text-center">
          <h4 class="section_title">NEW ARRIVAL PRODUCTS</h4>
          <br>
          <hr>
          <div class="line"></div>
        </div>

        <!-- <SuggestProducts /> -->
        <TopSellingProducts />
      </div>


      <div class="row suggetion_product_row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin_container text-center">
           <h4 class="section_title">COUPON</h4>
            <br>
            <hr>
          <div class="line"></div>
          <div class="col-md-12 coupon_top">
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="cupon">
                <img class="img-fluid" src="/storage/images/cupon/cupon-1.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="cupon">
                <img class="img-fluid" src="/storage/images/cupon/cupon-2.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="cupon">
                <img class="img-fluid" src="/storage/images/cupon/cupon-3.png" width="100%">
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="cupon">
                <img class="img-fluid" src="/storage/images/cupon/cupon-4.png" width="100%">
              </div>
            </div>
          </div>
        </div>

      </div>


     

    <div class="new_arrival_section">
        <div class="row gown_kurtis">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <h4 class="section_title_left">GOWN & KURTIS</h4>
            <br>
            <hr>
            <div class="line-left"></div>
          </div>

          <!-- <NewProductsHorizontalSlide /> -->
        </div>

        <TopSellingProducts />
      </div>

      <div class="new_arrival_section">
        <div class="row gown_kurtis">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <h4 class="section_title_left">MODEST FASHION</h4>
            <br>
            <hr>
            <div class="line-left"></div>
          </div>

          <!-- <NewProductsHorizontalSlide /> -->
        </div>

        <TopSellingProducts />
      </div>


      <div class="row service_row">
          <div class="col-md-12">
            <img src="storage/images/footer/why-us.png" width="100%" alt="">
          </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
    <quick-view
      v-if="quick_v_product_id"
      v-on:clicked="closedModal($event)"
      :quick_v_p_id="quick_v_product_id"
    >
    </quick-view>
  </div>
</template>

<script>
import Vue from "vue";

import FlipCountdown from "vue2-flip-countdown";
import carousel from "vue-owl-carousel";
import TopSellingProducts from "../public/partials/TopSellingProducts";
import SuggestProducts from "../public/partials/SuggestedProducts";
import ParallaxBanner from "../public/partials/ParallaxBanner";
import NewProductsHorizontalSlide from "../public/partials/NewProductsHorizontalSlide";
import SessionalAndOccationalCampaign from "../public/partials/SessionalAndOccationalCampaign";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.$store.dispatch("categories");
    this.$store.dispatch("sliders");
    this.$store.dispatch("banners");
  },
  components: {
    Loading,
    carousel,
    FlipCountdown,
    TopSellingProducts,
    SuggestProducts,
    SessionalAndOccationalCampaign,
    ParallaxBanner,
    NewProductsHorizontalSlide,
  },

  data() {
    return {
      loading: true,
      page: 1,
      product_id: null,
      base_url: this.$store.state.image_base_link,
      isScroll: 0,
      quick_v_product_id: "",
      o_modal: false,
      suggested_products: "",
    };
  },
  methods: {
    productDetals(product_id) {
      this.prdoct_modal = true;
      this.product_id = product_id;
    },

    closedModal(close) {
      this.quick_v_product_id = "";
    },
    showCategoryName(id) {
      var x = document.getElementById("subCategoryNameView" + id);
      x.classList.toggle("displayeBlok");
    },
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    banners() {
      return this.$store.getters.banners;
    },

    sliders() {
      return this.$store.getters.sliders;
    },

    shop_with_categories() {
      return this.$store.getters.shop_with_categories;
    },
  },
};

//show sub  menu in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(() => {
    //find the click element
    let sub_menu = document.getElementsByClassName("show-sub");

    for (let i = 0; i < sub_menu.length; i++) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        let show_sub_menu =
          sub_menu[i].parentElement.querySelector(".left-sub-menu");
        //set active class
        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    }
  }, 2000);
});
</script>


