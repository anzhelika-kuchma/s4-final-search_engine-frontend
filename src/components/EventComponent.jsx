const EventComponent = ({ data }) => {
    return (
        <h1>
            {JSON.stringify(data) ||
                "no content to display yet, check the console"}
        </h1>
    );
};

export default EventComponent;