import React from 'react';

const Banner = () => {
    return (

        <div className="banner pt-5 pb-5">
            <div className="container pt-3 pb-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 banner-left d-flex justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-delay="200">
                        <div className="">
                            <h1 className="text-light">Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="banner-footer mt-5">
                                <button className="custome-button brand-bgcolor text-light rounded-pill">Get
                                    Started</button> &nbsp;&nbsp;
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="text-light">
                                    <i className="fas fa-play-circle"></i>&nbsp;
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 hero_scroll1 d-flex justify-content-center align-items-center"
                        data-aos="zoom-in">
                        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt=""
                            className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;