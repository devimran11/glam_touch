<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a @click="goBack" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Edit product</li>
        </ol>
      </section>
      <section class="content">
        <h1 v-if="loading" style="text-align: center; font-size: 50px">
          <i class="fa fa-spinner fa-spin"></i>
        </h1>

        <form
          v-else
          @submit.prevent="updateProduct"
          @keydown="form.onKeydown($event)"
          enctype="multipart/form-data"
        >
          <div
            class="alert alert-danger alert-dismissible"
            v-if="error"
            role="alert"
          >
            {{ error }}
            <span
              aria-hidden="true"
              class="close"
              data-dismiss="alert"
              style="color: #fff"
              aria-label="Close"
              >&times;</span
            >
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="box box-primary">
                <div class="box-header text-center">
                  <h3 class="box-title">Basic Information</h3>
                </div>
                <div class="box-body">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="form-group">
                        <label>
                          Name
                          <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          autocomplete="off"
                          placeholder="Ex: exclusive punjabi"
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>

                      <div class="form-group">
                        <label>
                          Category
                          <b class="text-danger">*</b>
                        </label>
                        <select
                          class="form-control"
                          name="category"
                          v-model="form.category_id"
                          :class="{ 'is-invalid': form.errors.has('category') }"
                          @change="categoryWiseSubCategory()"
                        >
                          <option disabled value>select category</option>
                          <option
                            v-for="category in categories"
                            :value="category.id"
                          >
                            {{ category.name }}
                          </option>
                        </select>
                        <has-error :form="form" field="category"></has-error>
                      </div>
                      <div class="form-group">
                        <label>
                          sub category
                          <b class="text-danger">*</b>
                        </label>
                        <select
                          class="form-control"
                          v-model="form.sub_category_id"
                          name="sub_category"
                          :class="{
                            'is-invalid': form.errors.has('sub_category'),
                          }"
                          @change="subCategoryWiseSubSUbCategory()"
                        >
                          <option value>select sub category</option>
                          <option
                            v-for="subcategory in subcategories"
                            v-if="subcategories"
                            :value="subcategory.id"
                          >
                            {{ subcategory.name }}
                          </option>
                        </select>
                        <has-error
                          :form="form"
                          field="sub_category"
                        ></has-error>
                      </div>
                       <br>
                      <div class="form-group">
                        <label>sub sub category</label>
                        <select
                          class="form-control"
                          name="'sub_sub_category"
                          :class="{
                            'is-invalid': form.errors.has('sub_sub_category'),
                          }"
                          v-model="form.sub_sub_category_id"
                        >
                          <option value>select sub sub category</option>
                          <option
                            v-for="subSubCategory in subSubCategories"
                            v-if="subSubCategories"
                            :value="subSubCategory.id"
                          >
                            {{ subSubCategory.name }}
                          </option>
                        </select>
                        <has-error
                          :form="form"
                          field="sub_sub_category"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>
                          Price
                          <b class="text-danger">*</b>
                        </label>
                        <input
                          v-model="form.price"
                          type="number"
                          name="price"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('price'),
                          }"
                          autocomplete="off"
                          placeholder="price"
                          @keyup="salePrice()"
                        />
                        <has-error :form="form" field="price"></has-error>
                      </div>
                      <div class="form-group">
                        <label>Discount (BDT)</label>
                        <input
                          v-model="form.discount"
                          type="number"
                          name="discount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('discount') }"
                          autocomplete="off"
                          placeholder="discount"
                          @keyup="discount()"
                        />
                        <has-error :form="form" field="discount"></has-error>
                      </div>

                      <div class="form-group">
                        <label>Sale Price</label>
                        <input
                          v-model="form.sale_price"
                          type="number"
                          name="sale_price"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('sale_price') }"
                          autocomplete="off"
                          placeholder="sale price"
                        />
                        <has-error :form="form" field="sale_price"></has-error>
                      </div>
                       <br>
                      <div class="form-group">
                        <label> wallet point </label>
                        <input
                          v-model="form.wallet_point"
                          type="number"
                          name="wallet_point"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('wallet_point'),
                          }"
                          placeholder="wallet point"
                        />
                        <has-error
                          :form="form"
                          field="wallet_point"
                        ></has-error>
                      </div>
                      <br>

                      <br>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="box box-primary">
                <div class="box-header text-center">
                  <h3 class="box-title">Other Information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label> Video Link </label>
                    <input
                      v-model="form.video_url"
                      type="text"
                      name="video_url"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label> Specification </label>
                    <ckeditor
                    :editor="editor"
                    name="specification"
                    v-model="form.specification"
                    :config="editorConfig"
                  ></ckeditor>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Product Details
                    <b class="text-danger">*</b>
                  </h3>
                </div>
                <div class="box-body">
                  <ckeditor
                    :editor="editor"
                    name="details"
                    :class="{ 'is-invalid': form.errors.has('details') }"
                    v-model="form.details"
                    :config="editorConfig"
                  ></ckeditor>
                  <has-error :form="form" field="details"></has-error>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
             <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Size Chart
                    <small>
                      <b>
                        <i>( image can't be bigger than 2400*2400 px)</i>
                      </b>
                    </small>
                  </h3>
                </div>
                <div class="box-body">
                  <div
                    class="uploader"
                    @dragenter="onDragEnter"
                    @dragleave="onDragLeave"
                    @dragover.prevent
                    @drop="drop"
                    :class="{ draging: isDraging }"
                  >
                    <div class="upload-control" v-show="form.files.length">
                      <label for="file" class="label">Select a file</label>
                    </div>
                    <div v-show="!form.files.length">
                      <i class="fa fa-cloud-upload"></i>
                      <p>Drag your file here</p>
                      <div>or</div>
                      <div class="file-input">
                        <label for="file" class="label">select a file</label>
                        <input
                          type="file"
                          name="image"
                          id="file"
                          @change="uploadImage"
                          multiple
                        />
                      </div>
                    </div>
                    <div class="images-preview" v-show="form.files.length">
                      <div
                        class="img-wrapper"
                        v-for="(image, index) in form.files"
                        :key="index"
                      >
                        <img :src="image" :alt="`Image uploader ${index}`" />
                        <div class="cancel" @click="cancel(index)">
                          <span>X</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img v-if="size_chart_img" style="max-width:100%;max-height:250px;" :src="base_url+size_chart_img" alt="">
                    </div>

                    <has-error :form="form" field="image"></has-error>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
              <div class="col-lg-12">
              <div class="box box-primary ">
                <div class="box-header with-border text-center">

                  <h3 @click="toggleDiv" style="cursor:pointer" class="box-title">SEO (Optional)

                      <i v-if="show_seo_section==false" class="fa fa-angle-down  angle_icon"  ></i>
                      <i v-else class="fa fa-angle-up angle_icon " ></i>
                  </h3>

                </div>
                <div v-if="show_seo_section==true" class="box-body seo_content">
                  <div class="form-group">
                    <label> SEO Title </label>
                    <input
                      v-model="form.seo_title"
                      type="text"
                      name="seo_title"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label> Description For SEO </label>

                     <ckeditor
                    :editor="editor"
                    name="details"
                    v-model="form.seo_description"
                    :config="editorConfig"
                  ></ckeditor>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group text-center">
            <button :disabled="form.busy" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
Vue.component(HasError.name, HasError);
export default {
  created() {
    this.getProduct();
    this.categoryList();
  },
  data() {
    return {
      form: new Form({
        name: "",
        category_id: "",
        sub_category_id: "",
        sub_sub_category_id: "",
        sale_price: "",
        discount: "",
        wallet_point: "",
        price: "",
        details: "",
        video_url: "",
        specification: "",
        seo_title: "",
        seo_description: "",
        size_chart: [],
        files: [],
      }),
      loading: true,
      error: "",
      categories: "",
      subcategories: "",
      subSubCategories: "",
      editor: ClassicEditor,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
      files: [],
      image: [],
      size_chart_img:'',
      base_url:this.$store.state.image_base_link,
      show_seo_section:false,
    };
  },

  methods: {

    goBack(){
        return window.history.back();
    },

      getProduct() {
          axios
              .get("/api/edit/product/" + this.$route.params.id)
              .then((resp) => {
                  console.log(resp);
                  if (resp.data.success ==true) {

                      this.form.name = resp.data.product.name;
                      this.form.category_id = resp.data.product.category_id;
                      this.form.sub_category_id = resp.data.product.sub_category_id;
                      this.form.sale_price = resp.data.product.sale_price;
                      this.form.discount = resp.data.product.discount ? resp.data.product.discount :0;
                      this.form.price = resp.data.product.price;
                      this.form.wallet_point = resp.data.product.wallet_point;
                      this.form.product_placement = resp.data.product.product_placement;
                      this.form.campaign_id = resp.data.product.campaign_id ? resp.data.product.campaign_id : "";
                      this.form.expired_date = resp.data.product.expired_date ?resp.data.product.expired_date : "";
                      this.form.product_position = resp.data.product.product_position;
                      this.form.show_home_page = resp.data.product.show_home_page;
                      this.form.details = resp.data.product.details;
                      this.form.specification = resp.data.product.specification ? resp.data.product.specification : '';
                      this.form.video_url = resp.data.product.video_url ? resp.data.product.video_url : '';
                      this.form.seo_title = resp.data.product.seo_title ? resp.data.product.seo_title : '';
                      this.form.seo_description = resp.data.product.seo_description ? resp.data.product.seo_description : '';
                      this.size_chart_img = resp.data.product.size_chart ? resp.data.product.size_chart: null ;
                      if (resp.data.product.sub_category_id !== null) {
                          this.form.sub_category_id = resp.data.product.sub_category_id;
                          this.categoryWiseSubCategory();
                      }

                      if (resp.data.product.sub_sub_category_id !== null) {
                          this.subCategoryWiseSubSUbCategory();
                          this.form.sub_sub_category = resp.data.product.sub_sub_category_id;
                      }

                      this.loading = false;
                  } else {
                      this.error = "something  went to wrong";
                  }
              })
              .catch((error) => {
                  console.log(error);
                  this.error = response.data.errors;
              });
      },

    updateProduct() {
      window.scrollTo(0, 0);
      this.$Progress.start();

      this.form
        .post("/api/update/product/basicInformation/" + this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          this.$Progress.finish();
          if (resp.data.success == true) {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
           return window.history.back();
          } else if(resp.data.success == true) {
            this.error = resp.data.message;
          }
        })
        .catch((error) => {
          console.log(error);
          this.$Progress.finish();
          this.error = error.response.data.errors;
        });
    },

    categoryList() {
      axios
        .get("/api/all/category")
        .then((resp) => {
          console.log(resp);
           this.categories = resp.data.categories;
        })

    },

    categoryWiseSubCategory() {
      axios
        .get("/category/wise/subCategory/" + this.form.category_id)
        .then((resp) => {
          // console.log(resp)
          //  console.log(resp.data.admins.data)
          if (resp.data.status == "SUCCESS") {
            if (resp.data.subCategories.length > 0) {
              this.subcategories = resp.data.subCategories;
            } else {
              this.subcategories = "";
            }
          } else {
            console.log("error");
            this.subcategories = "";
          }
        })
        .catch((error) => {
          this.error = "something  went wrong";
        });
    },

    subCategoryWiseSubSUbCategory() {
      axios
        .get("/subCategory/wise/subSubCategory/" + this.form.sub_category_id)
        .then((resp) => {
          console.log(resp.data.subsubcategories);
          //  console.log(resp.data.admins.data)
          if (resp.data.status == "SUCCESS") {
            if (resp.data.subsubcategories.length > 0) {
              this.subSubCategories = resp.data.subsubcategories;
            } else {
              this.subSubCategories = "";
            }
          } else {
            console.log("error");
            this.subSubCategories = "";
          }
        })

    },

    salePrice() {
      this.form.sale_price = this.form.price;
    },

    discount() {
      let price = this.form.price - this.form.discount;
      if (price > this.form.sale_price) {
        alert("discount can not be greater then sale price");
        this.form.price = 0;
        this.form.discount = 0;
        this.form.sale_price=0 ;
      } else {
        this.form.sale_price = price;
      }
    },
    uploadImage(e) {
      const file = e.target.files;
      Array.from(file).forEach((file) => this.addImage(file));
    },
    onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDraging = true;
    },
    onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) {
        this.isDraging = false;
      }
    },
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDraging = false;
      const files = e.dataTransfer.files;
      // console.log(files);
      Array.from(files).forEach((file) => this.addImage(file));
    },
    addImage(file) {
      console.log(file.size / 1024);
      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image",
        });
        return;
      }

     if (file.size / 1024 > 5120) {
        Swal.fire({
          type: "warning",
          text:
            "File size can not be bigger then 5MB.Reference file size is" +
            file.size / 1024 +
            "KB",
        });
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          if (img.width <= 2400 && img.height <= 2400) {
            this.form.size_chart.push(file);
            this.form.files.push(evt.target.result);
            return;
          } else {
            this.disabled = true;
            alert(
              "Image maximum size 2400*2400px.But upload image size" +
                img.width +
                "*" +
                img.height +
                "px"
            );
            return;
          }
        };
        img.src = evt.target.result;
      };
    },
    cancel(index) {
      this.form.files.splice(index, 1);
      this.form.size_chart.splice(index, 1);
    },

    toggleDiv(){
       if (this.show_seo_section == false) {
           this.show_seo_section=true ;
       }else{
          this.show_seo_section=false ;
       }
    },

  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.height {
  height: 360px !important;
}

