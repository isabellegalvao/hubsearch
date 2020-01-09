import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_NOT_SECRET_CODE;

export default api;
