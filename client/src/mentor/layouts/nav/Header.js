import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import LogoutPage from "./Logout";
/// Image
import profile from "../../../images/profile/17.jpg";
import avatar from "../../../images/avatar/1.jpg";
import Cookies from "js-cookie";

const Header = ({ onNote, toggle, onProfile, onNotification }) => {
    var path = window.location.pathname.split("/");
    var name = path[path.length - 1].split("-");
    var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
    var finalName = filterName.includes("app")
        ? filterName.filter((f) => f !== "app")
        : filterName.includes("ui")
        ? filterName.filter((f) => f !== "ui")
        : filterName.includes("uc")
        ? filterName.filter((f) => f !== "uc")
        : filterName.includes("basic")
        ? filterName.filter((f) => f !== "basic")
        : filterName.includes("form")
        ? filterName.filter((f) => f !== "form")
        : filterName.includes("table")
        ? filterName.filter((f) => f !== "table")
        : filterName.includes("page")
        ? filterName.filter((f) => f !== "page")
        : filterName.includes("email")
        ? filterName.filter((f) => f !== "email")
        : filterName.includes("ecom")
        ? filterName.filter((f) => f !== "ecom")
        : filterName.includes("chart")
        ? filterName.filter((f) => f !== "chart")
        : filterName.includes("editor")
        ? filterName.filter((f) => f !== "editor")
        : filterName;
    return (
        <div className='header'>
            <div className='header-content'>
                <nav className='navbar navbar-expand'>
                    <div className='collapse navbar-collapse justify-content-between'>
                        <div className='header-left'>
                            <div
                                className='dashboard_bar'
                                style={{ textTransform: "capitalize" }}>
                                {finalName.join(" ")}
                            </div>
                        </div>

                        <ul className='navbar-nav header-right'>
                            <li className='nav-item'>
                                <div className='input-group search-area d-lg-inline-flex d-none'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Search something here...'
                                    />
                                    <div className='input-group-append'>
                                        <span className='input-group-text'>
                                            <i className='flaticon-381-search-2'></i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className={`nav-item dropdown header-profile ${
                                    toggle === "profile" ? "show" : ""
                                }`}
                                onClick={() => onProfile()}>
                                <Link
                                    to={"#"}
                                    className='nav-link'
                                    role='button'
                                    data-toggle='dropdown'>
                                    <img src={profile} width='20' alt='' />
                                    <div className='header-info'>
                                        <span className='text-black'>
                                            {Cookies.get("NAME")}
                                        </span>
                                        <p className='fs-12 mb-0'>Mentor</p>
                                    </div>
                                </Link>
                                <div
                                    className={`dropdown-menu dropdown-menu-right ${
                                        toggle === "profile" ? "show" : ""
                                    }`}>
                                    <LogoutPage />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
