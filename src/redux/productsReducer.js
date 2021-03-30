const initialState = {
    products: [],
    loaded: false
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCTS_SUCCESS":
            return {
                ...state,
                products: action.payload,
                loaded: true
            };
            default:
                return state;
    }
}