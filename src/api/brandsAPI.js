import * as axios from "axios";

const url = "https://laravel-react-eshop.herokuapp.com";

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const setBrands = brand => ({
    type: "ADD_BRANDS_SUCCESS",
    payload: brand
});

export const brandsAPI = {
    createBrand(brand) {
        return async dispatch => {
            try {
                let res = await instance.post("brands", brand);
                if (res.data) {
                    dispatch(this.getBrands());
                    document.getElementById("requestSuccessInfo").innerText =
                        "Бренд успешно создан!";
                }
            } catch (e) {
                let errorText;
                if (e.response.status === 422) {
                    errorText = "все поля обязательны для заполнения";
                } else {
                    errorText = "произошла ошибка";
                }
                document.getElementById(
                    "requestErrorInfo"
                ).innerText = `${errorText}`;
            }
        };
    },

    getBrands() {
        return async dispatch => {
            let response = await instance.get("brands", {
                onDownloadProgress: function(event) {
                    let progress = Math.round(
                        (event.loaded * 100) / event.total
                    );
                }
            });
            if (response.data) {
                dispatch(setBrands(response.data));
            }
            if (response.data.errors) {
            } else {
            }
        };
    },

    updateBrand(brand) {
        return async dispatch => {
            let response = await instance.put("brands", {
                params: brand
            });
            if (response.status === 200) {
                dispatch(this.getBrands());
            }
            if (response.data.errors) {
            } else {
                // myData.clientError(response.data);
            }
        };
    },

    deleteBrand(brandId) {
        return async dispatch => {
            let response = await instance.delete(`brands/${brandId}`);
            if (response.status === 200) {
                dispatch(this.getBrands());
            }
            if (response.data.errors) {
            } else {
                // myData.clientError(response.data);
            }
        };
    }
};