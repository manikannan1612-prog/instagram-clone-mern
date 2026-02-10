import axios from "axios";
const API=axios.create({
    baseURL: 'https://instagram-clone-mern-chi.vercel.app'
});

export default API;