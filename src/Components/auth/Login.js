import React, { useContext } from 'react';
import firebase from "firebase/app";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {

    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const messageSend = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()

            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setLoggedInUser(user)
                history.replace(from);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }


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
                                <button class="btn bg-brand text" type="submit">Sign In</button>
                            </div>

                        </form>
                        <hr />
                        <div class="d-grid gap-2 d-flex">
                            <span>Don't have an account yet?</span> <Link to="/registration" className="text-light">Register</Link>

                        </div>
                        <hr />
                        <div class="d-grid gap-2 mt-1">
                            <button class="btn bg-brand text" type="submit" onClick={messageSend}>Sign with Google</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;