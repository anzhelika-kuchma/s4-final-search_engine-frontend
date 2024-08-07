import { Routes, Route } from "react-router-dom";

import { MainContextProvider } from "./context/MainContext.jsx";

import HomePage from "./pages/HomePage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import EventPage from "./pages/EventPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import NavigationComponent from "./components/NavigationComponent.jsx";

import 'bootstrap/dist/css/bootstrap.css';

import {
    homePath,
    eventPath,
    accountPath,
    registrationPath,
    loginPath,
    logoutPath,
} from "./config/defaults.js";

import "./App.css";

const App = () => {
    return (
        <div className="container container--px flow-spacing--m">
            <MainContextProvider>
                <NavigationComponent />
                <Routes>
                    <Route path={homePath} element={<HomePage />} />
                    <Route path={eventPath} element={<EventPage />} />
                    <Route path={accountPath} element={<AccountPage />} />
                    <Route
                        path={registrationPath}
                        element={<RegistrationPage />}
                    />
                    <Route path={loginPath} element={<LoginPage />} />
                    <Route path={logoutPath} element={null} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </MainContextProvider>
        </div>
    );
};

export default App;
