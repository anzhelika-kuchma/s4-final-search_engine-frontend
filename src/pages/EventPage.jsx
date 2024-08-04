import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import EventComponent from "../components/EventComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";

const EventPage = () => {
    const { pathname, search } = useLocation();
    const [data, setData] = useState();

    const url = baseURI + pathname + search;

    useEffect(() => {
        getData(url);
    }, []);

    return <EventComponent data={data} />;
};

export default EventPage;