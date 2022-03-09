<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{name:'banner'}" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <i class="fa fa-dashboard"></i>Dashboard
            </a>
          </li>
          <li class="active">Edit Slider</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">
                  Edit  banner
                </h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{error}}</div>

                <h1 v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                </h1>

                <form
                  @submit.prevent="updateBanner"
                  v-else
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Url</label>
                        <input class="form-control" type="text" name="url" v-model="form.url" />
                      </div>

                    <div class="form-group">
                        <label>Banner Placement</label>
                        <select
                          name="placement"
                          class="form-control"
                          v-model="form.placement"
                          required
                          :class="{
                            'is-invalid': form.errors.has('placement'),
                          }"
                        >
                          <option disabled>select banner placement</option>
                          <option value="mens collection">
                            Mens Collection <small>[prefer size(630px*630)]</small>
                          </option>
                          <option value="womens collection">
                            Womens Collection <small
                            > [prefer size(630px*630)]</small
                            >
                          </option>
                          <option value="new arrival">
                            New Arrival <small>[prefer size(300px*300)]</small>
                          </option>
                            <option value="offer">
                            Offer Banner <small>[prefer size(300px*300)]</small>
                          </option>
                          <option value="top selling banner">
                            Top Selling Banner
                             <small>[prefer size(1180px*300)]</small>
                          </option>
                        </select>
                        <has-error :form="form" field="image"></has-error>
                      </div>

                      <div class="preview-image">
                        <img class="img-responsive" :src="form.file" alt="banner" />
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
                    </div>
                  </div>


                 <div class="form-group text-center">
                       <button
                    :disabled="form.busy || disabled"
                    type="submit"
                    class="btn btn-primary btn-block"
                  >
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
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
  name: "bannerEdit",
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
    this.getBanner();
  },
  data() {
    return {
      form: new Form({
        banner: "",
        file: this.$store.state.image_base_link+'images/static/1360x365.jpeg',
        placement: 1,
        url: "#",
      }),
      error: "",
      loading: true,
      image: "",
      disabled: false,
      image_width: 1360,
      image_height: 365,
      imagae_size:1024,
    };
  },

  methods: {

      getBanner(){
          axios.get('/api/banner/item/'+this.$route.params.id)
            .then(resp => {
                if (resp.data.status== "OK") {
                    this.form.url=resp.data.banner.url ;
                    this.form.placement=resp.data.banner.placement ;
                    this.form.file= this.$store.state.image_base_link+resp.data.banner.banner ;
                }
            })

      },
     updateBanner() {
      this.form
        .post("/api/banner/update/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$router.push({ name: "banner" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              placement: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "something went to wrong";
          }
        })
    },
    uploadImage(e) {
      const file = e.target.files[0];

       if (!file.type.match("image.*")) {
         Swal.fire({
          type:'warning',
          text:'this is not any kind of image',
        });
        return;
      }
       if(file.size/1024>this.imagae_size){
        Swal.fire({
          type:'warning',
          text:`File size can not be bigger then ${this.imagae_size}KB.Reference file size is'+file.size/1024 +'KB`,
        });
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
           this.setImage(file, evt);
            return;
        };
        img.src = evt.target.result;
      };
    },

    setImage(file, evt) {
      this.disabled = false;
      this.form.banner = file;
      this.form.file = evt.target.result;
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
