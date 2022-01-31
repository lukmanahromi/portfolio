<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Lukman</a> -->
      <h3 class="text-light">Ahrom<strong style="color:#C84B31">!</strong></h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
          <li class="nav-item mr-4">
            <router-link class="nav-link text-light" to="/">Home</router-link>
          </li>
          <li class="nav-item mr-4">
            <router-link class="nav-link text-light" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/portfolio">Portfolio</router-link>
          </li>
          <!-- <li class="nav-item mx-3">
            <router-link class="nav-link text-light" to="/contact">Contact</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
