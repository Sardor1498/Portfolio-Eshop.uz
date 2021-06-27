const initialState = {
    toggle: {}
};

export default function toggleReduser(state = initialState, action) {
    switch (action.type) {
        case "ADD_TOGGLE_SUCCESS":
            return {
                ...state,
                toggle: action.payload
            };
            default:
                return state;
    }
    
}