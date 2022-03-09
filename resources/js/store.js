import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'  // Vue router instance

Vue.use(Vuex)


const state = {

    //store admin
    admin: {},

    //initialize merchant
    merchant: {},
    outlet: {},

    //store cart
    cartContent: {
        content: '',
        total: '',
        itemCount: ''
    },
    wishlistContent: {
        content:'',
        item_count:'',
    },
    //store user

    user: {},
    //store categories
    categories: '',
    shop_with_categories: '',
    //store sliders
    sliders: '',
    //store best selling products
    best_selling_produtcs: [],
    suggest_products: [],
   //store best selling products
    new_products: [],
    //slider banner
    banners: '',
    //category slider
    category_sliders: [],
    //sub category slider
    sub_category_sliders: '',
    //sub sub category slider
    sub_sub_category_sliders: '',
     //for campaign sale products
     sale_campaign: {},
    //for specific product
    single_product: {},
    //for product image
    product_images: {},
    //for check admin page view permission
    view_permission:false,
    image_base_link: '/../storage/',
    thumbnail_img_base_link: '/../storage/images/product_thumbnail_img/',
    home_page_products: "",
    general_setting:"",
    footer_setting:"",
    theme_setting:"",
}
const getters = {
    admin(state) {
        return state.admin;
    },
    merchant(state) {
        return state.merchant;
    },
    outlet(state) {
        return state.outlet;
    },

    cartContent(state) {
        return state.cartContent;
    },

    wishlistContent(state) {
       return state.wishlistContent ;
    },

    user(state) {
        return state.user;
    },
    admin(state) {
        return state.admin;
    },
    categories(state) {
        return state.categories;
    },
    sliders(state) {
        return state.sliders;
    },
    new_products(state) {
        return state.new_products;
    },
    best_selling_produtcs(state){
        return state.best_selling_produtcs;
    },
    suggest_products(state){
        return state.suggest_products;
    },
    banners(state) {
        return state.banners;
    },
    category_sliders(state) {
        return state.category_sliders;
    },
    sub_category_sliders(state) {
        return state.sub_category_sliders;
    },

    sub_sub_category_sliders(state) {
        return state.sub_sub_category_sliders;
    },
    shop_with_categories(state) {
        return state.shop_with_categories;
    },
    flash_sale_products(state) {
        return state.flash_sale_products;
    },
    single_product(state) {
        return state.single_product;
    },
    view_permission(state) {
        return state.view_permission;
    },
    product_images(state) {
        return state.product_images;
    },

    home_page_products(state) {

        return state.home_page_products;
    },

    sale_campaign(state) {
        return state.sale_campaign;
    },


    general_setting(state){
        return state.general_setting ;
    },

    footer_setting(state){
        return state.footer_setting ;
    },

    theme_setting(state){
        return state.theme_setting ;
    }



}
const actions = {

    //get authenticate user
    user(context) {
        axios.get('/_public/userToCheck')
            .then(resp => {
                if (resp.data.status == 'AUTHORIZED') {
                    context.commit('user', resp.data.user);
                } else {
                    // localStorage.setItem('user_tok')
                    localStorage.removeItem('user_tok')
                    localStorage.removeItem('user_token')
                }
            })
    },

    // merchant action in server
    merchant(context) {
        axios.get('/api/merchant/login/session/check')
            .then(resp => {
                //when session running
                if (resp.data.session == "running") {
                    context.commit('merchant', resp.data.merchant);
                }
                //when session expired
                if (resp.data.session == 'expired') {
                    localStorage.removeItem('merchant_token');
                    router.push({ name: 'merchant_login' });
                }
            })
    },

    outlet(context) {
        axios.get('/api/outlet/login/session/check')
            .then(resp => {
                //when session running
                if (resp.data.session == "running") {
                    context.commit('outlet', resp.data.manager);
                }
                //when session expired
                if (resp.data.session == 'expired') {
                    localStorage.removeItem('outlet_token');
                    router.push({ name: 'outlet_login' });
                }
            })
    },

    //get cart content
    getCartContent(context) {
        axios.get('/_public/cartToContent')
            .then(resp => {
                context.commit('cartContent', resp.data);
                // console.log('data')
             })
    },
    //wishlist
    wishlistContent(context) {
        axios.get('/_public/api/wishlist/content')
            .then(resp => {
                // console.log(resp.data)
                context.commit('wishlistContent', resp.data);
             })
    },

    //session check
    //every time this session check, for admin session running or expired
    admin(context) {
        axios.get("/check/session/admin")
            //if session status running
            .then((resp) => {
                if (resp.data.status == "RUNNING") {
                    context.commit('admin', resp.data.admin)

                }

                //if session is expired, admin redirect ot login again
                if (resp.data.status == "EXPIRED") {
                    localStorage.removeItem("admin_token");
                    router.push({ name: "adminLogin" });
                    return;
                }
            })
            //error handling
            .catch(() => {
                router.push({ name: "adminLogin" });
            });
    },

    //get category
    categories(context) {
        axios.get("/_public/category")
            .then((resp) => {
                context.commit('categories', resp.data.categories)
            })

    },

    //get sliders
    sliders(context) {
        axios.get("/_public/slider")
            .then((resp) => {
                // console.log(resp.data.banners)
                context.commit('sliders', resp.data.sliders);
                context.commit('shop_with_categories', resp.data.shop_with_categories);
            })
    },

    banners(context) {
        axios.get("/_public/api/banners")
            .then((resp) => {
              context.commit('banners', resp.data.banners);
            })
    },



    best_selling_produtcs(context) {
        axios.get("/_public/api/top/selling/products")
        .then((resp) => {
          context.commit('best_selling_produtcs', resp.data.best_selling_produtcs);
        })
    },
    suggest_products(context) {
        axios
            .get("/_public/api/suggested/products")
            .then((resp) => {
                context.commit('suggest_products', resp.data.suggest_products);
            })
    },
    new_products(context) {
        axios
            .get("/_public/api/new/products")
            .then((resp) => {
            //    console.log(resp);
                context.commit('new_products', resp.data.products);
            })
    },
    //get category sliders
    category_sliders(context,payload) {
        axios.get('/_public/api/display/category/slider/'+payload)
            .then(resp => {
              //  console.log(resp);
                context.commit('category_sliders', resp.data.category_sliders);
            })
    },


    //get sub category sliders
    sub_category_sliders(context,payload) {
        axios.get('/_public/api/display/sub/category/slider/'+payload)
            .then(resp => {
                // console.log(resp);
                context.commit('sub_category_sliders', resp.data.sub_category_sliders);
            })
    },

    //get sub sub category sliders
    sub_sub_category_sliders(context,payload) {
        axios.get('/_public/api/display/sub/sub/category/slider/'+payload)
            .then(resp => {
            // console.log(resp);
            context.commit('sub_sub_category_sliders', resp.data.sub_sub_category_sliders);
            })
    },

       //method initial for get campaign sale
       sale_campaign(context) {
        axios.get("/_public/api/display/sale/campaign")
            .then((resp) => {
               console.log(resp)
                context.commit('sale_campaign', resp.data.sale_campaign)

            })
    },



    //method initial for get single product from db
    single_product(context, payload) {
        axios.get("/_public/product/" + payload).then((resp) => {
            document.title = resp.data.product.name ;
            context.commit('single_product', resp.data.product);
        });
    },

    //for get product images
    product_images(context, payload) {
        axios.get('/_public/product/images/' + payload)
            .then(resp => {
                console.log(resp.data);
                context.commit('product_images', resp.data.product_images)
            })
    },
    home_page_products(context) {
        axios.get('/_public/products')
            .then(resp => {
                //  console.log(resp)
                context.commit('home_page_products', resp.data)
            })

    },

    general_setting(context){
        axios.get("/_public/api/get/general/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('general_setting', resp.data.general_setting);
        })
    },

    footer_setting(context){
        axios.get("/_public/api/get/footer/setting")
        .then(resp => {
            // console.log(resp);
            context.commit('footer_setting', resp.data.footer_setting) ;
        })
    },
    theme_setting(context){
        axios.get("/_public/api/get/theme/setting")
        .then(resp => {
            console.log(resp);
            context.commit('theme_setting', resp.data.theme_setting);
        })
    },

}
const mutations = {
    admin(state, payload) {
        return state.admin = payload
    },

    merchant(state, payload) {
        return state.merchant = payload;
    },
    outlet(state, payload) {
        return state.outlet = payload;
    },
    wishlistContent(state, payload) {
        state.wishlistContent.content = payload.wishlist_content;
        state.wishlistContent.item_count = payload.item_count;
    },
    cartContent(state, cart) {
        state.cartContent.content = cart.cart_content;
        state.cartContent.total = cart.cart_total;
        state.cartContent.itemCount = cart.item_count;
    },
    user(state, payload) {
        return state.user = payload;

    },
    categories(state, payload) {
        return state.categories = payload;
    },
    shop_with_categories(state, payload) {
        return state.shop_with_categories = payload;
    },

    sliders(state, payload) {
        return state.sliders = payload;
    },
    new_products(state,payload) {
        return state.new_products = payload;
    },
    best_selling_produtcs(state,payload) {
        return state.best_selling_produtcs = payload;
    },
    suggest_products(state,payload) {
        return state.suggest_products = payload;
    },
    banners(state, payload) {
        return state.banners = payload;
    },

    category_sliders(state, payload) {
        return state.category_sliders = payload;
    },

    sub_category_sliders(state, payload) {
        return state.sub_category_sliders = payload;
    },

    sub_sub_category_sliders(state, payload) {
        return state.sub_sub_category_sliders = payload;
    },

    sale_campaign(state, payload) {
        return state.sale_campaign = payload;

    },

    single_product(state, payload) {
        return state.single_product = payload;
    },

    product_images(state, payload) {
        return state.product_images = payload;
    },
    home_page_products(state, payload) {
        return state.home_page_products = payload;
    },

    general_setting(state,payload){
        return state.general_setting=payload ;
     },


     footer_setting(state,payload){
         return state.footer_setting=payload ;
      },


     theme_setting(state,payload){
         return state.theme_setting=payload ;
      },


}

const store = new Vuex.Store({

    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions

})

global.store = store;

export default store;
