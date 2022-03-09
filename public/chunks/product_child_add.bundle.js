(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product_child_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getVariants();
    this.getColors();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        name: "",
        color_id: "",
        variants: [],
        images: [],
        files: []
      }),
      loading: true,
      error: "",
      colors: "",
      variants: null,
      editorConfig: {},
      isDraging: false,
      dragCount: 0
    };
  },
  methods: {
    submitProduct: function submitProduct() {
      var _this = this;

      window.scrollTo(0, 0);
      this.$Progress.start();
      this.form.post("/api/product/add", {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        console.log(resp);

        _this.$Progress.finish();

        if (resp.data.success == true) {
          _this.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          return window.history.back();
        } else if (resp.data.success == true) {
          _this.error = resp.data.message;
        }
      })["catch"](function (error) {
        console.log(error);

        _this.$Progress.finish();

        _this.error = error.response.data.errors;
      });
    },
    getColors: function getColors() {
      var _this2 = this;

      axios.get("/list/color").then(function (resp) {
        _this2.colors = resp.data.colors;
        _this2.loading = false;
      });
    },
    getVariants: function getVariants() {
      var _this3 = this;

      axios.get("/list/variant").then(function (resp) {
        console.log(resp);
        _this3.variants = resp.data.variants;
      });
    },
    uploadImage: function uploadImage(e) {
      var _this4 = this;

      var file = e.target.files;
      Array.from(file).forEach(function (file) {
        return _this4.addImage(file);
      });
    },
    onDragEnter: function onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDraging = true;
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;

      if (this.dragCount <= 0) {
        this.isDraging = false;
      }
    },
    drop: function drop(e) {
      var _this5 = this;

      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      var files = e.dataTransfer.files; // console.log(files);

      Array.from(files).forEach(function (file) {
        return _this5.addImage(file);
      });
    },
    addImage: function addImage(file) {
      var _this6 = this;

      console.log(file.size / 1024);

      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image"
        });
        return;
      }

      if (file.size / 1024 > 5120) {
        Swal.fire({
          type: "warning",
          text: "File size can not be bigger then 5MB.Reference file size is" + file.size / 1024 + "KB"
        });
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (evt) {
        var img = new Image();

        img.onload = function () {
          if (img.width <= 2400 && img.height <= 2400) {
            _this6.form.images.push(file);

            _this6.form.files.push(evt.target.result);

            return;
          } else {
            _this6.disabled = true;
            alert("Image maximum size 2400*2400px.But Upload image size" + img.width + "*" + img.height + "px");
            return;
          }
        };

        img.src = evt.target.result;
      };
    },
    cancel: function cancel(index) {
      this.form.files.splice(index, 1);
      this.form.images.splice(index, 1);
    },
    goBack: function goBack() {
      return window.history.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-391ab370] {\r\n  margin-bottom: 5px !important;\n}\n.height[data-v-391ab370] {\r\n  height: 360px !important;\n}\n.uploader[data-v-391ab370] {\r\n  width: 100%;\r\n  background: #222d32;\r\n  color: #fff;\r\n  padding: 40px 15px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  border: 3px dashed;\r\n  font-size: 20px;\r\n  position: relative;\n}\n.draging[data-v-391ab370] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  border: 3px dashed #222d32;\n}\n.file-input label[data-v-391ab370] {\r\n  background: #222d32;\r\n  color: #fff;\n}\ni.fa.fa-cloud-upload[data-v-391ab370] {\r\n  font-size: 85px;\n}\n#file[data-v-391ab370] {\r\n  opacity: 0;\r\n  z-index: -1;\n}\n.file-input[data-v-391ab370] {\r\n  width: 280px;\r\n  margin: auto;\r\n  position: relative;\r\n  height: 86px;\n}\n.images-preview[data-v-391ab370] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 20px;\n}\n.img-wrapper[data-v-391ab370] {\r\n  width: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  height: 105px;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  box-shadow: 5px 5px 20px #3e3737;\r\n  margin-bottom: 32px;\n}\nimg[data-v-391ab370] {\r\n  max-height: 105px;\n}\n.files[data-v-391ab370] {\r\n  font-size: 12px;\r\n  background: #fff;\r\n  color: red;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n  padding: 3px 6px;\n}\n.name[data-v-391ab370] {\r\n  overflow: hidden;\r\n  height: 18px;\n}\n.upload-control[data-v-391ab370] {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  padding: 10px;\r\n  padding-bottom: 4px;\r\n  text-align: right;\n}\n.label[data-v-391ab370] {\r\n  padding: 2px 5px;\r\n  margin-right: 10px;\r\n  border: 2px solid #222d32;\r\n  border-radius: 3px;\r\n\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  color: #222d32;\n}\n.file-input label[data-v-391ab370] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  padding: 10px 40px;\n}\n.cancel[data-v-391ab370] {\r\n  background: #fff;\r\n\r\n  cursor: pointer;\r\n  color: red;\r\n  width: 110px;\n}\n.v_check[data-v-391ab370] {\r\n  min-width: 15%;\r\n  float: left;\r\n  margin: 5px 12px;\n}\ninput.v_check_input[data-v-391ab370] {\r\n  transform: scale(1.5);\n}\n.v_check_name[data-v-391ab370] {\r\n  font-size: 16px;\r\n  margin: 7px;\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true& ***!
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
    [
      _c("admin-main"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c("h1", [
            _c(
              "a",
              { staticClass: "btn btn-primary", on: { click: _vm.goBack } },
              [_c("i", { staticClass: "fa fa-arrow-left" })]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _vm.loading
            ? _c(
                "h1",
                {
                  staticStyle: { "text-align": "center", "font-size": "50px" }
                },
                [_c("i", { staticClass: "fa fa-spinner fa-spin" })]
              )
            : _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.add($event)
                    },
                    keydown: function($event) {
                      return _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _vm.error
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger alert-dismissible",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(_vm.error) + "\n          "
                          ),
                          _c(
                            "span",
                            {
                              staticClass: "close",
                              staticStyle: { color: "#fff" },
                              attrs: {
                                "aria-hidden": "true",
                                "data-dismiss": "alert",
                                "aria-label": "Close"
                              }
                            },
                            [_vm._v("×")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row justify-content-center" }, [
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary height" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.color_id,
                                    expression: "form.color_id"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "attribute" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "color_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.attributeWiseVariants()
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [_vm._v("select color")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.colors, function(color) {
                                  return _c(
                                    "option",
                                    {
                                      key: color.id,
                                      domProps: { value: color.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(color.name) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm._l(_vm.variants, function(variant) {
                                return _c(
                                  "div",
                                  { key: variant.id, staticClass: "v_check" },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "v_check_label" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.variants,
                                              expression: "form.variants"
                                            }
                                          ],
                                          staticClass: "v_check_input",
                                          attrs: { type: "checkbox" },
                                          domProps: {
                                            value: variant.id,
                                            checked: Array.isArray(
                                              _vm.form.variants
                                            )
                                              ? _vm._i(
                                                  _vm.form.variants,
                                                  variant.id
                                                ) > -1
                                              : _vm.form.variants
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.form.variants,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = variant.id,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.form,
                                                      "variants",
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.form,
                                                      "variants",
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.form,
                                                  "variants",
                                                  $$c
                                                )
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "v_check_name" },
                                          [
                                            _vm._v(
                                              " " + _vm._s(variant.name) + " "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("br")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6" }, [
                      _c("div", { staticClass: "box box-primary" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "box-body" }, [
                          _c(
                            "div",
                            {
                              staticClass: "uploader",
                              class: { draging: _vm.isDraging },
                              on: {
                                dragenter: _vm.onDragEnter,
                                dragleave: _vm.onDragLeave,
                                dragover: function($event) {
                                  $event.preventDefault()
                                },
                                drop: _vm.drop
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.files.length,
                                      expression: "form.files.length"
                                    }
                                  ],
                                  staticClass: "upload-control"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "label",
                                      attrs: { for: "file" }
                                    },
                                    [_vm._v("Select a file")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.form.files.length,
                                      expression: "!form.files.length"
                                    }
                                  ]
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-cloud-upload"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Drag your file here")]),
                                  _vm._v(" "),
                                  _c("div", [_vm._v("or")]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "file-input" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "label",
                                        attrs: { for: "file" }
                                      },
                                      [_vm._v("select a file")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: {
                                        type: "file",
                                        name: "image",
                                        id: "file",
                                        multiple: ""
                                      },
                                      on: { change: _vm.uploadImage }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.files.length,
                                      expression: "form.files.length"
                                    }
                                  ],
                                  staticClass: "images-preview"
                                },
                                _vm._l(_vm.form.files, function(image, index) {
                                  return _c(
                                    "div",
                                    { key: index, staticClass: "img-wrapper" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: image,
                                          alt: "Image Uploader " + index
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "cancel",
                                          on: {
                                            click: function($event) {
                                              return _vm.cancel(index)
                                            }
                                          }
                                        },
                                        [_c("span", [_vm._v("X")])]
                                      )
                                    ]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "image" }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { disabled: _vm.form.busy }
                      },
                      [_vm._v("\n            Submit\n          ")]
                    )
                  ])
                ]
              )
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
      _c("li", { staticClass: "active" }, [_vm._v("add child of product")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v(" Child Color And Variants")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                    Colors(example=Black,White,Navy etc.)\n                    "
      ),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(
        "\n                    variant (Example=M,L,XL,38,42 etc.)\n                    "
      ),
      _c("b", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("\n                  Image Gallery\n                  "),
        _c("small", [
          _c("b", [
            _c("i", [
              _vm._v("(Every image can not be bigger than 2400*2400 px)")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/product/ChildAdd.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/product/ChildAdd.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChildAdd.vue?vue&type=template&id=391ab370&scoped=true& */ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true&");
/* harmony import */ var _ChildAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChildAdd.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& */ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChildAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "391ab370",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/product/ChildAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChildAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=style&index=0&id=391ab370&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_style_index_0_id_391ab370_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChildAdd.vue?vue&type=template&id=391ab370&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/ChildAdd.vue?vue&type=template&id=391ab370&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChildAdd_vue_vue_type_template_id_391ab370_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);