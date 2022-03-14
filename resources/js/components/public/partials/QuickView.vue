<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <div
      v-if="quick_view_modal"
      style="display:block;"
      class="modal modal_overlay"
    >
      <div class="modal-dialog modal-xl">
        <div class="row">
          
          <div class="col-md-10 col-sm-12">
            <div class="modal-content">
              <div v-if="quick_loading" class="animator  text-center">
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>
              </div>

              <div v-else class="quick_content">
                <div class="modal-header">
                  <h2 class="modal-title">Quick View</h2>
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
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <div class="single_img_view">
                        <div class="zoom_btn">
                          <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                        </div>
                        <div class="quick_preview_img">
                          <img
                            class="quick_view_image"
                            :src="base_url + quick_view_product.thumbnail_img"
                            alt=""
                          />
                          <div class="preview_img_box_container">
                            <div class="__preview_image_box">
                              <!-- <img src="" class="__preview_img" /> -->
                              <img
                                class="img-fluid"
                                src="/storage/images/products/1qhNboF9Lwq4CESKKSsxzULeW4aVWtyMOzFZv94n.jpg"
                                width="100%"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                      <ul class="list-unstyled description">
                        <li>
                          <h3 class="single_p_name">
                            {{ quick_view_product.name }}
                          </h3>
                        </li>

                        <li>
                          <div class="s_price_container_1">
                            <div
                              v-if="quick_view_product.discount"
                              class="s_price_container_2"
                            >
                              <p>&#2547;{{ quick_view_product.sale_price }}</p>
                            </div>
                            <p>&#2547;{{ quick_view_product.price }}</p>
                          </div>
                        </li>
                      </ul>
                      <div id="product">
                        <div
                          class="col-lg-12 col-md-12 col-xs-12"
                          v-if="
                            quick_view_product.product_variant.length > 0 &&
                              quick_view_product.product_attribute
                          "
                        >
                          <div class="ps-product__variations">
                            <div class="pr_switch_wrap">
                              <div class="product-attributes">
                                <hr />
                                <div
                                  v-if="
                                    quick_view_product.product_attribute.attribute.name.toLowerCase() ==
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
                                        index) in quick_view_product.product_variant"
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
                                            <span>{{
                                              variant.variant.name
                                            }}</span>
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <hr />

                                <div
                                  v-if="
                                    quick_view_product.product_attribute.attribute.name.toLowerCase() ==
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
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="qty_container">
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

                              <div class="col-lg-5 col-md-5 col-xs-6">
                                <button
                                  @click.prevent="CartToAdd"
                                  type="button"
                                  class="btn btn-sm btn-block btn_buy_cart"
                                >
                                  <span>ADD TO CART</span>
                                </button>
                              </div>

                              <div class="col-lg-5 col-md-5 col-xs-6">
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
                              <a
                                ><i
                                  class="fa fa-heart fa-2x"
                                  style="color: #CC8E46"
                                ></i
                                ><sup><i class="fa fa-plus fa-sm"></i></sup>
                                <span style="margin-left:10px; color: #C9C9C9"
                                  >ADD TO WISHLIST</span
                                ></a
                              >
                            </div>
                          </div>

                          <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="call-us">
                              <img
                                class="img-fluid"
                                src="/storage/images/call_us/call_us.png"
                                width="100%"
                                height="50px;"
                              />
                            </div>
                          </div>

                          <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="share_to">
                              <h4 style="float: left">Share to:</h4>
                              <div class="share_to_icon">
                                <i
                                  class="fa fa-facebook-square"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  class="fa fa-pinterest-square"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  class="fa fa-whatsapp"
                                  aria-hidden="true"
                                ></i>
                                <i class="fa-facebook-messenger"></i>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12 col-xs-12">
                            <button class="btn btn-warning" type="submit">
                              View Full Product Details >>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import Swal from "sweetalert2";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "quick_view_modal",
  created() {
    this.productQuickView();
  },
  props: ["quick_v_p_id"],

  data() {
    return {
      isLoading: true,
      fullPage: true,
      quick_loading: false,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.thumbnail_img_base_link,
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
      quick_view_product: "",
      quick_view_modal: false,
      recommended_products: "",
      isLoading: true,
      fullPage: true,
    };
  },

  methods: {
    productQuickView() {
      this.$Progress.start();
      axios
        .get(
          "/_public/api/get/single/prodocut/for/quick/view/" + this.quick_v_p_id
        )
        .then((resp) => {
          this.$Progress.finish();
          this.isLoading = false;
          console.log(resp);
          if (resp.data.status == "OK") {
            this.quick_view_product = resp.data.product;
            this.recommended_products = resp.data.recommended_products;
            this.quick_view_modal = true;
            this.quick_loading = false;
          }
        });
    },

    recommended_replace(index) {
      this.$Progress.start();
      this.quick_view_product = this.recommended_products[index];
      console.log(this.recommended_products[index]);
      this.$Progress.finish();
    },

    closeModal() {
      this.quick_view_modal = false;
      this.$emit("clicked");
    },

    CartToAdd() {
      if (this.quick_view_product.product_variant.length > 0) {
        this.cart.attrribute_id = this.quick_view_product.product_attribute.attribute.id;
        if (this.cart.variant_id < 1) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title:
              "please,select product " +
              this.quick_view_product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
      }
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.quick_view_product.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-left",
              type: "success",
              duration: 1000,
            });
            this.$store.dispatch("getCartContent");
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "bottom-center",
              type: "error",
              duration: 1000,
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
      if (this.quick_view_product.product_attribute) {
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
      let variant_id = this.quick_view_product.product_variant[index]
        .variant_id;
      let attribute_id = this.quick_view_product.product_variant[index].variant
        .attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },
  },
  components: {
    Loading,
  },
};
</script>

