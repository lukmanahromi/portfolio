<template>
  <div class="certificate">
    <div class="container">
      <Navbar/>
      <Portfoliohero/>
      <div class="border-bottom my-4">
        <h1 class="text-center bold">
          <strong>Certificate</strong>
        </h1>
      </div>
      <Certificatecontent :certificate="certificate"/>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Certificatecontent from "@/components/Certificatecontent.vue";
import Portfoliohero from "@/components/Portfoliohero.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Certificate",
  components: {
    Navbar,
    Portfoliohero,
    Certificatecontent,
    Footer
  },
  data() {
    return {
      certificate: null,
      target: ""
    };
  },
  methods: {
    change(payload) {
      this.target = payload;
    },
    setCertificate(data) {
      this.certificate = data;
    }
  },
  mounted() {
    axios
      .get("certificate.json")
      .then(response => this.setCertificate(response.data))
      // .then(response => console.log(response))
      .catch(error => console.log("Gagal:", error));
  }
};
</script>

<style>
</style>
