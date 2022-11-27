import axios from "axios";

const server = axios.create({
    baseURL: "https://ecdsa-node-week1.vercel.app/",
});

export default server;
