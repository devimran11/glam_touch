<template>
  <div class="row">
    <div
      v-for="(product, index) in suggest_products"
      :key="index"
      class="
        col-xl-3 col-md-3 col-lg-3 col-sm-3 col-xs-6
        content_card_container
      "
    >
      <div class="content_card">
        <div class="content_card_body text-center">
          <router-link
            :to="{
              name: 'single',
              params: { slug: product.slug },
            }"
          >
            <img
              :src="base_url + product.thumbnail_img"
            />
          </router-link>
          <p class="content_link">
            <router-link
              :to="{
                name: 'single',
                params: { slug: product.slug },
              }"
              >{{ product.name }}</router-link
            >
          </p>
          <p class="price">
            <span class="price-old" v-if="product.discount">
              &#2547; {{ product.sale_price }}</span >
              <span class="price-new"> &#2547; {{ product.price }}</span>
          </p>
          <div class="add-to-cart d-flex justify-content-center">
            <button class="btn btn-warning btn-sm carts"> <span><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></span> ADD TO CART</button>
            <i class="fa fa-heart fa-2x" style="color: #CC8E46; margin-left: 10px"></i><sup><i class="fa fa-plus fa-sm"></i></sup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("suggest_products");
  },
  data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
    };
  },
  computed: {
    suggest_products() {
      return this.$store.getters.suggest_products;
    },
  },
};
</script>