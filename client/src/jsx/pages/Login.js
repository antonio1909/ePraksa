import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, Redirect, Navigate, useHistory } from "react-router-dom";
import {
    loadingToggleAction,
    loginAction,
} from "../../store/actions/AuthActions";

//
import logo from "../../images/aspira-uciliste.png";

import { getError, redirectUser } from "./signInLib";
import Cookies from "js-cookie";

function Login(props) {
    const [email, setEmail] = useState("admin@aspira.hr");
    let errorsObj = { email: "", password: "" };
    const [errors, setErrors] = useState(errorsObj);
    const [warning, setWarning] = useState(null);
    const [password, setPassword] = useState("admin");
    const dispatch = useDispatch();
    const history = useHistory();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === "") {
            errorObj.email = "Email is Required";
            error = true;
        }
        if (password === "") {
            errorObj.password = "Password is Required";
            error = true;
        }
        setErrors(errorObj);
        if (error) {
            return;
        }

        // Cookies.set("ROLE", password);
        // history.push(`/${password}/dashboard`);

        // Login
        fetch(
            `http://localhost:4000/login?username=${email}&password=${password}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log(data);
                    setWarning(getError(data.error));
                } else {
                    Cookies.set("ROLE", data.role);
                    if (data.hasOwnProperty("id")) {
                        Cookies.set("ID", data.id);
                        Cookies.set("NAME", data.ime);
                    }
                    console.log(data.hasOwnProperty("id"));
                    history.push(`/${data.role}/dashboard`);
                }
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
    return (
        <div className='login-form-bx'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-7 box-skew d-flex'>
                        <div className='authincation-content'>
                            <div className='mb-4'>
                                <h3 className='mb-1 font-w600'>
                                    Welcome to Aspira
                                </h3>
                                <p className=''>
                                    Sign in by entering information below
                                </p>
                            </div>
                            {warning && (
                                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                    {warning}
                                </div>
                            )}
                            {props.successMessage && (
                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
                            <form onSubmit={onLogin}>
                                <div className='form-group'>
                                    <label className='mb-2 '>
                                        <strong className=''>Email</strong>
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <div className='text-danger fs-12'>
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className='form-group'>
                                    <label className='mb-2 '>
                                        <strong className=''>Password</strong>
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <div className='text-danger fs-12'>
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div className='form-row d-flex justify-content-between mt-4 mb-2'>
                                    <div className='form-group'>
                                        <div className='custom-control custom-checkbox ml-1 '>
                                            <input
                                                type='checkbox'
                                                className='form-check-input'
                                                id='basic_checkbox_1'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='basic_checkbox_1'>
                                                Remember my preference
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button
                                        type='submit'
                                        className='btn btn-primary btn-block'>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-5 d-flex box-skew1'>
                        <div className='inner-content align-self-center'>
                            <Link to='/dashboard' className='login-logo'>
                                <img
                                    src={logo}
                                    alt=''
                                    className='logo-icon mr-2'
                                />
                            </Link>
                            <h2 className='m-b10 text-white'>
                                Login To Aspira Dashboard
                            </h2>
                            <p className='m-b40 text-white'>
                                College Of Management And Design
                            </p>
                            <ul className='social-icons mt-4'>
                                <li>
                                    <a
                                        href='https://www.facebook.com/Aspira.College/'
                                        target='_blank'>
                                        <i className='fa fa-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://twitter.com/aspirasplit'
                                        target='_blank'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.linkedin.com/school/aspira-college/?originalSubdomain=hr'
                                        target='_blank'>
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);
