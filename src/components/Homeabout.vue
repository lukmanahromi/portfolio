<template>
  <div id="homeabout" class="homeabout">
    <div class="container">
      <div class="row mx-auto content pt-5">
        <div class="col-md-4">
          <div class="d-flex h-100">
            <div
              class="justify-content-center align-self-center"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="linear"
              data-aos-once="true"
            >
              <img src="../assets/img/hello.svg" class="about-img" alt>
            </div>
          </div>
        </div>
        <div class="col-md-6 ml-auto py-5 text-right">
          <div class="d-flex h-100">
            <div
              class="justify-content-center align-self-center text-box"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="linear"
              data-aos-once="true"
            >
              <h2>
                <strong>About</strong>
              </h2>
              <p
                class="ml-4"
              >My name is Lukman Ahromi, 24 years old. I recently graduated with a 3.08 GPA from INSTITUT TEKNOLOGI NASIONAL BANDUNG with a major in Informatics Engineering.</p>
              <div>
                <router-link class="btn ml-1" to="/about">Read more</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homeabout"
};
</script>

<style>
</style>
