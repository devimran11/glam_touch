<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'SubCategory' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Sub Category</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add sub category</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spin fa-spinner"></i></h1>
                <form
                  @submit.prevent="add"
                  v-else
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                  <div class="form-group">
                    <label>sub category Name</label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      autofocus
                      autocomplete="off"
                      placeholder="Laptop"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Category</label>
                    <select
                      class="form-control"
                      name="category"
                      v-model="form.category"
                      :class="{ 'is-invalid': form.errors.has('category') }"
                    >
                      <option value="">Select Category</option>
                      <option
                        v-for="category in categories"
                        :value="category.id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                    <has-error :form="form" field="category"></has-error>
                  </div>

                      <div class="form-group text-center">
                        <img id="previewImage" :src="preview" alt="image"  style="width:160px;height:160px;" />
                      </div>
                      <div class="form-group">
                        <label for="file" class="selectFile">select a file</label>
                        <input
                          style="display: none;"
                          class="form-control"
                          id="file"
                          :class="{ 'is-invalid': form.errors.has('image') }"
                          type="file"
                          @change="uploadImage"
                          name="image"
                        />
                        <has-error :form="form" field="image"></has-error>
                      </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
export default {
  name: "subCategory",
  created() {
    this.category();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        name: "",
        image: "",
        category: "",
      }),
      error: "",
      loading: true,
      categories: "",
      preview:this.$store.state.image_base_link+'images/noimage.png',
      image: "",
      disabled: true,
      image_width: 270,
      image_height: 270,
      imagae_size:1024,
      image_size_text: "Image size must be 270*270px",
    };
  },

  methods: {
    category() {
      axios
        .get("/others")
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.categories = resp.data.categories;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    add() {
      this.form
        .post("/subCategory/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "SubCategory" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          this.error = "some thing want to wrong";

          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000,
          });
        });
    },
    uploadImage(e) {
      const file = e.target.files[0];
      if (!file.type.match("image.*")) {
        Swal.fire({
          type: "warning",
          text: "this is not any kind of image",
        });
        return;
      }
      if (file.size / 1024 > this.imagae_size) {
        Swal.fire({
          type: "warning",
          text: `File size can not be bigger then ${this.imagae_size}KB.Reference file size is'+file.size/1024 +'KB`,
        });
        return;
      }
      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          if (
            img.width == this.image_width &&
            img.height == this.image_height
          ) {
            this.setImage(file, evt);
            return;
          } else {
            this.disabled = true;

            Swal.fire({
              type: "error",
              text:
                "Image size need " +
                this.image_width +
                "*" +
                this.image_height +
                "px. But Upload imaze size " +
                img.width +
                "*" +
                img.height +
                "px",
            });
            return;
          }
        };
        img.src = evt.target.result;
      };
    },

    setImage(file, evt) {
      console.log(file);
      this.disabled = false;
      this.form.image = file;
      document.getElementById("previewImage").src = evt.target.result;
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
label.selectFile {
  width: 150px;
  background: #fff;
  color: #222d32;
  padding: 10px 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 1px solid #222d32;
}
</style>
