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
    <input
      type="text"
      placeholder="Search.."
      name="search"
      v-model="store.searchKey"
    />
    <button type="submit" @click="$emit('search')">Vai</button>
  </div>
</template>

<style></style>
