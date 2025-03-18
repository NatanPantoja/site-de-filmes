import axios from "axios";
// Base da URL:https://api.themoviedb.org/3/
// URL DA API:/movie/now_playing?api_key=6971d8d7869464e0cd1b9974213c318f&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;