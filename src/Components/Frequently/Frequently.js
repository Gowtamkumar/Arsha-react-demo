import React from 'react';

const Frequently = () => {
    return (
        <section class="heading-section pt-5 pb-5" style={{backgroundColor: "#F3F5FA"}}>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center" data-aos="fade-up">FREQUENTLY ASKED QUESTIONS</h2>
                        <p class="text-center" data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius
                            consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
                            cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                            quidem hic quas.
                        </p>
                        <div class="accordion pt-4" id="accordionExample">
                            <div class="accordion-item mt-3" data-aos="fade-up">
                                <h3 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fas fa-question-circle"></i> &nbsp;
                                        <span>Non consectetur a erat nam at lectus urna duis?</span>
                                    </button>
                                </h3>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus
                                        laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor
                                        rhoncus dolor purus non.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3" data-aos="fade-up">
                                <h3 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="fas fa-question-circle"></i>&nbsp;
                                        <span>Feugiat scelerisque varius morbi enim nunc?</span>
                                    </button>
                                </h3>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3" data-aos="fade-up">
                                <h3 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <i class="fas fa-question-circle"></i>&nbsp;
                                        Dolor sit amet consectetur adipiscing elit?
                                    </button>
                                </h3>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
                                        Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl
                                        suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis
                                        convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3" data-aos="fade-up">
                                <h3 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFore" aria-expanded="false"
                                        aria-controls="collapseFore">
                                        <i class="fas fa-question-circle"></i>&nbsp;
                                        Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                    </button>
                                </h3>
                                <div id="collapseFore" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
                                        suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
                                        Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit
                                        turpis cursus in.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3" data-aos="fade-up">
                                <h3 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        <i class="fas fa-question-circle"></i>&nbsp;
                                        Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget
                                        lorem dolor?
                                    </button>
                                </h3>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies
                                        leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet.
                                        Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu
                                        scelerisque.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Frequently;