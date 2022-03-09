<template>
    <div>
        <admin-main></admin-main>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'colorAdd'}" class="btn btn-primary"><i class="fa fa-plus"></i></router-link>

                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">color</li>
                </ol>
            </section>
            <section class="content">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-lg-offset-1">
                            <div class="box box-primary">
                                <div class="box-header with-border text-center">
                                   <h3 class="box-title">color table</h3>
                                </div>
                                <div class="box-body">
                                    <table class="table text-center table-striped table-bordered table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">name</th>
                                            <th scope="col">status</th>
                                            <th scope="col">action</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <h1 v-if="loading"><i class="fa fa-spin fa-spinner"></i></h1>
                                        <tr v-for="(color,index) in colors" v-else>
                                            <td scope="row">{{index+1}}</td>
                                            <td>{{color.name}}</td>
                                            <td>
                                                <span v-if="color.status==1" class="badge">Active</span>
                                                <span v-else class="badge">De-active</span>
                                            </td>
                                            <td>
                                                <a class="btn btn-sm btn-warning" title="De-active"
                                                   @click="deActive(color)"
                                                   v-if="color.status==1"><i class="fa fa-ban"></i></a>
                                                <a class="btn btn-sm btn-primary" title="active" @click="active(color)"
                                                   v-else><i
                                                    class="fa fa-check"></i></a>

                                                 <router-link class="btn btn-sm btn-success" :to="{name:'colorEdit',params:{id:color.id}}"><i class="fa fa-edit"></i></router-link>
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
            setTimeout(() => {
                this.color();
            }, 500)
        },
        data() {
            return {
                colors: {},
                loading: true,
                search: '',
            }
        },
        methods: {

            color() {
                axios.get('/list/color')
                    .then((resp) => {
                        if (resp.data.status == 'SUCCESS') {
                            this.colors = resp.data.colors;
                            this.loading = false
                        } else {
                            this.$toasted.show('something went to wrong', {
                                type: "error",
                                position: 'top-center',
                                duration: 5000
                            });
                        }
                    })
                    .catch((error) => {
                        this.$toasted.show('something went to wrong', {
                            type: "error",
                            position: 'top-center',
                            duration: 4000
                        });
                    })
            },

            active(color) {
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

                        axios.get('/active/color/' + color.id)
                            .then((resp) => {
                                if (resp.data.status == 'SUCCESS') {
                                    this.color();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('something went to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                this.$toasted.show('something went to wrong', {
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
            
            deActive(color) {
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

                        axios.get('/deActive/color/' + color.id)
                            .then((resp) => {
                                if (resp.data.status == 'SUCCESS') {
                                    this.color();
                                    this.$toasted.show(resp.data.message, {
                                        position: 'top-center',
                                        type: 'success',
                                        duration: 4000
                                    });
                                } else {
                                    this.$toasted.show('something went to wrong', {
                                        position: 'top-center',
                                        type: 'error',
                                        duration: 4000
                                    });
                                }

                            })
                            .catch((error) => {
                                this.$toasted.show('something went to wrong', {
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

<style scoped>

</style>
