import axios from "axios";

//lucas gay
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    //lucas gay
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    //lucas gay
    const token = "meu-token-exemplo";
    if (token) {
      //lucas gay
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    //lucas gay
    return Promise.reject(error);
  }
);

//aqui o lucas é mais gay ainda
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      //lucas gay
      console.error("Erro na resposta da API:", error.response);
    } else if (error.request) {
      //lucas gay
      console.error("Erro de conexão com a API:", error.request);
    } else {
      //lucas gay
      console.error("Erro desconhecido:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
