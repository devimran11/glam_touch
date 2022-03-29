<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <ul class="breadcrumb">
            <li
              v-for="sub_category in sub_categories"
              v-if="sub_category.slug == $route.params.slug"
            >
              <router-link
                :to="{
                  name: 'PublicSubCategory',
                  params: { slug: sub_category.slug },
                }"
                class="home_icon_desktop"
              >
                Home /
                {{ sub_category.name }}
              </router-link>

              <router-link
                :to="{
                  name: 'PublicSubCategory',
                  params: { slug: sub_category.slug },
                }"
                style="display:none"
                class="home_icon"
              >
                <i class="fa fa-home footer_icon"></i>
                >
                {{ sub_category.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="row">
          <!--Left Part Start -->
          <aside
            style="margin-bottom: 50px;"
            class="col-xl-3 col-md-3 col-sm-3 sub_cat"
          >
            <div class="categories hidden-xs bg-white shadow c-box">
              <h3 class="subtitle">FILTER BY</h3>
              <div class="filter_by_line"></div>
              <div class="box-category">
                <p class="filter-color">COLOR</p>
                <ul id="cat_accordion">
                  <li
                    v-for="sub_category in sub_categories"
                    v-if="sub_category.slug != $route.params.slug"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <router-link
                      :to="{
                        name: 'PublicSubCategory',
                        params: { slug: sub_category.slug },
                      }"
                      >{{ sub_category.name }}</router-link
                    >
                  </li>
                </ul>
                <div class="filter_footer_line"></div>
              </div>

              <div class="box-category">
                <p class="filter-color">CATEGORY</p>
                <ul id="cat_accordion">
                  <li
                    v-for="sub_category in sub_categories"
                    v-if="sub_category.slug != $route.params.slug"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input filter-checkbox"
                      id="exampleCheck1"
                    />
                    <router-link
                      :to="{
                        name: 'PublicSubCategory',
                        params: { slug: sub_category.slug },
                      }"
                      >{{ sub_category.name }}</router-link
                    >
                  </li>
                </ul>
                <div class="filter_footer_line"></div>
              </div>

              <div class="box-category">
                <p class="filter-color">PRICE</p>
                <ul id="cat_accordion">
                  <li
                    v-for="sub_category in sub_categories"
                    v-if="sub_category.slug != $route.params.slug"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input filter-checkbox"
                      id="exampleCheck1"
                    />
                    <router-link
                      :to="{
                        name: 'PublicSubCategory',
                        params: { slug: sub_category.slug },
                      }"
                      >{{ sub_category.name }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div class="col-xl-9 col-lg-9 col-sm-9 col-xs-12">
            <div class="row"></div>
            <CategoryProducts v-if="products.length > 0" :products="products" />
            <infinite-loading @infinite="subCategoryWiseProduct">
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
    this.$store.dispatch("banners");
    this.getSubCatgory();
    this.$store.dispatch("sub_category_sliders", this.$route.params.slug);
  },
  components: {
    CategoryProducts,
    CategorySlider,
  },
  data() {
    return {
      products: [],
      sub_category: "",
      sub_categories: "",
      page: 1,
      price_page: 1,
      price_filter: {
        min_price: "",
        max_price: "",
      },
      base_url: this.$store.state.image_base_link,
      sort_by_price: "select_by",
      quick_v_product_id: "",
      o_modal: false,
    };
  },
  methods: {
    getSubCatgory() {
      axios
        .get("/_public/api/sub-categories/" + this.$route.params.slug)
        .then((resp) => {
          this.sub_category = resp.data.sub_category;
          this.sub_categories = resp.data.sub_categories;
        });
    },

    subCategoryWiseProduct($state) {
      axios
        .get("/_public/sub/category/wise/product/?page=" + this.page, {
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
        .get("/_public/api/sort/product/sub/category/according/to/asc/desc", {
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
    banners() {
      return this.$store.getters.banners;
    },
    sub_category_sliders() {
      return this.$store.getters.sub_category_sliders;
    },
  },
};
</script>

<style>
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
input[type="radio"] {
  width: 16px !important;
  height: 16px !important;
  margin: 4px 8px 0 !important;
}
/* input[id="exampleCheck1"] + label {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #bcbcbc;
  border-radius: 0px;
  cursor: pointer;
} */
/* input[id="exampleCheck1"]:checked + label:after {
  position: relative;
  top: -4px;
  left: 2px;
  content: "\2714";
  font-size: 14px;
}
input[id="exampleCheck1"] {
  display: block;
} */
@media screen and (max-width: 768px) {
  input[type="radio"] {
  width: 16px !important;
  height: 16px !important;
  margin: 4px 0px 0 !important;
}
}
@media screen and (max-width: 450px) {
    
  .sub_cat{
    margin-bottom: 5px !important;
  }
}
</style>
