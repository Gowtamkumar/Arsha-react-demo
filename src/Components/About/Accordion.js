import React from 'react';
import './Accordion.css'
const Accordion = () => {
    return (
        <section style={{ backgroundColor: '#F3F5F', paddingBottom: '100px' }} className="accordin-section">
            <div className="container mt-5 pt-5">
                <div className="row pt-5">
                    <div className="col-md-6">
                        <h3 data-aos="fade-up">Eum ipsam laborum deleniti <strong>velit pariatur architecto aut
                            nihil</strong> </h3>
                        <p data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                        <div className="accordion" id="accordionExample" data-aos="fade-up">
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button accordion" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="accordion"> <strong>02 </strong> Non consectetur a erat nam at
                                            lectus urna duis?</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus
                                        laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor
                                        rhoncus dolor purus non.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span> <strong>02 </strong> Feugiat scelerisque varius morbi enim nunc?</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span> <strong>03 </strong> Dolor sit amet consectetur adipiscing elit?</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center accrodion-img"
                        data-aos="zoom-in">
                        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/why-us.png" alt=""
                            className="img-fluid text-center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;