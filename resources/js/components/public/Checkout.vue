<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>

    <frontend-header :categories="categories"></frontend-header>

    <div id="container">
      <div class="container">
        <div class="row" v-if="cart.total>0">
          <!--Middle Part Start-->
          <div id="content">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="checkout-title">
                  <h3>CHECKOUT</h3>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="checkout-login">
                  <div class="checkout-line"></div>
                  <div class="login">
                    <div class="return-customer">
                        <p>Returning customer? <strong>Click here to login</strong></p>
                    </div>
                    <div class="facebook-login">
                        <button class="btn btn-sm facebook"> <i class="fa fa-facebook-square fa-lg"></i> LOGIN WITH FACEBOOK </button>
                    </div>
                    <div class="google-login">
                        <button class="btn btn-sm google"> <i class="fa fa-google fa-lg"></i>LOGIN WITH GOOGLE</button>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div class="custom-box">
                  <h3 class="title">DELIVERY AND & BILLING INFO</h3>
                  <form @submit.prevent="submitOrder">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="name">Name<b class="text-danger">*</b></label>
                        <input
                          name="name"
                          required
                          placeholder="Customer Name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          v-model="form.name"
                          autofocus
                        />
                        <has-error :form="form" field="name"></has-error>
                      </div>
                     </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="mobile_no">Phone Number <b class="text-danger">*</b></label>
                        <input
                          
                          name="mobile_no"
                          placeholder="Phone Number"
                          class="form-control"
                          maxlength="11"
                          minlength="11"
                          :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                          v-model="form.mobile_no"
                          required
                        />
                        <has-error :form="form" field="mobile_no"></has-error>
                      </div>
                     </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="input-password">Address <b class="text-danger">*</b></label>
                        <input
                          name="address"
                          placeholder="Detail Address"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('address') }"
                          v-model="form.address"
                          @keyup="validation"
                        >
                        <has-error :form="form" field="address"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="input-email">District <b class="text-danger">*</b></label>
                        <select
                          name="city"
                        :class="{ 'is-invalid': form.errors.has('city') }"
                          class="form-control"
                          v-model="form.city"
                          @change="selectCity"
                        >
                          <option value="" selected disabled>Select District </option>
                          <option
                            value
                            v-for="(city,index) in cities"
                            :key="index"
                            :value="city.id"
                          >{{city.name}}</option>
                        </select>
                        <has-error :form="form" field="city"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Thana <b class="text-danger">*</b></label>
                        <select @change="validation" class="form-control" name="sub_city"  :class="{ 'is-invalid': form.errors.has('sub_city') }" v-model="form.sub_city">
                          <option disabled value="">Select Thana</option>
                          <option v-if="sub_cities.length > 0 " v-for="sub_city in sub_cities" :key="sub_city.id" :value="sub_city.id">{{sub_city.name}}</option>
                        </select>
                        <has-error :form="form" field="sub_city"></has-error>
                      </div>
                    </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email <b class="text-danger">*</b></label>
                          <input type="email" class="form-control" placeholder="Email Address">
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label>ORDER NOTE(OPTIONAL)</label>
                          <input type="email" class="form-control" placeholder="Additional Information(Anything you want to add)">
                        </div>
                      </div>
                  </form>
                  <div class="payment">
                    <h4 class="payment-title">PAYMENT METHOD</h4>
                    <div class="payment-line"></div>
                    <div class="payment-method">
                      <div class="col-md-6">
                        <div class="form-check" style="display:flex;">
                          <div class="cash_input">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                          </div>
                          <div class="cash_radio">
                            <label class="form-check-label" for="flexRadioDefault1"> Cash On Delivery </label>
                          </div>
                        </div>
                        <img class="img-fluid" src="/storage/images/payment/cash_on_delivery.png" width="100%" height="50px;">
                      </div>

                    <div class="col-md-6">
                        <div class="form-check" style="display:flex;">
                          <div class="cash_input">
                            <input class="form-check-input pay" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                          </div>
                          <div class="cash_radio">
                            <label class="form-check-label pay" for="inlineRadio1"> Pay Online</label>
                          </div>
                        </div>
                      <img class="img-fluid" src="/storage/images/payment/online_payment.png" width="100%">
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-md-5 col-xs-12 col-sm-12">
                <div class="custom-box">
                  <h3 class="title">ORDER OVERVIEW</h3>
                  <p class="cart-items">YOUR CART: 3 ITEMS</p>
                  <br>
                  <hr>
                  <div class="total_carts_products">

                  
                  <div class="carts-products">
                    <div class="product-img">
                      <img class="img-fluid" src="/storage/images/product_view/product-1.png" width="100%">
                    </div>
                    <div class="product-content">
                        <span class="product-title">Hijab Gown Purple Color <i class="fa fa-times" aria-hidden="true"></i></span>
                        <p class="product_price">
                          <span class="price_old">
                            &#2547; 2525</span >
                            <span class="price_new"> &#2547; 25222</span>
                        </p>
                        <span class="product-size">M</span>
                        <div class="qty_container">
                          <p>
                            Quantity:
                          </p>
                            <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="form-control input_quantity"
                          />
                          <i class="fa fa-check-circle fa-lg" style="color: #626365"></i>
                      </div>
                    </div>
                  </div>

                  <div class="carts-products">
                    <div class="product-img">
                      <img class="img-fluid" src="/storage/images/product_view/product-2.png" width="100%">
                    </div>
                    <div class="product-content">
                        <span class="product-title">Hijab Gown Purple Color <i class="fa fa-times" aria-hidden="true"></i></span>
                        <p class="product_price">
                          <span class="price_old">
                            &#2547; 2525</span >
                            <span class="price_new"> &#2547; 25222</span>
                        </p>
                        <span class="product-size">M</span>
                        <div class="qty_container">
                          <p>
                            Quantity:
                          </p>
                            <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="form-control input_quantity"
                          />
                          <i class="fa fa-check-circle fa-lg" style="color: #626365"></i>
                      </div>
                    </div>
                  </div>

                  <div class="carts-products">
                    <div class="product-img">
                      <img class="img-fluid" src="/storage/images/product_view/product-1.png" width="100%">
                    </div>
                    <div class="product-content">
                        <span class="product-title">Hijab Gown Purple Color <i class="fa fa-times" aria-hidden="true"></i></span>
                        <p class="product_price">
                          <span class="price_old">
                            &#2547; 2525</span >
                            <span class="price_new"> &#2547; 25222</span>
                        </p>
                        <span class="product-size">M</span>
                        <div class="qty_container">
                          <p>
                            Quantity:
                          </p>
                            <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="form-control input_quantity"
                          />
                          <i class="fa fa-check-circle fa-lg" style="color: #626365"></i>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="cart_total_calculation">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>SUB TOTAL</td>
                          <td>
                            <span v-if="form.shipping_cost">&#2547; {{form.total}}</span>
                            <span v-else>&#2547; 2000</span>
                          </td>
                        </tr>
                         <tr v-if="form.coupon_discount > 0">
                          <td>Coupon Discount</td>
                          <td>
                            :
                            <span v-if="form.coupon_discount">&#2547;{{form.coupon_discount}}</span>
                          </td>
                        </tr>

                         <tr v-if="form.premium_member_discount > 0">
                          <td>Membership Discount</td>
                          <td>
                            :
                            <span v-if="form.premium_member_discount">&#2547;{{form.premium_member_discount}}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>DELIVERY CHARGE</td>
                          <td>
                            
                            <span v-if="form.shipping_cost">&#2547;{{ form.shipping_cost }}</span>
                            <span v-else>&#2547; 2000</span>
                          </td>
                        </tr>
                        <tr>
                          <td>TOTAL</td>
                          <td>
                                 
                            <span
                              v-if="form.shipping_cost"
                            >&#2547;{{(parseInt(form.total.replace(',','') - parseInt(form.coupon_discount ) - parseInt(form.premium_member_discount)   )) + parseInt(form.shipping_cost)}}</span>
                            <span v-else>&#2547; 2000</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="promo_code" >
                  <div class="coupon">
                   
                    <h4> <i class="fa fa-gift fa-2x" aria-hidden="true"></i> Have a Coupon or Promo Code?</h4>
                    <input class="form-control coupon_code" type="text" placeholder="Coupon Code Here">
                    <button class="btn btn-secondary code_btn" type="submit">APPLY</button>
                  </div>
                  <div class="place-order">
                    <button class="btn btn-secondary place_btn" type="submit">PLACE ORDER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="empty-cart">
            <h4 class="text-uppercase">your cart is empty</h4>
            <img class="empty_cart_icon" src="https://mohasagor.com/public/storage//images/static/cartEmpty.jpg">
            <br/>
            <a href="/" class="home_btn"> Home Page</a>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Form, HasError } from "vform";

