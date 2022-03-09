(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category_new_arrival_products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_Products_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/Products.vue */ "./resources/js/components/public/partials/Products.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.newArrivalProducts();
    window.scrollTo(0, 0);
  },
  components: {
    Products: _partials_Products_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      products: "",
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    newArrivalProducts: function newArrivalProducts() {
      var _this = this;

      this.$Progress.start();
      axios.get("/_public/api/new/products").then(function (resp) {
        console.log(resp);
        _this.products = resp.data.products;

        _this.$Progress.finish();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4& ***!
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
    { staticClass: "wrapper-wide" },
    [
      _c("frontend-header"),
      _vm._v(" "),
      _c("div", { attrs: { id: "container" } }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c("br"),
            _vm._v(" "),
            _vm.products.length < 0
              ? _c(
                  "div",
                  { staticClass: "row", staticStyle: { "margin-top": "15px" } },
                  [_vm._m(0)]
                )
              : _c("products", { attrs: { products: _vm.products } })
          ],
          1
        )
      ]),
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
    return _c("div", { staticClass: "col-lg-12 text-center" }, [
      _c("h4", { staticClass: "alert alert-warning" }, [
        _vm._v("No product Found")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/CategoryNewArrivalProducts.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/public/CategoryNewArrivalProducts.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4& */ "./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4&");
/* harmony import */ var _CategoryNewArrivalProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryNewArrivalProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryNewArrivalProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/CategoryNewArrivalProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryNewArrivalProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryNewArrivalProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryNewArrivalProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/CategoryNewArrivalProducts.vue?vue&type=template&id=80b8e2b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryNewArrivalProducts_vue_vue_type_template_id_80b8e2b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);