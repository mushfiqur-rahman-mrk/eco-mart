import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
