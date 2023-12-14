<script>
import { store } from "../store";
export default {
  name: "Movie",
  props: ["movie"],
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
    <div>Titolo: {{ movie.title }}</div>
    <div>Titolo originale: {{ movie.original_title }}</div>
    <div v-show="movie.original_language === 'en'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/uk_flag.png')"
        alt="#"
      />
    </div>
    <div v-show="movie.original_language === 'it'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/italy_flag.png')"
        alt="#"
      />
    </div>
    <div
      v-show="
        movie.original_language !== 'it' && movie.original_language !== 'en'
      "
    >
      Lingua: {{ movie.original_language }}
    </div>
    <div>
      Voto:
      <span v-for="star in voteStars(movie.vote_average)"
        ><font-awesome-icon icon="fa-solid fa-star"
      /></span>
    </div>
    <img
      v-if="movie.poster_path !== null"
      :src="store.apiImgUrl + movie.poster_path"
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
