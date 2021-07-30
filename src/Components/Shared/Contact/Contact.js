import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
                                frameBorder="0" style={{ border: '0', width: '100%', height: '251px' }}
                                title="This is google"></iframe>


                        </div>
                    </div>
                    <div className="col-md-7" data-aos="fade-up">
                        <div className="from shadow p-5 contact-from">
                            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-6">

                                    {/* <input type="text" className="form-control" id="name" placeholder="Your Name"  /> */}
                                    <input className="form-control" type="text" {...register("fullName", { required: true })} required placeholder="Your Name" />
                                    {errors.fullName && <span>This field is required</span>}

                                </div>
                                <div className="col-md-6">

                                    {/* <input type="email" className="form-control" id="email" placeholder="Your Email" required /> */}
                                    <input className="form-control" type="email" {...register("email", { required: true })} required placeholder="Your Email" />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="col-12">

                                    {/* <input type="text" className="form-control" id="subjeet"
                                        placeholder="subject" required /> */}
                                        <input className="form-control" type="text" {...register("subjeet", { required: true })} required placeholder="Your subjeet" />
                                    {errors.subjeet && <span>This field is required</span>}
                                </div>

                                <div className="mb-3">

                                    <textarea className="form-control" id="message" rows="13"  {...register("message", { required: true })} 
                                    ></textarea>
                                    {errors.message && <span>This field is required</span>}
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" id="messageSend" 
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