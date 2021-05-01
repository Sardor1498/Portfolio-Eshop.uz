<<<<<<< HEAD
import * as axios from 'axios';

let url = "https://laravel-react-eshop.herokuapp.com";
const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
=======
import instance from './instance';
>>>>>>> 4706705ffc1794c9dc264b2d8eb1c00acd922285

const loginUser = user => ({
    type: "AUTHORIZED_SUCCESS",
    payload: user
<<<<<<< HEAD
})
=======
});
>>>>>>> 4706705ffc1794c9dc264b2d8eb1c00acd922285
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
                window.history.go(-1);
            }
            if (response.data.errors) {
                document.getElementById("errorDiv").innerHTML =
                    "wrong email or password";
            }
        };
    },

    logout() {
        return async dispatch => {
<<<<<<< HEAD
            localStorage.removeItem('token'); // local ombordagi tokenni o'chiradi
=======
            localStorage.removeItem("token"); /* local ombordagi tokenni o'chiradi */
>>>>>>> 4706705ffc1794c9dc264b2d8eb1c00acd922285
            dispatch(logoutUser());
        }
    },

    getProfile() {
        return async dispatch => {
<<<<<<< HEAD
            const token = localStorage.token;  // local ombordagi tokenni 
            if (token) { //agar token mavjud bo'lsa
=======
            const token = localStorage.token;  /* local ombordagi token */
            if (token) { // agar token mavjud bolsa
>>>>>>> 4706705ffc1794c9dc264b2d8eb1c00acd922285
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
<<<<<<< HEAD
                } else {
                    console.log(response.data)
                }
            }
        };
    }
=======
                }else {
                    console.log(response.data);
                }
            }
        };
    },
>>>>>>> 4706705ffc1794c9dc264b2d8eb1c00acd922285
};