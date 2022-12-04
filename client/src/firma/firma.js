import React, { useState } from "react";
/// React router dom
import { Switch, Route, Redirect } from "react-router-dom";
/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Deshboard
import Home from "./components/Dashboard/Home/Home";
import Application from "./components/Dashboard/Application/Application";
import Profile from "./components/Dashboard/Profile/Profile";
import ProfileOsobe from "./components/Dashboard/Profile/ProfileOsobe";

/// App
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";

/// Pages
import addStudents from "./pages/addStudents";

//Scroll To Top
import ScrollToTop from "./layouts/ScrollToTop";

import Cookies from "js-cookie";

const Markup = () => {
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    let pagePath = path.split("-").includes("page");
    const [activeEvent, setActiveEvent] = useState(!path);

    // Redirect if not logged as student
    if (Cookies.get("ROLE") !== "firma") return <Redirect to='/error403' />;

    const routes = [
        /// Dashboard
        { url: "", component: Home },
        { url: "firma/dashboard", component: Home },
        { url: "firma/application", component: Application },
        { url: "firma/profil", component: Profile },
        { url: "firma/studenti", component: addStudents },
        { url: "firma/poruke", component: Inbox },
        { url: "firma/email-read", component: Read },
        { url: "firma/student/profil", component: ProfileOsobe },
        { url: "firma/student/:id", component: ProfileOsobe },
    ];

    return (
        <>
            <div
                id={`${!pagePath ? "main-wrapper" : ""}`}
                className={`${!pagePath ? "show" : "mh100vh"}`}>
                {!pagePath && (
                    <Nav
                        onClick={() => setActiveEvent(!activeEvent)}
                        activeEvent={activeEvent}
                        onClick2={() => setActiveEvent(false)}
                        onClick3={() => setActiveEvent(true)}
                    />
                )}
                <div
                    className={` ${
                        !path && activeEvent ? "rightside-event" : ""
                    } ${!pagePath ? "content-body" : ""}`}>
                    <div
                        className={`${!pagePath ? "container-fluid" : ""}`}
                        style={{ minHeight: window.screen.height - 60 }}>
                        <Switch>
                            {routes.map((data, i) => (
                                <Route
                                    key={i}
                                    exact
                                    path={`/${data.url}`}
                                    component={data.component}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
                {!pagePath && <Footer />}
            </div>
            <ScrollToTop />
        </>
    );
};

export default Markup;
