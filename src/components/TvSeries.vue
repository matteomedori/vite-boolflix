<script>
import { store } from "../store";
export default {
  name: "TvSeries",
  props: ["tvSeries"],
  data() {
    return {
      store,
    };
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
    voteStars(vote) {
      return Math.round(vote / 2);
    },
  },
};
</script>

<template>
  <li>
    <div>Titolo: {{ tvSeries.name }}</div>
    <div>Titolo originale: {{ tvSeries.original_name }}</div>
    <div v-show="tvSeries.original_language === 'en'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/uk_flag.png')"
        alt="#"
      />
    </div>
    <div v-show="tvSeries.original_language === 'it'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/italy_flag.png')"
        alt="#"
      />
    </div>
    <div
      v-show="
        tvSeries.original_language !== 'it' &&
        tvSeries.original_language !== 'en'
      "
    >
      Lingua: {{ tvSeries.original_language }}
    </div>
    <div>
      Voto:
      <span v-for="star in voteStars(tvSeries.vote_average)"
        ><font-awesome-icon icon="fa-solid fa-star"
      /></span>
    </div>
    <img
      v-if="tvSeries.poster_path !== null"
      :src="store.apiImgUrl + tvSeries.poster_path"
      alt=""
    />
  </li>
</template>

<style scoped>
li {
  margin-bottom: 10px;
  width: calc(100% / 4);
  border: 1px solid black;
}

img {
  max-width: 100%;
}

img.lang {
  max-width: 25px;
  height: 15px;
}

.fa-star {
  color: #ffbd00;
}
</style>
