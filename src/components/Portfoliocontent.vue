<template>
  <div class="portfolio-content my-4">
    <div class="containe">
      <div class="row">
        <div v-for="(data, index) in portfolio" :key="index">
          <div v-if="data.type == target || target === ''">
            <div class="row mx-auto my-4">
              <div
                class="col-md-8 pr-4 pb-4"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos-once="true"
              >
                <img class="w-100" :src="data.image" alt srcset>
              </div>
              <div
                class="col-md-4"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos-once="true" 
              >
                <div class="portfolio-tittle">
                  <h3 class="bold border-bottom pb-2">
                    <strong>{{data.tittle}}</strong>
                  </h3>
                </div>
                <div class="portfolio-body">
                  <span class="text-secondary font-italic">{{data.year}}</span>
                  <p class="pt-2">{{data.description}}</p>
                  <p class="bold">{{data.category}}</p>
                  <a :href="data.link" class="btn">View Repository</a>
                </div>
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
  name: "Portfoliocontent",
  props: ["portfolio", "target"]
};
</script>

<style>
</style>
