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
      <Movie v-for="movie in store.searchMovieResults" :movie="movie" />
    </ul>
    <h2 v-if="store.searchTvResults.length !== 0">Tv Series</h2>
    <ul>
      <TvSeries
        v-for="tvSeries in store.searchTvResults"
        :tvSeries="tvSeries"
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
