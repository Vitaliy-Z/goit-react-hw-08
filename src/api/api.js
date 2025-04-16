import axios from "axios";
// It's project was created by Vitalii Zvieriev
const axiosAPI = axios.create({
  baseURL: "https://connections-api.goit.global/"
});

export const setAuthorizationToken = (token) =>
  (axiosAPI.defaults.headers.common.Authorization = `Bearer ${token}`);

export default axiosAPI;
