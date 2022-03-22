(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_partials_TopSellingProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/partials/TopSellingProducts */ "./resources/js/components/public/partials/TopSellingProducts.vue");
/* harmony import */ var _public_partials_SuggestedProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/partials/SuggestedProducts */ "./resources/js/components/public/partials/SuggestedProducts.vue");
/* harmony import */ var _public_partials_ParallaxBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/partials/ParallaxBanner */ "./resources/js/components/public/partials/ParallaxBanner.vue");
/* harmony import */ var _public_partials_NewProductsHorizontalSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/partials/NewProductsHorizontalSlide */ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue");
/* harmony import */ var _public_partials_SessionalAndOccationalCampaign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/partials/SessionalAndOccationalCampaign */ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    window.scrollTo(0, 0);
  },
  created: function created() {
    this.$store.dispatch("categories");
    this.$store.dispatch("sliders");
    this.$store.dispatch("banners");
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default.a,
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default.a,
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_1___default.a,
    TopSellingProducts: _public_partials_TopSellingProducts__WEBPACK_IMPORTED_MODULE_3__["default"],
    SuggestProducts: _public_partials_SuggestedProducts__WEBPACK_IMPORTED_MODULE_4__["default"],
    SessionalAndOccationalCampaign: _public_partials_SessionalAndOccationalCampaign__WEBPACK_IMPORTED_MODULE_7__["default"],
    ParallaxBanner: _public_partials_ParallaxBanner__WEBPACK_IMPORTED_MODULE_5__["default"],
    NewProductsHorizontalSlide: _public_partials_NewProductsHorizontalSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      loading: true,
      page: 1,
      product_id: null,
      base_url: this.$store.state.image_base_link,
      isScroll: 0,
      quick_v_product_id: "",
      o_modal: false,
      suggested_products: ""
    };
  },
  methods: {
    productDetals: function productDetals(product_id) {
      this.prdoct_modal = true;
      this.product_id = product_id;
    },
    closedModal: function closedModal(close) {
      this.quick_v_product_id = "";
    },
    showCategoryName: function showCategoryName(id) {
      var x = document.getElementById("subCategoryNameView" + id);
      x.classList.toggle("displayeBlok");
    }
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    },
    banners: function banners() {
      return this.$store.getters.banners;
    },
    sliders: function sliders() {
      return this.$store.getters.sliders;
    },
    shop_with_categories: function shop_with_categories() {
      return this.$store.getters.shop_with_categories;
    }
  }
}); //show sub  menu in mobile menu

