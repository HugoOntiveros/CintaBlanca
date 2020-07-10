import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
const [brand, setBrand] = useState("Your Navbar Brand");

    return (
        <AuthContext.Provider value={{ brand, setBrand }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;