.uploader {
  width: 100%;
  background: #222d32;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed;
  font-size: 20px;
  position: relative;
}

.draging {
  background: #fff;
  color: #222d32;
  border: 3px dashed #222d32;
}

.file-input label {
  background: #222d32;
  color: #fff;
}

i.fa.fa-cloud-upload {
  font-size: 85px;
}

#file {
  opacity: 0;
  z-index: -1;
}

.file-input {
  width: 280px;
  margin: auto;
  position: relative;
  height: 86px;
}

.images-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.img-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-height: 360px;
    justify-content: space-between;
    background: #fff;
    box-shadow: 5px 5px 20px #3e3737;
    margin-bottom: 15px;
}

img {
  max-height: 350px;
}

.files {
  font-size: 12px;
  background: #fff;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: 3px 6px;
}

.name {
  overflow: hidden;
  height: 18px;
}

.upload-control {
  position: absolute;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 10px;
  padding-bottom: 4px;
  text-align: right;
}

.label {
  padding: 2px 5px;
  margin-right: 10px;
  border: 2px solid #222d32;
  border-radius: 3px;

  font-size: 15px;
  cursor: pointer;
  color: #222d32;
}

.file-input label {
  background: #fff;
  color: #222d32;
  padding: 10px 40px;
}
.cancel {
  background: #fff;
  cursor: pointer;
  color: red;
  width: 110px;
}

.v_check {
  min-width: 15%;
  float: left;
  margin: 5px 12px;
}

input.v_check_input {
  transform: scale(1.5);
}

.v_check_name {
  font-size: 16px;
  margin: 7px;
}


 .box{
   overflow-x: hidden !important;
 }

.angle_icon{
  font-weight: bold;
  margin-left: 15px;
  font-size: 22px !important;
}


</style>
