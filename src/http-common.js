import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8087/yeetcross",
    headers: {
        "Content-type": "application/json"
    }
});
