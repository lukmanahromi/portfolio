<template>
  <div class="hero">
    <div class="row mt-2 mx-auto content">
      <div class="col-md-8">
        <div class="d-flex h-100">
          <div
            class="justify-content-center align-self-center text-box"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <vue-typed-js
              :strings="['Lukman Ahromi']"
              :loop="true"
              :typeSpeed="100"
              :backDelay="2000"
            >
              <h1 class="mb-3">
                <strong>I'm</strong>
                <span class="typing"></span>
              </h1>
            </vue-typed-js>
            <p>
              <!-- Willing to work as web programer especially frontend, also interested in Backend
              <br>(Java), UI/UX design and QA Engineer. I also motivated to constantly develop
              <br>my skills and grow professionally. Let's know me more! -->
              I'm QA Engineer with less than 1 year experience who passionate about IT in general&#128187;. Familiar using Katalon Studio & Groovy/Java. Always love to learn new things and constantly developing my skills both personally and professionally&#128640;. I'm also an avid football enthusiast&#9917;.
            </p>
            <!-- <a href="#homeabout" class="btn" role="button" data-bs-toggle="button">About me</a> -->
            <a href="#homeabout" class="btn">About me</a>
          </div>
        </div>
      </div>
      <div
        class="col-md-4"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <img src="../assets/img/hero.png" class="hero-img w-200" alt>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>

