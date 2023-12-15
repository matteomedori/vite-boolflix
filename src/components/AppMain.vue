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
    <div class="container">
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
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  background-color: #4f4557;
  color: #f4eee0;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 20px;
}
</style>
