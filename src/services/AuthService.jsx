import http from "../http-common";
import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}

class AuthService {
    signIn(email, password) {
        return http.post(`/api/auth/login`, {
            email: email,
            password: password
        });
    }
    handleSubmit(email, pass) {
        const loginPayload = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }

        return http.post(`/api/auth/login`, loginPayload)
            .then(response => {
                const token  =  response.data.token;

                localStorage.setItem("token", token);

                setAuthToken(token);

                window.location.href = '/'
            })
            .catch(err => console.log(err));
    };
}
export default new AuthService();
