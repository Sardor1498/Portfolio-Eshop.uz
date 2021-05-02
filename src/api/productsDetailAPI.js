import instance from './instance';

const setProducts = product => ({
    type: "ADD_PRODUCTS_SUCCESS",
    payload: product
});


export const detailsAPI = {
    createProductDetails(productDetails) {
        return async dispatch => {
            try {
                let res = await instance.post(
                    "products_detail",
                    productDetails
                );
                if (res.data) {
                    console.log(res.data);
                    // localStorage.setItem("token", response.data.user.token);
                    // dispatch(loginUser(response.data.user));
                    // window.history.go(-2);
                }
            } catch (e) {
                console.log(e);
            }
        };
    },

    getProductDetail(id) {
        return async dispatch => {
            let response = await instance.get(`product_detail/${id}`);
            if (response.data) {
                return response.data;
                // localStorage.setItem("token", response.data.token);
                // dispatch(loginUser(response.data.user));
                // window.history.go(-1);
            }
            if (response.data.errors) {
            } else {
            }
        };
    },
};