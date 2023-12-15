<script>
import { store } from "../store";
import Card from "./Card.vue";

export default {
  name: "AppMain",
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
  <main>
    <div class="container">
      <h2 v-if="store.searchMovieResults.length !== 0">Movies</h2>
      <ul>
        <Card
          v-for="movie in store.searchMovieResults"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :vote="movie.vote_average"
          :imgPath="movie.poster_path"
        />
      </ul>
      <h2 v-if="store.searchTvResults.length !== 0">Tv Series</h2>
      <ul>
        <Card
          v-for="tvSeries in store.searchTvResults"
          :title="tvSeries.name"
          :originalTitle="tvSeries.original_name"
          :originalLanguage="tvSeries.original_language"
          :vote="tvSeries.vote_average"
          :imgPath="tvSeries.poster_path"
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
