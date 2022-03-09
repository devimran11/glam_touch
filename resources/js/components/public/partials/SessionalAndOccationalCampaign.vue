<template>
  <div
    v-if="occasion_campaign.status == '1' && seasion_campaign.status == '1'"
    class="row offer_collection"
  >
    <div
      :style="{
        backgroundImage: `url(${
          base_url + occasion_campaign.background_image
        })`,
      }"
      class="col-lg-6 col-sm-12 col-md-6 collection_left"
    >
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="container_offer_header text-center">
            <p>
              {{ occasion_campaign.quote.substring(0, 20) }}
              <span v-if="occasion_campaign.quote.length > 20">...</span>
            </p>
            <h4>
              {{ occasion_campaign.heading.substring(0, 20) }}
              <span v-if="occasion_campaign.heading.length > 20">...</span>
            </h4>
          </div>
        </div>
        <div v-if="occasion_p_top" class="col-md-6 col-sm-12 col-xs-12">
          <div class="collection_content">
            <img
              v-if="occasion_p_top.thumbnail_img"
              :src="thumbnail_base_url + occasion_p_top.thumbnail_img"
            />

            <div class="collect_sub_data text-center">
              <p class="p1">
                {{ occasion_p_top.name.substring(0, 20) }}
                <span v-if="occasion_p_top.name.length > 20">...</span>
              </p>
              <p class="p2">BDT {{ occasion_p_top.price }}</p>
              <router-link
                class="btn btn_more"
                :to="{
                  name: 'single',
                  params: { slug: occasion_p_top.slug },
                }"
              >
                More
                <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
              </router-link>
            </div>
          </div>

          <div class="collection_content">
            <img
              v-if="occasion_p_bottom.thumbnail_img"
              :src="thumbnail_base_url + occasion_p_bottom.thumbnail_img"
            />

            <div class="collect_sub_data text-center">
              <p class="p1">
                {{ occasion_p_bottom.name.substring(0, 20) }}
                <span v-if="occasion_p_bottom.name.length > 20">...</span>
              </p>
              <p class="p2">BDT {{ occasion_p_bottom.price }}</p>
              <router-link
                class="btn btn_more"
                :to="{
                  name: 'single',
                  params: { slug: occasion_p_bottom.slug },
                }"
              >
                More
                <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :style="{
        backgroundImage: `url(${base_url + seasion_campaign.background_image})`,
      }"
      class="col-lg-6 col-sm-12 col-md-6 collection_right"
    >
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="container_offer_header text-center">
            <p>
              {{ seasion_campaign.quote.substring(0, 20) }}
              <span v-if="seasion_campaign.quote.length > 20">...</span>
            </p>
            <h4>
              {{ seasion_campaign.heading.substring(0, 20) }}
              <span v-if="seasion_campaign.heading.length > 20">...</span>
            </h4>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 col-sm-12">
          <div v-if="seasion_p_top" class="collection_content">
            <img
              v-if="seasion_p_top.thumbnail_img"
              :src="thumbnail_base_url+seasion_p_top.thumbnail_img"
            />

            <div class="collect_sub_data text-center">
              <p class="p1">
                {{ seasion_p_top.name.substring(0, 20) }}
                <span v-if="seasion_p_top.name.length > 20">...</span>
              </p>
              <p class="p2">BDT {{ seasion_p_top.price }}</p>
              <router-link
                class="btn btn_more"
                :to="{
                  name: 'single',
                  params: { slug: seasion_p_top.slug },
                }"
              >
                More
                <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
              </router-link>
            </div>
          </div>

          <div class="collection_content">
            <img
              v-if="seasion_p_bottom.thumbnail_img"
              :src="thumbnail_base_url+seasion_p_bottom.thumbnail_img"
            />

            <div class="collect_sub_data text-center">
              <p class="p1">
                {{ seasion_p_bottom.name.substring(0, 20)
                }}<span v-if="seasion_p_bottom.name.length > 20">...</span>
              </p>
              <p class="p2">BDT {{ seasion_p_bottom.price }}</p>
              <router-link
                class="btn btn_more"
                :to="{
                  name: 'single',
                  params: { slug: seasion_p_bottom.slug },
                }"
              >
                More
                <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getOccatoinCampaign();
    this.getSeasionCampaign();
  },
  data() {
    return {
      base_url: this.$store.state.image_base_link,
      thumbnail_base_url: this.$store.state.thumbnail_img_base_link,
      occasion_campaign: "",
      occasion_p_top: "",
      occasion_p_bottom: "",

      seasion_campaign: "",
      seasion_p_top: "",
      seasion_p_bottom: "",
    };
  },
  methods: {
    getOccatoinCampaign() {
      axios.get("/_public/api/publish/occasional/campaign").then((resp) => {
        this.occasion_campaign = resp.data.occasion;
        this.occasion_p_top = resp.data.occasion_p_top;
        this.occasion_p_bottom = resp.data.occasion_p_bottom;
      });
    },
    getSeasionCampaign() {
      axios.get("/_public/api/publish/seasional/campaign").then((resp) => {
        this.seasion_campaign = resp.data.seasion;
        this.seasion_p_top = resp.data.seasion_p_top;
        this.seasion_p_bottom = resp.data.seasion_p_bottom;
      });
    },
  },
};
</script>