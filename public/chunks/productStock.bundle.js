(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productStock"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.productList();
  },
  data: function data() {
    return {
      products: {},
      categories: "",
      sub_categories: "",
      sub_sub_categories: "",
      category_id: "",
      sub_category_id: "",
      sub_sub_category_id: "",
      category_type: "",
      loading: true,
      search: "",
      item: 50
    };
  },
  methods: {
    productList: function productList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/product/stock?page=" + page, {
        params: {
          item: this.item,
          category_id: this.category_id,
          sub_category_id: this.sub_category_id,
          sub_sub_category_id: this.sub_sub_category_id,
          category_type: this.category_type
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data) {
          _this.categories = resp.data.categories;
          _this.sub_categories = resp.data.sub_categories;
          _this.sub_sub_categories = resp.data.sub_sub_categories;
          _this.products = resp.data.products;
          _this.loading = false;
        }
      });
    },
    numberFormatter: function numberFormatter(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    categoryWiseReport: function categoryWiseReport() {
      this.loading = true;
      this.sub_category_id = "";
      this.sub_sub_category_id = "";
      this.category_type = "category";
      this.productList();
    },
    subCategoryWiseReport: function subCategoryWiseReport() {
      this.loading = true;
      this.category_type = "sub_category";
      this.productList();
    },
    subSubCategoryWiseReport: function subSubCategoryWiseReport() {
      this.loading = true;
      this.category_type = "sub_sub_category";
      this.productList();
    },
    goBack: function goBack() {
      return window.history.back();
    },
    searchProducts: function searchProducts() {
      var _this2 = this;

      if (this.search.length > 1) {
        axios.get("/api/search/seggested/product/with/name/code/" + this.search).then(function (resp) {
          console.log(resp);

          if (resp.data) {
            console.log(resp.data);
            _this2.products = resp.data;
          } else {
            _this2.productList();
          }
        });
      } else {
        this.productList();
      }
    },
    downloadAllCategoriesPDF: function downloadAllCategoriesPDF() {
      window.open("/api/stock/report/product/all/categories/pdf", "_blank");
    },
    downloadCategoryWisePDF: function downloadCategoryWisePDF() {
      window.open("/api/stock/report/product/definite/category/pdf/" + this.category_id, "_blank");
    },
    totalPurchaseQuantity: function totalPurchaseQuantity(items) {
      var total = 0;
      items.forEach(function (element) {
        total += parseInt(element.stock);
      });
      return total;
    },
    averagePrice: function averagePrice(items) {
      var total = 0;
      var total_stock = 0;

      if (items.length > 0) {
        items.forEach(function (element) {
          total += parseInt(element.price) * parseInt(element.stock);
          total_stock += parseInt(element.stock);
        });
      }

      var a_price = parseFloat(total) / parseFloat(total_stock);
      return a_price.toFixed(2);
    },
    totalPrice: function totalPrice(items) {
      var total = 0;

      if (items.length > 0) {
        items.forEach(function (element) {
          total += parseInt(element.price) * parseInt(element.stock);
        });
      }

      return parseFloat(total);
    },
    currentStockPrice: function currentStockPrice(stock, items) {
      var total = 0;
      var total_stock = 0;

      if (items.length > 0) {
        items.forEach(function (element) {
          total += parseInt(element.price) * parseInt(element.stock);
          total_stock += parseInt(element.stock);
        });
      }

      var a_price = total / total_stock;
      return "".concat(stock, "*").concat(a_price.toFixed(2), "=").concat((parseFloat(stock) * parseFloat(a_price.toFixed(2))).toFixed(0));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.category_wise_stock h4[data-v-109184e7] {\r\n  padding-left: 12%;\n}\n.category_wise_stock ul li[data-v-109184e7] {\r\n  padding: 10px 0;\r\n  width: 100%;\r\n  display: flex;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  transition: all 0.2s ease;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("admin-main"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c("h1", [
            _c(
              "button",
              { staticClass: "btn btn-primary", on: { click: _vm.goBack } },
              [_c("i", { staticClass: "fa fa-arrow-left" })]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-11 col-md-11 col-sm-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item,
                                expression: "item"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.item = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.productList()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("20")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "40" } }, [
                              _vm._v("40")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "50" } }, [
                              _vm._v("50")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "80" } }, [
                              _vm._v("80")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "150" } }, [
                              _vm._v("150")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "200" } }, [
                              _vm._v("200")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "500" } }, [
                              _vm._v("500")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-success",
                            on: { click: _vm.downloadAllCategoriesPDF }
                          },
                          [
                            _c("i", { staticClass: "fa fa-download" }),
                            _vm._v(" All Categories PDF\n                    ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-success",
                            on: { click: _vm.downloadCategoryWisePDF }
                          },
                          [
                            _c("i", { staticClass: "fa fa-download" }),
                            _vm._v(
                              " Selected Category Wise PDF\n                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search,
                              expression: "search"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder:
                              "search with product code || product name "
                          },
                          domProps: { value: _vm.search },
                          on: {
                            keyup: function($event) {
                              return _vm.searchProducts()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.category_id,
                                expression: "category_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "category" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.category_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.categoryWiseReport
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("select category")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.categories, function(category) {
                              return _c(
                                "option",
                                {
                                  key: category.id,
                                  domProps: { value: category.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(category.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.sub_category_id,
                                expression: "sub_category_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "category" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.sub_category_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.subCategoryWiseReport
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("select sub category")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.sub_categories, function(s_item) {
                              return _c(
                                "option",
                                {
                                  key: s_item.id,
                                  domProps: { value: s_item.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(s_item.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.sub_sub_category_id,
                                expression: "sub_sub_category_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "category" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.sub_sub_category_id = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.subSubCategoryWiseReport
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("select sub sub category")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.sub_sub_categories, function(s_s_item) {
                              return _c(
                                "option",
                                {
                                  key: s_s_item.id,
                                  domProps: { value: s_s_item.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(s_s_item.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm.category_id
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "col-lg-4 col-md-4 category_wise_stock"
                            },
                            [
                              _c("h4", [_vm._v("Stock of Categories")]),
                              _vm._v(" "),
                              _vm.categories
                                ? _c(
                                    "ul",
                                    _vm._l(_vm.categories, function(item) {
                                      return _vm.category_id == item.id
                                        ? _c("li", { key: item.id }, [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(item.name) +
                                                " --- Qty :\n                        " +
                                                _vm._s(
                                                  _vm.numberFormatter(
                                                    item.total_stock
                                                  )
                                                ) +
                                                " Amount :\n                        " +
                                                _vm._s(
                                                  _vm.numberFormatter(
                                                    item.total_amount
                                                  )
                                                ) +
                                                "\n                      "
                                            )
                                          ])
                                        : _vm._e()
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sub_categories
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "col-lg-4 col-md-4 category_wise_stock"
                            },
                            [
                              _c("h4", [_vm._v("Stock of Sub Categories")]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                _vm._l(_vm.sub_categories, function(item) {
                                  return _c("li", { key: item.id }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(item.name) +
                                        " --- Qty :\n                        " +
                                        _vm._s(
                                          _vm.numberFormatter(item.total_stock)
                                        ) +
                                        " Amount :\n                        " +
                                        _vm._s(
                                          _vm.numberFormatter(item.total_amount)
                                        ) +
                                        "\n                      "
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sub_sub_categories
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "col-lg-4 col-md-4 category_wise_stock"
                            },
                            [
                              _c("h4", [_vm._v("Stock of Sub Sub Categories")]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                _vm._l(_vm.sub_sub_categories, function(item) {
                                  return _c("li", { key: item.id }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(item.name) +
                                        " --- Qty :\n                        " +
                                        _vm._s(
                                          _vm.numberFormatter(item.total_stock)
                                        ) +
                                        " Amount :\n                        " +
                                        _vm._s(
                                          _vm.numberFormatter(item.total_amount)
                                        ) +
                                        "\n                      "
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-bordered table-hover table-striped"
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.loading
                              ? _c("h1", { staticClass: "text-center" }, [
                                  _c("i", {
                                    staticClass: "fa fa-spin fa-spinner"
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.products.data, function(product, index) {
                              return _c("tr", { key: index }, [
                                _c("td", { attrs: { scope: "row" } }, [
                                  _vm._v(_vm._s(index + 1))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        product.name +
                                          "-" +
                                          product.product_code
                                      ) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(product.stock) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.totalPurchaseQuantity(
                                          product.purchase_item
                                        )
                                      ) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.averagePrice(product.purchase_item)
                                      ) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.totalPrice(product.purchase_item)
                                      ) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.currentStockPrice(
                                          product.stock,
                                          product.purchase_item
                                        )
                                      ) +
                                      "\n                      "
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.products, limit: 5 },
                            on: { "pagination-change-page": _vm.productList }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-6 mt-1",
                          staticStyle: {
                            "margin-top": "25px",
                            "text-align": "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                      Showing\n                      "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.products.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.total))]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Product Stock")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 orders-heading" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("STOCK REPORT OF PRODUCTS")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Stock")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Total Purchase quantity")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Average purchase price")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total purchase Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Current Stock Value")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Report/ProductStock.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/Report/ProductStock.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductStock.vue?vue&type=template&id=109184e7&scoped=true& */ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true&");
/* harmony import */ var _ProductStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductStock.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& */ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "109184e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Report/ProductStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=style&index=0&id=109184e7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_style_index_0_id_109184e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductStock.vue?vue&type=template&id=109184e7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Report/ProductStock.vue?vue&type=template&id=109184e7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStock_vue_vue_type_template_id_109184e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);