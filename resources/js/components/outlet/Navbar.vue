<template>
    <div>
        <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Outlet</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="base_url + outlet.image " class="user-image" >
              <span class="hidden-xs">{{ outlet.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img  :src="base_url+outlet.image" class="img-circle" alt="User Image">

                <p>
                  {{ outlet.name  }} - outlet
                  <small> since {{  outlet.created_at }}</small>
                </p>
              </li>


              <!-- Menu Footer-->
              <li class="user-footer">
                    <div class="row">
                      <div class="col-md-3">
                        <router-link :to="{ name: 'outlet_profile'}"  class="btn btn-primary " > profile </router-link>
                      </div>

                      <div class="col-md-6">
                      <router-link :to="{ name: 'outlet_password_edit'}"  class="btn btn-primary ">change password</router-link>
                      </div>

                      <div class="col-md-3">
                          <a @click="logout" class="btn btn-danger "> logout </a>
                      </div>
                    </div>


              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->

        </ul>
      </div>
    </nav>
  </header>
    </div>
</template>



<script>
export default {
  created() {

    this.$store.dispatch("outlet");
  },
  data() {
    return {
      base_url: this.$store.state.image_base_url ,
    };
  },
  methods: {
     logout(){
        axios.get('/api/manager/logout')
        .then(resp => {
          console.log(resp);
          if (resp.data.status == "OK") {
             localStorage.removeItem('outlet_token') ;
             this.$store.commit('outlet',null);
             this.$router.push({ name : 'outlet_login'});
              this.$toasted.show("Logout successfully ! login again to come back .", {
              type: "error",
              position: "top-center",
              duration: 10000,
            });
          }
        })

     }
  },
  computed: {
    outlet() {
      return this.$store.getters.outlet;
    },
  },
};
</script>

<style>

</style>