<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
      <br>
        <products :products="products" v-if="products.length>0" />

        <div class="row" style="margin-top:15px;">
          <div class="col-lg-12 text-center" v-if="products.length < 1 ">
            <h4 class="alert alert-warning">No product Found</h4>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>

  </div>
</template>
<script>
import Products from './partials/Products.vue';

export default {

  created() {
    this.newArrivalProducts();
    window.scrollTo(0, 0);
  },
  components:{
    Products
  },
  data() {
    return {
      products: "",
       base_url:this.$store.state.image_base_link,
    };
  },

  methods: {
    newArrivalProducts() {
      this.$Progress.start();
      axios
        .get("/_public/api/new/products",{
          params:{
             slug: this.$route.params.slug
          }
        })
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.products;
          this.$Progress.finish();
        })

    },



  },
};
</script>
