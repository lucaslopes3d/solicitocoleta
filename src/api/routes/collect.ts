import api from "../config";
import { Collect } from "../types/collect";

const get = () => {
  return api.get("/collect");
};

const post = (data: Collect) => {
  return api.post("/collect", data);
};

export default { get, post };
