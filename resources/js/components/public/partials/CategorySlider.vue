<template>
  <div class="slider slider-animation bv xz">
    <div class="row">
      <div class="col-lg-12" v-if="sliders">
        <carousel
          :items="1"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="4000"
        >
          <a v-for="slider in sliders" :href="slider.url" :key="slider.id">
            <img :src="base_url + slider.image" />
          </a>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel,
  },
  props: {
    sliders: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      base_url: this.$store.state.image_base_link,
    };
  },
  methods: {},
};
</script>