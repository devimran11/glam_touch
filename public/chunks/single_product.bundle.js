(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_partials_Products_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/partials/Products.vue */ "./resources/js/components/public/partials/Products.vue");
/* harmony import */ var _public_partials_TopSellingProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/partials/TopSellingProducts */ "./resources/js/components/public/partials/TopSellingProducts.vue");
/* harmony import */ var vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-socialmedia-share */ "./node_modules/vue-socialmedia-share/dist/vue-socialmedia-share.common.js");
/* harmony import */ var vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-image-zoomer */ "./node_modules/vue-image-zoomer/dist/vueImageZoom.js");
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_image_zoomer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  beforeCreated: function beforeCreated() {
    var _this = this;

    this.validation();
    window.scrollTo(0, 0);
    setTimeout(function () {
      _this.validation();
    }, 200);
  },
  created: function created() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");
    this.$store.dispatch("general_setting");
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a,
    imageZoom: vue_image_zoomer__WEBPACK_IMPORTED_MODULE_5___default.a,
    Products: _public_partials_Products_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Facebook: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
    Linkedin: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["Linkedin"],
    Pinterest: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["Pinterest"],
    WhatsApp: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["WhatsApp"],
    Email: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["Email"],
    Google: vue_socialmedia_share__WEBPACK_IMPORTED_MODULE_2__["Google"],
    TopSellingProducts: _public_partials_TopSellingProducts__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
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
        quantity: 1
      },
      related_products: [],
      page: 1,
      tab_content: 1,
      quick_v_product_id: "",
      o_modal: false,
      zooming_img: ""
    };
  },
  methods: {
    displayeImageFromBox: function displayeImageFromBox(e) {
      var target_element = e.target;
      var active_images = document.getElementsByClassName("__active_border");

      if (active_images.length > 0) {
        for (var i = 0; i < active_images.length; i++) {
          active_images[i].classList.remove("__active_border");
        }
      }

      target_element.classList.add("__active_border");
      this.zooming_img = target_element.src;
    },
    decrementQty: function decrementQty() {
      if (this.cart.quantity > 1) {
        var qty = this.cart.quantity;
        this.cart.quantity = qty - 1;
      }
    },
    incrementQty: function incrementQty() {
      var qty = this.cart.quantity;
      this.cart.quantity = qty + 1;
    },
    addToWishList: function addToWishList(id) {
      var _this2 = this;

      axios.get("/_public/api/wishlist/store/" + id).then(function (resp) {
        if (resp.data.status == "OK") {
          _this2.$store.dispatch("wishlistContent");

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });
        }
      });
    },
    CartToAdd: function CartToAdd() {
      var _this3 = this;

      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;

        if (this.cart.variant_id < 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: "top-center",
            icon: "error",
            title: "please,select product " + this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500
          });
          return;
        }
      }

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        //  console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this3.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "success",
            duration: 2000
          });

          _this3.$store.dispatch("getCartContent"); // this.$router.push({ name: "checkout" });

        } else if (resp.data.status == "error") {
          _this3.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      });
    },
    buyNow: function buyNow() {
      var _this4 = this;

      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;

        if (this.cart.variant_id < 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: "top-center",
            icon: "error",
            title: "please,select product " + this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500
          });
          return;
        }
      }

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this4.$store.dispatch("getCartContent");

          _this4.$toasted.show(resp.data.message, {
            position: "bottom-left",
            type: "success",
            duration: 2000
          });

          _this4.$router.push({
            name: "checkout"
          });
        } else if (resp.data.status == "error") {
          _this4.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      });
    },
    validation: function validation() {
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
    SelectVaraint: function SelectVaraint() {
      // this.product.product_variant.length=0;
      var index = this.variant_index;
      var variant_id = this.product.product_variant[index].variant_id;
      var attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },
    getRelatedProducts: function getRelatedProducts($state) {
      var _this5 = this;

      axios.get("/_public/related/products/?page=" + this.page, {
        params: {
          product_slug: this.$route.params.slug
        }
      }).then(function (resp) {
        if (resp.data.data.length) {
          var _this5$related_produc;

          _this5.page += 1;

          (_this5$related_produc = _this5.related_products).push.apply(_this5$related_produc, _toConsumableArray(resp.data.data));

          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  },
  computed: {
    product: function product() {
      return this.$store.getters.single_product;
    },
    product_images: function product_images() {
      return this.$store.getters.product_images;
    },
    user: function user() {
      return this.$store.getters.user;
    },
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    }
  },
  watch: {
    product_images: function product_images(value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    },
    product: function product(value) {
      if (value.product_image.length > 0) {
        this.zooming_img = this.base_url + value.product_image[0].product_image;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_horizontal_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-horizontal-list */ "./node_modules/vue-horizontal-list/dist/vue-horizontal-list.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch("best_selling_produtcs");
  },
  computed: {
    best_selling_produtcs: function best_selling_produtcs() {
      return this.$store.getters.best_selling_produtcs;
    }
  },
  data: function data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      base_url_link: this.$store.state.image_base_link,
      best_selling_options: {
        responsive: [{
          end: 576,
          size: 2
        }, {
          start: 576,
          end: 768,
          size: 2
        }, {
          start: 768,
          end: 992,
          size: 4
        }, {
          size: 4
        }],
        list: {
          windowed: 600,
          padding: 24
        },
        position: {
          start: 0
        },
        autoplay: {
          play: false,
          repeat: true,
          speed: 5000
        }
      }
    };
  },
  components: {
    VueHorizontalList: vue_horizontal_list__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ps-product__variations[data-v-6e453e8c] {\r\n  margin-left: 0px;\n}\n.content_card_on_slider[data-v-6e453e8c] {\r\n  margin-bottom: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper-wide" },
    [
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": true,
          "is-full-page": _vm.fullPage
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("frontend-header"),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("div", { attrs: { id: "container" } }, [
            _c(
              "div",
              { staticClass: "container" },
              [
                _c("div", { staticClass: "single-product-box" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-7 col-md-7 col-sm-12 col-xs-12" },
                      [
                        _c("div", { staticClass: "single_img_view" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "quick_preview_img" }, [
                            _c(
                              "div",
                              { staticClass: "single_product_img_container" },
                              [
                                _vm.zooming_img.length
                                  ? _c("image-zoom", {
                                      attrs: {
                                        regular: _vm.zooming_img,
                                        "img-class": "single_product_image"
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "preview_img_box_container" },
                          _vm._l(_vm.product_images, function(image, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass: "__preview_image_box",
                                class: { __active_border: index == 0 }
                              },
                              [
                                _c("img", {
                                  staticClass: "__preview_img",
                                  attrs: {
                                    src: _vm.base_url + image.product_image
                                  },
                                  on: { click: _vm.displayeImageFromBox }
                                })
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-5 col-md-5 col-sm-12 col-xs-12" },
                      [
                        _c("ul", { staticClass: "list-unstyled description" }, [
                          _c("li", [
                            _c("h3", { staticClass: "single_p_name" }, [
                              _vm._v(_vm._s(_vm.product.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("div", { staticClass: "s_price_container_1" }, [
                              _vm.product.discount
                                ? _c(
                                    "div",
                                    { staticClass: "s_price_container_2" },
                                    [
                                      _c("p", [
                                        _vm._v(
                                          "৳" + _vm._s(_vm.product.sale_price)
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("p", [_vm._v("৳" + _vm._s(_vm.product.price))])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { attrs: { id: "product" } }, [
                          _c("div", { staticClass: "row" }, [
                            _vm.product.product_variant.length > 0 &&
                            _vm.product.product_attribute
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "col-lg-12 col-md-12 col-xs-12"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "ps-product__variations" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "pr_switch_wrap" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-attributes"
                                              },
                                              [
                                                _c("hr"),
                                                _vm._v(" "),
                                                _vm.product.product_attribute.attribute.name.toLowerCase() ==
                                                "size"
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color",
                                                        attrs: {
                                                          "data-type": "text"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            staticClass:
                                                              "attribute-name"
                                                          },
                                                          [_vm._v("Size:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "attribute-values"
                                                          },
                                                          [
                                                            _c(
                                                              "ul",
                                                              {
                                                                staticClass:
                                                                  "text-swatch attribute-swatch color-swatch"
                                                              },
                                                              _vm._l(
                                                                _vm.product
                                                                  .product_variant,
                                                                function(
                                                                  variant,
                                                                  index
                                                                ) {
                                                                  return _c(
                                                                    "li",
                                                                    {
                                                                      key: index,
                                                                      staticClass:
                                                                        "attribute-swatch-item pe-none"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        [
                                                                          _c(
                                                                            "label",
                                                                            [
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives: [
                                                                                    {
                                                                                      name:
                                                                                        "model",
                                                                                      rawName:
                                                                                        "v-model",
                                                                                      value:
                                                                                        _vm
                                                                                          .cart
                                                                                          .variant_id,
                                                                                      expression:
                                                                                        "cart.variant_id"
                                                                                    }
                                                                                  ],
                                                                                  staticClass:
                                                                                    "product-filter-item variant_size",
                                                                                  attrs: {
                                                                                    type:
                                                                                      "radio",
                                                                                    name:
                                                                                      "size"
                                                                                  },
                                                                                  domProps: {
                                                                                    value:
                                                                                      variant
                                                                                        .variant
                                                                                        .id,
                                                                                    checked: _vm._q(
                                                                                      _vm
                                                                                        .cart
                                                                                        .variant_id,
                                                                                      variant
                                                                                        .variant
                                                                                        .id
                                                                                    )
                                                                                  },
                                                                                  on: {
                                                                                    change: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.$set(
                                                                                        _vm.cart,
                                                                                        "variant_id",
                                                                                        variant
                                                                                          .variant
                                                                                          .id
                                                                                      )
                                                                                    }
                                                                                  }
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "span",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      variant
                                                                                        .variant
                                                                                        .name
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                }
                                                              ),
                                                              0
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("hr"),
                                                _vm._v(" "),
                                                _vm.product.product_attribute.attribute.name.toLowerCase() ==
                                                "size"
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color",
                                                        attrs: {
                                                          "data-type": "text"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            staticClass:
                                                              "attribute-name"
                                                          },
                                                          [_vm._v("Color:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._m(1)
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("hr")
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-12 col-md-12 col-sm-7 col-xs-12"
                              },
                              [
                                _c("div", { staticClass: "qty_container" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "__minus",
                                      on: { click: _vm.decrementQty }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-minus __minus_icon"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.cart.quantity,
                                        expression: "cart.quantity"
                                      }
                                    ],
                                    staticClass: "form-control input_qty",
                                    attrs: {
                                      type: "text",
                                      name: "quantity",
                                      value: "1"
                                    },
                                    domProps: { value: _vm.cart.quantity },
                                    on: {
                                      change: _vm.validation,
                                      keyup: _vm.validation,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.cart,
                                          "quantity",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "__plus",
                                      on: { click: _vm.incrementQty }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-plus __plush_icon"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-lg-5 col-md-5 col-sm-5"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-block btn_buy_cart",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.CartToAdd($event)
                                            }
                                          }
                                        },
                                        [_c("span", [_vm._v("ADD TO CART")])]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-lg-5 col-md-5 col-sm-5"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn  btn-sm btn_buy_cart",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.buyNow($event)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                        BUY NOW\n                      "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "col-lg-5 col-md-5"
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-xs-12" },
                              [
                                _c("div", { staticClass: "add_wishlist" }, [
                                  _c("a", [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.base_url +
                                          "images/icons/Quick_Heart.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "margin-left": "10px",
                                          color: "#C9C9C9"
                                        }
                                      },
                                      [_vm._v("ADD TO WISHLIST")]
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-xs-12" },
                              [
                                _c("div", { staticClass: "call" }, [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.base_url +
                                        "images/icons/call_now.png"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-xs-12" },
                              [
                                _c("div", { staticClass: "share_to" }, [
                                  _c("h4", [_vm._v("Share to:")]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "share_to_icon" }, [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.base_url + "images/icons/fb.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.base_url +
                                          "images/icons/insta.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.base_url +
                                          "images/icons/whatsApp.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.base_url +
                                          "images/icons/messanger.png"
                                      }
                                    })
                                  ])
                                ])
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-details-tabe" }, [
                  _c("ul", { staticClass: "details-tab-menu-list" }, [
                    _c(
                      "li",
                      {
                        staticClass: "details-tab-menu-item",
                        class: { "tab-menu-item-active": _vm.tab_content == 1 },
                        on: {
                          click: function($event) {
                            _vm.tab_content = 1
                          }
                        }
                      },
                      [_vm._v("\n            Description\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "details-tab-menu-item",
                        class: { "tab-menu-item-active": _vm.tab_content == 2 },
                        on: {
                          click: function($event) {
                            _vm.tab_content = 2
                          }
                        }
                      },
                      [_vm._v("\n            DELIVERY OPTIONS\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "details-tab-menu-item",
                        class: { "tab-menu-item-active": _vm.tab_content == 3 },
                        on: {
                          click: function($event) {
                            _vm.tab_content = 3
                          }
                        }
                      },
                      [_vm._v("\n            REVIEWS (0)\n          ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product-tab-content" }, [
                    _c("div", {
                      staticClass: "product-details",
                      class: { block: _vm.tab_content == 1 },
                      domProps: { innerHTML: _vm._s(_vm.product.details) }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "how-to-buy",
                        class: { block: _vm.tab_content == 2 }
                      },
                      [_vm._m(2)]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "how-to-buy",
                        class: { block: _vm.tab_content == 3 }
                      },
                      [_vm._m(3)]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("TopSellingProducts"),
                _vm._v(" "),
                _c(
                  "infinite-loading",
                  { on: { infinite: _vm.getRelatedProducts } },
                  [_c("div", { attrs: { slot: "no-more" }, slot: "no-more" })]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("frontend-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "zoom_btn" }, [
      _c("i", {
        staticClass: "fa fa-search-plus fa-2x",
        attrs: { "aria-hidden": "true" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "attribute-values" }, [
      _c("input", {
        staticClass: "color_att",
        attrs: { type: "radio", name: "gender", value: "male" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                Select number of product you want to buy.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("\n                Click "),
        _c("strong", [_vm._v("Add To Cart")]),
        _vm._v(" Button\n              ")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [_vm._v("Then go to checkout page")]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                If you are a new user, please click on Sign Up.provide us uour\n                valid inormation information.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                Complete your checkout, we received your order, and for order\n                confirmation or customer service contact with you\n              "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                If your product is damaged, defective, incorrect or incomplete\n                at the time of delivery, please file a return request on call\n                to customer care support number within 3 days of the delivery\n                date\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                Change of mind is not applicable as a Return Reason for this\n                product\n              "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("h3", { staticClass: "related_p_heading" }, [
        _vm._v("Related Products")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("vue-horizontal-list", {
        attrs: {
          items: _vm.best_selling_produtcs,
          options: _vm.best_selling_options
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "div",
                  { staticClass: "col-lg-3 col-md-3 col-sm-3 col-xs-6 item" },
                  [
                    _c(
                      "div",
                      { staticClass: "content_card content_card_on_slider" },
                      [
                        _c(
                          "div",
                          { staticClass: "content_card_body" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "single",
                                    params: { slug: item.slug }
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "thumbnail_img",
                                  attrs: {
                                    src: _vm.base_url + item.thumbnail_img
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "content_link" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "single",
                                        params: { slug: item.slug }
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.name.substring(0, 10) + "..")
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "price" }, [
                              item.discount
                                ? _c("span", { staticClass: "price-old" }, [
                                    _vm._v(
                                      "\n                ৳ " +
                                        _vm._s(item.sale_price)
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "price-new" }, [
                                _vm._v(" ৳ " + _vm._s(item.price))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "add-to-cart d-flex justify-content-center"
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning btn-sm carts"
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "cart_bag",
                                      attrs: {
                                        src:
                                          _vm.base_url_link +
                                          "images/icons/cart.png",
                                        alt: ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("ADD TO CART")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "cart_love",
                                  attrs: {
                                    src:
                                      _vm.base_url_link +
                                      "images/icons/heart.png",
                                    alt: ""
                                  }
                                })
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e453e8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true& */ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true&");
/* harmony import */ var _TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad969a3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/partials/TopSellingProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);