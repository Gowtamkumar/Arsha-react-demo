import React from 'react';
import './Widget.css'
const Widget = () => {
    return (
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 company-info">
                        <h3>ARSHA</h3>
                        <p>A108 Adam Street
                            New York, NY 535022
                            United States</p>
                        <p><strong>Phone:</strong> +1 5589 55488 55</p>
                        <p><strong>Email:</strong> info@example.com</p>
                    </div>
                    <div class="col-md-3 userful-link">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href=""> <i class="fas fa-chevron-right brand-color"></i> Home</a></li>
                            <li><a href=""><i class="fas fa-chevron-right  brand-color"></i> About us</a></li>
                            <li><a href=""><i class="fas fa-chevron-right  brand-color"></i> Services</a></li>
                            <li><a href=""> <i class="fas fa-chevron-right  brand-color"></i> Terms of service</a></li>
                            <li><a href=""> <i class="fas fa-chevron-right  brand-color"></i> Privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 userful-link">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href=""> <i class="fas fa-chevron-right  brand-color"></i> Web Design</a></li>
                            <li><a href=""><i class="fas fa-chevron-right  brand-color"></i> Web Development</a></li>
                            <li><a href=""><i class="fas fa-chevron-right  brand-color"></i> Product Management</a></li>
                            <li><a href=""> <i class="fas fa-chevron-right  brand-color"></i> Marketing</a></li>
                            <li><a href=""> <i class="fas fa-chevron-right  brand-color"></i> Graphic Design</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 widget-icon">
                        <h4>Our Social Networks</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div class="socialIcon d-flex justify-content-start align-items-center">
                            <a href="">
                                <i class="fab fa-facebook "></i>
                            </a>
                            <a href="">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="">
                                <i class="fab fa-dribbble"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Widget;