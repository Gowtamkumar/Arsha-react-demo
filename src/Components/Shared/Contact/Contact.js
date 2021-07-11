import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section class="heading-section pt-5 pb-5" id="contact">
        <div class="container pb-5 pt-5">
            <div class="row">
                <h2 class="text-center" data-aos="fade-up">CONTACT</h2>
                <p class="text-center" data-aos="fade-up">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                    sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                    ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div class="col-md-5" data-aos="fade-up">
                    <div class="address shadow p-5 contact-from">
                        <div class="d-flex justify-content-start">
                            <div class="icon team p-3">
                                <a href="">
                                    <i class="fas fa-map-marker-alt"></i>
                                </a>
                            </div>
                            <div class="address-right">
                                <h5>Location:</h5>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start">
                            <div class="icon team p-3">
                                <a href="">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                            <div class="address-right">
                                <h5>Email:</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start">
                            <div class="icon team p-3">
                                <a href="">
                                    <i class="fas fa-mobile"></i>
                                </a>
                            </div>
                            <div class="address-right">
                                <h5>Call:</h5>
                                <p>+1 5589 55488 55s</p>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.ccontactom/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            frameborder="0" style={{border:'0',width: '100%', height: '346px'}}
                            allowfullscreen="" ></iframe>
                    </div>
                </div>
                <div class="col-md-7" data-aos="fade-up">
                    <div class="from shadow p-5 contact-from">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder=""/>
                            </div>
                            <div class="col-md-6">
                                <label for="email420" class="form-label">Your Email</label>
                                <input type="email" class="form-control" id="email420" placeholder=""/>
                            </div>
                            <div class="col-12">
                                <label for="inputSubjeet" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="inputSubjeet"
                                    placeholder=""/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="13"
                                    ></textarea>
                            </div>
                            <div class="col-12 d-flex justify-content-center">
                                <button type="button"
                                    class="brand-bgcolor message-send custome-button rounded-pill text-light">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;