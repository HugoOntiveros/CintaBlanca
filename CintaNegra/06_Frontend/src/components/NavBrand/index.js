import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const NavBrand = () => {
    const { setBrand } = useContext(AuthContext);

    return (
        <input
            type="text"
            label="Type your name"
            placeholder="Type a Navbar Brand!"
            onChange={(e) => setBrand(e.target.value)} />
    );
}

export default NavBrand;