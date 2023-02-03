export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = user => {
    return {
        type: LOGIN,
        payload: {
            isLoggedIn: true,
            email: user.email
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
