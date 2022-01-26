<template>
  <div id="homeabout" class="homeabout">
    <div class="container">
      <div class="row mx-auto content pt-5">
        <div class="col-md-4">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <img src="../assets/img/hello.svg" class="about-img" alt>
            </div>
          </div>
        </div>
        <div class="col-md-6 ml-auto p-5 text-right">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center text-box">
              <h2>About</h2>
              <!-- <p>I am passionate about Web Programing especially frontend. I loves to make design become reality with code. I always want to learn from anyone. I also motivated to constantly develop my skills and grow professionally.   -->
                  <!-- <a href="">Read More</a> -->
              <p class="ml-4"> 
                My name is Lukman Ahromi, 24 years old. I recently graduated with a 3.08 GPA from INSTITUT TEKNOLOGI NASIONAL BANDUNG with a major in Informatics Engineering.
                  <router-link class="link" to="/about">Read more</router-link>
              </p>
              
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
