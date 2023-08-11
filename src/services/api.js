import axios from 'axios';

//Base url: https://api.themoviedb.org/3/
//URL DA API:/movie//now_playing?
//Chave API:api_key=a244b54c7380bc04ee977446ef5d9382

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
