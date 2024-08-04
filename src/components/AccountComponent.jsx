const AccountComponent = ({ data }) => {
    return (
        <h1 className="fw--600">
        {JSON.stringify(data) ||
            "no content to display yet"}
    </h1>
    );
};

export default AccountComponent;
