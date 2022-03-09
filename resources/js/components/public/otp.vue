<template>
  <div class="wrapper-wide">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <!--Middle Part Start-->
          <div id="content">
            <div class="row">
   <div class="col-lg-3 col-xs-0"></div>
          <div id="content" class="col-sm-12 col-xs-12 col-lg-5">
                <div class="custom-box">
                  <h3 style="font-family:poppins,margin-bottom: 2px;border-bottom:none;text-align:center">{{heading}}</h3>
                  <span style="margin-left: 40px; margin-top: 2px"
                    >
                  </span>
                  <br />
                  <form v-if="sendMode" @submit.prevent="sendOtp">
                    <div class="form-group" >
                      <div class="row">
                        <div class="col-lg-8">

                        </div>
                      </div>
                     <label >{{ span_message }}</label>
                      <input
                        autofocus
                        type="text"
                        name="mobile_no"
                        class="form-control"
                        autocomplete="off"
                        maxlength="11"
                        :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                        v-model="form.mobile_no"
                        placeholder="01xxx-xxxxxx"
                      />
                      <has-error :form="form" field="mobile_no"></has-error>
                    </div>
                    <br />
                    <button
                      class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="form.busy || form.mobile_no.length != 11"
                    >
                      <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>SEND CODE
                    </button>
                     <br>
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
                  <form @submit.prevent="verifyOtp" v-else>
                    <div class="form-group">
                      <input
                        type="text"
                        name="verify_code"
                        class="form-control"
                        autocomplete="off"
                        :class="{
                          'is-invalid': form.errors.has('verify_code'),
                        }"
                        v-model="verify_code"
                        placeholder="Enter Code"
                      />
                      <has-error :form="form" field="verify_code"></has-error>
                    </div>
                    <div class="form-group text-center">

                    <h4 v-if="second_limit>0">
                      {{ second_limit }} <i class="fa fa-clock-o"></i>
                    </h4>

                    <button v-else
                      class="btn  btn-primary" style="margin-bottom:10px;border:none !important"
                      type="submit" @click="sendOtp"
                    >
                      Resend OTP
                    </button>

                     <button
                      class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="verify_code.length<4"
                    >
                      VERIFY
                    </button>
                    </div>

                  </form>
                  <br>

                <br/>
                <br/>
                </div>
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
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
      }),
      isLoading: true,
      fullPage: true,
      disabled: true,
      sendMode: true,
      second_limit:60,
      verify_code: "",
      span_message:"Mobile No",
      heading:"LOGIN WITH MOBILE NUMBER"
    };
  },
  methods: {
    sendOtp() {
      this.isLoading = true;
      this.form
        .post("/send/otp")
        .then((resp) => {
          console.log(resp);
          if (resp.data) {
            this.isLoading = false;
            this.sendMode = false;
            this.$toasted.show(resp.data, {
              type: "success",
              position: "bottom-center",
              duration: 5000,
            });
            this.$refs.verify_code;
            this.span_message="PLEASE ENTER 4 DIGITS VERIFICATION CODE"
            this.heading="Verify 4 Digits Code";
            this.second_limit = 60;
            this.timeDicrementor();
          } else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "bottom-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "bottom-center",
            duration: 2000,
          });
        });
    },

    timeDicrementor(){
      setInterval(() => {
        this.second_limit -= 1;
      }, 1000);
    },
    verifyOtp() {

      this.isLoading=true;
      axios
        .get("/verify/otp/code", {
          params: {
            mobile_no: this.form.mobile_no,
            verify_code: this.verify_code,
          },
        })
        .then((resp) => {

          this.isLoading=false;

          if(resp.data.status=="OK"){
             this.$toasted.show(resp.data.message, {
              type: "success",
              position: "bottom-center",
              duration: 4000,
          });
          localStorage.setItem("user_token", resp.data.user.mobile_no);
           this.$router.push({ name: "Chekout" });

        }else{
              this.$toasted.show(resp.data, {
              type: "error",
              position: "bottom-center",
              duration: 4000,
          });
          }
        })
        .catch((e) => {

          this.isLoading=false;

     });
    },
  },
  components: {
    Loading,
    HasError
  },
};
</script>