<script>
export default {
  name: "Movie",
  props: ["title", "originalTitle", "originalLanguage", "vote", "movieIndex"],
};
</script>

<template>
  <li>
    Film {{ movieIndex + 1 }}:
    <div>Titolo: {{ title }}</div>
    <div>Titolo originale: {{ originalTitle }}</div>
    <div>Lingua: {{ originalLanguage }}</div>
    <div>Voto: {{ vote }}</div>
  </li>
</template>

<style scoped>
li {
  margin-bottom: 10px;
}
</style>
