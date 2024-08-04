import LoginPage from "./pages/LoginPage.jsx";
import EventPage from "./pages/EventPage.jsx";

import NavigationComponent from "./components/NavigationComponent.jsx";

import "./App.css";

const App = () => {
    return (
        <div className="container container--px flow-spacing--m">
            <NavigationComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />}>
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
                <Route path="/event" element={<EventPage />} />
            </Routes>
        </div>
    );
};
export default App;
