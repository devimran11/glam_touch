<template>

<div class="login_container">

  <div class="login-box" v-if="!isLoading">
    <div class="login-logo">
      <a > <b> {{ general_setting.title }} </b></a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form @submit.prevent="login">
        <div class="alert alert-danger" v-if="error">{{ error }}</div>

        <div class="form-group has-feedback">
          <input
            type="email"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('email') }"
            name="email"
            v-model="form.email"
            placeholder="Email"
            autocomplete="off"
            autofocus
          />
          <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('password') }"
            name="password"
            v-model="form.password"
            placeholder="Password"
            autocomplete="off"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <button
           style="height:40px !important"
          href="#"
          :disabled="form.busy"
          class="btn btn-block btn-primary"
          type="submit"
        >
          <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>LOGIN
        </button>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
  <div class="loading" v-else>
    <h2>Loading............</h2>
  </div>

</div>
</template>

<script>
import Vue from "vue";
import { Form, HasError } from "vform";
Vue.component(HasError.name, HasError);
export default {
  created() {
    this.removeClass();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.$store.dispatch('general_setting');

  },

  data() {
    return {
      form: new Form({
        email: "",
        password: "",
      }),
      error: "",
      isLoading: true,
    };
  },

  methods: {
    login() {
      this.form
        .post("/admin/login")
        .then((resp) => {
           console.log(resp);
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("admin_token", resp.data.token);
            this.$store.commit("admin", resp.data.admin);
            this.$router.push({ name: "dashboard" });
             setTimeout(()=>{
                location.reload();
             },1000)

            this.addClass();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
          if (resp.data.status == "FAILD") {
            this.error = resp.data.message;
          }
        })
        .catch((error) => {
          this.error = "Something went to wrong. please try again";
        });
    },

    removeClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar");
      let footer = document.getElementsByClassName("main-footer");

      myBody.classList.remove("skin-blue");
      myBody.classList.add("login-page");

      if (sidebar.length > 0) {
        sidebar[0].classList.add("none");
      }
      if (footer.length > 0) {
        footer[0].classList.add("none");
      }
    },

    addClass() {
      let myBody = document.getElementsByTagName("body")[0];
      let sidebar = document.getElementsByClassName("main-sidebar")[0];
      let footer = document.getElementsByClassName("main-footer")[0];
      myBody.classList.remove("login-page");
      myBody.classList.add("skin-blue");

      sidebar.classList.remove("none");
      footer.classList.remove("none");
    },
  },
 computed: {
    general_setting() {
      return this.$store.getters.general_setting;
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let sidebar = document.getElementsByClassName("main-sidebar")[0];
  let footer = document.getElementsByClassName("main-footer")[0];
  if (window.location.href == "http://127.0.0.1:8000/backend/adminLogin") {
    sidebar.classList.add("none");
    footer.classList.add("none");
  }
});
</script>


<style scoped >
.login_container{
    position: fixed;
    background: url(https://y6b8k9e7.stackpathcdn.com/wp-content/uploads/2017/07/cyber-security-concept-shield-with-keyhole-icon-digital-data-background.jpg);
    width: 100%;
    height: 1000px;
    margin-top: -200px;
}

input {
  height: 40px !important;
}

.login-logo a {
  color:#fff;
}
.login-box {
  margin: 20% auto ;
}
.none {
  display: none !important;
}
@media screen and (max-width: 768px){
      .login-box, .register-box {
          width: 90%;
          margin:77% auto ;
      }
   }
</style>