<template>
  <div class="homeportfolio">
    <div class="container">
      <div class="row mx-auto content">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center text-box">
              <h2>Portfolio</h2>
              <p>
                I worked on some projects related to web programming, UI/UX and several certificates that I completed from seminars and training. This is my recent work
              <router-link class="link" to="/portfolio">Find more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <img src="../assets/img/browser.svg" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homeportfolio"
};
</script>

<style>
</style>
