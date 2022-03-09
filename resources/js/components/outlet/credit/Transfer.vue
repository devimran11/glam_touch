<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'transfer_money_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>

        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Transfer Money</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">

              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-4">
                      <h3 class="box-title">Transfer Money Table</h3>
                    </div>
                    </div>
                </div>
                <div class="box-body">
                  <table class="table table-hover table-bordered table-striped table-centered ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Receive Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(transfer, index) in transferMoney" :key="index">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ transfer.created_at }}</td>

                        <td>{{ transfer.amount }}</td>
                        <td>{{ transfer.transaction_id }}</td>
                        <td>
                            <span class="badge badge-warning" v-if="transfer.status==0">Pending</span>
                            <span class="badge badge-warning" v-else>Received</span>
                        </td>
                        <td>Action</td>
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
import navbar from "../Navbar.vue" ;
export default {
  created() {
    setTimeout(() => {
        this.getTransferMoney();
    }, 100);
  },
  data() {
    return {
      transferMoney: "",
    };
  },
  methods: {
    getTransferMoney() {
      axios
        .get("/api/showroom/balance/transfer")
        .then((resp) => {
          console.log(resp);
          this.transferMoney = resp.data;
        })
    },
  },

  components:{
    navbar ,
  }
};
</script>

<style scoped>
label {
  position: absolute;
  text-align: left;
  margin-bottom: 0px;
}
</style>
