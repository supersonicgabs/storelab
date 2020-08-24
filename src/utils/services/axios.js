import axios from "axios";
import api from "./getApi";
// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjBlNjQ4Nzk3YzU0MTIwNTc2NDZkMTYiLCJjb21wYW55SWQiOiI1ZjBlNjQ4Nzk3YzU0MTIwNTc2NDZkMTYiLCJpYXQiOjE1OTU2NDAxNzR9.JsJOkIiOVAcyoSlD_8qhP0QCDMCtO5jVkAQ9AXoToDQ"
const accessToken = localStorage.getItem("session/accessToken");

const unauthenticatedClient = axios.create({
    baseURL: api,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    },
});

const client = axios.create({
    baseURL: api,
    timeout: 10000,
    headers: {
        'Authentication': `bearer ${accessToken}`,
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    },
});

export {
    unauthenticatedClient,
    client
}