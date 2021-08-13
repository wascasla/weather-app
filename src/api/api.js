import axios from "axios";

const apiUrl = process.env.WEATHER_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
