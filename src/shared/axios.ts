import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY="882976023b683fdcadcf21d1c993b8d3",
  },
});

export default instance;
