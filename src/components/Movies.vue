<script>
import { store } from "../store";
import Card from "./Card.vue";

export default {
  name: "Movies",
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h2 v-if="store.searchMovieResults.length !== 0">Movies</h2>
  <ul>
    <Card
      v-for="movie in store.searchMovieResults"
      :title="movie.title"
      :originalTitle="movie.original_title"
      :originalLanguage="movie.original_language"
      :vote="movie.vote_average"
      :imgPath="movie.poster_path"
      :overview="movie.overview"
      :id="movie.id"
    />
  </ul>
</template>

<style lang="scss" scoped></style>
