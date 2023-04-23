import axios from "axios";

const API = axios.create({
  baseURL: process.env["NEXT_PUBLIC_API"],
});

export default API;
