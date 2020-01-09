import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_GITHUB_TOKEN;

export default api;
