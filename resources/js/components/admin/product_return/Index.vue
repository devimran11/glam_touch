<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a  href="#" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">product put back</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row ">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Product Put Back </h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped text-center ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Showroom </th>
                        <th scope="col">Product</th>
                        <th scope="col"> Quantity </th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(transaction, index) in transactions.data"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ transaction.showroom.name }}</td>
                        <td>{{ transaction.product.name }} - {{ transaction.product.product_code  }}   </td>
                        <td> {{ transaction.quantity }} </td>
                        <td>
                          <span v-if="transaction.status==0" class="badge badge-warning"> Pending </span>
                          <span v-else class="badge badge-success"> Approved </span>
                        </td>
                        <td>

                          <button @click="receiveTransaction(transaction.showroom.id,transaction.product.id, transaction.id)"  v-if="transaction.status==0 && $can('Showroom Controller')" class="btn btn-xs btn-success"> Receive </button>
                         <button  @click="destoryTransaction(transaction.id)"  v-if="transaction.status==0 && $can('Showroom Controller')" class="btn btn-xs btn-danger"> Destroy </button>
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
    this.returnList();
  },
  data() {
    return {
      transactions:{},
      loading: true,
      showrooms:"",
    };
  },
  methods: {
    returnList(page =1) {
      axios.get("/api/showroom/product/return/list?page="+page)
      .then((resp) => {
      //  console.log(resp);
        if (resp.data.status == "OK") {
          this.transactions = resp.data.transactions;
          this.loading = false;
        }
      });
    },

 receiveTransaction(showroom_id, product_id, transaction_id){
    Swal.fire({
        title: 'Are you sure?',
        text: "Receive this transaction!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.value) {
            axios.get('/api/recieve/showroom/return/product/'+ showroom_id + '/'+ product_id + '/'+transaction_id)
                .then((resp) => {
                    console.log(resp)
                    if (resp.data.status == 'OK') {
                        this.returnList();
                        this.$toasted.show(resp.data.message, {
                            position: 'top-center',
                            type: 'success',
                            duration: 4000
                        });
                    } else {
                        this.$toasted.show('some thing went to wrong', {
                            position: 'top-center',
                            type: 'error',
                            duration: 4000
                        });
                    }

                })
            } else {
            this.$toasted.show('Ok ! no action here', {
                position: 'top-center',
                type: 'info',
                duration: 3000
            });
        }
    })
 },



 destoryTransaction($id){
    Swal.fire({
        title: 'Are you sure?',
        text: "Destory this transaction!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.value) {
            axios.get('/api/cancel/showroom/return/product/'+ $id)
                .then((resp) => {
                    //console.log(resp)
                    if (resp.data.status == 'OK') {
                        this.returnList();
                        this.$toasted.show(resp.data.message, {
                            position: 'top-center',
                            type: 'success',
                            duration: 4000
                        });
                    } else {
                        this.$toasted.show('some thing went to wrong', {
                            position: 'top-center',
                            type: 'error',
                            duration: 4000
                        });
                    }

                })
            } else {
            this.$toasted.show('Ok ! no action here', {
                position: 'top-center',
                type: 'info',
                duration: 3000
            });
        }
    })
 },


  },

};
</script>

<style scoped>
</style>
