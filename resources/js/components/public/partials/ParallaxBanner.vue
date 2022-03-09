<template>
  <div v-if="banner.status == 1" class="row">
    <a :href="banner.url">
      <div
        :style="{ backgroundImage: `url(${base_url + banner.banner})` }"
        class="parallax_background text-center"
      ></div>
    </a>
  </div>
</template>

<script>
export default {
  created() {
    this.getBuyGetCampaign();
  },
  comments: {},
  data() {
    return {
      banner: "",
      base_url: this.$store.state.image_base_link,
    };
  },
  methods: {
    getBuyGetCampaign() {
      axios
        .get("/_public/api/publish/buy/one/get/one/campaign")
        .then((resp) => {
          this.banner = resp.data.banner;
        });
    },
  },
};
</script>