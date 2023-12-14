<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "AppHeader",
  components: {
    SearchBar,
  },
};
</script>

<template>
  <header>
    <h1>Boolflix</h1>
    <SearchBar />
  </header>
</template>

<style>
header {
  text-align: center;

  h1 {
    margin: 20px 0;
  }
}
</style>
