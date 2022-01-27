<template>
  <div class="footer text-center">
    <div class="container">
      <div
        class="brand"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-once="false"
      >
        <h3 class="text-light text-center mx-auto">
          Ahrom
          <strong style="color:#C84B31">!</strong>
        </h3>
      </div>
      <div class="row mx-auto">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
              <!-- <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> -->
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos-once="false"
              >
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
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
              </div>
            </div>
          </nav>
          <div
            class="col-md-12 mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-once="false"
          >
            <a href="https://www.instagram.com/lghawy/" class="socmed">
              <b-icon-instagram class="mx-2"></b-icon-instagram>
            </a>
            <a href="https://www.linkedin.com/in/lukmanahromi/" class="socmed">
              <b-icon-linkedin class="mx-2"></b-icon-linkedin>
            </a>
            <a href="mailto: lukmanahromi@gmail.com" class="socmed">
              <b-icon-google class="mx-2"></b-icon-google>
            </a>
            <a href="https://github.com/lukmanahromi" class="socmed">
              <b-icon-github class="mx-2"></b-icon-github>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6287717463982" class="socmed">
              <b-icon-telephone-fill class="mx-2"></b-icon-telephone-fill>
            </a>
          </div>

          <!-- <div class="div">Ahromi</div>
          <div class="list">
            <div class="row mx-auto">
              <div class="col-md-4">
                <li class="nav-item mx-3">
                  <router-link class="nav-link text-light" to="/">Home</router-link>
                </li>
              </div>
              <div class="col-md-4">
                <li class="nav-item mx-3">
                  <router-link class="nav-link text-light" to="/about">About</router-link>
                </li>
              </div>
              <div class="col-md-4">
                <li class="nav-item mx-3">
                  <router-link class="nav-link text-light" to="/portfolio">Portfolio</router-link>
                </li>
              </div>
            </div>
          </div> -->
          <div>
            <p>&copy; 2022 Copyright - Lukman Ahromi</p>
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
