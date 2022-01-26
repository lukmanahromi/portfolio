<template>
  <div class="hero">
    <div class="row mt-2 mx-auto content">
      <div class="col-md-8">
        <div class="d-flex h-100">
          <div class="justify-content-center align-self-center text-box">
            <vue-typed-js
              :strings="['Lukman Ahromi', 'Fresh Graduate', 'Frontend Enthusiast', 'Positive Person']"
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
              Willing to work as web programer especially frontend, also interested with
              <br>UI/UX design and QA Engineer. I also motivated to constantly develop  
              <br>my skills and grow professionally. Let's know me more!
            </p>
            <!-- <a href="" class="btn">Download CV</a> -->
            <!-- <button class="btn">
              <b-icon-download class="mr-2"></b-icon-download>Download CV
            </button>
            <button class="btn ml-4">
              <b-icon-telephone class="mr-2"></b-icon-telephone>Contact Me
            </button> -->
            <a href="#homeabout" class="btn" role="button" data-bs-toggle="button"><b-icon-person-fill class="mr-2"></b-icon-person-fill>About me</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 ml-auto">
        <img src="../assets/img/hero.png" class="hero-img" alt>
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

