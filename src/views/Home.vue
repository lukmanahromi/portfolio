<template>
  <div class="home">
    <div class="container">
    <Navbar />
    <Hero />
    </div>
    <Homeabout />
    <Homeportfolio />
    <Homenegotiate />
    <Footer />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Homeabout from '@/components/Homeabout.vue'
import Homeportfolio from '@/components/Homeportfolio.vue'
import Homenegotiate from '@/components/Homenegotiate.vue'
import Footer from '@/components/Footer.vue'
import '../assets/css/home.css'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Homeabout,
    Homeportfolio,
    Homenegotiate,
    Footer
  }
}
</script>

<style>

</style>

