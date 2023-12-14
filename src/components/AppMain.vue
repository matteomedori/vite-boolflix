<script>
import { store } from "../store";
import Movie from "./Movie.vue";

export default {
  name: "AppMain",
  components: {
    Movie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <ul>
      <Movie
        v-for="(movie, index) in store.searchResults"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :vote="movie.vote_average"
        :movieIndex="index"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  margin-top: 10px;
}
</style>
