import React, { useEffect } from 'react';
import './Team.css'
import AOS from 'aos';
import "aos/dist/aos.css"
const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <section className="heading-section pt-5 pb-5 team-section" style={{ backgroundColor: '#F3F5FA' }} id="team">
            <div className="container pb-3 pt-5">
                <div className="row">
                    <h2 className="text-center" data-aos="fade-up">TEAM</h2>
                    <p className="text-center" data-aos="fade-up">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                    <div className="col-md-6 mt-3" data-aos="zoom-in">
                        <div className="team-info d-flex justify-content-between align-items-center">
                            <div className="team-img mr-5 p-3">
                                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-1.jpg"
                                    alt="" className="img-fluid" style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="team p-3">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p className="pt-3">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social-icon d-flex justify-content-start align-items-center">
                                    <a href="">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3" data-aos="zoom-in">
                        <div className="team-info d-flex justify-content-between align-items-center">
                            <div className="team-img mr-5 p-3">
                                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-2.jpg"
                                    alt="" className="img-fluid" style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="team p-3">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p className="pt-3">Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social-icon d-flex justify-content-start align-items-center">
                                    <a href="">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3" data-aos="zoom-in">
                        <div className="team-info d-flex justify-content-between align-items-center">
                            <div className="team-img mr-5 p-3">
                                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-3.jpg"
                                    alt="" className="img-fluid" style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="team p-3">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p className="pt-3">EQuisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social-icon d-flex justify-content-start align-items-center">
                                    <a href="">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3" data-aos="zoom-in">
                        <div className="team-info d-flex justify-content-between align-items-center">
                            <div className="team-img mr-5 p-3">
                                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-4.jpg"
                                    alt="" className="img-fluid" style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="team p-3">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p className="pt-3">Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div className="social-icon d-flex justify-content-start align-items-center">
                                    <a href="">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;