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
import Companies from "./components/Dashboard/Companies/Companies";

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";

/// Pages
import Error404 from "./pages/Error404";
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
    if (Cookies.get("ROLE") !== "profesor") return <Redirect to='/error403' />;

    const routes = [
        /// Dashboard
        { url: "", component: Home },
        { url: "profesor/dashboard", component: Home },
        { url: "profesor/application", component: Application },
        { url: "profesor/profil", component: Profile },
        { url: "profesor/firme", component: Companies },
        { url: "profesor/studenti", component: addStudents },
        { url: "profesor/app-profile", component: AppProfile },
        { url: "profesor/poruke", component: Inbox },
        { url: "profesor/email-read", component: Read },
        { url: "profesor/student/:id", component: ProfileOsobe },
        { url: "*", component: Error404 },
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
