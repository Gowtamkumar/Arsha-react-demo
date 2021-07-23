import React from 'react';
import './About.css'
const About = () => {
    return (
        <section className="heading-section pt-5 about-section" id="about">
        <div className="container pt-5">
            <h2 className="text-center" data-aos="fade-up">About Us</h2>
            <div className="row mt-5" data-aos="fade-up">

                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    <ul>
                        <li>
                            <i className="fas fa-check-double brand-color"></i>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </li>
                        <li>
                            <i className="fas fa-check-double brand-color"></i>
                            Duis aute irure dolor in reprehenderit in voluptate velit
                        </li>
                        <li>
                            <i className="fas fa-check-double brand-color"></i>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p>
                        Aliquip out of her the advantage of stimulus efforts if the school district as a problem.
                        Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna
                        flee produces no resultant pleasure. Excepteur cupidatat blacks are not excepteur, is
                        soothing to the soul, that is, they deserted the general duties of those who are to blame
                        for your troubles.
                    </p>
                    <button type="button" className="about-button rounded pl-3 pr-3">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;