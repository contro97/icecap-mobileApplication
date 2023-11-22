import { createContext, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    isAuthenticated:  false,
    authenticate : () => {},
    logout: () => {},
});

function AuthContextProvider({children}){
    const[authToken, setAuthToken] = useState(null);

    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken, // converts truthy or falsy value to boolean
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;