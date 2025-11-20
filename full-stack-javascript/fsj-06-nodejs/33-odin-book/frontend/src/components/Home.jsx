import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import Sidebar from "../components/Sidebar";

function Home() {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<main
						style={{
							display: "grid",
							gridTemplateColumns: "200px 1fr",
						}}
					>
						<Sidebar />
						<section>
							<h1>
								Welcome, {user.first_name} {user.last_name}!
							</h1>
						</section>
					</main>
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
