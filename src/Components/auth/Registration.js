import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex align-items-center justify-content-center p-5">

                    <div className="from-container brand-bgcolor p-5 text-center">
                        <div className="mb-4">

                            <i class="far fa-user" style={{ fontSize: '70px', color: 'white' }}></i>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    {...register("email", { required: true })}
                                    required />
                                {errors.email && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                    required />
                                {errors.email && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                    required />
                                {errors.password && <span className="text-danger">This field is required</span>}

                            </div>
                            
                            <div class="d-grid gap-2 bg-light">
                                <button class="btn bg-brand text" type="submit">Register</button>
                            </div>
                        </form>
                        <hr />
                        <div class="d-grid gap-2 d-flex">
                            <span>Already Have an account?</span> <Link to="/login" className="text-light">Login Here</Link>
                            
                        </div>
                        <hr />
                        <div class="d-grid gap-2 mt-1">
                            <button class="btn bg-brand text" type="submit">Sign with Google</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Registration;