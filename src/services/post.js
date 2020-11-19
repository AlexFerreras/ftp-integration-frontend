import axios from "axios";

const apiUrl = "https://31df828dd8f3.ngrok.io/";

async function post(endpoint, model) {
  return axios.post(`${apiUrl}${endpoint}`, model);
}

export default post;
