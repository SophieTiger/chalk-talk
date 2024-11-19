import axios from "axios";

axios.defaults.baseURL = "https://chalk-talk-api-7f804e82f4b9.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();