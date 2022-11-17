import http from "../http-common";

class GoodService {
    getAll(){
        return http.get(`/api/business/sneakers`)
    }

    getHitsSneakers(){
        return http.get(`/api/business/sneakers/hits`)
    }
}

export default new GoodService();
