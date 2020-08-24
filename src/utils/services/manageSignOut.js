import { createBrowserHistory } from "history";
const history = createBrowserHistory({basename: "/"});

const manageSignOut = () => {
    localStorage.clear();
    history.go("/login");
};

export default manageSignOut;