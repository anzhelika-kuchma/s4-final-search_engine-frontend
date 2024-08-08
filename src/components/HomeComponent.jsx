import { Link } from "react-router-dom";

import { registrationPath } from "../config/defaults.js";

const HomeComponent = () => {
    return (
        <>
            <h1 className="header">Significant Events on the Canadian History</h1>
            <div>

                <p className="subtitle">
                    <Link to={registrationPath}>Register</Link> 
                    {" "}to start the search..
                </p>

            </div>
        </>
    );
};

export default HomeComponent;
