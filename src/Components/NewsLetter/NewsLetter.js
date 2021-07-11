import React from 'react';
import './Newsletter.css'
const NewsLetter = () => {
    return (
        <section style={{backgroundColor: '#F3F5FA'}} class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center Newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form class="row g-3 needs-validation d-flex justify-content-center " novalidate>
                        <div class="col-md-7 position-relative">
                            <div class="input-group has-validation">
                                <input type="text" class="form-control Newsletter-from"
                                    id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend" required />
                                <span class="subscribe-button-style" id="validationTooltipUsernamePrepend">
                                    <button class="btn rounded-pill text-light subscribe">SubScribe</button>
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