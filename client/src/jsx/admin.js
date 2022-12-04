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
import EditStudent from "./components/Dashboard/Profile/EditStudent";
import EditProfesor from "./components/Dashboard/Profile/EditProfesor";
import EditMentor from "./components/Dashboard/Profile/EditMentor";
import Companies from "./components/Dashboard/Companies/Companies";

/// Pages
import addStudents from "./pages/addStudents";
import addProfesors from "./pages/addProfesors";
import addMentor from "./pages/addMentor";
import addFakultet from "./pages/addFakultet";

//Scroll To Top
import ScrollToTop from "./layouts/ScrollToTop";

import Cookies from "js-cookie";

const Markup = () => {
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    let pagePath = path.split("-").includes("page");
    const [activeEvent, setActiveEvent] = useState(!path);

    // Redirect if not logged as admin
    if (Cookies.get("ROLE") !== "admin") return <Redirect to='/error403' />;

    const routes = [
        /// Dashboard
        { url: "", component: Home },
        { url: "admin/dashboard", component: Home },
        { url: "admin/application", component: Application },
        { url: "admin/firme", component: Companies },

        { url: "admin/studenti", component: addStudents },
        { url: "admin/profesori", component: addProfesors },
        { url: "admin/mentori", component: addMentor },
        { url: "admin/fakulteti", component: addFakultet },

        { url: "admin/student/:id", component: EditStudent },
        { url: "admin/mentor/:id", component: EditMentor },
        { url: "admin/profesor/:id", component: EditProfesor },
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
