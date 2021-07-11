import React from 'react';
import './Price.css'
const Price = () => {
    return (
        <section class="heading-section pt-5 pb-5">
            <div class="container pricing">
                <h2 class="text-center" data-aos="fade-up">PRICING</h2>
                <p class="text-center" data-aos="fade-up">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                    sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div class="row pt-5">
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="50">
                        <div class="price-card shadow">
                            <h3>Free Plan</h3>
                            <h4>
                                <sup>$</sup>
                                0 <br />
                                <span>Per month</span>
                            </h4>
                            <ul>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Quam adipiscing of life, therefore
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    o price feugiat
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    There is no womb diameter at weekend
                                </li>
                                <li>
                                    <i class="fas fa-times"></i>
                                    <del>Navigation mass mass ultricies</del>
                                </li>
                                <li>
                                    <i class="fas fa-times"></i>
                                    <del>Mass ultricies anyone Bureau</del>
                                </li>
                            </ul>
                            <button type="button" class="custome-button rounded-pill pl-3 pr-3">Get
                                Started</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-card shadow" style={{ borderTop: '4px solid green' }} data-aos="fade-up"
                            data-aos-delay="40">
                            <h3>Business Plan</h3>
                            <h4>
                                <sup>$</sup>
                                29<br />
                                <span>Per month</span>
                            </h4>
                            <ul>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Quam adipiscing of life, therefore,
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    o price feugiat
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    There is no womb diameter at weekend
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Navigation mass mass ultricies
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Mass ultricies anyone Bureau
                                </li>
                            </ul>
                            <button type="button" class="brand-bgcolor custome-button rounded-pill text-light">Get
                                Started</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-card shadow" data-aos="fade-up" data-aos-delay="20">
                            <h3>Developer Plan</h3>
                            <h4>
                                <sup>$</sup>
                                49<br />
                                <span>Per month</span>
                            </h4>
                            <ul>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Quam adipiscing of life, therefore,
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    o price feugiat
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    There is no womb diameter at weekend
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Navigation mass mass ultricies
                                </li>
                                <li>
                                    <i class="fas fa-check brand-color"></i>
                                    Mass ultricies anyone Bureau
                                </li>
                            </ul>
                            <button type="button" class="custome-button rounded-pill pl-3 pr-3">Get
                                Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;