<script>
import { store } from "../store";
export default {
  name: "Card",
  props: ["title", "originalTitle", "originalLanguage", "vote", "imgPath"],
  data() {
    return {
      store,
    };
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
    voteStars() {
      return Math.round(this.vote / 2);
    },
  },
};
</script>

<template>
  <li
    :style="{
      backgroundImage: 'url(' + store.apiImgUrl + imgPath + ')',
    }"
  >
    <h3>Titolo: {{ title }}</h3>
    <h4>Titolo originale: {{ originalTitle }}</h4>
    <p v-if="originalLanguage === 'en'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/uk_flag.png')"
        alt="#"
      />
    </p>
    <p v-else-if="originalLanguage === 'it'">
      Lingua:
      <img
        class="lang"
        :src="getImagePath('../assets/img/italy_flag.png')"
        alt="#"
      />
    </p>
    <p v-else>Lingua: {{ originalLanguage }}</p>
    <p>
      Voto:
      <span v-for="star in voteStars()"
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
