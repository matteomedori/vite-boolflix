<script>
import { store } from "../store";
import Card from "./Card.vue";

export default {
  name: "TvSeries",
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
  <h2 v-if="store.searchMovieResults.length !== 0">Tv Series</h2>
  <ul>
    <Card
      v-for="tvSeries in store.searchTvResults"
      :title="tvSeries.name"
      :originalTitle="tvSeries.original_name"
      :originalLanguage="tvSeries.original_language"
      :vote="tvSeries.vote_average"
      :imgPath="tvSeries.poster_path"
      :overview="tvSeries.overview"
    />
  </ul>
</template>

<style lang="scss" scoped></style>
