<template>
  <div>
    <div class="filter_line_top"></div>
    <div class="row filter_row">
      
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <div class="filter_button_container">
          <button class="btn filter_customize_button" style="cursor: pointer"
              @click="filterModalOpen">
            Filter: <i class="fa fa-filter" style="font-size:25px"></i>
          </button>

        </div>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div class="sort">
          <p>Sort by: </p>
        </div>
        <div class="filter_list_container">
          <select v-model="filter_by" class="form-control">
            <option disabled>Default</option>
            <option value="">Latest</option>
            <option value="">Price High To Low</option>
            <option value="">Price Low To High </option>
          </select>
        </div>
      </div>
    </div>
    <div class="filter_line_bottom"></div>

    <div v-if="grid_view == true" class="row">
      <div
        class="
          col-lg-4 col-sm-4 col-md-4 col-xs-6
          content_card_container
        "
        v-for="product in products"
        :key="product.id"
      >
        <div class="content_card">
          <div class="content_card_body">
            <router-link
              :to="{ name: 'single', params: { slug: product.slug } }"
            >
              <v-lazy-image
                :src="base_url + product.thumbnail_img"
                :src-placeholder="base_url + 'images/preview.png'"
              />
            </router-link>

            <p class="content_link">
              <router-link
                class="product-link"
                :to="{ name: 'single', params: { slug: product.slug } }"
                >{{ product.name }}</router-link
              >
            </p>
            <p class="price">
                  
            <span class="price-old" v-if="product.discount">
              &#2547; {{ product.sale_price }}</span >
              <span class="price-new"> &#2547; {{ product.price }}</span>
          </p>
          <div class="add-to-cart d-flex justify-content-center">
              <button class="btn btn-warning btn-sm carts"> <i class="fa fa-solid fa fa-cart-arrow-down fa-lg"></i> <span style="margin-top: 2px;">ADD TO CART</span></button>
              <i class="fa fa-heart fa-2x" style="color: #CC8E46; margin-left: 10px"></i><sup><i class="fa fa-plus fa-sm"></i></sup>
            </div>
          </div>



        <!-- Quick View Section -->
          <div class="content_card_footer text-center">
            <button
              class="btn btn-primary btnQuick"
              style="cursor: pointer"
              @click="quick_v_product_id = product.id"
            >
              view
            </button>
          </div>
        </div>
      </div>

    </div>
     <quick-view
        v-if="quick_v_product_id"
        v-on:clicked="closedModal($event)"
        :quick_v_p_id="quick_v_product_id"
      >
      </quick-view>
      

     <modal class="categoryFilterModal" name="categoryFilteringModal" :width="400" :height="550">
      <div class="card">
         <div class="modal-header">
            <h4 class="modal-filter">Filters: </h4>
            <h4 style="margin-top: -27px; margin-left: 292px;">Clear all</h4>
            <button
              type="button "
              class="close close_sign"
              data-dismiss="modal"
              @click="closeModal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        <div class="card-body">
            <div class="categories bg-white shadow filter-box">
              <h4 class="filter-color">COLOR <span style="float: right; font-weight: 400">Clear</span></h4>
              <div class="box-category-filter">
                <ul id="cat_accordion_responsive">
                    <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    <input class="form-check-input filter-radio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    Red(55)
                  </li>

                   <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    <input class="form-check-input filter-radio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    Black(55)
                  </li>

                   <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    <input class="form-check-input filter-radio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    Yellow(55)
                  </li>
                </ul>
              </div>

              <div class="box_category_cat">
                <h4 class="filter-color">CATEGORY <span style="float: right; font-weight: 400">Clear</span></h4>
                <ul id="cat_accordion_category">
                    <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                </ul>
              </div>

              <div class="box_category_cat">
                <h4 class="filter-color">PRICE <span style="float: right; font-weight: 400">Clear</span></h4>
                <ul id="cat_accordion_category">
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                  <li>
                    <input type="checkbox" class="form-check-input filter-checkbox" id="exampleCheck1">
                    Long Gown(20)
                  </li>
                </ul>
              </div>
              
            </div>
            
        </div>
        <div class="">
          <!-- <div class="cart_amount_cal"> -->
          <div class="clear_all">
            <router-link
              :to="{ name: 'checkout' }"
              class="btn btn-block"
              style="color: #fff; font-weight:bold;"
              >Clear All
            </router-link>
          </div>
          <div class="done">
            <p>Done</p>
          </div>
        </div>
      </div>
    </modal>


   
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
  components:{
    VLazyImage
  },
  data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      quick_v_product_id: "",
      grid_view: true,
      filter_by:'Default',
    };
  },
  methods: {

  addToWishList(id){
    axios.get('/_public/api/wishlist/store/'+id)
    .then(resp=>{
      if (resp.data.status=="OK") {
          this.$store.dispatch('wishlistContent');
            this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
            });
      }
    })
  },

  filterModalOpen(){
     this.$modal.show('categoryFilteringModal');
  }, 


  closedModal(close) {
      this.quick_v_product_id = "";
    },
  },
};
</script>

<style scoped>
.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.3s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>