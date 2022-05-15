<template>
  <div class="about">
    <div class="container">
    <Navbar/>
    <Abouthero />
    <Aboutme />
    <Abouteducation />
    <Aboutexperiance />
    <Aboutbootcamp />
    </div>
    <!-- <div class="line"></div> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Aboutme from "@/components/Aboutme.vue";
import Abouthero from "@/components/Abouthero.vue";
import Abouteducation from "@/components/Abouteducation.vue";
import Aboutexperiance from "@/components/Aboutexperiance.vue";
import Footer from "@/components/Footer.vue";
import "../assets/css/about.css";
import Aboutbootcamp from "../components/Aboutbootcamp.vue";

export default {
  name: "About",
  components: {
    Navbar,
    Aboutme,
    Abouthero,
    Abouteducation,
    Aboutexperiance,
    Footer,
    Aboutbootcamp
}
};
</script>

<style>
</style>

