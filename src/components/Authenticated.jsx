import * as React from "react";
import { Redirect, Route } from "react-router";

const Authenticated = ({ component: Component, methods, inputsValues, ...rest }) => {
    const isLoggedIn = () => {
        try {
            const accessToken = localStorage.getItem("session/accessToken");
            if (accessToken) return true;
            else return false
        } catch (error) {
            localStorage.clear();
            sessionStorage.clear();
            return false;
        }
    };

    const renderRoute = (renderProps) => {
        const isLogged = isLoggedIn();
        if (isLogged && Component) {
            return <Component methods={methods} inputsValues={inputsValues} {...renderProps} />;
        }
        return <Redirect to="/login" />;
    };

    return <Route {...rest} render={renderRoute} />;
}

export default Authenticated