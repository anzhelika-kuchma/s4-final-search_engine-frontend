const EventFormComponent = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} method="get">
            <label htmlFor="keyword">
                <input
                    id="keyword"
                    name="keyword"
                    type="search"
                    placeholder="event"
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

export default EventFormComponent;
