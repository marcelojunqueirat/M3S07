import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    }

    return (
        <div className="header">
            <h2>Header</h2>
            <div className="button-logout">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default HeaderComponent;