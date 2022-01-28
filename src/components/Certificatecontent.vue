<template>
  <div class="certificate-content mb-4">
    <div class="row d-flex justify-content-center mx-auto">
      <div class="col-sm-4 mb-4" v-for="(data, index) in certificate" :key="index">
        <div>
          <div
            class="card shadow"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-once="true"
          >
            <img :src="data.image" class="card-img-top" alt="..." :title="data.tittle">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificatecontent",
  props: ["certificate"]
};
</script>

<style>
</style>
