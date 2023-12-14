<script>
export default {
  name: "Movie",
  props: ["title", "originalTitle", "originalLanguage", "vote", "movieIndex"],
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<template>
  <li>
    Film {{ movieIndex + 1 }}:
    <div>Titolo: {{ title }}</div>
    <div>Titolo originale: {{ originalTitle }}</div>
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
}

img {
  max-width: 25px;
  height: 15px;
}
</style>
