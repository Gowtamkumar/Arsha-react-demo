import React from 'react';
import './Skills.css'
const Skills = () => {
    return (

        <section class="skill-left">
            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center skill-left-img"
                        data-aos="fade-right">
                        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/skills.png" alt=""
                            class="img-fluid" />
                    </div>
                    <div class="col-md-6 skills-option" data-aos="fade-left">
                        <h2>Voluptatem dignissimos provident quasi corporis voluptates</h2>
                        <p>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                labore et dolore magna aliqua.</i>
                        </p>
                        <div>
                            <div class="progress-bar-title d-flex justify-content-between">
                                <div class="progress-bar-left">
                                    <span>HTML</span>
                                </div>
                                <div class="progress-bar-right">
                                    100%
                                </div>
                            </div>
                            <div class="bg-light">
                                <div class="brand-bgcolor" style={{ height: '14px', width: '100%' }}></div>
                                {/* style="height:14px;width:100%" */}
                            </div>
                        </div><br />
                        <div>
                            <div class="progress-bar-title d-flex justify-content-between">
                                <div class="progress-bar-left">
                                    <span>CSS</span>
                                </div>
                                <div class="progress-bar-right">
                                    95%
                                </div>
                            </div>
                            <div class="bg-light">
                                <div class="brand-bgcolor" style={{ height: '14px', width: '95%' }}></div>
                                {/* style="height:14px;width:95%" */}
                            </div>
                        </div><br />
                        <div>
                            <div class="progress-bar-title d-flex justify-content-between">
                                <div class="progress-bar-left">
                                    <span>JAVASCRIPT</span>
                                </div>
                                <div class="progress-bar-right">
                                    75%
                                </div>
                            </div>
                            <div class="bg-light">
                                <div class="brand-bgcolor" style={{ height: '14px', width: '75%' }}></div>
                            </div>
                        </div><br />
                        <div>
                            <div class="progress-bar-title d-flex justify-content-between">
                                <div class="progress-bar-left">
                                    <span>PHOTOSHOP</span>
                                </div>
                                <div class="progress-bar-right">
                                    55%
                                </div>
                            </div>
                            <div class="bg-light">
                                <div class="brand-bgcolor" style={{ height: '14px', width: '55%' }}></div>
                            </div>
                        </div><br />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;