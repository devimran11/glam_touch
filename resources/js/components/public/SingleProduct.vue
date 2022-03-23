<template>
  <div class="wrapper-wide">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>
    <frontend-header></frontend-header>
    <div id="container" v-if="!isLoading">
      <div class="container">
        <div class="single-product-box">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12">
              <div class="single_img_view">
                <div class="zoom_btn">
                  <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                </div>
                <div class="quick_preview_img">
                  <div class="single_product_img_container">
                    <image-zoom
                      v-if="zooming_img.length"
                      :regular="zooming_img"
                      img-class="single_product_image"
                    >
                    </image-zoom>
                  </div>
                </div>
              </div>
              <div class="preview_img_box_container">
                <div
                  v-for="(image, index) in product_images"
                  :key="index"
                  :class="{ __active_border: index == 0 }"
                  class="__preview_image_box"
                >
                  <img
                    @click="displayeImageFromBox"
                    class="__preview_img"
                    :src="base_url + image.product_image"
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-xs-12">
              <ul class="list-unstyled description">
                <li>
                  <h3 class="single_p_name">{{ product.name }}</h3>
                </li>

                <li>
                  <div class="s_price_container_1">
                    <div v-if="product.discount" class="s_price_container_2">
                      <p>&#2547;{{ product.sale_price }}</p>
                    </div>
                    <p>&#2547;{{ product.price }}</p>
                  </div>

                  <!-- <div v-if="product.discount" class="s_price_container_3">
                           <h4> You Save : </h4>
                              <p>
                                {{ ((product.discount/product.sale_price)*100).toFixed(0) }}% <span>off</span>
                              </p>
                        </div> -->
                </li>

                <!-- <li>
                      <h4 class="single_p_code">
                         Code: <span class="p_code"> {{ product.product_code }} </span>
                      </h4>
                    </li> -->
              </ul>

              <div id="product">
                <div class="row">
                  <div
                    class="col-lg-12 col-md-12 col-xs-12"
                    v-if="
                      product.product_variant.length > 0 &&
                        product.product_attribute
                    "
                  >
                    <div class="ps-product__variations">
                      <div class="pr_switch_wrap">
                        <div class="product-attributes">
                          <hr />
                          <div
                            v-if="
                              product.product_attribute.attribute.name.toLowerCase() ==
                                'size'
                            "
                            class="text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color"
                            data-type="text"
                          >
                            <label class="attribute-name">Size:</label>
                            <div class="attribute-values">
                              <ul
                                class="text-swatch attribute-swatch color-swatch"
                              >
                                <li
                                  v-for="(variant,
                                  index) in product.product_variant"
                                  :key="index"
                                  class="attribute-swatch-item pe-none"
                                >
                                  <div>
                                    <label>
                                      <input
                                        class="product-filter-item variant_size"
                                        type="radio"
                                        v-model="cart.variant_id"
                                        name="size"
                                        :value="variant.variant.id"
                                      />
                                      <span>{{ variant.variant.name }}</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr />

                          <div
                            v-if="
                              product.product_attribute.attribute.name.toLowerCase() ==
                                'size'
                            "
                            class="text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color"
                            data-type="text"
                          >
                            <label class="attribute-name">Color:</label>
                            <div class="attribute-values">
                              <input
                                type="radio"
                                name="gender"
                                class="color_att"
                                value="male"
                              />
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-xs-12">
                    <div class="qty_container">
                      <!-- <h4 >
                            Quantity:
                          </h4> -->
                      <div @click="decrementQty" class="">
                        <i class="fa fa-minus"></i>
                      </div>

                      <input
                        type="text"
                        name="quantity"
                        v-model="cart.quantity"
                        value="1"
                        class="form-control input_qty"
                        @change="validation"
                        @keyup="validation"
                      />
                      <div @click="incrementQty" class="">
                        <i class="fa fa-plus"></i>
                      </div>

                      <div class="col-lg-5 col-md-5 col-sm-5">
                        <button
                          @click.prevent="CartToAdd"
                          type="button"
                          class="btn btn-sm btn-block btn_buy_cart"
                        >
                          <span>ADD TO CART</span>
                        </button>
                      </div>

                      <div class="col-lg-5 col-md-5 col-sm-5">
                        <button
                          @click.prevent="buyNow"
                          type="button"
                          class="btn  btn-sm btn_buy_cart"
                        >
                          BUY NOW
                        </button>
                      </div>
                      <div class="col-lg-5 col-md-5"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-xs-12">
                    <div class="add_wishlist">
                      <a>
                        <img :src="base_url + 'images/icons/Quick_Heart.png'" />
                        <span style="margin-left:10px; color: #C9C9C9"
                          >ADD TO WISHLIST</span
                        ></a
                      >
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-xs-12">
                    <div class="call">
                      <img :src="base_url + 'images/icons/call_now.png'" />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-xs-12">
                    <div class="share_to">
                      <h4 style="float: left">Share to:</h4>
                      <div class="share_to_icon">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i
                          class="fa fa-pinterest-square"
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        <i class="fa-facebook-messenger"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div v-if="product.stock > 0" class="row">

                      <div class="col-lg-5 col-md-5 col-xs-6">
                        <button
                          @click.prevent="buyNow"
                          type="button"
                          style="background: rgb(73 26 78); color: #fff;"
                          class="btn  btn-sm btn-block btn_buy_cart"
                          >Buy Now</button>
                      </div>

                       <div class="col-lg-5 col-md-5 col-xs-6">

                         <button
                          @click.prevent="CartToAdd"
                          type="button"
                          class="btn btn-primary btn-sm btn-block btn_buy_cart"
                          >
                         <span>Add To Cart</span>
                        </button>

                      </div>
                     <div class="col-lg-10 col-md-10 col-xs-12">
                       <a @click="addToWishList(product.id)" class="btn single_p_wishlist_btn"><i class="fa fa-heart wishlist_icon"></i> Add To Wishlist</a>
                    </div>
                    </div> -->

                <!-- <div  class="row">

                      <div class="col-lg-5 col-md-5">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm btn-block btn_buy_cart"
                          >
                         <span>Stock Unavailable</span>
                        </button>
                      </div>

                       <div class="col-lg-5 col-md-5">

                        <a @click="addToWishList(product.id)" class="btn single_p_wishlist_btn"><i class="fa fa-heart wishlist_icon"></i> Wishlist</a>

                      </div>
                    </div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="product-details-tabe">
          <ul class="details-tab-menu-list">
            <li
              class="details-tab-menu-item"
              @click="tab_content = 1"
              :class="{ 'tab-menu-item-active': tab_content == 1 }"
            >
              Description
            </li>
            <li
              class="details-tab-menu-item"
              @click="tab_content = 2"
              :class="{ 'tab-menu-item-active': tab_content == 2 }"
            >
              DELIVERY OPTIONS
            </li>
            <li
              class="details-tab-menu-item"
              @click="tab_content = 3"
              :class="{ 'tab-menu-item-active': tab_content == 3 }"
            >
              REVIEWS (0)
            </li>
          </ul>
          <div class="product-tab-content">
            <div
              v-html="product.details"
              class="product-details"
              :class="{ block: tab_content == 1 }"
            ></div>
            <div class="how-to-buy" :class="{ block: tab_content == 2 }">
              <ul>
                <li class="h-b-li">
                  Select number of product you want to buy.
                </li>
                <li class="h-b-li">
                  Click <strong>Add To Cart</strong> Button
                </li>
                <li class="h-b-li">Then go to checkout page</li>
                <li class="h-b-li">
                  If you are a new user, please click on Sign Up.provide us uour
                  valid inormation information.
                </li>
                <li class="h-b-li">
                  Complete your checkout, we received your order, and for order
                  confirmation or customer service contact with you
                </li>
              </ul>
            </div>
            <div class="how-to-buy" :class="{ block: tab_content == 3 }">
              <ul>
                <li class="h-b-li">
                  If your product is damaged, defective, incorrect or incomplete
                  at the time of delivery, please file a return request on call
                  to customer care support number within 3 days of the delivery
                  date
                </li>
                <li class="h-b-li">
                  Change of mind is not applicable as a Return Reason for this
                  product
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <h3 class="related_p_heading">Related Products</h3>
          <br />
          <hr />
          <div class="line"></div>
        </div>
        <!-- <Products :products="related_products" /> -->

        <TopSellingProducts />

        <infinite-loading @infinite="getRelatedProducts">
          <div slot="no-more"></div>
        </infinite-loading>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>

