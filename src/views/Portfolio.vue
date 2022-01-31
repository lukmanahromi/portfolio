<template>
  <div class="portfolio">
    <div class="container">
      <Navbar/>
      <Portfoliohero/>
      <div
        class="notification py-3 px-4 my-4 shadow"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <h2>Portfolio</h2>
        <p>
          On this page you can find my recent work of projects related to Web programming.
          <router-link class="link mr-1" to="/certificate">Click here</router-link>to find certificates that I completed from webinars and training.
        </p>
      </div>
      <div
        class="btn-portfolio d-flex justify-content-center my-4"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <a @click="target = ''" class="btn" role="button" data-bs-toggle="button">All</a>
        <a
          @click="target = 'website'"
          class="btn ml-2"
          role="button"
          data-bs-toggle="button"
        >Website</a>
        <a @click="target = 'ui/ux'" class="btn ml-2" role="button" data-bs-toggle="button">UI/UX</a>
      </div>

      <Portfoliocontent :target="target" :portfolio="portfolio"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import "../assets/css/portfolio.css";
import Navbar from "@/components/Navbar.vue";
import Portfoliohero from "@/components/Portfoliohero.vue";
import Portfoliocontent from "@/components/Portfoliocontent.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Portfolio",
  components: {
    Navbar,
    Portfoliohero,
    Portfoliocontent,
    Footer
  },
  data() {
    return {
      portfolio: null, 
      target: ""
    };
  },
  methods: {
    change(payload) {
      this.target = payload;
    },
    setPortfolio(data) {
      this.portfolio = data;
    }
  },
  mounted() {
    axios
      .get("db.json")
      .then(response => this.setPortfolio(response.data))
      // .then(response => console.log(response))
      .catch(error => console.log("Gagal:", error));
  }
};
</script>

<style>
</style>
