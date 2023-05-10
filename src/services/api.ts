import axios from "axios";
import { FormData } from "../components/Form";

const baseAPI = axios.create({
    baseURL: process.env.REACT_APP_BACK_END_URL,
});

async function getClients() {
    const request = await baseAPI.get(
        "/users"
    );
    return request;
}

async function createClient(client: FormData) {
    const request = await baseAPI.post(
        "/users",
        client
    );
    return request;
}

const api = {
    getClients,
    createClient
};

export default api;