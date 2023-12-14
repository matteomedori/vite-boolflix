<script>
import { store } from "../store";
import Movie from "./Movie.vue";
import TvSeries from "./TvSeries.vue";

export default {
  name: "AppMain",
  components: {
    Movie,
    TvSeries,
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
    <h2 v-if="store.searchMovieResults.length !== 0">Movies</h2>
    <ul>
      <Movie
        v-for="(movie, index) in store.searchMovieResults"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :originalLanguage="movie.original_language"
        :vote="movie.vote_average"
        :movieIndex="index"
      />
    </ul>
    <h2 v-if="store.searchTvResults.length !== 0">Tv Series</h2>
    <ul>
      <TvSeries
        v-for="(tvSeries, index) in store.searchTvResults"
        :name="tvSeries.name"
        :originalName="tvSeries.original_name"
        :originalLanguage="tvSeries.original_language"
        :vote="tvSeries.vote_average"
        :tvIndex="index"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  margin-top: 10px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

h2 {
  margin-bottom: 20px;
}
</style>
