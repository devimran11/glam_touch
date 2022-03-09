<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
      <br>

        <div v-if="products.length < 0" class="row" style="margin-top:15px;">
          <div class="col-lg-12 text-center" >
            <h3 class="alert alert-warning">No product Found</h3>
          </div>
        </div>

          <products v-else :products="products"  />

      </div>
    </div>

    <frontend-footer></frontend-footer>

  </div>
</template>
<script>
import Products from './partials/Products.vue';

export default {

  created() {
    this.
    searchProducts();
    window.scrollTo(0, 0);
  },
  components:{
    Products
  },
  data() {
    return {

      products: "",
      search: this.$route.params.search,
       base_url:this.$store.state.image_base_link,
       quick_v_product_id:"",
       o_modal:false

    };
  },

  methods: {
    searchProducts() {
      this.$Progress.start();
      axios
        .get("/_public/search/products/"+this.search)
        .then((resp) => {
          console.log(resp);
          this.products = resp.data;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>

<style  scoped>

.btnQuick:hover{
   background: #ff4d03;
}

.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.5s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}


</style>