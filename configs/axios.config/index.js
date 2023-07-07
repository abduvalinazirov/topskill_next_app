import { BASEURL } from "@/utils/variables";

const { default: axios } = require("axios");

let instance = axios.create();

const onRequest = (config) => {
  config.baseURL = BASEURL;
  config.headers.Authorization = `token 123123`;
  return config;
};

instance.interceptors.request.use(onRequest);

export default instance;
