<template>
  <div>
    <div class="header" id="__header_main">
      <div class="main-header">
        <div class="container flex">
          <div class="col-md-2">
            <div class="main-header-left">
              <li>
                <a href="/">
                  <img
                    :src="base_url + general_setting.logo"
                    class="site-logo"
                  />
                </a>
              </li>
            </div>
          </div>

          <div class="col-md-10">
            <div class="col-md-12">
              <div class="main-header-right">
                <li class="mobile_menubar_header">
                  <i
                    @click.prevent="menuShow"
                    class="fa fa-bars"
                    id="__icon_fa_menu"
                  ></i>
                </li>
                <li class="mobile_menubar_search">
                  <a @click="searchToggle"><i class="fa fa-search"></i></a>
                  <a :href="'tel:+' + general_setting.phone"
                    ><i class="fa fa-phone"></i
                  ></a>
                </li>

                <li>
                  <form
                    id="search_form"
                    class="header_search_form"
                    @submit.prevent="subMitAutoComppleteForm"
                  >
                    <input
                      type="text"
                      class="search-input"
                      @keyup="autocomplteSearch"
                      @mouseover="hideAutoWriting"
                      @mouseout="displayAutoWriting"
                      v-model="search"
                      placeholder="Search for product..."
                    />
                    <a class="search-icon"><i class="fa fa-search"></i></a>
                    <div
                      class="search-content"
                      v-if="search_products.length >= 1"
                    >
                      <ul class="list-group">
                        <li
                          class="list-group-item"
                          v-for="(product, index) in search_products"
                          :key="index"
                        >
                          <router-link
                            :to="{
                              name: 'single',
                              params: { slug: product.slug },
                            }"
                            class="search-router-link"
                          >
                            <div class="__search_porducts_details">
                              <img
                                :src="
                                  thumbnail_base_url + product.thumbnail_img
                                "
                                class="search_result_img"
                              />
                              <div class="search_name_price">
                                <p>{{ product.name }}</p>
                                <p>
                                  BDT {{ product.price }}
                                  <small
                                    ><del
                                      >BDT {{ product.sale_price }}
                                    </del></small
                                  >
                                </p>
                              </div>
                            </div>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </form>
                </li>

                <div
                  class="vl"
                  style="border-left: 1px solid rgb(215, 215, 215); height: 40px; margin-top: 6px;"
                ></div>
                <li v-if="Object.keys(user).length">
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary dropdown-toggle login_user_name"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {{ user.name ? userFirstName(user.name) : "Customer" }}
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style="padding: 15px 15px"
                    >
                      <router-link
                        :to="{ name: 'UserDashboard' }"
                        class="dropdown-item"
                        href="#"
                        >Dashboard</router-link
                      ><br /><br />
                      <router-link
                        :to="{ name: 'PasswordEdit' }"
                        class="dropdown-item"
                        href="#"
                        >Change Password</router-link
                      ><br /><br />
                      <router-link
                        :to="{ name: 'user_new_password_set' }"
                        class="dropdown-item"
                        href="#"
                        >Set New Password</router-link
                      ><br /><br />

                      <a class="dropdown-item" href="#" @click="Logout"
                        >Logout</a
                      >
                    </div>
                  </div>
                </li>
                <li v-else>
                  <router-link class="user_login" :to="{ name: 'otpLogin' }">
                    <i class="fa fa-phone"></i>
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'wishlist' }"
                    class="header_wishlist"
                  >
                    <img :src="base_url + 'images/basic_img/heart.png'" /><sub>
                      {{ wishlistContent.item_count }}
                    </sub>
                  </router-link>
                </li>
                <!-- <li>
                  <a @click="cartOpen" class="header_cart"> <img :src="base_url+'images/basic_img/shopping-bag.png'" > <sub>{{ cart.itemCount }}</sub></a>
                </li> -->
                <li>
                  <button
                    class="merchant_login"
                    style="cursor: pointer"
                    @click="UserLoginModal"
                  >
                    <i
                      class="fa fa-user"
                      style="color: #fff; text-shadow: 0 0 1px #494A4A;"
                    ></i>
                    Login / Join
                  </button>
                  <!-- <a
                    class="merchant_login"
                    target="_blank"
                    v-on:click="UserLoginModal"
                  >
                    <i
                      class="fa fa-user"
                      style="color: #fff; text-shadow: 0 0 1px #494A4A;"
                    ></i>
                    Login / Join</a
                  > -->
                </li>
              </div>
            </div>

            <div class="col-md-12">
              <div class="menu" id="navbar">
                <div class="header-line"></div>
                <ul class="menu-list" id="menu_list">
                  <li
                    v-for="(category, category_index) in categories"
                    :key="category_index"
                    class="menu-item"
                  >
                    <router-link
                      :to="{
                        name: 'PublcaCategory',
                        params: { slug: category.slug },
                      }"
                      class="menu-item-link"
                    >
                      {{ category.name }}
                    </router-link>
                    <i
                      class="fa fa-angle-down menu-icon"
                      @click="shownextElement"
                      v-if="category.sub_category.length > 0"
                    ></i>
                    <ul
                      class="sub-item-list"
                      v-if="category.sub_category.length > 0"
                    >
                      <li
                        class="sub-item"
                        v-for="sub_category in category.sub_category"
                        :key="sub_category.id"
                      >
                        <router-link
                          :to="{
                            name: 'PublicSubCategory',
                            params: { slug: sub_category.slug },
                          }"
                          class="sub-item-link"
                          >{{ sub_category.name }}</router-link
                        >
                        <i
                          class="fa fa-angle-down sub-menu-icon"
                          v-if="sub_category.sub_sub_category.length"
                          @click="shownextElement"
                        ></i>
                        <ul
                          class="sub-sub-item-list"
                          v-if="sub_category.sub_sub_category.length"
                        >
                          <li
                            class="sub-sub-item"
                            v-for="sub_sub_category in sub_category.sub_sub_category"
                            :key="sub_sub_category.id"
                          >
                            <router-link
                              :to="{
                                name: 'PublicSubSUbCategory',
                                params: { slug: sub_sub_category.slug },
                              }"
                              class="sub-sub-item-link"
                              >{{ sub_sub_category.name }}</router-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart" id="s-cart">
      <div class="cart-header" @click="cartClosed">
        <h4 id="exitcart" class="exitC">
          <i class="fa fa-shopping-bag"></i> 3 ITEMS
        </h4>
        <p
          style="color: #747273; margin-top: -36px; border: 3px solid #616060; padding: 5px; margin-left: 248px; cursor: pointer;"
        >
          Close
        </p>
      </div>
      <div class="cart-body">
        <div
          class="row cart_row"
          v-for="(cart_content, index) in cart.content"
          :key="index"
          style="border-bottom: 1px solid #ddd; margin-top: 5px; margin-bottom: 5px;"
        >
          <div class="col-lg-2 col-sm-2 cart_responsive_item flex">
            <u style="text-decoration: none">
              <li class="q-i-d" @click="increamentQuantity(cart_content)">
                <i class="fa fa-angle-up"></i>
              </li>
              <li class="cart_content_sty">{{ cart_content.qty }}</li>
              <li class="q-i-d" @click="decreamentQuantity(cart_content)">
                <i class="fa fa-angle-down"></i>
              </li>
            </u>
          </div>
          <div class="col-lg-8 col-sm-8 flex" style="align-items: center">
            <div class="p-image-name">
              <img
                :src="thumbnail_base_url + cart_content.options.image"
                style="max-width: 70px; height: 75px; padding: 0 5px;margin-left: -32px; margin-top: 5px; margin-bottom: 7px;"
                alt=""
              />
            </div>
            <div class="cart_content_name">
              <p>
                {{ cart_content.name.substring(0, 30) }}
                <span v-if="cart_content.name.length > 30">...</span>
              </p>
              <p class="price" style=" margin-top: -10px; margin-left: -2px;">
                <span class="price-old">
                  &#2547; {{ cart_content.sale_price }} 200</span
                >
                <span class="price-new"> &#2547; {{ cart_content.price }}</span>
              </p>
            </div>
          </div>
          <div class="col-lg-1 col-sm-1 cart_responsive_remove">
            <h6
              class=""
              style="cursor: pointer; margin-top: 17px;"
              @click="cartRemove(cart_content)"
            >
              X
            </h6>
          </div>
        </div>
      </div>
      <div class="cart-empy" v-if="cart.itemCount <= 0">
        <img :src="base_url + 'images/static/cartEmpty.jpg'" />
        <p>Your cart is empty</p>
      </div>
      <div class="cart_amount_cal">
        <div class="cart-footer">
          <router-link
            :to="{ name: 'checkout' }"
            class="btn btn-block"
            style="color: #fff; font-weight:bold;"
            >Place Order
          </router-link>
        </div>
        <div class="___place">
          <p>&#2547;{{ Math.floor(cart.total) }}</p>
        </div>
      </div>

      <!-- <div class="cart_amount_cal">
        <div class="cart-footer">
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="___place">
          <p>Lorem, ipsum.</p>
        </div>
      </div> -->
    </div>

    <div class="cart-open" @click="cartOpen">
      <div class="cart-total">
        <i class="fa fa-shopping-bag"></i>
        <div class="cart-item-total">{{ cart.itemCount }} items</div>
      </div>
      <div class="cart_amount">
        <h5>&#2547; {{ Math.floor(cart.total) }}</h5>
      </div>
    </div>

    <div class="__footer_nav">
      <ul>
        <li>
          <a href="/"
            ><i class="fa fa-home footer_icon"></i>

            <p>HOME</p>
          </a>
        </li>
        <li>
          <a @click.prevent="categoryFilteringToggle" href="/">
            <i class="fa fa-search footer_icon"></i>
            <p>Search</p>
          </a>
        </li>
        <li>
          <router-link
            v-if="Object.keys(user).length"
            :to="{ name: 'UserDashboard' }"
          >
            <i class="fa fa-user-circle footer_icon"></i>
            <p>Account</p>
          </router-link>
          <router-link v-else :to="{ name: 'otpLogin' }">
            <i class="fa fa-user-circle footer_icon"></i>
            <p>Account</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'wishlist' }">
            <sup class="customize_c_item">{{ wishlistContent.item_count }}</sup>
            <i class="fa fa-heart footer_icon"></i>
            <p>WISHLIST</p>
          </router-link>
        </li>
        <li>
          <a @click="cartOpen">
            <sup class="customize_c_item">{{ cart.itemCount }}</sup>
            <i class="fa fa-shopping-cart footer_icon"></i>
            <p>Cart</p>
          </a>
        </li>
      </ul>
    </div>

    <div id="category_filtering_section" class="category_filtering_on_mobile">
      <!-- mobile category filtering and it's products start.when click on footer nav item on Category then it will toggle  -->

      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul class="mobile_category_filtering_list text-center">
            <li
              v-for="(category, f_c_index) in categories"
              :key="f_c_index"
              @click="filterCategory(category.slug)"
              :class="{
                category_filerting_active: category.slug == category_slug,
              }"
            >
              <a
                >{{ category.name.substring(0, 18)
                }}<span v-if="category.name.length > 18">..</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h1 v-if="loading">
        <i class="fa fa-spin fa-spinner"></i>
      </h1>

      <CategorySlider
        v-if="category_sliders != null"
        :sliders="category_sliders"
      />

      <div class="row shop_by_category_row">
        <div class="col-lg-12 col-md-12 col-xs-12 margin_container text-center">
          <h4 class="section_title">Shop By Category</h4>
        </div>
        <div
          v-if="banners['new_arrival']"
          class="
            col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6
            shop_by_category_container
          "
        >
          <div class="content">
            <a target="_blank" :href="banners['new_arrival'].url">
              <img :src="this.base_url + banners['new_arrival'].banner" />
            </a>
          </div>
          <div class="content_footer text-center">
            <router-link class="sub_c_name" :to="{ name: 'PublicSubCategory' }">
              New Arrival
              <span class="sub_category_angle"
                ><i
                  aria-hidden="true"
                  class="fa fa-lg fa-angle-double-right"
                ></i></span
            ></router-link>
          </div>
        </div>
        <div
          v-for="(filtering_category, filtering_c_index) in categories"
          v-if="category_slug == filtering_category.slug"
          :key="filtering_c_index"
        >
          <div
            v-for="(sub_c, sub_c_index) in filtering_category.sub_category"
            :key="sub_c_index"
            v-if="sub_c.show_home_page == 1"
            class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6  shop_by_category_container "
          >
            <div class="content">
              <router-link
                :to="{
                  name: 'PublicSubCategory',
                  params: { slug: sub_c.slug },
                }"
              >
                <img :src="base_url + sub_c.image" :alt="sub_c.name" />
              </router-link>
            </div>
            <div class="content_footer text-center">
              <router-link
                class="sub_c_name"
                :to="{
                  name: 'PublicSubCategory',
                  params: { slug: sub_c.slug },
                }"
              >
                {{ sub_c.name.substring(0, 12)
                }}<span v-if="sub_c.name.length > 12">...</span>
                <span class="sub_category_angle"
                  ><i
                    aria-hidden="true"
                    class="fa fa-lg fa-angle-double-right"
                  ></i></span
              ></router-link>
            </div>
          </div>
        </div>
      </div>

      <Products v-if="products.length > 0" :products="products" />
      <!-- mobile category filtering and it's products start.when click on footer nav item on Category then it will toggle  -->
    </div>
    <modal class="" name="UserLoginModalOpen" :width="500" :height="300">
      <div class="card">
        <div class="modal_header_login">
          <div class="facebook-login-user">
            <button class="btn btn-sm facebook">
              <i class="fa fa-facebook-square fa-lg"></i> LOGIN WITH FACEBOOK
            </button>
          </div>
          <div class="google-login">
            <button class="btn btn-sm google">
              <i class="fa fa-google fa-lg"></i>LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="login_form">
            <form action="/action_page.php">
              <h3>Login</h3>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
              </div>
              <div class="checkbox">
                <label><input type="checkbox" /> Remember me</label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
          <div class="register_form">
            <form action="/action_page.php">
              <h3>Login</h3>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
              </div>
              <div class="checkbox">
                <label><input type="checkbox" /> Remember me</label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import Products from "./Products.vue";
