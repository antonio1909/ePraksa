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
import SearchJobs from "./components/Dashboard/SearchJobs/SearchJobs";

/// App
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";

/// Pages
import Error404 from "./pages/Error404";
import Todo from "./pages/Todo";

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
    if (Cookies.get("ROLE") !== "student") return <Redirect to='/error403' />;

    const routes = [
        /// Dashboard
        { url: "", component: Home },
        { url: "student/dashboard", component: Home },
        { url: "student/application", component: Application },
        { url: "student/profil", component: Profile },
        { url: "student/praksa", component: SearchJobs },
        { url: "student/poruke", component: Inbox },
        { url: "student/mentori", component: Todo },
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
                            <Route path='/*' component={Error404} />
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
