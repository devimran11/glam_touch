<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom_debit_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
            <router-link :to="{ name: 'showroom_credit' }" class="btn btn-info"
            >Credit</router-link>

        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Debit</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-2">
                      <h3 class="box-title">Debit table</h3>
                    </div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        v-model="search"
                        @keyup="searchCredit"
                        placeholder="purpose,commens...."
                      />
                    </div>
                    <div class="col-lg-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <date-picker
                            autocomplete="off"
                            v-model="start_date"
                            :config="options"
                            placeholder="start_date"
                            @change="filter"
                          ></date-picker>
                        </div>
                        <div class="col-lg-6">
                          <date-picker
                            autocomplete="off"
                            v-model="end_date"
                            :config="options"
                            placeholder="end_date"
                          ></date-picker>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-1">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="debitList"
                      >
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                      </select>
                    </div>
                    <div class="col-lg-1">
                      <button class="btn btn-primary btn-sm" @click="clearAll">
                        <i class="fa fa-refresh"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-hover table-bordered table-striped table-centered ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                           <th scope="col">Date</th>

                        <th scope="col">Invoice No</th>
                         <th scope="col">Purpose</th>
                          <th scope="col">Debit From</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Insert</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(debit, index) in debits.data" :key="index">
                        <td scope="row">{{ index + 1 }}</td>
                          <td style="width:90px;">{{formatDate(debit.date) }}</td>

                         <td>{{"DB-"+debit.id }}</td>
                         <td> {{debit.purpose}} </td>
                          <td>{{ debit.debit_from ? debit.debit_from : "Not Recorded" }}</td>
                        <td>{{ debit.amount }}</td>
                        <td>{{ debit.comment }}</td>

                        <td>{{ debit.manager.name }}</td>
                        <td>

                          <router-link
                            :to="{
                              name: 'showroom_debit_edit',
                              params: { id: debit.id },
                            }"
                            class="btn btn-success btn-sm"
                            ><i class="fa fa-edit"></i
                          ></router-link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="debits"
                        @pagination-change-page="debitList"
                        :limit="4"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ debits.from }}</strong> to
                        <strong>{{ debits.to }}</strong> of total
                        <strong>{{ debits.total }}</strong> entries
                      </p>
                    </div>
                  </div>
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
import navbar from '../Navbar.vue';
export default {
  components: { navbar },
  created() {
    setTimeout(() => {
      this.debitList();
    }, 100);
    // this.getResults();
  },
  data() {
    return {
      debits: {},
      loading: true,
      current_date: "",
      item: 20,
      search: "",
      status: "all",

      //for date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },

      start_date: "",
      end_date: "",
       basePath: this.$store.getters.image_base_link,

    };
  },
  methods: {
    debitList(page = 1) {
      this.loading = true;
      axios
        .get("/api/showroom/debits?page=" + page, {
          params: {
            item: this.item,
            status: this.status,
            search: this.search,
            start_date: this.start_date,
            end_date: this.end_date,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.debits = resp.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchCredit() {
      if (this.search.length >= 2) {
        this.status = "search";
        this.debitList();
      } else {
        this.status = "all";
        this.debitList();
      }
    },
    filter() {
      console.log("hell");
      this.status = "filter";
      this.debitList();
    },
    clearAll(){
        this.$Progress.start()
        this.status="all";
        this.search='',
        this.start_date='',
        this.end_date='',
        this.debitList();
         this.$Progress.finish()
    },
     //method initial for  get current date
    pDate() {
      //current date
      let d = new Date();

      //current mount
      //current day
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let output =
        d.getFullYear() +
        "-" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "-" +
        (("" + day).length < 2 ? "0" : "") +
        day;
      this.current_date = output;
    },
    exportDebit(){

       window.open('/api/export/debit','_blank');
    },
     formatDate(date) {
      let origina_date = date.split("-");
      return `${origina_date[2]}-${origina_date[1]}-${origina_date[0]}`;
    },
  },

  watch: {
    start_date: function () {
      this.status = "filter";
      this.debitList();
    },
    end_date: function () {
      this.status = "filter";
      this.debitList();
    },
  },
  mounted() {
      this.pDate();
  },
};
</script>

<style scoped>
</style>
