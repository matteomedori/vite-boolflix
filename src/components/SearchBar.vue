<script>
import { store } from "../store";
export default {
  name: "SearchBar",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="searchbar">
    <form @submit.prevent="$emit('search')">
      <label for="search" hidden>Search</label>
      <input
        type="text"
        placeholder="Films, TV Series..."
        name="search"
        id="search"
        v-model="store.searchKey"
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;

input[type="text"],
button {
  padding: 10px;
  border-radius: 5px;
}

button {
  background: $text-color;
  color: $tertiary-color;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