<script>
import Products from "../public/partials/Products.vue";
import TopSellingProducts from "../public/partials/TopSellingProducts";
import {
  Facebook,
  Linkedin,
  Pinterest,
  WhatsApp,
  Email,
  Google,
} from "vue-socialmedia-share";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import imageZoom from "vue-image-zoomer";
import "lazysizes";
import Swal from "sweetalert2";

export default {
  beforeCreated() {
    this.validation();
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.validation();
    }, 200);
  },
  created() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");
    this.$store.dispatch("general_setting");
  },
  components: {
    Loading,
    imageZoom,
    Products,
    Facebook,
    Linkedin,
    Pinterest,
    WhatsApp,
    Email,
    Google,
    TopSellingProducts,
  },

  data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.image_base_link,
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
      related_products: [],
      page: 1,
      tab_content: 1,
      quick_v_product_id: "",
      o_modal: false,
      zooming_img: "",
    };
  },
  methods: {
    displayeImageFromBox(e) {
      let target_element = e.target;
      let active_images = document.getElementsByClassName("__active_border");

      if (active_images.length > 0) {
        for (let i = 0; i < active_images.length; i++) {
          active_images[i].classList.remove("__active_border");
        }
      }
      target_element.classList.add("__active_border");
      this.zooming_img = target_element.src;
    },

    decrementQty() {
      if (this.cart.quantity > 1) {
        let qty = this.cart.quantity;
        this.cart.quantity = qty - 1;
      }
    },
    incrementQty() {
      let qty = this.cart.quantity;
      this.cart.quantity = qty + 1;
    },

    addToWishList(id) {
      axios.get("/_public/api/wishlist/store/" + id).then((resp) => {
        if (resp.data.status == "OK") {
          this.$store.dispatch("wishlistContent");
          this.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000,
          });
        }
      });
    },

    CartToAdd() {
      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;
        if (this.cart.variant_id < 1) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title:
              "please,select product " +
              this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
      }
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          //  console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("getCartContent");
            // this.$router.push({ name: "checkout" });
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        });
    },
    buyNow() {
      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;
        if (this.cart.variant_id < 1) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title:
              "please,select product " +
              this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
      }
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
            this.$toasted.show(resp.data.message, {
              position: "bottom-left",
              type: "success",
              duration: 2000,
            });
            this.$router.push({ name: "checkout" });
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        });
    },
    validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }
      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint() {
      // this.product.product_variant.length=0;
      let index = this.variant_index;
      let variant_id = this.product.product_variant[index].variant_id;
      let attribute_id = this.product.product_variant[index].variant
        .attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },

    getRelatedProducts($state) {
      axios
        .get("/_public/related/products/?page=" + this.page, {
          params: {
            product_slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.related_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },

  computed: {
    product() {
      return this.$store.getters.single_product;
    },
    product_images() {
      return this.$store.getters.product_images;
    },
    user() {
      return this.$store.getters.user;
    },
    general_setting() {
      return this.$store.getters.general_setting;
    },
  },

  watch: {
    product_images: function(value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    },
    product: function(value) {
      if (value.product_image.length > 0) {
        this.zooming_img = this.base_url + value.product_image[0].product_image;
      }
    },
  },
};
</script>
