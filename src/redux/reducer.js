import { LOGIN, LOGOUT } from './actions';

let initialState = {
    isLoggedIn: false,
    email: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('login1');
            return {
                ...state,
                isLoggedIn: true

            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default authReducer;
