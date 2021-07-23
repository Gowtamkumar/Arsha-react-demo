import React from 'react';

import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="container">


                    <div className="row">
                        <Navbar></Navbar>
                        <Banner></Banner>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;