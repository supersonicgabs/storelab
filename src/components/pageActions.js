import React from 'react';
import { Button } from './buttons';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";

const PageActionsTab = ({ buttonOptions }) => {
    return (
        <section data-grid="start">
            <div data-page="actions" data-cell="1of3 shrink" data-grid="around small-spacing">
                {buttonOptions.map(options =>
                    <span key={options.text}>
                        <Button
                            onClick={options.method || null}
                            type={options.type || ""}
                        >
                            {options.text}
                        </Button>
                    </span>)}
            </div>
        </section>
    )
};

const Results = ({text, value}) => {
    return(
        <section data-grid="end">
            <div data-page="results" data-cell="1of3 shrink" data-grid="small-spacing">
                <strong>{text}</strong> <span className="successColor">{value}</span>
            </div>
        </section>
    )
}

const ButtonCollumnGroup = ({ buttonsOptions }) => {
    const history = createBrowserHistory();;
    return (
        <div data-grid="column center spacing">
            {
                buttonsOptions.map(options => {
                    return (
                        <Link key={options.text} to={options.goTo}>
                            <Button 
                                onClick={options.method || null} 
                                type={options.type || ""}
                                className={"pageActionsGroupButton"}
                                style={{
                                    backgroundColor: history.location.pathname === options.goTo ? "#28586B" : null,
                                    color: history.location.pathname === options.goTo ? "white" : null,
                                    borderColor: history.location.pathname === options.goTo ? "white" : null,
                                }}
                            >
                                {options.text}
                            </Button>
                        </Link>
                    )
                })
            }
        </div>
    )
};

export {
    PageActionsTab,
    ButtonCollumnGroup,
    Results
};