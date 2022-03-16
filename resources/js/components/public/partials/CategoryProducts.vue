<template>
  <div>
    <div class="row filter_row">
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <div class="filter_button_container">
          <!-- <button class="btn filter_product_count">
            <b> {{ products.length }}</b> Products Found
          </button> -->
          <!-- <button class="btn filter_customize_button">
            <i class="fa fa-sliders"> </i> <br />
            Customize
          </button>
          <button
            @click="grid_view = true"
            :class="{ __view_type_active: grid_view == true }"
            class="btn"
          >
            <i class="fa fa-th"></i> <br />
            view as
          </button> -->
          <!-- <button
            @click="grid_view = false"
            :class="{ __view_type_active: grid_view == false }"
            class="btn"
          >
            <i class="fa fa-list"> </i> <br />
            view as
          </button> -->
        </div>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div class="sort">
          <p>Sort by: </p>
        </div>
        <div class="filter_list_container">
          <select v-model="filter_by" class="form-control">
            <option disabled>Default</option>
            <option value="">Latest</option>
            <option value="">Price High To Low</option>
            <option value="">Price Low To High </option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="grid_view == true" class="row">
      <div
        class="
          col-lg-4 col-sm-4 col-md-4 col-xs-6
          content_card_container
        "
        v-for="product in products"
        :key="product.id"
      >
        <div class="content_card">
          <div class="content_card_body">
            <router-link
              :to="{ name: 'single', params: { slug: product.slug } }"
            >
              <v-lazy-image
                :src="base_url + product.thumbnail_img"
                :src-placeholder="base_url + 'images/preview.png'"
              />
            </router-link>

            <p class="content_link">
              <router-link
                class="product-link"
                :to="{ name: 'single', params: { slug: product.slug } }"
                >{{ product.name }}</router-link
              >
            </p>
            <!-- <p class="price">
              <span class="price-new"> BDT {{ product.price }}</span>
              <span class="price-old" v-if="product.discount">
                BDT {{ product.sale_price }}</span
              >
              <span v-if="product.discount > 0" class="discount">
                <div class="star-icon" style="margin-top:-7px; margin-bottom: -32px">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span style="margin-left:-3px">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </span>
                </div>
                <div class="discount-item" style="margin-top: 6px;">
                  {{ ((product.discount / product.sale_price) * 100).toFixed(0) }}%
                  <span class="d_off_category">off</span>
                </div>
              </span>
            </p> -->
            <p class="price">
                  
            <span class="price-old" v-if="product.discount">
              &#2547; {{ product.sale_price }}</span >
              <span class="price-new"> &#2547; {{ product.price }}</span>
          </p>
          <div class="add-to-cart d-flex justify-content-center">
              <button class="btn btn-warning btn-sm carts"> <i class="fa fa-solid fa fa-cart-arrow-down fa-lg"></i> <span style="margin-top: 2px;">ADD TO CART</span></button>
              <i class="fa fa-heart fa-2x" style="color: #CC8E46; margin-left: 10px"></i><sup><i class="fa fa-plus fa-sm"></i></sup>
            </div>
          </div>

          <!-- <div class="content_card_footer text-center">
            <button
              class="btn btn-primary btnQuick"
              style="cursor: pointer"
              @click="quick_v_product_id = product.id"
            >
              view
            </button>
          </div> -->
        </div>
      </div>

    </div>

    <!-- <div v-if="grid_view == false" class="row">
      <div
        class="col-lg-12 col-sm-12 col-md-12 col-xs-12 " style="margin-bottom:20px;"
        v-for="product in products"
        :key="product.id"
      >
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 list_content_container">
            <div class="list_content_card">
              <div class="list_content_card_body text-center">
                <router-link
                  :to="{ name: 'single', params: { slug: product.slug } }"
                >
                  <v-lazy-image
                    :src="base_url + product.thumbnail_img"
                    :src-placeholder="base_url + 'images/preview.png'"
                  />
                </router-link>

              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 list_content_container">
             <h4 class="list_content_p_heading"> {{ product.name }} </h4>
             <p class="list_content_details" v-html="product.details" >  </p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="list_content_right_section text-center">
                 <div class="list_content_price">
                  <h4 class="s_price"> BDT {{ product.price }}</h4>
                  <h4 class="d_price" v-if="product.discount">
                    BDT {{ product.sale_price }}</h4
                  >
                </div>

               <router-link class="btn list_content_btn_1"
                  :to="{ name: 'single', params: { slug: product.slug } }">
                   Buy Now
                 </router-link>
                 <br>
                <a @click="addToWishList(product.id)" class="btn list_content_btn_2"><i class="fa fa-heart wishlist_icon"></i>Wishlist</a>
             </div>

          </div>
        </div>

      </div>

    </div> -->
     <quick-view
        v-if="quick_v_product_id"
        v-on:clicked="closedModal($event)"
        :quick_v_p_id="quick_v_product_id"
      >
      </quick-view>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
  components:{
    VLazyImage
  },
  data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      quick_v_product_id: "",
      grid_view: true,
      filter_by:'Default',
    };
  },
  methods: {

  addToWishList(id){
    axios.get('/_public/api/wishlist/store/'+id)
    .then(resp=>{
      if (resp.data.status=="OK") {
          this.$store.dispatch('wishlistContent');
            this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
            });
      }
    })
  },

    closedModal(close) {
      this.quick_v_product_id = "";
    },
  },
};
</script>

<style scoped>
.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.3s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>