export default {
  props: ["categories"],
  created() {
    this.user();
    this.getCity();
    this.getCartContent();
    this.$store.dispatch('general_setting');
    setTimeout(() => {
      this.isLoading = false;
      this.validation();
    }, 1500);
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
        name: "",
        address: "",
        city: "",
        total: "",
        cart: "",
        shipping_cost: "",
        sub_city:"",
        coupon_discount: 0,
        premium_member_discount: 0,
        coupon_type: "",
        coupon_id: "",
      }),
      isLoading: true,
      fullPage: true,
      cities: "",
      cart_content: {},
      customer_wallet_point:0,
      member_type:0,
      member_discount:0,
      product_discount:0,
      cart: {
        total: 0,
      },
      disabled: true,
      sub_cities:"",
       coupon_code: "",
       coupon:false
    };
  },
  methods: {
    submitOrder() {
      this.form
        .post("/_public/checkout")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            localStorage.setItem("user_token", resp.data.token);
            this.$store.dispatch("user");
            window.open('/checkout/success','_self')
          } else {
            this.$toasted.show("something went to wrong", {
                type: "error",
                position: "top-center",
                duration: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },

    getCity() {
      axios
        .get("/api/city/list/for/order")
        .then((resp) => {
          this.cities = resp.data.cities;
        })
    },

    selectCity() {
      for (let i = 0; i < this.cities.length; i++) {
        if (this.cities[i].id == this.form.city) {
          this.form.shipping_cost = this.cities[i].delivery_charge;
        }
      }
     this.subCity();
      this.validation();
    },
    user() {
      axios.get("/_public/userToCheck").then((resp) => {
     //   console.log(resp);
        if (resp.data.status == "AUTHORIZED") {
          this.form.mobile_no = resp.data.user.mobile_no;
          this.form.name = resp.data.user.name;
          this.form.address = resp.data.user.address;
          this.customer_wallet_point = resp.data.customer_wallet.point;
          this.member_type = resp.data.member_type;
          this.member_discount = resp.data.member_discount;
          this.product_discount = resp.data.product_discount;
        } else {
          localStorage.removeItem("user_token");
          this.$route.push({ name: "welocme" });
          this.$toasted.show("sorry! you are unautorized", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        }
      });
    },

    getCartContent() {
      axios.get("/_public/cartToContent").then((resp) => {
        // console.log(resp.data)
        this.cart.total = resp.data.cart_total;
        this.form.total = resp.data.cart_total;
      });
    },
    validation() {
      if (this.form.address.length < 3) {
        this.disabled = true;
        return;
      }
      if (this.form.city.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.total.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.city <= 0) {
        this.disabled = true;
        return;
      }

      if(!this.form.sub_city){
        this.disabled=true;
        return;
      }

      this.disabled = false;
    },
    subCity(){
    if(this.form.city){
       this.isLoading=true;
         axios.get('/api/city/wise/sub/city/'+this.form.city)
        .then(resp=>{

         if(resp.data.length){
                if( this.sub_cities.length > 0){
                  this.sub_cities="";
                }
                if(this.form.sub_city){
                  this.form.sub_city="";
                }
                this.sub_cities=resp.data;

              }else{
                this.form.sub_city="";
                this.sub_cities="";
                alert('No Sub City Under Selected Under City');
              }
            this.isLoading=false
            this.validation()

          console.log(resp)
        })
        .catch(e=>{
          console.log(e);
          this.isLoading=false;
        })
     }
    },
     applyCoupon() {
      if (this.coupon_code.length <= 0) {
        alert("Coupon Code Is Empty");
        document.getElementById("coupon_code").focus();
        return;
      }

      if (this.form.city.length <= 0) {
        alert("Please Select City First");
        return;
      }
      axios
        .get("/_public/apply/coupon/code", {
          params: {
            coupoon_code: this.coupon_code,
          },
        })
        .then((resp) => {
          if (resp.data.success == "OK") {
            console.log(resp);

            let discount = 0;
            let coupon = resp.data.coupon;
            let total = this.form.total;
            if (coupon.discount_type == "percentage") {
              discount =
                (parseInt(total) / parseInt(100)) *
                parseInt(coupon.discount_amount);
            } else {
              discount = parseInt(coupon.discount_amount);
            }

            this.form.coupon_discount = discount.toFixed(2);
            this.form.coupon_id = coupon.id;

            this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
            });
            this.coupon_code = "";
          } else {
            this.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((e) => {
          this.$toasted.show("something went to Wrong ", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },
    applyMemberDiscount(){
       if (this.product_discount > 0) {
          this.$toasted.show('cart item products has already discount. your mimbership discount only apply if product has no discount',{
             type: 'error',
             position: 'top-center',
             duration: 5000,
          });
       }else{
            let total = parseInt(this.form.total) ;
            let discount = parseInt(this.member_discount) ; //this is parcent value
            this.form.premium_member_discount = ( (discount*total) / 100) ;
            this.$toasted.show('membership discount applied successfully',{
              type : 'success' ,
              position : 'top-center' ,
              duration : 3000 ,
            });
       }

    }
  },
  components: {
    Loading,
    HasError
  },
  computed:{
     general_setting(){
       return this.$store.getters.general_setting;
     }
  },
  mounted() {
    setTimeout(() => {
      this.selectCity();
    }, 1000);
  },
};
</script>

<style scoped>

input{
  height: 44px;
}

select {
  height: 44px;
}

.extra_d {
  cursor: pointer;
  font-size: 16px;
}

.extra_d a {
 	height: 31px;
	position: absolute;
	margin: -8px 10px;
	border-radius: 5px;
	width: 34%;

}

.extra_d i {
    font-size: 25px;
    position: absolute;
    margin: -3px 10px;
}


.empty-cart {
    width: 50%;
    background: #fff;
    text-align: center;
    margin-left: 25%;
    padding: 50px 50px;
    box-shadow: 3px 3px 3px #ddd;
}

.home_btn{
    background: #ff4d03;
    color: #fff;
    padding: 12px 15px;
    border-radius: 5px;
}

.empty_cart_icon{
    margin-bottom: 50px;
    margin-top: 50px;
}

@media screen and (max-width:768px) {

  .empty-cart {
      width: 100%;
      height: 430px;
      background: #fff;
      text-align: center;
      margin-left: 1%;
      padding: 10px 10px;
      box-shadow: 3px 3px 3px #ddd;
  }


  .empty_cart_icon{
      margin-bottom:30px;
      margin-top: 5px;
  }



 .extra_d a {
    height: 32px;
    position: relative;
    margin: 10px 0px;
    border-radius: 5px;
    width: 72%;

}


}
</style>