import React, { useEffect } from 'react';
import './Footer.css'
const Footer = () => {
    // To top button 

    useEffect(() => {
        const goTop = document.querySelector(".go-top");
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                goTop.classList.add('active');
            } else {
                goTop.classList.remove('active');
            }

        });
    }, [])

    return (
        <div>
            <footer className="">
                <div className="container">
                    <div className="row ">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="footer-left">
                                Copyright <strong>Arsha</strong>. All Rights Reserved
                            </div>
                            <div className="footer-right">
                                Designed by <a href="https://gowtamkumar.netlify.app/">Gowtam Kumar</a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <a href="#" className="go-top">
                <i className="fas fa-arrow-up"></i>
            </a>
        </div>
    );
};

export default Footer;