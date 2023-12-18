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
input[type="text"],
button {
  padding: 10px;
  border-radius: 5px;
}

button {
  background: #f4eee0;
  color: #6d5d6e;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
