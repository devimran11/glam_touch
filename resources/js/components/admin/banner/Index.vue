 <template>
    <div>
        <admin-main></admin-main>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'banner_add'}" class="btn btn-primary"><i class="fa fa-plus"></i></router-link>

                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">banner</li>
                </ol>
            </section>
            <section class="content">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-11">
                            <div class="box box-primary">
                                <div class="box-header with-border text-center">
                                    <h3 class="box-title"> Banners </h3>
                                </div>
                                <div class="box-body">
                                    <table class="table text-center table-brodered table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Banner Placement</th>
                                            <th scope="col">status</th>
                                            <th scope="col">action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <h1 v-if="loading"><i class="fa fa-spin fa-spinner"></i></h1>
                                        <tr v-for="(banner,index) in banners" :key="index" v-else>
                                            <td scope="row">{{index+1}}</td>
                                            <td>
                                                <img :src="basePath+banner.banner"
                                                     style="width: 100px;" alt="banner Image">
                                            </td>
                                            <td> {{ banner.placement }} </td>
                                            <td>
                                                <span v-if="banner.status==1" class="badge">Active</span>
                                                <span v-else class="badge">De-active</span>
                                            </td>
                                            <td>
                                                <router-link class="btn btn-sm btn-success" :to="{ name : 'banner_edit', params :{ id : banner.id }}"> <i class="fa fa-edit"> </i></router-link>
                                                <a class="btn btn-sm btn-danger" @click="destroy(banner)"><i class="fa fa-trash"></i></a>

                                                <a class="btn btn-sm btn-warning" title="De-active" @click="deActive(banner)"
                                                   v-if="banner.status==1"><i class="fa fa-ban"></i></a>
                                                <a class="btn btn-sm btn-primary" title="active" @click="active(banner)"
                                                   v-else><i
                                                    class="fa fa-check"></i></a>

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
          this.banner();
        },
        data() {
            return {
                banners: '',
                loading: true,
                search: '',
                basePath:this.$store.state.image_base_link,
            }
        },
        methods: {

            banner() {
                axios.get('/api/banner/list')
                    .then((resp) => {
                        if (resp.data.status == 'OK') {
                            this.banners = resp.data.banners;
                            this.loading = false
                        } else {
                            this.$toasted.show('something  went to wrong', {
                                type: "error",
                                position: 'top-center',
                                duration: 5000
                            });
                        }
                    })
            },

            active(banner) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want active this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {

                        axios.get('/api/banner/item/active/' + banner.id)
                            .then((resp) => {
                                if (resp.data.status == 'OK') {
                                    this.banner();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('something  went to wrong', {
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
            deActive(banner) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want de-active this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {

                        axios.get('/api/banner/item/de-active/' + banner.id)
                            .then((resp) => {
                                if (resp.data.status == 'OK') {
                                    this.banner();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('something  went to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                this.$toasted.show('something  went to wrong', {
                                    position: 'top-center',
                                    type: 'error',
                                    duration: 4000
                                });
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
            destroy(banner) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Delete this banner!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {

                        axios.get('/api/banner/item/delete/' + banner.id)
                            .then((resp) => {
                                //console.log(resp)
                                if (resp.data.status == 'OK') {
                                    this.banner();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('something  went to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                console.log(error)
                                this.$toasted.show('something  went to wrong', {
                                    position: 'top-center',
                                    type: 'error',
                                    duration: 4000
                                });
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


        }
    }

</script>
