import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pure-headland-51673.herokuapp.com/',
});

export default api;