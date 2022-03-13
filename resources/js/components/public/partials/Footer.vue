<template>
  <div class="footer-img">

    <footer id="footer">
      <div class="fpart-first">
        <div class="container">
          <div class="row">
            <div class="contact col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <ul>
                <li class="address">
                  <!-- <p
                    v-html="footer_setting.footer_description"
                    class="short_desc_footer"
                  ></p> -->
                  <img src="storage/images/footer/logo.png" alt="">
                  <div class="footer-info">
                    <p class="footer-number">+880 9639148048</p>
                    <p class="work_time">Worktime: SAT - FRI, 10AM - 11PM</p>
                    <i class="fa fa-facebook-square fa-2x"></i> 
                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                  </div>
                </li>
              </ul>
            </div>

            <div class="column col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div class="quick_link">
                <h5 class="footer-color">INFORMATION</h5>
                <!-- <div class="line"></div> -->
                <ul class="link_line">
                  <li>
                    <router-link :to="{ name: 'AboutUs' }"
                      >About Us</router-link
                    >
                  </li>
                  <li>
                  <router-link :to="{ name: 'return_policy' }"
                    >Privacy Policy</router-link
                  >
                  </li>
                  <li>
                  <router-link :to="{ name: 'shipment' }"
                    >Shipping Information
                  </router-link>
                </li>

                <li>
                  <router-link :to="{ name: 'return_policy' }"
                    >Return & Exchange Policy</router-link
                  >
                </li>
                  
                  <li>
                    <router-link :to="{ name: 'ContactUs' }"
                      >Contact Us</router-link
                    >
                  </li>


                  <li>
                    <router-link :to="{ name: 'ContactUs' }"
                      >FAQ</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="column col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <h5 class="footer-color">CONTACT INFO</h5>
              <!-- <div class="line"></div> -->
              <ul class="link_line">
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam numquam repellat corrupti quis delectus!
                </li>
                <br>
                <li>
                  <i class="fa fa-envelope"></i> info@glamtouchbd.com
                </li>
                <br>
                <li>
                  <i class="fa fa-phone"></i> 01516161616 | 01516161616 
                </li>
                <li>
                  
                </li>
              </ul>
            </div>

            <div class="column col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div class="facebook_page">
                <img src="storage/images/footer/facebook_page.png" class="img-fluid" alt="">
              </div>
            </div>

            <!-- <div class="column col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div class="row news_letter">
                <h5>Newsletter</h5>
                <div class="line"></div>
                <div class="col-md-10 col-sm-12">
                  <div class="subscribe-input">
                    <form @submit.prevent="subscribe()">
                      <input
                        id="signup"
                        type="email"
                        required
                        placeholder="subscribe for latest offer"
                        v-model="email"
                        class="form-control"
                      />
                      <button type="submit" class="btn email_icon_container">
                        <i class="fa fa-lg fa-envelope"> </i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-md-10 col-sm-12">
                  <div class="social-icon">
                    <a
                      :href="footer_setting.facebook_url"
                      target="_blank"
                      class="social-wrape"
                    >
                      <i class="fa fa-lg fa-facebook f-icon"></i>
                    </a>

                    <a
                      :href="footer_setting.youtube_url"
                      class="social-wrape"
                      target="_blank"
                    >
                      <i class="fa fa-lg fa-youtube f-icon"></i>
                    </a>

                    <a
                      :href="footer_setting.twitter_url"
                      class="social-wrape"
                      target="_blank"
                    >
                      <i class="fa fa-lg fa-twitter f-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> -->

          <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="payment-card">
                <img
                  :src="base_url + 'images/ssl.png'"
                  style="width: 100%; height: auto; margin-top: 0px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- <div class="fpart-second">
        <div class="container">
          <div id="powered" class="clearfix"></div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="payment-card">
                <img
                  :src="base_url + 'images/ssl.png'"
                  style="width: 100%; height: auto; margin-top: 0px"
                />
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </footer>
  </div>
</template>




<script>

export default {
  created() {
    this.$store.dispatch("footer_setting");
  },

  data() {
    return {
      email: "",
      base_url: this.$store.state.image_base_link,
    };
  },
  methods: {

    subscribe() {
      axios
        .post("/_public/add/subscriber", {
          email: this.email,
        })
        .then((resp) => {
          if (resp.data.success == "OK") {
            this.email = "";
            Swal.fire({
              type: "success",
              text: resp.data.message,
              duration: 2000,
            });
          } else {
            this.email = "";
            Swal.fire({
              type: "warning",
              text: resp.data.message,
              duration: 2000,
            });
          }
        });
    },
  },

  computed: {

    footer_setting() {
      return this.$store.getters.footer_setting;
    },
  },
};
</script>


