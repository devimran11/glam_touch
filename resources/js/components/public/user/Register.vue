<template>
  <div class="wrapper-wide">
    <!-- <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> -->

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <!--Middle Part Start-->
   <div class="col-lg-3 col-xs-0"></div>
          <div id="content" class="col-sm-12 col-xs-12 col-lg-5">
            <div class="custom-box text-center" style="height:auto;">
              <h3 >Account Register</h3>
              <form @submit.prevent="register">
                <div class="form-group">
                  <input
                    type="text"
                    name="Name"
                    value
                    placeholder="Your Name"
                    class="form-control"
                    autofocus
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="mobile_no"
                    required
                    placeholder="Email or Phone Number"
                    class="form-control"
                    autocomplete="off"
                    :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                    v-model="form.mobile_no"
                  />
                  <has-error :form="form" field="mobile_no"></has-error>
                  <!-- if error has come throw email  -->
                  <div :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
                  <!-- if error has come throw email  -->
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    minlength="8"
                    autocomplete="off"
                    :class="{ 'is-invalid': form.errors.has('password') }"
                    v-model="form.password"
                  />
                  <has-error :form="form" field="password"></has-error>
                </div>
                 <div class="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="form-control"
                    autocomplete="off"
                    minlength="8"
                    v-model="form.confirm_password"
                  />
                </div>
                <button :disabled="form.busy" style="height:36px" class="btn btn-block btn-primary" type="submit">
                  <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>REGISTER
                </button>
                  <div class="row">
                    <div class="col-lg-5 col-sm-5 col-xs-5"> <hr> </div>
                    <div class="col-lg-2 col-sm-2 col-xs-2"> <h4>OR </h4></div>
                    <div class="col-lg-5 col-sm-5 col-xs-5"> <hr> </div>
                  </div>
                  <div class="row">
                    <div class="socail_login_container">
                       <a class="btn facebook_btn" href="/login/facebook"> <i class="fa fa-facebook"></i> facebook</a>
                       <a class="btn google_btn" href="/login/google" ><i class="fa fa-google"></i> Google</a>
                    </div>
                  </div>
                 <div class="row">
                    <div class="col-lg-5 col-sm-5 col-xs-5"> <hr> </div>
                    <div class="col-lg-2 col-sm-2 col-xs-2"> <h4> </h4></div>
                    <div class="col-lg-5 col-sm-5 col-xs-5"> <hr> </div>
                  </div>
                  <router-link class="login_with_password_btn" :to="{name:'UserLogin'}">Login with password</router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Form, HasError } from "vform";

export default {

  data() {
    return {
      form: new Form({
        name: "",
        mobile_no: "",
        password: "",
        confirm_password: "",
      }),
      pre_route: null,
      isLoading: true,
      fullPage: true,
    };
  },
  methods: {
    register() {
      if (this.form.password != this.form.confirm_password) {
           this.$toasted.show("password didn't matched ", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
            return ;
      }
      this.form
        .post("/_public/userToRegister")
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("user_token", resp.data.token);
            this.$store.dispatch("user");
            if (this.pre_route == "Chekout") {
              this.$router.push({ name: "Chekout" });
            } else {
              this.$router.push({ name: "welcome" });
            }
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
         // console.log(error);
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
    //  console.log();
      vm.pre_route = from.name;
    });
  },
  components:{
    Loading,
    HasError
  }
};
</script>