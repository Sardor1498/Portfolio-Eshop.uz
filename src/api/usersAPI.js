import * as axios from "axios";

const url = "https://laravel-react-eshop.herokuapp.com";

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const loginUser = user => ({
    type: "AUTHORIZED_SUCCESS",
    payload: user
});

export const logoutUser = () => ({
    type: "LOG_OUT"
});

export const authAPI = {
    userPostFetch(user) {
        return async dispatch => {
            let response = await instance.post("users", {
                user: user
            });
            if (response.data.user) {
                localStorage.setItem("token", response.data.user.token);
                dispatch(loginUser(response.data.user));
                window.history.go(-2);
            }
        };
    },

    login(user) {
        return async dispatch => {
            let response = await instance.post("login", user);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                dispatch(loginUser(response.data.user));
                window.history.go(-1)
            }
            if (response.data.errors) {
                document.getElementById("errorDiv").innerHTML =
                    "wrong email or password";
            }
        }
    },

    logout() {
        return async dispatch => {
            localStorage.removeItem("token"); // local ombordagi tokeni ochiradi
            dispatch(logoutUser());
        }
    },

    getProfile() {
        return async dispatch => {
            const token = localStorage.token;  //local omboridagi token
            if (token) { // agar token mavjud bolsa
                let response = await instance.get("user", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    dispatch(loginUser(response.data));
                }
                if (response.message) {
                    localStorage.removeItem("token");
                }else {
                console.log(response.data)
                }
            }
        };
    },
};