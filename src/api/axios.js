import axios from "axios";

// Crear una instancia de Axios
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // <-- aquí va la URL base de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
