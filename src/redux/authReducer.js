const initialState = {
    user: [],
    isAuthorized: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHORIZED_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isAuthorized: true
            };
            case "LOG_OUT":
                return {
                    ...state,
                    user: [],
                    isAuthorized: false
                };
            default:
                return state;
    }
}