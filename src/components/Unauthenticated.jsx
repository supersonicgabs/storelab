import * as React from "react";
import { Redirect, Route } from "react-router";

const Unauthenticated = ({ component: Component, methods, inputsValues, ...rest }) => {
    const isNotLoggedIn = () => {
        try {
            const accessToken = localStorage.getItem("session/accessToken");
            if (accessToken) return false;
            else return true
        } catch (error) {
            sessionStorage.clear();
            return false;
        }
    };

    const renderRoute = (renderProps) => {
        const isLogged = isNotLoggedIn();
        if (isLogged && Component) {
            return <Component methods={methods} inputsValues={inputsValues} {...renderProps} />;
        }
        return <Redirect to="/" />;
    };
    
    return <Route {...rest} render={renderRoute} />;
}

export default Unauthenticated;