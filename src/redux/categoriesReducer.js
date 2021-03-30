const initialState = {
    categories: [],
    loaded: false
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: action.payload,
                loaded: true
            };
            default:
                return state;
    }
}