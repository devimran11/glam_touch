<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'productAdd' }" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Product Table</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-4 text-center">
                      <h4>Parent Products</h4>
                    </div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        placeholder="search with product code || product name "
                        v-model="search"
                        @keyup="searchProducts()"
                      />
                    </div>
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="productList()"
                      >
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="status"
                        @change="productList"
                      >
                        <option value="all">All</option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="3">Deny</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table
                    class="
                      table
                      text-center
                      table-striped table-hover table-bordered table-centered
                    "
                  >
                    <thead>
                      <tr>
                        <th width="30%">product name</th>
                        <th width="10%">price</th>
                        <th width="10%">discount</th>
                        <th width="10%">sale price</th>
                        <th width="10%">wallet point</th>
                        <th width="20%">status</th>
                        <th width="10%">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr v-for="(product, index) in products.data" v-else>
                        <td> <router-link style="color:blue;font-size:15px;" :to="{name:'product_child',params:{id:product.id}}">  {{ product.name }} </router-link></td>

                        <td>BDT {{ product.price }}</td>
                        <td>
                          <span class="badge badge-warning">BDT {{
                            product.discount ? product.discount : "0"
                          }}</span>
                        </td>
                        <td>BDT {{ product.sale_price }}</td>

                        <td>BDT {{ product.wallet_point }}</td>

                        <td>
                          <span
                            class="badge badge-success"
                            v-if="product.status == 1"
                            >Approved</span
                          >
                          <span
                            class="badge badge-primary"
                            v-else-if="product.status == 2"
                            >Pending</span
                          >
                          <span class="badge badge-warning" v-else>Deny</span>
                          <br />
                          <span
                            style="min-width: 70px"
                            class="badge badge-success"
                            v-if="product.show_home_page == 1"
                          >
                            Publish
                          </span>
                          <span class="badge badge-warning" v-else>
                            Unpublish
                          </span>
                        </td>

                        <td>
                          <a
                            @click="changeDisplay(product)"
                            class="btn-xs btn-success action_bar_btn"
                          >
                            -- <i class="fa fa-bars"></i>--
                          </a>

                          <div class="dropdown-action" :id="product.id">
                            <a
                              class="
                                dropdown-item
                                btn btn-success btn-sm
                                dropbtn
                              "
                              v-if="product.status != 1"
                              @click="approved(product)"
                              >Approved</a
                            >

                            <a
                              class="
                                dropdown-item
                                btn btn-primary btn-sm
                                dropbtn
                              "
                              v-if="product.status != 2"
                              @click="pending(product)"
                              >Pending</a
                            >
                            <a
                              class="
                                dropdown-item
                                btn btn-warning btn-sm
                                dropbtn
                              "
                              v-if="product.status != 3"
                              @click="deny(product)"
                              >Deny</a
                            >

                            <a
                              class="dropdown-item btn btn-info btn-sm dropbtn"
                              @click="copy(product.id)"
                              >Copy</a
                            >

                            <router-link
                              :to="{
                                name: 'productEdit',
                                params: { id: product.id },
                              }"
                              class="btn btn-success btn-sm dropbtn"
                              >Edit</router-link
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="products"
                        @pagination-change-page="productList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ products.from }}</strong> to
                        <strong>{{ products.to }}</strong> of total
                        <strong>{{ products.total }}</strong> entries
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
import { Form, HasError, AlertError } from "vform";
export default {
  created() {
    this.productList();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      products: {},
      loading: true,
      search: "",
      item: 50,
      status: "all",
      base_url: this.$store.state.image_base_link,

      //for bulk action
      form: new Form({
        products_id: [],
        start_date: "",
        end_date: "",
      }),
      selected: false,
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true,
      },
    };
  },
  methods: {
    productList(page = this.$route.params.page_no) {
      this.$Progress.start();
      axios
        .get("/list/product?page=" + page, {
          params: {
            status: this.status,
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.products;
          window.history.pushState("", "products", "/backend/products/" + page);
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
          this.$Progress.finish();
        });
    },

    purchasePrice(items) {
      if (items.length > 0) {
        let total_price = 0;
        let total_purchase_time = 0;
        items.forEach((item) => {
          total_price += parseInt(item.price);
          total_purchase_time += 1;
        });
        let average_price = total_price / total_purchase_time;
        return average_price.toFixed(0);
      } else {
        return 0;
      }
    },

    copy($product_id) {
      let copy_items = prompt(" item of copy ?");
      if (copy_items < 1) {
        return;
      }
      axios
        .get("/api/copy/product/" + $product_id + "/" + copy_items)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "success") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 3000,
            });
            this.productList();
          }
        });
    },

    approved(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/approved/product/" + product.id)
            .then((resp) => {
              //  console.log(resp)
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something  went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              // console.log(error)
              this.$toasted.show("something  went to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    pending(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't pending this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/pending/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something  went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("something  went to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    deny(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't deny this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/deny/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("something  went to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("something  went to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    stockUpdate(product) {
      let stock = prompt("How many stock you went to update ?");
      console.log(stock);
      axios
        .post("/stock/update/product/" + product.id, {
          stock: stock,
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.productList();
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 4000,
            });
          } else {
            this.$toasted.show("something  went to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("ok ! no action here", {
            position: "top-right",
            type: "info",
            duration: 4000,
          });
        });
    },

    searchProducts() {
      if (this.search.length > 1) {
        axios
          .get("/api/search/seggested/product/with/name/code/" + this.search)
          .then((resp) => {
            console.log(resp);
            if (resp.data) {
              console.log(resp.data);
              this.products = resp.data;
            } else {
              this.productList();
            }
          });
      } else {
        this.productList();
      }
    },

    changeDisplay(product) {
      let element = document.getElementById(product.id);
      element.classList.toggle("dropbtn-active");
    },
    print(productId) {
      let how_many_times = prompt(
        "How many time you went to print this product barcode?"
      );
      let url = "/product/print/barcode/" + productId + "/" + how_many_times;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.dropbtn {
  width: 100% !important;
  margin-bottom: 5px !important;
}
.dropbtn-active {
  display: block !important;
}
.dropdown-action {
  display: none;
  width: 90px;
  position: absolute;
}

.action_bar_btn {
  font-size: 18px !important;
}
</style>
