<template>
  <div class="footer text-center">
    <div class="container">
      <div
        class="brand"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <h3 class="text-light text-center mx-auto">
          Ahrom<strong style="color:#C84B31">!</strong>
        </h3>
      </div>
      <div class="row mx-auto">
        <div class="col-md-12">
          <ul
            class="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal d-flex justify-content-center"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <li class="nav-item mx-3">
              <router-link class="nav-link text-light" to="/">Home</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link text-light" to="/about">About</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link text-light" to="/portfolio">Portfolio</router-link>
            </li>
          </ul>
          <div
            class="col-md-12 mt-2 mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <a href="https://www.instagram.com/lghawy/" class="socmed">
              <b-icon-instagram class="mx-2"></b-icon-instagram>
            </a>
            <a href="mailto: lukmanahromi@gmail.com" class="socmed">
              <b-icon-envelope-fill class="mx-2"></b-icon-envelope-fill>
            </a>
            <a href="https://www.linkedin.com/in/lukmanahromi/" class="socmed">
              <b-icon-linkedin class="mx-2"></b-icon-linkedin>
            </a>
            <a href="https://github.com/lukmanahromi" class="socmed">
              <b-icon-github class="mx-2"></b-icon-github>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6287717463982" class="socmed">
              <b-icon-telephone-fill class="mx-2"></b-icon-telephone-fill>
            </a>
          </div>
          <div>
            <!-- <p>&copy; 2022 Copyright - Lukman Ahromi</p> -->
            <p>Made with <b-icon-heart-fill style="color: #C84B31;" ></b-icon-heart-fill> in Indonesia by Lukman Ahromi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>
