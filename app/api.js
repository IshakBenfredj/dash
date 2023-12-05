const axios = require("axios");

const Axios = axios.create({
  baseURL: 'https://portfolio-server-uh48.onrender.com'
  // baseURL: "http://localhost:4000",
});

module.exports = Axios;