import styles from "../styles/Home.module.css";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

function Home() {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<main className={styles.mainContainer}>
						<Sidebar />
						<Posts />
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
