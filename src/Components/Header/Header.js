import React from 'react';

import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div class="container-fluid">
                <div class="row">
                    <Navbar></Navbar>
                    <Banner></Banner>
                
                </div>
            </div>
        </header>
    );
};

export default Header;