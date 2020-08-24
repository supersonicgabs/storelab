const hostname = window.location.hostname;

const stgApi = "http://localhost:8080/v1";

const client = (() => {
    if (hostname.includes("localhost")) return stgApi;
    else return stgApi;
})();

export default client