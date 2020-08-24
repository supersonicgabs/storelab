const manageSignIn = async ({ accessToken, name }) => {
    await localStorage.setItem("session/accessToken", accessToken);
    await localStorage.setItem("session/user", JSON.stringify(name));
};

export default manageSignIn;