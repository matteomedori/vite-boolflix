import { reactive } from "vue";

export const store = reactive({
  apiKey: "e4667b7854fa20054559ae5027bd8ec0",
  apiMovieUrl: "https://api.themoviedb.org/3/search/movie",
  apiTvUrl: "https://api.themoviedb.org/3/search/tv",
  apiImgUrl: "https://image.tmdb.org/t/p/w342",
  searchKey: "",
  searchMovieResults: [],
  searchTvResults: [],
});