<style scoped>
.modal_overlay {
  background: #00000073;
}
.quick_view_image {
  width: 300px !important;
  height: 350px !important;
}

.close_sign {
  font-size: 50px !important;
  margin-top: -52px !important;
  color: #45341E !important;
  margin-right: 10px;
}

.animator {
  margin-top: 100px;
  padding: 100px;
}

.animator i {
  font-size: 70px;
}

.modal-body h4 p {
  margin-left: 20px !important;
}

.modal-dialog {
  width: 90% !important;
  position: absolute;
  left: 10%;
  transition: 0.3s;
}

.quick_content {
  background: #fff;
}

.quick_description {
  font-size: 14px;
  height: 250px;
  overflow-y: auto;
}

.r_p_title {
  font-size: 12px;
}

.r_p_image {
  width: 110px;
  height: 100px;
  border-radius: 5px;
}

.r_p_button {
  margin-left: 35px;
  border-radius: 5px;
}

.r_p_button:hover {
  border-radius: 50px;
  background: #db3700;
}
.related_quick_row[data-v-587a0637] {
  margin: 5px;
  max-height: 180px;
  overflow-y: scroll;
}
.r_quick_body {
  padding: 15px 10px;
}

@media screen and (max-width: 350px) {
  .related_quick_row {
    display: none;
  }

  .modal-dialog {
    margin-top: 10px !important;
    width: 400px !important;
    height: 512px;
  }

  .close_sign {
    margin-right: 145px !important;
    font-size: 40px !important;
    margin-top: -19px !important;
    color: red !important;
  }

  .quick_view_image {
    width: 120px !important;
    height: 110px !important;
    margin-bottom: 26px !important;
    margin-left: 50px;
  }

  .title {
    margin: 0px !important;
  }

  .modal-body .form-group {
    margin-bottom: 5px !important;
  }
  .modal-body ul {
    margin-top: -26px;
  }
  .modal-body b {
    font-weight: normal;
  }
  .modal-body .btn-lg {
    width: 35%;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
    margin-left: 56px !important;
    padding: 5px 0px;
    font-size: 14px;
    border-radius: 5px;
  }

  .quick_description {
    font-size: 14px;
    line-height: 15px;
    margin-left: -30px;
  }

  .animator {
    margin-top: 10px;
    padding: 10px;
  }

  .animator i {
    font-size: 20px;
  }

  .modal-body h4 {
    margin-left: 5px !important;
    font-size: 14px !important;
  }

  .modal-body p span {
    margin-left: 5px !important;
    font-size: 10px !important;
    line-height: 10px;
  }

  .modal-body span {
    margin-left: 5px !important;
    font-size: 10px !important;
    margin-top: -10px;
  }

  .modal-body select,
  input {
    width: 130px !important;
    height: 30px !important;
    margin-top: -30px;
    margin-left: 56px;
  }
}
.col-md-2 {
  margin-bottom: 25px;
}
.__preview_image_box{
  margin-left: 103px;

}
</style>
