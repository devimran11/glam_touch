<template>
  <div class="wrapper-wide">
    <div>
    <!-- <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> -->

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <div class="col-lg-3 col-xs-0"></div>
          <div id="content" class="col-sm-12 col-xs-12 col-lg-5">
            <div class="custom-box" style="height:auto">
              <h3 class="title">welcome back</h3>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input
                    type="text"
                    name="mobile_no"
                    placeholder="Email or Phone Number"
                    class="form-control"
                    autocomplete="off"
                    :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                    v-model="form.mobile_no"
                    autofocus
                    required
                  />
                  <has-error :form="form" field="mobile_no"></has-error>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('password') }"
                    v-model="form.password"
                  />
                  <has-error :form="form" field="password"></has-error>
               </div>
                <div class="form-group text-center">
                  <button style="height:36px" s:disabled="form.busy" class="btn btn-block btn-primary" type="submit">
                  <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>LOGIN
                </button>
                </div>

                 </form>
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
                  <router-link :to="{name:'otpLogin'}"  class="btn login_with_otp_btn" type="submit">
                  LOGIN WITH OTP
                </router-link>
                  </div>
                   <h4> New Customer </h4>
                   <p>
                     By creating an account with our store, you will be able to move through the checkout process faster,store mutltiple shipping address,view and track your orders in your account and more.
                   </p>
                   Don't have an account?   <router-link style="color:blue"  :to="{name:'UserRegister'}"> Register here</router-link>
               </div>
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
  created() {
    console.log(localStorage.getItem("user_token"));
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
        password: "",
      }),
      pre_route: null,
      isLoading: true,
      fullPage: true,
    };
  },
  methods: {
    login() {
      this.form
        .post("/_public/userToLogin")
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            /// console.log(resp)
            localStorage.setItem("user_token", resp.data.token);
            this.$store.dispatch("user");

            // if (this.pre_route == "Chekout") {
            //   this.$router.push({ name: "Chekout" });
            // } else {
            //   this.$router.push({ name: "welcome" });
            // }
            this.$router.push({ name: "Chekout" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.$toasted.show(
              "Your given credintial don not match our records",
              {
                type: "error",
                position: "top-center",
                duration: 2000,
              }
            );
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing went to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },
  },
  // beforeRouteEnter(to, from, next) {

  //    next((vm) => {
  //     vm.from = from;
  //   });
  //   if (from.name == "Chekout") {
  //     this.pre_route=from.name;
  //   } else {
  //     this.pre_route="welcome";
  //   }

  // },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log();
      vm.pre_route = from.name;
    });
  },
  components: {
    Loading,
    HasError
  },
};
</script>