<script>
import { store } from "../store";
export default {
  name: "TvSeries",
  props: ["tvSeries"],
  data() {
    return {
      store,
    };
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
    voteStars(vote) {
      return Math.round(vote / 2);
    },
  },
};
</script>

<template>
  <li
    :style="{
      backgroundImage: 'url(' + store.apiImgUrl + tvSeries.poster_path + ')',
    }"
  >
    <div class="card-info">
      <h3>Titolo: {{ tvSeries.name }}</h3>
      <h4>Titolo originale: {{ tvSeries.original_name }}</h4>
      <p v-if="tvSeries.original_language === 'en'">
        Lingua:
        <img
          class="lang"
          :src="getImagePath('../assets/img/uk_flag.png')"
          alt="#"
        />
      </p>
      <p v-else-if="tvSeries.original_language === 'it'">
        Lingua:
        <img
          class="lang"
          :src="getImagePath('../assets/img/italy_flag.png')"
          alt="#"
        />
      </p>
      <p v-else>Lingua: {{ tvSeries.original_language }}</p>
      <p>
        Voto:
        <span v-for="star in voteStars(tvSeries.vote_average)"
          ><font-awesome-icon icon="fa-solid fa-star"
        /></span>
      </p>
      <!-- <img
      v-if="tvSeries.poster_path !== null"
      :src="store.apiImgUrl + tvSeries.poster_path"
      alt=""
    /> -->
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  margin-bottom: 10px;
  border: 2px solid #6d5d6e;
  width: 342px;
  height: 507px;

  .card-info {
    display: none;

    img {
      max-width: 100%;
    }

    img.lang {
      max-width: 25px;
      height: 15px;
    }

    .fa-star {
      color: #ffbd00;
    }
  }

  &:hover .card-info {
    display: block;
  }
}
</style>
