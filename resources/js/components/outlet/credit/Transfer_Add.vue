<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom_credit' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Transfer</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Transfer Money</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="add"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount</label>
                        <input
                          type="text"
                          name="amount"
                          v-model="form.amount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('amount') }"
                          autocomplete="off"
                        />
                        <has-error :form="form" field="amount"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Transaction ID</label>
                        <input
                          type="text"
                          name="transaction_id"
                          v-model="form.transaction_id"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('transaction_id') }"
                          autocomplete="off"
                        />
                        <has-error :form="form" field="transaction_id"></has-error>
                      </div>
                    </div>
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
import navbar from "../Navbar.vue";
export default {
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  },
  data() {
    return {
      form: new Form({
        transaction_id: "",
        amount: "",
      }),

      loading: true,
      error: "",
    };
  },

  methods: {
    add() {
      this.form
        .post("/api/showroom/balance/add")
        .then((resp) => {
            console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "transfer_money" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          //  console.log(error)
          this.error = "some thing want to wrong";
        });
    },
  },
  components: {
    navbar,
    HasError,
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
