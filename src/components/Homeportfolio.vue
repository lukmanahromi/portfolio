<template>
  <div class="homeportfolio">
    <div class="container">
      <div class="row mx-auto content">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div
              class="justify-content-center align-self-center text-box"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <h2><strong>What can I do?</strong></h2>
              <p>
                As QA Engineer I can make an automation test scenario using tools like Katalon Studio. However I also worked on some personal projects related to web programming. I've been completed several Bootcamp, training and webinars.
              </p>
              <div>

                <router-link class="btn" to="/portfolio">My work</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto">
          <div class="d-flex h-100">
            <div
              class="justify-content-center align-self-center"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
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
