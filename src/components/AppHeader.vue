<script>
import SearchBar from "./SearchBar.vue";
import { store } from "../store";
import axios from "axios";

export default {
  name: "AppHeader",
  components: {
    SearchBar,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovie() {
      axios
        .get(this.store.apiMovieUrl, {
          params: { api_key: this.store.apiKey, query: this.store.searchKey },
        })
        .then((response) => {
          this.store.searchMovieResults = response.data.results;
        });
      axios
        .get(this.store.apiTvUrl, {
          params: { api_key: this.store.apiKey, query: this.store.searchKey },
        })
        .then((response) => {
          this.store.searchTvResults = response.data.results;
        });
      this.store.searchKey = "";
    },
  },
};
</script>

<template>
  <header>
    <h1>Boolflix</h1>
    <SearchBar @search="searchMovie" />
  </header>
</template>

<style>
header {
  text-align: center;
}

h1 {
  margin: 20px 0;
}
</style>
