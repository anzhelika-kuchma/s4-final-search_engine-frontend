import { Link } from "react-router-dom";

import { registrationPath } from "../config/defaults.js";

const HomeComponent = () => {
    return (
        <>
            <h1 className="fw--600">Welcome to Significant Events in Canadian History Search</h1>
            <div>

                <p>
                    Register to start the search{" "} - 
                    <Link to={registrationPath}>registration page</Link> 
                </p>

            </div>
        </>
    );
};

export default HomeComponent;
