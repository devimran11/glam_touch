<template>
  <div class="wrapper-wide">


    <frontend-header></frontend-header>

      <div class="container">

            <div class="row">
              <div class="col lg-12 col-md-12 col-sm-12 text-center">
                <h3 class="heading"><span>Your Wishlist Items </span></h3>
              </div>
            </div>

            <div v-if="wishlistContent.item_count==0" class="row ">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white shadow">
                             <div class="null_wishlist_heading text-center">
                                 <img  :src="base_url+'images/basic_img/heart.png'" />
                              <br>
                              <h4>YOUR WISHLIST IS EMPTY! </h4>

                              <div class="instruction">
                               <h4> HEAR IT!</h4>
                               <p>Store everything you love on page </p>
                                <ul>
                                  <li>Think about it before purchasing it</li>
                                  <li>Get notification about out-of-stock item </li>
                                </ul>
                              </div>
                             </div>

                </div>
            </div>

          <div v-else class="row">
           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 wishlist_content_container bg-white shadow">
               <table class="table text-center table-bordered table-striped table-hover ">
                 <thead>
                   <tr>
                     <th width="40%">Product</th>
                     <th width="20%">Price</th>
                     <th width="20%">Availability </th>
                     <th width="20%">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr v-for="(item,index) in wishlistContent.content" :key="index">
                     <td>
                       <div class="wishlist_product_container">
                         <img :src="thumbnail_base_url+item.options.image" >
                         <p> {{ item.name }} </p>
                       </div>
                     </td>
                     <td>
                       <div class="wishlist_price_container">
                           <p> &#2547;{{  item.price }} </p>
                           <p class="w_old_price" v-if="item.options.old_price> item.price"> &#2547;{{  item.options.old_price }} </p>
                        </div>
                      </td>
                      <td>
                        <div class="wishlist_stock_container">
                          <p v-if="item.options.stock > 0"> Available  </p>
                          <p v-else> stock out  </p>
                        </div>
                      </td>
                      <td>
                         <div class="wishlist_action_container">
                           <router-link class="btn wishlist_cart_btn" :to="{name:'single',params:{slug:item.options.slug}}" > Add To Cart </router-link>
                            <button class="wishlist_close_btn" @click="removeItem(index)" ><i class="fa fa-close"></i></button>
                         </div>
                      </td>
                   </tr>
                 </tbody>
               </table>
           </div>
          </div>

      </div>


    <frontend-footer></frontend-footer>
  </div>
</template>
<script>

export default {
  created() {
    this.$store.dispatch('wishlistContent');
  },
  data() {
    return {
      thumbnail_base_url: this.$store.state.thumbnail_img_base_link,
      base_url: this.$store.state.image_base_link,
    };
  },
  methods: {

    removeItem(rowId) {
      axios.get("/_public/api/wishlist/item/remove/"+rowId)
        .then((resp) => {
          if (resp.data.status=='OK') {
              this.$store.dispatch('wishlistContent');
              this.$toasted.show(resp.data.message, {
                  type: "success",
                  position: "top-center",
                  duration: 2000,
              });
            }
        });
    },
  },
  computed:{
   wishlistContent() {
      return this.$store.getters.wishlistContent;
    },
  },

};
</script>

<style scoped>


.null_wishlist_heading{
  margin-top: 40px;
}

.null_wishlist_heading img{
   height:100px;
}

.instruction {
    text-align: left;
    margin-left: 40%;
    margin-top: 30px;
}

.instruction ul {
   margin-left: -20px;
}

.instruction ul li{
   list-style-type: disc !important;
}

.wishlist_stock_container{
   margin: 20px;
}
.wishlist_action_container{
   display: flex;
   margin-top: 20px;
}


.wishlist_cart_btn{
    width: 60%;
    height: 36px;
    color: #000;
    box-shadow: 0 1pt 12pt rgb(150 165 237);
    font-size: 14px;
    font-family: monospace;
}

.wishlist_close_btn {
    height: 36px;
    padding: 0px 10px;
    margin-left: 15px;
}

th{
  text-align: center !important;
}
.wishlist_product_container{
  display: flex;
}
.wishlist_product_container>img{
  width: 80px;
  height:85px;
}
.wishlist_product_container>p{
  padding:15px 10px;
  font-size: 14px;
}

.wishlist_price_container {
    display: flex;
    margin: 20px 50px;
}

.wishlist_price_container p {
    font-size: 14px;
}

.w_old_price{
  text-decoration: line-through;
  color: red;
  padding:0px 10px;
}



@media screen and (max-width:768px) {

  .wishlist_content_container{
    overflow-x: scroll !important;
  }


  .wishlist_product_container>img{
    width: 50px;
    height:55px;
  }

  .wishlist_product_container>p{
    padding:0px 5px;
    font-size: 12px;
  }


  .wishlist_price_container p {
      font-size: 12px;
  }


  .wishlist_action_container{
    margin-top: 8px;
  }


  .wishlist_cart_btn{
      width: 65%;
  }

  .instruction{
    margin-left: 12%;
  }

}

</style>