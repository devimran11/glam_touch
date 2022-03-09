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
          <li class="active">add child of product</li>
        </ol>
      </section>
      <section class="content">
        <h1 v-if="loading" style="text-align: center; font-size: 50px">
          <i class="fa fa-spinner fa-spin"></i>
        </h1>

        <form
          v-else
          @submit.prevent="add"
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


            <div class="col-lg-6">
              <div class="box box-primary height">
                <div class="box-header with-border">
                  <h3 class="box-title"> Child Color And Variants</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>
                      Colors(example=Black,White,Navy etc.)
                      <b class="text-danger">*</b>
                    </label>
                    <select
                      class="form-control"
                      name="attribute"
                      v-model="form.color_id"
                      @change="attributeWiseVariants()"
                    >
                      <option  disabled value="" >select color</option>
                      <option
                        v-for="color in colors"
                        :value="color.id"
                        :key="color.id"
                      >
                        {{ color.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>
                      variant (Example=M,L,XL,38,42 etc.)
                      <b class="text-danger">*</b>
                    </label>
                    <br />

                    <div
                      class="v_check"
                      v-for="variant in variants"
                      :key="variant.id"
                    >
                      <label class="v_check_label">
                        <input
                          class="v_check_input"
                          type="checkbox"
                          v-model="form.variants"
                          :value="variant.id"
                        />
                        <span class="v_check_name"> {{ variant.name }} </span>
                      </label>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">
                    Image Gallery
                    <small>
                      <b>
                        <i>(Every image can not be bigger than 2400*2400 px)</i>
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
                        <img :src="image" :alt="`Image Uploader ${index}`" />
                        <div class="cancel" @click="cancel(index)">
                          <span>X</span>
                        </div>
                      </div>
                    </div>

                    <has-error :form="form" field="image"></has-error>
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
Vue.component(HasError.name, HasError);
export default {
  created() {
       this.getVariants();
       this.getColors();
  },
  data() {
    return {
      form: new Form({
        name: "",
        color_id: "",
        variants: [],
        images: [],
        files: [],
      }),
      loading: true,
      error: "",
      colors: "",
      variants: null,
      editorConfig: {},
      isDraging: false,
      dragCount: 0,
    };
  },

  methods: {

    submitProduct() {
      window.scrollTo(0, 0);
      this.$Progress.start();

      this.form
        .post("/api/product/add", {
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

    getColors() {
      axios
        .get("/list/color")
        .then((resp) => {
           this.colors = resp.data.colors;
           this.loading = false;
        })

    },

    getVariants() {
      axios
        .get("/list/variant")
        .then((resp) => {
          console.log(resp);
          this.variants = resp.data.variants;
        })

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
            this.form.images.push(file);
            this.form.files.push(evt.target.result);
            return;
          } else {
            this.disabled = true;
            alert(
              "Image maximum size 2400*2400px.But Upload image size" +
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
      this.form.images.splice(index, 1);
    },

    goBack(){
        return window.history.back();
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
  width: 110px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 105px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 5px 5px 20px #3e3737;
  margin-bottom: 32px;
}

img {
  max-height: 105px;
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



</style>