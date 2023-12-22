const axios = require("axios");

const Axios = axios.create({
  // baseURL: 'https://portfolio-server-uh48.onrender.com'
  baseURL: "http://localhost:4000",
    // baseURL: "http://192.168.43.36:4000",

});

module.exports = Axios;