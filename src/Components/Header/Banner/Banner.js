import React from 'react';

const Banner = () => {
    return (

        <div class="banner pt-5 pb-5">
            <div class="container pt-3 pb-4">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-lg-6 banner-left d-flex justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-delay="200">
                        <div class="">
                            <h1 class="text-light">Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div class="banner-footer mt-5">
                                <button class="custome-button brand-bgcolor text-light rounded-pill">Get
                                    Started</button> &nbsp;&nbsp;
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="text-light">
                                    <i class="fas fa-play-circle"></i>
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 hero_scroll1 d-flex justify-content-center align-items-center"
                        data-aos="zoom-in">
                        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt=""
                            class="img-fluid " />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;