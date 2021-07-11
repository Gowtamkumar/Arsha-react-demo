import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <section class="heading-section pt-5 pb-5" id="services" style={{backgroundColor: '#F3F5FA'}}>
            <div class="container pb-5 pt-5">
                <div class="row">
                    <h2 class="text-center" data-aos="fade-up">Services</h2>
                    <p class="text-center pb-3" data-aos="fade-up">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                    <div class="col-md-3">
                        <div class="service-box text-center" data-aos="zoom-in">
                            <i class="fab fa-dribbble brand-color"></i><br />
                            <h4 class="mt-3"><a href="#">Lorem Ipsum</a></h4>
                            <p class="mt-3">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-box text-center" data-aos="zoom-in">
                            <i class="far fa-file-alt brand-color"></i><br />
                            <h4 class="mt-3"><a href="#">Sed ut perspici</a></h4>
                            <p class="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-box text-center" data-aos="zoom-in">
                            <i class="fas fa-tachometer-alt brand-color"></i><br />
                            <h4 class="mt-3"><a href="#">Magni Dolores</a></h4>
                            <p class="mt-3">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-box text-center" data-aos="zoom-in">
                            <i class="fas fa-layer-group brand-color"></i><br />
                            <h4 class="mt-3"><a href="#">Nemo Enim</a></h4>
                            <p class="mt-3">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;