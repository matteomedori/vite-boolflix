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
    searchMovieAndTv() {
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
    <SearchBar @search="searchMovieAndTv" />
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: #393646;
}
</style>
