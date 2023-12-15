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
main {
  text-align: center;
  background-color: #4f4557;
  color: #f4eee0;

  :deep(ul) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
