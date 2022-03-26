import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1>Megaflex</h1>
                <div>
                    <a href="/home">Home</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;