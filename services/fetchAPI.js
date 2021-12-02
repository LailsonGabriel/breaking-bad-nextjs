import axios from "axios";

export default async function requestAPI(url) {
  return await axios.get(url).then((response) => response.data);
}