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
            >
              <img src="../assets/img/hello.svg" class="about-img" alt>
            </div>
          </div>
        </div>
        <div class="col-md-6 ml-auto py-5 text-right">
          <div class="d-flex h-100">
            <div
              class="justify-content-center align-self-center text-box"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <h2>
                <strong>Who Am I?</strong>
              </h2>
              <p
                class="ml-4"
              >I'm Lukman Ahromi 25 years old, graduated as Bachelor of Computer Science (B.C.S) from <strong>Institut Teknologi Nasional Bandung</strong> with a major in Informatics. Enjoyed doing code since a long time ago.</p>
              <div>
                <router-link class="btn ml-1" to="/about">Know me more</router-link>
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
