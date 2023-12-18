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
    <!-- <div class="card-info">
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
    </div> -->

    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          class="background"
          v-if="imgPath !== null"
          :src="store.apiImgUrl + imgPath"
          alt=""
        />
      </div>

      <div class="flip-card-back">
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
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  background-color: transparent;
  margin-bottom: 10px;
  border: 2px solid #6d5d6e;
  width: 342px;
  height: 507px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Card front */
  .flip-card-front {
    background-color: #393646;
    color: black;

    img {
      width: 100%;
      height: 100%;
    }
  }

  /* Card back */
  .flip-card-back {
    background-color: #393646;
    color: white;
    transform: rotateY(180deg);
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
}
</style>
