import { useContext } from "react";
import { Navigate } from "react-router-dom";

import MainContext from "../context/MainContext.jsx";

import EventComponent from "../components/EventComponent.jsx";

const EventPage = () => {
    const { isAuthenticated } = useContext(MainContext);

    return (
        <>
            <h1 className="header">Event Search</h1>
            {isAuthenticated ? (
                <EventComponent />
            ) : (
                <Navigate to="/" replace />
            )}
        </>
    );
};

export default EventPage;
