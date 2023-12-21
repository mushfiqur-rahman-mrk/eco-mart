import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
