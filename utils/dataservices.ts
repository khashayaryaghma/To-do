import axios from "axios";

const baseURL: string = "http://localhost:8000";

const axiosConfigGet = {
  baseURL: baseURL,
  url: "/",
  method: "GET",
  data: null,
  params: null,
  timeout: 5000,
};
export const getData = (config: object) => {
  return axios({ ...axiosConfigGet, ...config })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
};

const axiosConfigPost = {
  baseURL: baseURL,
  url: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: null,
  params: null,
  timeout: 5000,
};

export const postData = (config: object) => {
  return axios({ ...axiosConfigPost, ...config })
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
};
