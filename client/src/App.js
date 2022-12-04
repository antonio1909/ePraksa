import { lazy, Suspense, useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import {
    Route,
    Routes,
    Switch,
    Navigate,
    useNavigate,
    useLocation,
    Redirect,
} from "react-router-dom";

// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";

/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

// Components
const SignUp = lazy(() => import("./jsx/pages/Registration"));
const ForgotPassword = lazy(() => import("./jsx/pages/ForgotPassword"));
const Login = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./jsx/pages/Login")), 500);
    });
});
const Admin = lazy(() => import("./jsx/admin"));
const Student = lazy(() => import("./student/student"));
const Mentor = lazy(() => import("./mentor/mentor"));
const Profesor = lazy(() => import("./profesor/profesor"));
const Firma = lazy(() => import("./firma/firma"));
const Error403 = lazy(() => import("./jsx/pages/Error403"));
const Error404 = lazy(() => import("./jsx/pages/Error404"));

function App(props) {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    /* const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch, props.history);
  }, [dispatch, props.history]); */
    const location = useLocation();

    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/react/demo'>
                <Redirect to='/login' />
            </Route>
            <Route path='/page-register' component={SignUp} />
            <Route path='/page-forgot-password' component={ForgotPassword} />
            <Route path='/admin' component={Admin} />
            <Route path='/student' component={Student} />
            <Route path='/mentor' component={Mentor} />
            <Route path='/profesor' component={Profesor} />
            <Route path='/firma' component={Firma} />
            <Route path='/error403' component={Error403} />
            <Route path='/*' component={Error404} />
        </Switch>
    );

    return (
        <Switch>
            {(() => {
                return (
                    <div className='vh-100'>
                        <Suspense
                            fallback={
                                <div id='preloader'>
                                    <div className='sk-three-bounce'>
                                        <div className='sk-child sk-bounce1'></div>
                                        <div className='sk-child sk-bounce2'></div>
                                        <div className='sk-child sk-bounce3'></div>
                                    </div>
                                </div>
                            }>
                            {routes}
                        </Suspense>
                    </div>
                );
            })()}
        </Switch>
    );
}

/* const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
}; */

/* export default withRouter(connect(mapStateToProps)(App)); */

export default App;
