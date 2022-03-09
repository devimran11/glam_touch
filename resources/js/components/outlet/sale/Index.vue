<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'showroom_sale_add' }"
            class="btn btn-primary"
          >
            <i class="fa fa-plus"></i>
          </router-link>
          <router-link
            :to="{ name: 'showroom_sale' }"
            class="btn btn-sm btn-success"
            >Today</router-link
          >
          <router-link
            :to="{ name: 'showroom_retail_sale' }"
            class="btn btn-sm btn-success"
            >Retail Sale
          </router-link>
          <router-link
            :to="{ name: 'showroom_whole_sale' }"
            class="btn btn-sm btn-success"
            >Whole Sale
          </router-link>

          <router-link
            :to="{ name: 'showroom_sale' }"
            class="btn btn-sm btn-success active"
            >All</router-link
          >
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">All sale</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-box text-center">
                  <h3 class="box-title">All Sales Records</h3>
                  <div class="row">
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        @keyup="saleSearch"
                        v-model="search"
                        placeholder="Enter Invoice,customer_phone"
                      />
                    </div>
                    <div class="col-lg-4">
                      <div class="row">
                        <div class="col-lg-6">
                          <date-picker
                            autocomplete="off"
                            v-model="start_date"
                            placeholder="start-date"
                            :config="options"
                          ></date-picker>
                        </div>
                        <div class="col-lg-6" style="margin-left: -20px">
                          <date-picker
                            autocomplete="off"
                            v-model="end_date"
                            placeholder="end-date"
                            :config="options"
                          ></date-picker>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-2">
                         <a class="btn btn-sm btn-success"  @click="exportPdf" > <i class="fa fa-download"></i> Export PDF Of Sales Record</a>
                    </div>

                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        v-if="start_date.length > 0"
                        @change="salesList"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                      </select>
                      <select
                        class="form-control"
                        v-model="item"
                        v-else
                        @change="salesList"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                      </select>
                    </div>
                    <div class="col-lg-1">
                      <button
                        @click="resetAll"
                        type="button"
                        class="btn btn-primary btn-sm"
                      >
                        <i class="fa fa-refresh"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table
                    class="
                      table
                      table-striped
                      table-centered
                      table-hover
                      table-bordered
                    "
                  >
                    <thead>
                      <tr>
                        <th>Customer Information</th>
                        <th>Invoice</th>
                        <th>Sale Type</th>
                        <th>Payment</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr
                        v-else
                        v-for="(sale, index) in sales.data"
                        :key="index"
                      >
                        <td>
                          {{ sale.customer_name ? sale.customer_name : "" }}
                          <p>
                            <strong>
                              {{
                                sale.customer_phone ? sale.customer_phone : ""
                              }}
                            </strong>
                          </p>
                          <p>{{
                            sale.customer_address ? sale.customer_address : ""
                          }}</p>
                        </td>

                        <td>{{  sale.invoice_no }}</td>
                        <td>
                          <span
                            v-if="sale.sale_type == 1"
                            class="badge"
                          >
                            retail sale
                          </span>
                          <span v-else class="badge ">
                            whole sale
                          </span>
                        </td>
                        <td>
                          Total: <strong> {{ parseInt(sale.total) }} </strong>
                          <br />
                          Paid: <strong> {{ parseInt(sale.paid) }} </strong>
                          <br />
                          Due:
                          <strong> {{ parseInt(sale.due_amount) }} </strong>
                        </td>

                        <td>{{ sale.created_at }}</td>
                        <td>
                          <router-link
                            class="btn"
                            :to="{
                              name: 'showroom_sale_view',
                              params: { id: sale.id },
                            }"
                          >
                            <i class="fa fa-lg fa-eye"></i>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="sales"
                        @pagination-change-page="salesList"
                        :limit="5"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 m t-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ sales.from }}</strong> to
                        <strong>{{ sales.to }}</strong> of total
                        <strong>{{ sales.total }}</strong> entries
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
import navbar from "../Navbar.vue";
export default {
  components: { navbar },

  created() {
    this.salesList();
  },
  data() {
    return {
      sales: {},
      loading: true,
      item: 30,
      search: "",
      start_date: "",
      end_date: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      status: "all",
      type: "all",
      page: 1,
      selected: false,
      select_sale_id: [],
      bulk_status: "all",
      bulkActionType: "0",
      courier_id: "",
    };
  },
  methods: {
    //get sale list
    salesList(page = 1) {
      //start progress bar
      this.$Progress.start();
      axios
        .get("/api/showroom/sales/list?page=" + page, {
          params: {
            status: this.status,
            item: this.item,
            type: this.type,
            start_date: this.start_date,
            end_date: this.end_date,
            search: this.search,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.$Progress.finish();
          //only success resp
          if (resp.data.status == "SUCCESS") {
            this.sales = resp.data.sales;
            this.page = this.page + 1;
            this.loading = false;
          }
          //else show a error
          else {
            this.$toasted.show("some thing went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        });
    },


   exportPdf(){
       if (this.start_date=='' || this.end_date=='') {
          alert('Please select date range');
          return ;
       }
       window.open('/api/export/sales/record/'+this.start_date+'/'+this.end_date);
   },


    //method initial for sale search
    saleSearch() {
      //if search minimum 2
      if (this.search.length > 2) {
          this.salesList();
      }else{
          this.salesList();
      }
    },

    //method initial for rest all data, or sale arrow
    resetAll() {
      location.reload();
    },

    //method initial for select all
    selectAll() {
      //first idnetify select true or false
      //we need a tooglee all select box

      //if select true we make selected false, or select true
      if (this.selected == true) {
        this.selected = false;
      } else {
        this.selected = true;
      }

      //elemnt find by the class name
      let checkBoxClass = document.getElementsByClassName("select-all");

      for (let i = 0; i < checkBoxClass.length; i++) {
        //if select active then element set attribute check==true
        //element set attribute check==false
        if (this.selected == true) {
          checkBoxClass[i].checked = true;
        } else {
          checkBoxClass[i].checked = false;
        }
      }

      //at last push sale id in selected_sale_id arrow....
      //and agin check selected true or false.....
      if (this.selected == true) {
        for (let i = 0; i < this.sales.data.length; i++) {
          this.select_sale_id.push(this.sales.data[i].id);
        }
      } else {
        this.select_sale_id = [];
      }
    },

    //method initial for a bulk action
    selectBulkAction() {
      if (this.select_sale_id.length <= 0) {
        Swal.fire({
          type: "warning",
          text: "Please select at least one row",
        });
        return;
      }
      let action_type = this.bulkActionType;
      if (action_type == "INVOICE PRINT") {
        window.open(
          "/api/showroom/sale/invoice/print/" + this.select_sale_id,
          "_blank"
        );
      }

      if (action_type == "EXPORT SELECT ITEM") {
        // alert('export select sale');
        window.open("/export/selected/item/" + this.select_sale_id, "_blank");
      }
    },

    labelPrint() {
      window.open("", "_self", "width=600,height=600");
    },

    exportsale() {
      if (!this.courier_id) {
        alert("please select a specific courier");
        return;
      }
      if (!this.status) {
        alert("Please select a status");
        return;
      }

      window.open("/sale/export/" + this.status + "/" + this.courier_id);
    },


  },
  watch:{
    start_date: function  (value) {
        if (value.length > 1) {
           this.salesList();
        }
    },
    end_date: function  (value) {
        if (value.length > 1) {
           this.salesList();
        }
    }
  }
};
</script>

<style>
.sales-heading {
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #000;
  margin-bottom: 10px;
}
</style>
