const EventFormComponent = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} method="get">
            <label htmlFor="keyword">
                <input
                    id="keyword"
                    className="form-control search"
                    name="keyword"
                    type="search"
                    placeholder="Enter a keyword, like 'election' or '1920'..."
                />
            </label>
            <button type="submit" className="btn btn-dark m-3">Search</button>
        </form>
    );
};

export default EventFormComponent;
