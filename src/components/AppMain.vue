<script>
import Movies from "./Movies.vue";
import TvSeries from "./TvSeries.vue";

export default {
  name: "AppMain",
  components: {
    Movies,
    TvSeries,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <Movies />
      <TvSeries />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/css/partials/variables" as *;

main {
  text-align: center;
  background-color: $secondary-color;
  color: $text-color;

  :deep(ul) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
