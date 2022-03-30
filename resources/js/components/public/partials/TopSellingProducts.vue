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
                <img class="thumbnail_img" :src="base_url + item.thumbnail_img" />
              </router-link>
              <p class="content_link">
                <router-link
                  :to="{
                    name: 'single',
                    params: { slug: item.slug },
                  }"
                  >{{ item.name.substring(0, 10) + ".." }}</router-link
                >
              </p>

              <p class="price">
                <span class="price-old" v-if="item.discount">
                  &#2547; {{ item.sale_price }}</span
                >
                <span class="price-new"> &#2547; {{ item.price }}</span>
              </p>
              <div class="add-to-cart d-flex justify-content-center">
                <button class="btn btn-warning btn-sm carts">
                   <img
                    class="cart_bag"
                    :src="base_url_link + 'images/icons/cart.png'"
                    alt=""
                  />
                  <span>ADD TO CART</span>
                </button>
                <img
                  class="cart_love"
                  :src="base_url_link + 'images/icons/heart.png'"
                  alt=""
                />
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
      base_url_link: this.$store.state.image_base_link,
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
        autoplay: { play: false, repeat: true, speed: 5000 },
      },
    };
  },
  components: {
    VueHorizontalList,
  },
};
</script>
<style scoped>

</style>
