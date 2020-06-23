import axios from "axios";

export const isAdmin = ({ email, password }) => {
return axios.post("http://localhost:3333/login", { email, password })
};

