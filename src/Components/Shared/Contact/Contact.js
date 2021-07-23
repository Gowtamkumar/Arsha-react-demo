import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="heading-section pt-5 pb-5" id="contact">
            <div className="container pb-5 pt-5">
                <div className="row">
                    <h2 className="text-center" data-aos="fade-up">CONTACT</h2>
                    <p className="text-center" data-aos="fade-up">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                    <div className="col-md-5" data-aos="fade-up">
                        <div className="address shadow p-5 contact-from">
                            <div className="d-flex justify-content-start">
                                <div className="icon team p-3">
                                    <a href="">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </a>
                                </div>
                                <div className="address-right">
                                    <h5>Location:</h5>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="icon team p-3">
                                    <a href="">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                                <div className="address-right">
                                    <h5>Email:</h5>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="icon team p-3">
                                    <a href="">
                                        <i className="fas fa-mobile"></i>
                                    </a>
                                </div>
                                <div className="address-right">
                                    <h5>Call:</h5>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                            <iframe
                                src="https://www.google.ccontactom/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                frameborder="0" style={{ border: '0', width: '100%', height: '346px' }}
                                allowfullscreen="" ></iframe>
                        </div>
                    </div>
                    <div className="col-md-7" data-aos="fade-up">
                        <div className="from shadow p-5 contact-from">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="" required/>
                                </div>
                                <div className="col-md-6">
                                    <label for="email420" className="form-label">Your Email</label>
                                    <input type="email" className="form-control" id="email420" placeholder="" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputSubjeet" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="inputSubjeet"
                                        placeholder="" required/>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="13"
                                    ></textarea>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="button"
                                        className="brand-bgcolor message-send custome-button rounded-pill text-light">Send
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