import { createApp } from "vue";
// entry point scss
import "./assets/css/style.scss";

import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import star icon */
import { faStar } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
