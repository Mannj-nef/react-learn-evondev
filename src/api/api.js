import axios from "axios";

export const getApi = async (urlApi) => {
  const response = await axios.get(urlApi);
  return response.data;
};
export const postApi = async (urlApi, value) => {
  const response = await axios.post(urlApi, value);
  return response.data;
};
export const putApi = async (urlApi, index, value) => {
  const response = await axios.put(`${urlApi}/${index}, ${value}`);
  return response.data;
};
export const deleteApi = async (urlApi, index, value) => {
  const response = await axios.get(`${urlApi}/${index}, ${value}`);
  return response.data;
};