import CategorySlider from "./CategorySlider.vue";
export default {
  name: "main-header",
  data() {
    return {
      renderComponent: false,
      cartContents: null,
      cartTotal: "",
      display: "none",
      base_url: this.$store.state.image_base_link,
      thumbnail_base_url: this.$store.state.thumbnail_img_base_link,
      search_products: [],
      search: "",
      products: [],
      category_slug: "1000-Fashion",
      category_sliders: null,
      loading: false,
    };
  },
  components: {
    Products,
    CategorySlider,
    "vue-typer": VueTyper,
  },
  methods: {
    userFirstName(name) {
      let full_name = name.split(" ");
      return full_name[0];
    },

    UserLoginModal() {
      this.$modal.show("UserLoginModalOpen");
    },
    searchToggle() {
      document.getElementById("search_form").classList.toggle("search_toggle");
    },

    hideAutoWriting() {
      document.getElementById("type_writer").style.display = "none";
    },

    displayAutoWriting() {
      document.getElementById("type_writer").style.display = "block";
    },

    increamentQuantity(cartContent) {
      let quantity = parseInt(cartContent.qty) + parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    decreamentQuantity(cartContent) {
      if (cartContent.qty == 1) {
        alert("Qauntity shoud be at least 1");
        return;
      }

      let quantity = parseInt(cartContent.qty) - parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cartRemove(cartContent) {
      if (confirm("are you sure remove this item?")) {
        axios
          .get("/_public/cartToDestroy", {
            params: {
              rowId: cartContent.rowId,
            },
          })
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.$store.dispatch("getCartContent");
            }
          });
      }
    },
    changeDisplay() {
      if (this.display == "block") {
        this.display = "none";
      } else {
        this.display = "block";
      }
    },

    Logout() {
      axios
        .get("/_public/user/logout")
        .then((resp) => {
          console.log(resp);
          this.user = null;
          localStorage.removeItem("user_token");
          location.reload();
        })
        .catch();
    },

    autocomplteSearch() {
      if (this.search.length > 2) {
        axios
          .get("/_public/search/products/" + this.search)
          .then((resp) => {
            if (resp.data.length > 1) {
              this.search_products = [];
              this.search_products.push(...resp.data);
            } else {
              this.search_products = [];
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.search_products = [];
      }
    },
    subMitAutoComppleteForm() {
      this.$router.push({
        name: "PublicProductSearch",
        params: { search: this.search },
      });
    },
    menuShow() {
      let clickMenu = document.getElementById("toggle-menu");
      let main_menu = document.getElementById("menu_list");
      main_menu.classList.toggle("collapse-manu");
      let menu_icon = document.getElementById("__icon_fa_menu");
      if (menu_icon.classList.contains("fa-bars")) {
        menu_icon.classList.remove("fa-bars");
        menu_icon.classList.add("fa-close");
      } else {
        menu_icon.classList.add("fa-bars");
        menu_icon.classList.remove("fa-close");
      }
    },
    cartOpen() {
      document.getElementById("s-cart").classList.toggle("colapse-cart");
    },
    cartClosed() {
      document.getElementById("s-cart").classList.remove("colapse-cart");
    },
    shownextElement(e) {
      e.target.nextSibling.nextElementSibling.classList.toggle("show");
    },
    handleScrol() {
      let header = document.getElementById("__header_main");

      // if (window.pageYOffset > 1500 ) {
      //   header.classList.add("__sticky");
      // } else {
      //   header.classList.remove("__sticky");
      // }
    },

    //  category filetering on mobile
    categoryFilteringToggle() {
      let category_filtering = document.getElementById(
        "category_filtering_section"
      );
      category_filtering.classList.toggle("collapse_category_filtering");
      this.filterCategory(this.category_slug);
    },

    filterCategory(c_slug) {
      this.category_slug = c_slug;
      this.category_sliders = null;
      setTimeout(() => {
        this.categorySlider(c_slug);
      }, 500);
      this.$store.dispatch("banners");
      this.categoryWiseProduct(c_slug);
    },

    async categorySlider(slug) {
      await axios
        .get("/_public/api/display/category/slider/" + slug)
        .then((resp) => {
          console.log("Response as slider data :", resp);
          this.category_sliders = resp.data.category_sliders;
          console.log(
            "After Update Category Data Property: ",
            this.category_sliders
          );
        });
    },

    categoryWiseProduct(slug) {
      axios
        .get("/_public/api/mobile/filtering/category/wise/product/" + slug)
        .then((resp) => {
          // console.log(resp)
          this.products = resp.data.products;
        });
    },

    //  category filetering on mobile
  },

  created() {
    this.$store.dispatch("getCartContent");
    this.$store.dispatch("wishlistContent");
    this.$store.dispatch("user");
    this.$store.dispatch("categories");
    this.$store.dispatch("general_setting");
    window.addEventListener("scroll", this.handleScrol);
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    categories() {
      return this.$store.getters.categories;
    },

    cart() {
      return this.$store.getters.cartContent;
    },

    wishlistContent() {
      return this.$store.getters.wishlistContent;
    },

    general_setting() {
      return this.$store.getters.general_setting;
    },
    banners() {
      return this.$store.getters.banners;
    },
  },
  watch: {
    category_sliders: function() {
      if (!this.category_sliders) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.nav-active {
  display: block !important;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999999999;
}
.q-i-d {
  cursor: pointer;
}
ul.p-image-name li {
  padding: 0px 2px;
  font-size: 12px;
}
</style>
