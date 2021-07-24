import React from 'react';
import './Newsletter.css'
const NewsLetter = () => {
    return (
        <section style={{backgroundColor: '#F3F5FA'}} className="pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center Newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form className="row g-3 needs-validation d-flex justify-content-center " noValidate>
                        <div className="col-md-7 position-relative">
                            <div className="input-group has-validation">
                                <input type="text" className="form-control Newsletter-from"
                                    id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend" required />
                                <span className="subscribe-button-style" id="validationTooltipUsernamePrepend">
                                    <button className="btn rounded-pill text-light subscribe">SubScribe</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default NewsLetter;