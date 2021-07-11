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
            <footer class="">
                <div class="container">
                    <div class="row ">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="footer-left">
                                Copyright <strong>Arsha</strong>. All Rights Reserved
                            </div>
                            <div class="footer-right">
                                Designed by <a href="">Gowtam Kumar</a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <a href="#" class="go-top">
                <i class="fas fa-arrow-up"></i>
            </a>
        </div>
    );
};

export default Footer;