import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<NavBar />
					<main>
						<h1>
							Welcome, {user.first_name} {user.last_name}!
						</h1>
					</main>
					<Footer />
				</>
			) : (
				<main
					style={{
						width: "100%",
						height: "100svh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<LoginForm />
				</main>
			)}
		</>
	);
}

export default Home;
