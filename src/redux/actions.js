export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = () => {
    return {
        type: LOGIN,
        payload: {
            isLoggedIn: true
        }
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
        payload: {
            isLoggedIn: false
        }
    }
};
