<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-xs-12 col-md-12 col-sm-12">
      <vue-horizontal-list :items="new_products" :options="content_options">
        <template v-slot:default="{ item }">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
            <div class="content_card content_card_on_slider">
              <div class="content_card_body text-center">
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
                  <span v-if="item.discount > 0" class="discount">
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

                  </span>
                </p>
              </div>
            </div>
          </div>
        </template>
      </vue-horizontal-list>
    </div>
  </div>
</template>
<script>
import VueHorizontalList from "vue-horizontal-list";
export default {
  created() {
    this.$store.dispatch("new_products");
  },
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      content_options: {
        responsive: [
          { end: 576, size: 2 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 4 },
          { size: 4 },
        ],
        list: {
          windowed: 600,
          padding: 10,
        },
        position: {
          start: 2,
        },
        autoplay: { play: true, repeat: true, speed: 4000 },
      },
    };
  },

  computed: {
    new_products() {
      return this.$store.getters.new_products;
    },
  },
};
</script>