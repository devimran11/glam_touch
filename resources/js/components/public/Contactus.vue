<template>
  <div class="wrapper-wide">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>

    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <div class="contact-page">
            <div class="col-md-4">
              <div class="address-area">
                <div class="address-icon">
                  <i class="fa fa-map-marker" style="font-size:36px"></i>
                </div>
                <div class="address-title">
                  <p>
                    98/2, Vista Garden (3rd Floor), Shenpara, Parbata,
                    Mirpur-10, Dhaka-1216
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="address-area">
                <div class="address-icon">
                  <i
                    class="fa fa-volume-control-phone"
                    style="font-size:36px"
                  ></i>
                </div>
                <div class="address-title">
                  <p>
                    09639148048 <br />
                    01828-348048 | 01315-897884 <br />
                    01324-827121 | 01917-618628
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="address-area">
                <div class="address-icon">
                  <i class="fa fa-envelope" style="font-size:36px"></i>
                </div>
                <div class="address-title">
                  <p>
                    info@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="map">
            <div class="col-md-12">
              <div class="full-map">
                <main class="app">
                  <aside class="sidebar">
                    <header class="sidebar-header">
                      <h1>PopularTO</h1>
                      <nav class="options">
                        <ul class="item-list">
                          <li class="item">
                            <a class="link">Fries</a>
                          </li>
                          <li class="item active">
                            <a class="link">Burgers</a>
                          </li>
                        </ul>
                      </nav>
                    </header>
                  </aside>

                  <section class="map-area">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5164.845853240233!2d90.37104199665416!3d23.743901361370174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf95edb05433%3A0x1da68b6f2e2e82a8!2sGlamTouch!5e0!3m2!1sen!2sbd!4v1647454372232!5m2!1sen!2sbd"
                      width="100%"
                      height="420"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </section>
                </main>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="get_in_touch">
              <h3 class="get_title">GET IN TOUCH</h3>
              <div class="get_line"></div>
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="sub">Subject:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="sub" placeholder="Customer Service">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="subject">Email Address:</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="subject" placeholder="Your@email.com">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-sm-2" for="subject">Attachment:</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" id="subject" placeholder="CHOOSE FILE">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label col-sm-2" for="message">Message:</label>
                  <div class="col-sm-10">
                    <textarea name="message" id="message" cols="" rows="5" class="form-control" placeholder="How can we help?"></textarea>                   
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default contact_btn">SEND</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!--Middle Part Start-->
          <!-- <div id="content" class="col-sm-12">
            <div class="row">
              <div class="col lg-12 col-md-12 col-sm-12 text-center">
                <h2 class="heading"><span>CONTACT US</span></h2>
              </div>
            </div>
            <div class="row contact_row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="row">
                  <div class="col-md-2 col-sm-2"></div>
                  <div class="col-md-8 col-sm-12 bg-white shadow">
                    <div class="address_container">
                      <p v-html="contact_info">
                       
                      </p>
          
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4"></div>
                </div>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-lg-2 col-md-2 col-sm-2"></div>

                  <div class="col-lg-8 col-md-8 col-sm-10 box shadow bg-white">
                    <div class="text-center">
                      <h5 class="heading">
                        send us message, our customer service will be response.
                      </h5>
                    </div>
                    <form @submit.prevent="sendMessage()" method="post">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" v-model="name" />
                      </div>

                      <div class="form-group">
                        <label for="name">Email</label>
                        <input class="form-control" type="emial" v-model="email" />
                      </div>

                      <div class="form-group">
                        <label for="name">Message</label>
                        <textarea
                          v-model="message"
                          class="form-control"
                          rows="5"
                        ></textarea>
                      </div>
                      <div class="form-group text-center">
                      <input type="submit" class="btn btn-lg submit_style" value="send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!--Middle Part End -->
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  created() {
    this.getContactInfo();
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      name: "",
      email: "",
      message: "",
      contact_info: "",
    };
  },
  methods: {
    getContactInfo() {
      axios.get("/_public/api/get/info/abou/contact").then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.contact_info = resp.data.setting.contact_info;
          this.isLoading = false;
        }
      });
    },
    sendMessage() {
      axios
        .post("/_public/customer/contact", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((resp) => {
          if (resp.data.success == "OK") {
            Swal.fire({
              type: "success",
              text:
                "Thanks for your message, we will reply as soon as possible",
              confirm: true,
              duration: 4000,
              position: "top-center",
            });
            this.name = "";
            this.email = "";
            this.message = "";
          } else {
            Swal.fire({
              type: "error",
              text: "something went wrong. please, try again ",
              position: "top-center",
            });
          }
        });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style scoped>
.submit_style {
  margin-bottom: 20px;
  width: 80px;
  background: #ff4d03;
  border: dashed 1px;
  color: #fff;
  font-size: 16px;
}
.address_container {
  margin-top: 30px;
  margin-bottom: 50px;
}
@media screen and (max-width: 450px) {
  .address_container {
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
  }
  .contact_row {
    margin-top: -15px;
  }
  p {
    position: relative;
    font-size: 13px;
    line-height: 15px;
  }
  .box {
    margin: 10px;
  }
}
.address_container {
  padding: 10px;
}
.address_container i {
  padding-right: 15px;
  color: #ff4d03;
}
</style>
