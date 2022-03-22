(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single_product~welcome"],{

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cart_bag[data-v-ad969a3e] {\r\n  width: 35px;\r\n  height: 30px;\r\n  margin-top: 0px;\r\n  filter: invert(100%);\n}\n.cart_love[data-v-ad969a3e] {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-top: 0px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                                    _c("img", {
                                      staticClass: "cart_bag",
                                      attrs: {
                                        src:
                                          "storage/images/icons/Untitled-2.png",
                                        alt: ""
                                      }
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
                                _c("img", {
                                  staticClass: "cart_love",
                                  attrs: {
                                    src: "storage/images/icons/love.png",
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
/* empty/unused harmony star reexport *//* harmony import */ var _TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& */ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/partials/TopSellingProducts.vue?vue&type=style&index=0&id=ad969a3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_style_index_0_id_ad969a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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