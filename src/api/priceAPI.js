import * as axios from "axios";
import { useDispatch } from "react-redux";

const url = "https://laravel-react-eshop.herokuapp.com";

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const setPrice = price => ({
    type: "ADD_PRICE_SUCCESS",
    payload: price
});

export const priceAPI = {

    getPrice() {
        return async dispatch => {
            let response;
            if (response.data) {
                useDispatch(setPrice(response.data));
            }
            if (response.data.errors) {
            } else {
            }
        };
    },
};