<template>
  <div class="row">
    <vue-horizontal-list
      :items="best_selling_produtcs"
      :options="best_selling_options"
    >
    <template v-slot:default="{ item }">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
            <div class="content_card content_card_on_slider">
              <div class="content_card_body">
                <router-link
                  :to="{
                    name: 'single',
                    params: { slug: item.slug },
                  }"
                >
                  <img
                  :src="base_url + item.thumbnail_img"
                  />
                </router-link>
                <p class="content_link">
                  <router-link
                    :to="{
                      name: 'single',
                      params: { slug: item.slug },
                    }"
                    >{{ item.name }}</router-link
                  >
                </p>

                <p class="price">
                  
                  <span class="price-old" v-if="item.discount">
                    &#2547; {{ item.sale_price }}</span >
                    <span class="price-new"> &#2547; {{ item.price }}</span>
                  <!-- <span v-if="item.discount > 0" class="discount">
                    <div class="star-icon" style="margin-top:-7px; margin-bottom: -32px">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <span style="margin-left:-3px">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div class="discount-item" style="margin-top: 6px;">
                      {{ ((item.discount / item.sale_price) * 100).toFixed(0) }}%
                      <span class="d_off">off</span>
                    </div>

                  </span> -->
                </p>
                <div class="add-to-cart d-flex justify-content-center">
                  <!-- <button class="btn btn-warning btn-sm carts"> <i class="fa fa-solid fa fa-cart-arrow-down fa-lg"></i> <span style="margin-top: 2px;">ADD TO CART</span></button> -->
                  <button class="btn btn-warning btn-sm carts"> <img src="storage/images/icons/add_cart.png" alt=""> <span style="margin-top: 2px;">ADD TO CART</span></button>
                  <i class="fa fa-heart fa-2x" style="color: #CC8E46; margin-left: 10px"></i><sup><i class="fa fa-plus fa-sm"></i></sup>
                </div>
              </div>
            </div>
          </div>
        </template>
    </vue-horizontal-list>
  </div>
</template>

<script>
import VueHorizontalList from "vue-horizontal-list";
export default {
  created() {
    this.$store.dispatch("best_selling_produtcs");
  },
  computed: {
    best_selling_produtcs() {
      return this.$store.getters.best_selling_produtcs;
    },
  },
  data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      best_selling_options: {
        responsive: [
          { end: 576, size: 2 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 4 },
          { size: 4 },
        ],
        list: {
          windowed: 600,
          padding: 24,
        },
        position: {
          start: 0,
        },
         autoplay: { play: true, repeat: true, speed: 5000 },
      },
    };
  },
  components: {
    VueHorizontalList,
  },
};
</script>