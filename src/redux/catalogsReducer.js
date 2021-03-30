const initialState = {
    catalogs: [],
    loaded: false
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CATALOGS_SUCCESS":
            return {
                ...state,
                catalogs: action.payload,
                loaded: true
            };
            default:
                return state;
    }
}