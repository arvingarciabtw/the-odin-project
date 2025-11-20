import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
	const { navigate } = useNavigate();
	const { logout } = useAuth();

	function handleLogout() {
		logout();
		navigate("/");
	}

	return (
		<main>
			<p>At the profile page...</p>
			<button onClick={handleLogout}>Log out</button>
		</main>
	);
}

export default ProfilePage;
