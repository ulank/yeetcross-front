import http from "../http-common";

class GoodService {
    getAll(){
        return http.get(`/good/api`)
    }
}

export default new GoodService();
