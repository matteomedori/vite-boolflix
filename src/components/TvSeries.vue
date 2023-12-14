<script>
export default {
  name: "TvSeries",
  props: ["name", "originalName", "originalLanguage", "vote", "tvIndex"],
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <li>
    Series {{ tvIndex + 1 }}:
    <div>Titolo: {{ name }}</div>
    <div>Titolo originale: {{ originalName }}</div>
    <div v-show="originalLanguage === 'en'">
      Lingua:
      <img :src="getImagePath('../assets/img/uk_flag.png')" alt="#" />
    </div>
    <div v-show="originalLanguage === 'it'">
      Lingua:
      <img :src="getImagePath('../assets/img/italy_flag.png')" alt="#" />
    </div>
    <div v-show="originalLanguage !== 'it' && originalLanguage !== 'en'">
      Lingua: {{ originalLanguage }}
    </div>
    <div>Voto: {{ vote }}</div>
  </li>
</template>

<style scoped>
li {
  margin-bottom: 10px;
  width: calc(100% / 4);
  border: 1px solid black;
}

img {
  max-width: 25px;
  height: 15px;
}
</style>
