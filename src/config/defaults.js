const baseURI = "http://localhost:8080";
const homePath = "/";
const eventPath = "/event";
const accountPath = "/account";
const registrationPath = "/account/registration";
const loginPath = "/account/login";
const logoutPath = "/account/logout";

const resourceMap = new Map();

resourceMap.set("home", homePath);
resourceMap.set("event", eventPath);
resourceMap.set("account", accountPath);
resourceMap.set("registration", registrationPath);
resourceMap.set("login", loginPath);
resourceMap.set("logout", logoutPath);

export {
    baseURI,
    homePath,
    eventPath,
    registrationPath,
    loginPath,
    logoutPath,
    resourceMap,
};
