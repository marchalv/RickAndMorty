import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from './redux/actions';

const LoginForm = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useNavigate()



    const loginSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('login success');
                history('/');
                props.login();
            })
            .catch(err => setError(err.message));
    };


    return (
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                    <form className="mx-1 mx-md-4" onSubmit={loginSubmit} name='registration form'>
                                        {/* -------------------- Email -------------------- */}
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-envelope-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                            </svg>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="email" id="registerMail" className="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                            </div>
                                        </div>

                                        {/* -------------------- Password -------------------- */}
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                            </svg>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password" id="form3Example4c"
                                                       className="form-control" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" className="btn btn-primary btn-lg">Login
                                            </button>
                                        </div>
                                        {error && <p className="text-danger">{error}</p>}

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { login })(LoginForm);