document.addEventListener("DOMContentLoaded", function () {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(function () {
    //find the click element
    var sub_menu = document.getElementsByClassName("show-sub");

    var _loop = function _loop(i) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        var show_sub_menu = sub_menu[i].parentElement.querySelector(".left-sub-menu"); //set active class

        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    };

    for (var i = 0; i < sub_menu.length; i++) {
      _loop(i);
    }
  }, 2000);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch("new_products");
  },
  components: {
    VueHorizontalList: vue_horizontal_list__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link,
      content_options: {
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
          padding: 10
        },
        position: {
          start: 2
        },
        autoplay: {
          play: true,
          repeat: true,
          speed: 4000
        }
      }
    };
  },
  computed: {
    new_products: function new_products() {
      return this.$store.getters.new_products;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
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
    this.getBuyGetCampaign();
  },
  comments: {},
  data: function data() {
    return {
      banner: "",
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    getBuyGetCampaign: function getBuyGetCampaign() {
      var _this = this;

      axios.get("/_public/api/publish/buy/one/get/one/campaign").then(function (resp) {
        _this.banner = resp.data.banner;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getOccatoinCampaign();
    this.getSeasionCampaign();
  },
  data: function data() {
    return {
      base_url: this.$store.state.image_base_link,
      thumbnail_base_url: this.$store.state.thumbnail_img_base_link,
      occasion_campaign: "",
      occasion_p_top: "",
      occasion_p_bottom: "",
      seasion_campaign: "",
      seasion_p_top: "",
      seasion_p_bottom: ""
    };
  },
  methods: {
    getOccatoinCampaign: function getOccatoinCampaign() {
      var _this = this;

      axios.get("/_public/api/publish/occasional/campaign").then(function (resp) {
        _this.occasion_campaign = resp.data.occasion;
        _this.occasion_p_top = resp.data.occasion_p_top;
        _this.occasion_p_bottom = resp.data.occasion_p_bottom;
      });
    },
    getSeasionCampaign: function getSeasionCampaign() {
      var _this2 = this;

      axios.get("/_public/api/publish/seasional/campaign").then(function (resp) {
        _this2.seasion_campaign = resp.data.seasion;
        _this2.seasion_p_top = resp.data.seasion_p_top;
        _this2.seasion_p_bottom = resp.data.seasion_p_bottom;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.$store.dispatch("suggest_products");
  },
  data: function data() {
    return {
      base_url: this.$store.state.thumbnail_img_base_link
    };
  },
  computed: {
    suggest_products: function suggest_products() {
      return this.$store.getters.suggest_products;
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
//
//
//
//
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
          play: true,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/Index.vue?vue&type=template&id=51680757&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/Index.vue?vue&type=template&id=51680757& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("frontend-header"),
      _vm._v(" "),
      _c("div", { staticClass: "row slider_row" }, [
        _c(
          "div",
          { staticClass: "slider_container" },
          [
            _vm.sliders
              ? _c(
                  "carousel",
                  {
                    attrs: {
                      items: 1,
                      nav: false,
                      autoplay: true,
                      autoplayTimeout: 4000
                    }
                  },
                  _vm._l(_vm.sliders, function(slider) {
                    return _c(
                      "a",
                      { key: slider.id, attrs: { href: slider.url } },
                      [
                        _c("img", {
                          staticClass: "landing_slider_img",
                          attrs: { src: _vm.base_url + slider.image }
                        })
                      ]
                    )
                  }),
                  0
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "loved_categories_carousel",
              staticStyle: { display: "none" }
            },
            [_c("TopSellingProducts")],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "new_arrival_section" }, [
          _c(
            "div",
            { staticClass: "row new_product_row" },
            [_vm._m(3), _vm._v(" "), _c("TopSellingProducts")],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", [_c("SessionalAndOccationalCampaign")], 1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row suggetion_product_row" },
          [_vm._m(4), _vm._v(" "), _c("TopSellingProducts")],
          1
        ),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "new_arrival_section" },
          [_vm._m(6), _vm._v(" "), _c("TopSellingProducts")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "new_arrival_section" },
          [_vm._m(7), _vm._v(" "), _c("TopSellingProducts")],
          1
        ),
        _vm._v(" "),
        _vm._m(8)
      ]),
      _vm._v(" "),
      _c("frontend-footer"),
      _vm._v(" "),
      _vm.quick_v_product_id
        ? _c("quick-view", {
            attrs: { quick_v_p_id: _vm.quick_v_product_id },
            on: {
              clicked: function($event) {
                return _vm.closedModal($event)
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row policy_section" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-6" }, [
          _c("div", { staticClass: "policy" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: "/storage/images/policy/first_shipping.png",
                width: "100%"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-6" }, [
          _c("div", { staticClass: "policy" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: "/storage/images/policy/Easy-return.png",
                width: "100%"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-6" }, [
          _c("div", { staticClass: "policy" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: "/storage/images/policy/online_support.png",
                width: "100%"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-6" }, [
          _c("div", { staticClass: "policy" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: "/storage/images/policy/new_design.png",
                width: "100%"
              }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-12 col-md-12 col-sm-12 col-xs-12 margin_container text-center"
      },
      [
        _c("h4", { staticClass: "section_title" }, [
          _vm._v("DON'T MISS OUR MOST LOVED CATEGORIES")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "line" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
      [
        _c("div", { staticClass: "col-md-3 loved-category" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              src: "/storage/images/don't_miss/best-sealing-1.png",
              alt: "",
              height: "434px",
              width: "100%"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-9 loved-category" }, [
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4 col-sm-6 col-xs-6 loved-category" },
            [
              _c("div", { staticClass: "miss-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/don't_miss/Gown-and-kurtis.png",
                    alt: "",
                    width: "100%"
                  }
                })
              ])
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-12 col-md-12 col-xs-12 best_product text-center" },
      [
        _c("h4", { staticClass: "section_title" }, [
          _vm._v("BEST SELLING PRODUCTS")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "line" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-12 col-md-12 col-xs-12 text-center " },
      [
        _c("h4", { staticClass: "section_title" }, [
          _vm._v("NEW ARRIVAL PRODUCTS")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "line" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row suggetion_product_row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-lg-12 col-md-12 col-sm-12 col-xs-12 margin_container text-center"
        },
        [
          _c("h4", { staticClass: "section_title" }, [_vm._v("COUPON")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "line" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12 coupon_top" }, [
            _c("div", { staticClass: "col-md-3 col-sm-3 col-xs-3" }, [
              _c("div", { staticClass: "cupon" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/cupon/cupon-1.png",
                    width: "100%"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 col-sm-3 col-xs-3" }, [
              _c("div", { staticClass: "cupon" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/cupon/cupon-2.png",
                    width: "100%"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 col-sm-3 col-xs-3" }, [
              _c("div", { staticClass: "cupon" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/cupon/cupon-3.png",
                    width: "100%"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 col-sm-3 col-xs-3" }, [
              _c("div", { staticClass: "cupon" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "/storage/images/cupon/cupon-4.png",
                    width: "100%"
                  }
                })
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row gown_kurtis" }, [
      _c("div", { staticClass: "col-lg-12 col-md-12 col-xs-12" }, [
        _c("h4", { staticClass: "section_title_left" }, [
          _vm._v("GOWN & KURTIS")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "line-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row gown_kurtis" }, [
      _c("div", { staticClass: "col-lg-12 col-md-12 col-xs-12" }, [
        _c("h4", { staticClass: "section_title_left" }, [
          _vm._v("MODEST FASHION")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "line-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row service_row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("img", {
          attrs: {
            src: "storage/images/footer/why-us.png",
            width: "100%",
            alt: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-xl-12 col-lg-12 col-xs-12 col-md-12 col-sm-12" },
      [
        _c("vue-horizontal-list", {
          attrs: { items: _vm.new_products, options: _vm.content_options },
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
                            { staticClass: "content_card_body text-center" },
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
                                    [_vm._v(_vm._s(item.name))]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "price" }, [
                                item.discount
                                  ? _c("span", { staticClass: "price-old" }, [
                                      _vm._v(
                                        "\n                  ৳ " +
                                          _vm._s(item.sale_price)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("span", { staticClass: "price-new" }, [
                                  _vm._v(" ৳ " + _vm._s(item.price))
                                ]),
                                _vm._v(" "),
                                item.discount > 0
                                  ? _c("span", { staticClass: "discount" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "star-icon",
                                          staticStyle: {
                                            "margin-top": "-7px",
                                            "margin-bottom": "-32px"
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-star",
                                            attrs: { "aria-hidden": "true" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "margin-left": "-3px"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-star",
                                                attrs: { "aria-hidden": "true" }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "discount-item",
                                          staticStyle: { "margin-top": "6px" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                (
                                                  (item.discount /
                                                    item.sale_price) *
                                                  100
                                                ).toFixed(0)
                                              ) +
                                              "%\n                    "
                                          ),
                                          _c("span", { staticClass: "d_off" }, [
                                            _vm._v("off")
                                          ])
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm.banner.status == 1
    ? _c("div", { staticClass: "row" }, [
        _c("a", { attrs: { href: _vm.banner.url } }, [
          _c("div", {
            staticClass: "parallax_background text-center",
            style: {
              backgroundImage: "url(" + (_vm.base_url + _vm.banner.banner) + ")"
            }
          })
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9& ***!
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
  return _vm.occasion_campaign.status == "1" &&
    _vm.seasion_campaign.status == "1"
    ? _c("div", { staticClass: "row offer_collection" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-6 col-sm-12 col-md-6 collection_left",
            style: {
              backgroundImage:
                "url(" +
                (_vm.base_url + _vm.occasion_campaign.background_image) +
                ")"
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c(
                  "div",
                  { staticClass: "container_offer_header text-center" },
                  [
                    _c("p", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.occasion_campaign.quote.substring(0, 20)) +
                          "\n            "
                      ),
                      _vm.occasion_campaign.quote.length > 20
                        ? _c("span", [_vm._v("...")])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.occasion_campaign.heading.substring(0, 20)
                          ) +
                          "\n            "
                      ),
                      _vm.occasion_campaign.heading.length > 20
                        ? _c("span", [_vm._v("...")])
                        : _vm._e()
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.occasion_p_top
                ? _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                    _c("div", { staticClass: "collection_content" }, [
                      _vm.occasion_p_top.thumbnail_img
                        ? _c("img", {
                            attrs: {
                              src:
                                _vm.thumbnail_base_url +
                                _vm.occasion_p_top.thumbnail_img
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "collect_sub_data text-center" },
                        [
                          _c("p", { staticClass: "p1" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.occasion_p_top.name.substring(0, 20)
                                ) +
                                "\n              "
                            ),
                            _vm.occasion_p_top.name.length > 20
                              ? _c("span", [_vm._v("...")])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "p2" }, [
                            _vm._v("BDT " + _vm._s(_vm.occasion_p_top.price))
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn_more",
                              attrs: {
                                to: {
                                  name: "single",
                                  params: { slug: _vm.occasion_p_top.slug }
                                }
                              }
                            },
                            [
                              _vm._v("\n              More\n              "),
                              _c("i", {
                                staticClass:
                                  "fa fa-xs fa-arrow-right arrow_right_icon"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "collection_content" }, [
                      _vm.occasion_p_bottom.thumbnail_img
                        ? _c("img", {
                            attrs: {
                              src:
                                _vm.thumbnail_base_url +
                                _vm.occasion_p_bottom.thumbnail_img
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "collect_sub_data text-center" },
                        [
                          _c("p", { staticClass: "p1" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.occasion_p_bottom.name.substring(0, 20)
                                ) +
                                "\n              "
                            ),
                            _vm.occasion_p_bottom.name.length > 20
                              ? _c("span", [_vm._v("...")])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "p2" }, [
                            _vm._v("BDT " + _vm._s(_vm.occasion_p_bottom.price))
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn_more",
                              attrs: {
                                to: {
                                  name: "single",
                                  params: { slug: _vm.occasion_p_bottom.slug }
                                }
                              }
                            },
                            [
                              _vm._v("\n              More\n              "),
                              _c("i", {
                                staticClass:
                                  "fa fa-xs fa-arrow-right arrow_right_icon"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e()
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-lg-6 col-sm-12 col-md-6 collection_right",
            style: {
              backgroundImage:
                "url(" +
                (_vm.base_url + _vm.seasion_campaign.background_image) +
                ")"
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 col-sm-12 col-xs-12" }, [
                _c(
                  "div",
                  { staticClass: "container_offer_header text-center" },
                  [
                    _c("p", [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.seasion_campaign.quote.substring(0, 20)) +
                          "\n            "
                      ),
                      _vm.seasion_campaign.quote.length > 20
                        ? _c("span", [_vm._v("...")])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("h4", [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.seasion_campaign.heading.substring(0, 20)
                          ) +
                          "\n            "
                      ),
                      _vm.seasion_campaign.heading.length > 20
                        ? _c("span", [_vm._v("...")])
                        : _vm._e()
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 col-xs-12 col-sm-12" }, [
                _vm.seasion_p_top
                  ? _c("div", { staticClass: "collection_content" }, [
                      _vm.seasion_p_top.thumbnail_img
                        ? _c("img", {
                            attrs: {
                              src:
                                _vm.thumbnail_base_url +
                                _vm.seasion_p_top.thumbnail_img
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "collect_sub_data text-center" },
                        [
                          _c("p", { staticClass: "p1" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm.seasion_p_top.name.substring(0, 20)
                                ) +
                                "\n              "
                            ),
                            _vm.seasion_p_top.name.length > 20
                              ? _c("span", [_vm._v("...")])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "p2" }, [
                            _vm._v("BDT " + _vm._s(_vm.seasion_p_top.price))
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn_more",
                              attrs: {
                                to: {
                                  name: "single",
                                  params: { slug: _vm.seasion_p_top.slug }
                                }
                              }
                            },
                            [
                              _vm._v("\n              More\n              "),
                              _c("i", {
                                staticClass:
                                  "fa fa-xs fa-arrow-right arrow_right_icon"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "collection_content" }, [
                  _vm.seasion_p_bottom.thumbnail_img
                    ? _c("img", {
                        attrs: {
                          src:
                            _vm.thumbnail_base_url +
                            _vm.seasion_p_bottom.thumbnail_img
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "collect_sub_data text-center" },
                    [
                      _c("p", { staticClass: "p1" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.seasion_p_bottom.name.substring(0, 20))
                        ),
                        _vm.seasion_p_bottom.name.length > 20
                          ? _c("span", [_vm._v("...")])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "p2" }, [
                        _vm._v("BDT " + _vm._s(_vm.seasion_p_bottom.price))
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn_more",
                          attrs: {
                            to: {
                              name: "single",
                              params: { slug: _vm.seasion_p_bottom.slug }
                            }
                          }
                        },
                        [
                          _vm._v("\n              More\n              "),
                          _c("i", {
                            staticClass:
                              "fa fa-xs fa-arrow-right arrow_right_icon"
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.suggest_products, function(product, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass:
            "\n      col-xl-3 col-md-3 col-lg-3 col-sm-3 col-xs-6\n      content_card_container\n    "
        },
        [
          _c("div", { staticClass: "content_card" }, [
            _c(
              "div",
              { staticClass: "content_card_body text-center" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "single",
                        params: { slug: product.slug }
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.base_url + product.thumbnail_img }
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
                            params: { slug: product.slug }
                          }
                        }
                      },
                      [_vm._v(_vm._s(product.name))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticClass: "price" }, [
                  product.discount
                    ? _c("span", { staticClass: "price-old" }, [
                        _vm._v("\n            ৳ " + _vm._s(product.sale_price))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "price-new" }, [
                    _vm._v(" ৳ " + _vm._s(product.price))
                  ])
                ]),
                _vm._v(" "),
                _vm._m(0, true)
              ],
              1
            )
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "add-to-cart d-flex justify-content-center" },
      [
        _c("button", { staticClass: "btn btn-warning btn-sm carts" }, [
          _c("span", [
            _c("i", {
              staticClass: "fa fa-shopping-cart fa-lg",
              attrs: { "aria-hidden": "true" }
            })
          ]),
          _vm._v(" ADD TO CART")
        ]),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-heart fa-2x",
          staticStyle: { color: "#CC8E46", "margin-left": "10px" }
        }),
        _c("sup", [_c("i", { staticClass: "fa fa-plus fa-sm" })])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                                      _vm._s(item.name.substring(0, 20) + "..")
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
                                    _c("i", {
                                      staticClass:
                                        "fa fa-solid fa fa-cart-arrow-down fa-lg"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticStyle: { "margin-top": "2px" } },
                                      [_vm._v("ADD TO CART")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass: "fa fa-heart fa-2x",
                                  staticStyle: {
                                    color: "#cd8f46",
                                    "margin-left": "10px"
                                  }
                                }),
                                _c("sup", [
                                  _c("i", { staticClass: "fa fa-plus fa-sm" })
                                ])
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

/***/ "./resources/js/components/public/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/public/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=51680757& */ "./resources/js/components/public/Index.vue?vue&type=template&id=51680757&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/public/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/public/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/Index.vue?vue&type=template&id=51680757&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/public/Index.vue?vue&type=template&id=51680757& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=51680757& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/Index.vue?vue&type=template&id=51680757&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_51680757___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/public/partials/NewProductsHorizontalSlide.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b& */ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b&");
/* harmony import */ var _NewProductsHorizontalSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProductsHorizontalSlide.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewProductsHorizontalSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/partials/NewProductsHorizontalSlide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProductsHorizontalSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewProductsHorizontalSlide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProductsHorizontalSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/NewProductsHorizontalSlide.vue?vue&type=template&id=589db14b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProductsHorizontalSlide_vue_vue_type_template_id_589db14b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/ParallaxBanner.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/public/partials/ParallaxBanner.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParallaxBanner.vue?vue&type=template&id=103f6ac5& */ "./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5&");
/* harmony import */ var _ParallaxBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParallaxBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ParallaxBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/partials/ParallaxBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParallaxBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParallaxBanner.vue?vue&type=template&id=103f6ac5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/ParallaxBanner.vue?vue&type=template&id=103f6ac5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxBanner_vue_vue_type_template_id_103f6ac5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9& */ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9&");
/* harmony import */ var _SessionalAndOccationalCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionalAndOccationalCampaign.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SessionalAndOccationalCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/partials/SessionalAndOccationalCampaign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionalAndOccationalCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SessionalAndOccationalCampaign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionalAndOccationalCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SessionalAndOccationalCampaign.vue?vue&type=template&id=341fe6b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionalAndOccationalCampaign_vue_vue_type_template_id_341fe6b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/SuggestedProducts.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/public/partials/SuggestedProducts.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestedProducts.vue?vue&type=template&id=a8fe2b16& */ "./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16&");
/* harmony import */ var _SuggestedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestedProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuggestedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/partials/SuggestedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestedProducts.vue?vue&type=template&id=a8fe2b16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/SuggestedProducts.vue?vue&type=template&id=a8fe2b16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestedProducts_vue_vue_type_template_id_a8fe2b16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=template&id=ad969a3e& */ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&");
/* harmony import */ var _TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopSellingProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=template&id=ad969a3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=template&id=ad969a3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_ad969a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);