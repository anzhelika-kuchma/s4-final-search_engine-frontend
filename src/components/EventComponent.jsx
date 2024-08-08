import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import EventFormComponent from "./EventFormComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";
import serializeFormQuery from "../utils/serializeFormQuery.js";

const EventComponent = () => {
    const { pathname, search } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState();

    useEffect(() => {
        const url = baseURI + pathname + search;

        searchParams.size && getEvents(url);
    }, [searchParams]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const target = event.target;
        const params = serializeFormQuery(target);

        setSearchParams(params);
    };

    const getEvents = async (url) => {
        const { body } = await getData(url);

        setData(body);
    };

    return (
        <>
            <EventFormComponent onSubmit={handleSubmit} />
            <ul className="event-list">
                {data &&
                    data.map(({ name }, index) => <li className="event" key={index}>{name}</li>)}
            </ul>
        </>
    );
};

export default EventComponent;
