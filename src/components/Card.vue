<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "Card",
  props: [
    "title",
    "originalTitle",
    "originalLanguage",
    "vote",
    "imgPath",
    "overview",
    "id",
  ],
  data() {
    return {
      store,
      genres: "",
    };
  },
  mounted() {
    this.showGenres();
    // this.showCast();
  },
  computed: {
    voteStars() {
      return Math.round(this.vote / 2);
    },
  },
  methods: {
    getImagePath(url) {
      return new URL(url, import.meta.url).href;
    },
    showGenres() {
      axios
        .get(" https://api.themoviedb.org/3/movie/" + this.id, {
          params: {
            api_key: this.store.apiKey,
            append_to_response: "credits",
          },
        })
        .then((response) => {
          for (let i = 0; i < response.data.genres.length; i++) {
            this.genres += response.data.genres[i].name;
            if (i !== response.data.genres.length - 1) this.genres += ", ";
          }
        });
    },
    showCast() {
      axios
        .get(" https://api.themoviedb.org/3/movie/" + this.id, {
          params: {
            api_key: this.store.apiKey,
            // language: "en-US",
            append_to_response: "credits",
          },
        })
        .then((response) => {
          console.log(response.data.credits.cast);
        });
    },
  },
};
</script>

<template>
  <li>
    <div class="card-info">
      <h3>Titolo: {{ title }}</h3>
      <h4>Titolo originale: {{ originalTitle }}</h4>
      <p v-if="originalLanguage === 'en'">
        Lingua:
        <img
          class="lang"
          :src="getImagePath('../assets/img/uk_flag.png')"
          alt="#"
        />
      </p>
      <p v-else-if="originalLanguage === 'it'">
        Lingua:
        <img
          class="lang"
          :src="getImagePath('../assets/img/italy_flag.png')"
          alt="#"
        />
      </p>
      <p v-else>Lingua: {{ originalLanguage }}</p>
      <p>
        Voto:
        <span v-for="star in voteStars"
          ><font-awesome-icon icon="fa-solid fa-star"
        /></span>
      </p>
      <p>{{ overview }}</p>
      <p>Generi: {{ genres }}</p>
    </div>

    <img
      class="background"
      v-if="imgPath !== null"
      :src="store.apiImgUrl + imgPath"
      alt=""
    />
  </li>
</template>

<style lang="scss" scoped>
li {
  margin-bottom: 10px;
  border: 2px solid #6d5d6e;
  width: 342px;
  height: 507px;
  position: relative;

  .card-info {
    display: none;
    height: 100%;
    background-color: #393646;
    padding: 20px;

    & > * {
      margin-bottom: 5px;
    }
    img.lang {
      max-width: 25px;
      height: 15px;
    }

    .fa-star {
      color: #ffbd00;
    }
  }
  img.background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover .card-info {
    display: block;
  }

  &:hover .background {
    display: none;
  }
}
</style>
