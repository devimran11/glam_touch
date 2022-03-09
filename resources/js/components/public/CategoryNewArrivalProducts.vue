<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
      <br>

        <div v-if="products.length < 0 " class="row" style="margin-top:15px;">
          <div class="col-lg-12 text-center" >
            <h4 class="alert alert-warning">No product Found</h4>
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
        .get("/_public/api/new/products")
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.products;
          this.$Progress.finish();
        })

    },



  },
};
</script>
