const CredentialsFormComponent = ({ onSubmit, action }) => {
    return (
        <form  className="form-inline" onSubmit={onSubmit} method="post" action={action}>
            
                <label  htmlFor="username" >
                    <input
                        id="username"
                        className="form-control"
                        name="username"
                        type="text"
                        placeholder="username.."
                    />
                </label >
            
            
                <label htmlFor="password" className="m-2">
                    <input id="password" className="form-control" name="password" type="password" placeholder="password.." />
                </label>
            
            <button type="submit" className="btn btn-dark m-3">Submit</button>
        </form>
    );
};

export default CredentialsFormComponent;
