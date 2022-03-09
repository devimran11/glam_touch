<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom' }" class="btn btn-primary"
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
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">All Transfer List</h3>
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
                        <th width="20%">Date</th>
                        <th width="30%">Amount</th>
                        <th width="20%">Transaction ID</th>
                        <th width="20%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(transfer, index) in transferList"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ transfer.created_at }}</td>
                        <td>{{ transfer.amount }}</td>
                        <td>{{ transfer.transaction_id }}</td>
                        <td>
                          <button
                            v-if="transfer.status == 0"
                            class="btn btn-info"
                            @click="displayModal(transfer.id)"
                          >
                            Receive
                          </button>
                          <button v-else class="btn btn-info" disabled>
                            Received
                          </button>
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
    <modal name="paymentModal" :width="350" :height="250">
      <div class="card">
        <div style="padding: 10px" class="card-body">
          <form @submit.prevent="receivePayment">
            <div class="form-group">
              <label>Credit In</label>
              <select required v-model="form.credit_in" class="form-control">
                <option value="Cash">Cash</option>
                <option value="Bkash(personal)">Bkash(personal)</option>
                <option value="Bkash(merchant)">Bkash(merchant)</option>
                <option value="Bank">Bank(SIBL)</option>
                <option value="Bank(AIBL)">Bank(AIBL)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Comment Or Note</label>
              <input
                v-model="form.comment"
                type="text"
                class="form-control"
                placeholder="write details "
              />
            </div>
            <br />
            <button
              type="submit"
              class="btn btn-success btn-block"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
export default {
  created() {
    this.transferInfo();
  },
  data() {
    return {
      transferList: "",
      form: new Form({
        credit_in: "Cash",
        comment: "",
        id: null,
      }),
      loading: false,
    };
  },
  methods: {
    transferInfo() {
      axios
        .get("/api/showroom/money/transfer/list/" + this.$route.params.id)
        .then((resp) => {
          this.transferList = resp.data;
        });
    },

    receivePayment() {
      this.form
        .post("/api/showroom/money/receive", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
            console.log(resp);
          if ((resp.data.status = 1)) {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
              this.form.credit_in = "Cash",
              this.form.id = null,
              this.form.comment = null;
              this.transferInfo();
              this.$modal.hide('paymentModal');
          } else {
            this.$toasted.show("transaction receive failed", {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        });
    },

    displayModal(id) {
      this.form.id = id;
      this.$modal.show("paymentModal");
    },
  },
};
</script>

<style scoped>
</style>
