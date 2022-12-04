import { Redirect } from "react-router-dom";

const errors = {
    NO_USER_FOUND: "The user does not exist!",
    WRONG_PASSWORD: "Password is incorrect. Try again!",
};

const handleRedirect = {
    ADMIN: () => {
        <Redirect to='/admin/' />;
        console.log(`Did run`);
    },
    PROFESOR: () => {
        <Redirect to='/profesor/' />;
    },
    MENTOR: () => {
        <Redirect to='/mentor/' />;
    },
    STUDENT: () => {
        <Redirect to='/student/' />;
    },
    FIRMA: () => {
        <Redirect to='/firma/' />;
    },
};

const getError = (ERROR) => errors[ERROR];

const redirectUser = (ROLE) => handleRedirect[ROLE];

export { getError, redirectUser };
