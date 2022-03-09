<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul
              v-for="category in categories" :key="category.id"
              v-if="category.slug == $route.params.slug  && category.sub_category.length > 0"
              class="suggest_category_list text-center"
            >
              <li
                v-for="(suggest_c, s_index) in category.sub_category"
                :key="s_index"
                v-if="s_index < 14"
              >
                <router-link :to="{name:'PublicSubCategory',params:{slug:suggest_c.slug}}"
                  >{{ suggest_c.name.substring(0, 12)
                  }}<span v-if="suggest_c.name.length > 12">..</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <CategorySlider
          v-if="category_sliders.length > 0"
          :sliders="category_sliders"
        />
        <!-- Breadcrumb Start-->
        <ul class="breadcrumb">
          <li
            v-for="category in categories"
            v-if="category.slug == $route.params.slug"
          >
            <router-link
              :to="{ name: 'PublcaCategory', params: { slug: category.slug } }"
            >
              <i class="fa fa-home"></i>

              {{ category.name }}
            </router-link>
          </li>
        </ul>

        <div class="row">
          <!--Left Part Start -->
          <aside style="margin-bottom: 50px" class="col-xl-3 col-md-3 col-sm-3">
            <div class="categories hidden-xs bg-white shadow c-box">
              <h3 class="subtitle">Other's Categories</h3>
              <div class="box-category">
                <ul class="others_category_list">
                  <li
                    v-for="(category, c_index) in categories"
                    :key="c_index"
                    v-if="category.slug != $route.params.slug"
                  >
                    <router-link
                      :to="{
                        name: 'PublcaCategory',
                        params: { slug: category.slug },
                      }"
                      >{{ category.name }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="search-box hidden-xs bg-white shadow c-box">
              <h3 style="margin-left: 20px" class="subtitle">
                filter by price
              </h3>
              <form @submit.prevent="priceFilter">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <label for="min-price">min-price</label>
                    <input
                      class="form-control"
                      v-model="price_filter.min_price"
                      placeholder="00.00"
                      type="number"
                      name=""
                    />
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <label for="max-price">max-price</label>
                    <input
                      class="form-control"
                      v-model="price_filter.max_price"
                      placeholder="max-price"
                      type="number"
                      name=""
                    />
                  </div>
                </div>
                <br />
                <button type="submit" class="btn btn-block btn_search">
                  Filter <i class="fa fa-lg fa-filter"></i>
                </button>
              </form>

              <div style="margin-top: 20px" class="sort-box">
                <select
                  v-model="sort_by_price"
                  @change="price_sorting_asec_desc"
                  class="form-control"
                >
                  <option value="select_by" disabled>Select Best Match</option>
                  <option value="1">price less to high</option>
                  <option value="2">price high to less</option>
                </select>
              </div>
            </div>
          </aside>

          <div class="col-xl-9 col-lg-9 col-sm-9 col-xs-12">
            <div class="row">
              <div v-if="banners['new_arrival']" class="col-xl-6 col-md-6 col-sm-6 col-xs-6 c_new_arrival_offer_container">
                <div class="c_content">
                    <router-link v-if="banners['new_arrival'].status==1" :to="{ name: 'new_arrival_products',params:{slug:$route.params.slug} }">
                    <img  :src="this.base_url + banners['new_arrival'].banner" />
                    </router-link>
                </div>
                <div class="c_content_footer text-center">
                    <router-link v-if="banners['new_arrival'].status==1" :to="{ name: 'new_arrival_products',params:{slug:$route.params.slug} }">
                    New Arrival
                    <span
                      ><i
                        aria-hidden="true"
                        class="fa fa-lg fa-angle-double-right"
                      ></i></span
                  ></router-link>
                </div>
              </div>
             <div  v-if="banners['offer']" class="col-xl-6 col-md-6 col-sm-6 col-xs-6 c_new_arrival_offer_container">
                <div class="c_content">
                   <router-link v-if="banners['new_arrival'].status==1" :to="{ name: 'offer_products',params:{slug:$route.params.slug} }">
                    <img  :src="this.base_url + banners['offer'].banner" />
                   </router-link>
                </div>
                <div class="c_content_footer text-center">
                   <router-link v-if="banners['new_arrival'].status==1" :to="{ name: 'offer_products',params:{slug:$route.params.slug} }">
                    Offers
                    <span
                      ><i
                        aria-hidden="true"
                        class="fa fa-lg fa-angle-double-right"
                      ></i></span
                  ></router-link>
                </div>
              </div>
            </div>
            <CategoryProducts v-if="products.length > 0" :products="products" />
            <infinite-loading @infinite="categoryWiseProduct">
              <div slot="no-more"></div>
            </infinite-loading>
          </div>
        </div>
        <!-- Breadcrumb End-->
      </div>
      <frontend-footer></frontend-footer>
    </div>
  </div>
</template>
<script>
import CategoryProducts from "../public/partials/CategoryProducts.vue";
import CategorySlider from "../public/partials/CategorySlider.vue";
export default {
  created() {
    window.scrollTo(0, 0);
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
    }, 500);
    this.$store.dispatch("categories");
    this.$store.dispatch("banners");
    this.$store.dispatch("category_sliders", this.$route.params.slug);
  },
  components: {
    CategoryProducts,
    CategorySlider,
  },
  data() {
    return {
      products: [],
      category_name: "",
      page: 1,
      price_page: 1,
      price_filter: {
        min_price: "",
        max_price: "",
      },
      base_url: this.$store.state.image_base_link,
      sort_by_price: "select_by",
      o_modal: false,
    };
  },
  methods: {
    categoryWiseProduct($state) {
      axios
        .get("/_public/category/wise/product/?page=" + this.page, {
          params: {
            slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.data.data.length) {
            this.page += 1;
            this.products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },

    priceFilter($state) {
      this.$Progress.start();
      let max_price = this.price_filter.max_price;
      let min_price = this.price_filter.min_price;
      let products = [];
      this.products.forEach((product) => {
        if (product.price >= min_price && product.price <= max_price) {
          products.push(product);
        }
      });
      if (products.length > 0) {
        this.products = products;
      } else {
        Swal.fire({
          type: "warning",
          text: " ): no produtc found......",
          duration: 3000,
        });
      }
      this.$Progress.finish();
    },
    price_sorting_asec_desc() {
      axios
        .get("/_public/api/sort/product/according/to/asc/desc", {
          params: {
            sort_value: this.sort_by_price,
            slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          this.products = [];
          this.products.push(...resp.data.products);
        });
    },
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    banners() {
      return this.$store.getters.banners;
    },

    category_sliders() {
      return this.$store.getters.category_sliders;
    },
  },
};
</script>

<style >
.search-box {
  margin-top: 20px;
}

.btn_search {
  background: #ff4d03;
  color: #fff;
  border: 1px dashed;
}

.product-card-footer {
  padding: 0px;
}
.btnQuick:hover {
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