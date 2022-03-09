<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Showroom</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">All Showroom</h3>
                </div>
                <div class="box-body">
                  <table
                    class="
                      table
                      table-bordered
                      table-centered
                      table-hover
                      table-striped
                      text-center
                    "
                  >
                    <thead>
                      <tr>
                        <th width="10%">#</th>
                        <th width="20%">Name</th>
                        <th width="30%">Location</th>
                        <th width="20%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(showroom, index) in showrooms"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                          <img
                            :src="base_url + showroom.logo"
                            class="showroom_logo"
                          />
                             <h4>{{ showroom.name }}</h4>
                         
                            <p>Contact Person: {{ showroom.contact_person }}</p>
                            <p>Contact Number: {{ showroom.contact_number }}</p>

                        </td>
                        <td>{{ showroom.address }}</td>
                        <td>
                          <router-link
                            class="btn btn-sm btn-success"
                            :to="{
                              name: 'showroom_edit',
                              params: { id: showroom.id },
                            }"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>
                          <button
                            @click="goToShowroomDashboard(showroom.id)"
                            class="btn btn-info btn-sm"
                          >
                            <i class="fa fa-dashboard"></i> Dashboard
                          </button>

                          <router-link
                            :to="{
                              name: 'showroom_balance_transfer',
                              params: { id: showroom.id },
                            }"
                            class="btn btn-success btn-sm"
                            >Payment
                            <i
                              v-if="showroom.payment_pending_transaction > 0"
                              style="color: red"
                              class="fa fa-bell"
                              ><sup>{{
                                showroom.payment_pending_transaction
                              }}</sup>
                            </i>
                            <i v-else class="fa fa-bell"><sup>0</sup> </i>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getShowroms();
  },
  data() {
    return {
      showrooms: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
      thumbnail_img_url: this.$store.state.thumbnail_img_base_link,
    };
  },
  methods: {
    getShowroms() {
      axios.get("/api/showroom/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.showrooms = resp.data.showrooms;
          this.loading = false;
        }
      });
    },

    goToShowroomDashboard(id) {
      axios.get("/api/admin/access/outlet/" + id).then((resp) => {
        console.log(resp);
        if (resp.data.status == "SUCCESS") {
          localStorage.setItem("outlet_token", resp.data.outlet_token);
          this.$store.commit("outlet", resp.data.outlet);
          window.open("/outlet/dashboard");
        }
      });
    },
  },
};
</script>

<style scoped>
.showroom_logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 1pt 12pt rgb(150 165 237);
}
</style>
