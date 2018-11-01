const fetch = require("node-fetch");
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = fetch(`${API_BASE_URL}/users`)
  .then(response => response.json());

const getUser = userId => fetch(`${API_BASE_URL}/users/${userId}`)
  .then(response => response.json());

module.exports = {
  getUser,
  getUsers
};