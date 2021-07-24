import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <section className="heading-section pt-5 pb-5" id="services" style={{backgroundColor: '#F3F5FA'}}>
            <div className="container pb-5 pt-5">
                <div className="row">
                    <h2 className="text-center" data-aos="fade-up">Services</h2>
                    <p className="text-center pb-3" data-aos="fade-up">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                    <div className="col-md-3">
                        <div className="service-box text-center" data-aos="zoom-in">
                            <i className="fab fa-dribbble brand-color"></i><br />
                            <h4 className="mt-3"><a href="#">Lorem Ipsum</a></h4>
                            
                            <p className="mt-3">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-box text-center" data-aos="zoom-in">
                            <i className="far fa-file-alt brand-color"></i><br />
                            <h4 className="mt-3"><a href="#">Sed ut perspici</a></h4>
                            <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-box text-center" data-aos="zoom-in">
                            <i className="fas fa-tachometer-alt brand-color"></i><br />
                            <h4 className="mt-3"><a href="#">Magni Dolores</a></h4>
                            <p className="mt-3">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-box text-center" data-aos="zoom-in">
                            <i className="fas fa-layer-group brand-color"></i><br />
                            <h4 className="mt-3"><a href="#">Nemo Enim</a></h4>
                            <p className="mt-3">
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