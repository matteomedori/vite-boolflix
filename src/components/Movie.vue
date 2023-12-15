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
  <li
    :style="{
      backgroundImage: 'url(' + store.apiImgUrl + movie.poster_path + ')',
    }"
  >
    <h3>Titolo: {{ movie.title }}</h3>
    <h4>Titolo originale: {{ movie.original_title }}</h4>
    <p v-if="movie.original_language === 'en'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/uk_flag.png')"
        alt="#"
      />
    </p>
    <p v-else-if="movie.original_language === 'it'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/italy_flag.png')"
        alt="#"
      />
    </p>
    <p v-else>Lingua: {{ movie.original_language }}</p>
    <p>
      Voto:
      <span v-for="star in voteStars(movie.vote_average)"
        ><font-awesome-icon icon="fa-solid fa-star"
      /></span>
    </p>
    <!-- <img
      v-if="movie.poster_path !== null"
      :src="store.apiImgUrl + movie.poster_path"
      alt=""
    /> -->
  </li>
</template>

<style lang="scss" scoped>
li {
  margin-bottom: 10px;
  border: 2px solid #6d5d6e;
  width: 342px;
  height: 507px;

  &:hover {
    background-image: none;
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
}
</style>
