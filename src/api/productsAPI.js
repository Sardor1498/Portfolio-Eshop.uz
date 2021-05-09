import * as axios from "axios";

const url = "https://laravel-react-eshop.herokuapp.com";

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const setProducts = product => ({
    type: "ADD_PRODUCTS_SUCCESS",
    payload: product
});

export const productsAPI = {
    createProduct(product) {
        return async dispatch => {
            try {
                let res = await instance.post("products", product);
                if (res.data) {
                    dispatch(this.getProducts());
                    document.getElementById(
                        "requestSuccessInfo"
                    ).innerText = "Продукт успешно создан!";
                }
            } catch (e) {
                let errorText;
                if (e.response.status === 422) {
                    errorText = "все поля обязательны для заполнения";
                } else {
                    errorText = "Произошла ошибка"
                }
                document.getElementById("requestErrorInfo").innerText = `${errorText}`;
            }
        };
    },

    getProducts() {
        return async dispatch => {
            let response = await instance.get("products");
            if (response.status === 200) {
                dispatch(setProducts(response.data));
            }
            if (response.data.errors) {
            } else {

            }
        };
    },
    getCurrentProduct(id) {
        return async dispatch => {
            let response = await instance.get(`product/${id}`);
            if (response.data) {
                dispatch(setProducts(response.data));
                return response.data;
            }
            if (response.data.errors) {
                return response.data.errors;
            } else {

            }
        };
    },

    updateProduct(product) {
        return async dispatch => {
            let response = await instance.put("products", {
                params: product
            });
            if (response.status === 200) {
                dispatch(this.getProducts());
            }
            if (response.data.errors) {
            } else {

            }
        };
    },

    deleteProduct(productId) {
        return async dispatch => {
            let response = await instance.delete(`products/${productId}`);
            if (response.status === 200) {
                dispatch(this.getProducts());
            }
            if (response.data.errors) {
            } else {

            }
        };
    }
};