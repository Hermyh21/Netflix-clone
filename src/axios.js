// import axios from "./node_modules/axios";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.get("/movie/top_rated");

export default instance;
