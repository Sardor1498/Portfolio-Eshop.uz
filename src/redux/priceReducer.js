const initialState = {
    price: {}
};

export default function priceReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRICE_SUCCESS":
            return {
                ...state,
                price: action.payload,
                name: "Meyrlan"
            };
            default:
                return state;
    }
}