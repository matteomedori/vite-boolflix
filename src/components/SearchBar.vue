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
      placeholder="Films, TV Series..."
      name="search"
      v-model="store.searchKey"
    />
    <button type="submit" @click="$emit('search')">Search</button>
  </div>
</template>

<style lang="scss" scoped>
input[type="text"],
button {
  padding: 10px;
  border-radius: 5px;
}

button {
  background: red;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
