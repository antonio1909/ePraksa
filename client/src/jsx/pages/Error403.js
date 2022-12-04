import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Error403 = () => {
    const homeLink = Cookies.get("ROLE")
        ? `/${Cookies.get("ROLE")}/dashboard`
        : `/login`;

    return (
        <div className='authincation h-100 p-meddle'>
            <div className='container h-100'>
                <div className='row justify-content-center h-100 align-items-center'>
                    <div className='col-md-5'>
                        <div className='form-input-content text-center error-page'>
                            <h1 className='error-text  font-weight-bold'>
                                403
                            </h1>
                            <h4>
                                <i className='fa fa-times-circle text-danger' />{" "}
                                Forbidden Error!
                            </h4>
                            <p>
                                {Cookies.get("ROLE")
                                    ? "You do not have permission to view this resource."
                                    : "You are not logged in."}
                            </p>
                            <div>
                                <Link className='btn btn-primary' to={homeLink}>
                                    {Cookies.get("ROLE")
                                        ? "Back to Home"
                                        : "Log in"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error403;
