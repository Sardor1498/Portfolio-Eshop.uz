const initialState = {
    price: {}
};

export default function priceReduser(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRICE_SUCCESS":
            return {
                ...state,
                price: action.payload
            };
            default:
                return state;
    }
}