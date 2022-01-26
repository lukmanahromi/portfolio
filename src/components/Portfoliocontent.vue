<template>
  <div class="portfolio-content my-4">
    <div class="containe">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-10 mb-4" v-for="(data, index) in portfolio" :key="index">
          <div v-if="data.type == target || target === ''">
            <div>
              <div>
                <b-card-group deck>
                  <b-card :img-src="data.image" img-alt="Card image" img-top>
                    <!-- <img src="/assets/img/hero.png" alt="" srcset=""> -->
                  <h4 class="bold"><strong>{{data.tittle}}</strong></h4>
                    <b-card-text class="text-dark">{{data.description}} <a class="link" :href="data.link">aku</a></b-card-text>
                    <!-- <router-link class="link" :to="data.link"> Click here</router-link> -->
                    
                    <!-- <b-card-text class="text-dark">Kategori : {{data.type}}</b-card-text> -->
                  </b-card>
                </b-card-group>
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
