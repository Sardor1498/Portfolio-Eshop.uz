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
                dispatch(loginUser(response.data));
            }
            if (response.data.errors) {
                document.getElementById("errorDiv").innerHTML =
                    "wrong email or password";
            }
        };
    },

    // getProfile() {
    //     return async dispatch => {
    //         const token = localStorage.token;
    //         if (token) {
    //             let response = await instance.get("auth", {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             if (response.status === 200) {
    //                 dispatch(loginUser(response.user));
    //             }
    //             if (response.message) {
    //                 localStorage.removeItem("token");
    //             }else {
    //             myData.clientError(response.data);
    //             }
    //         }
    //     };
    // },
};