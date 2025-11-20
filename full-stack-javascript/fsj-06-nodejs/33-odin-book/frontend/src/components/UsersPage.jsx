import styles from "../styles/UsersPage.module.css";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import Users from "./Users";

function UsersPage() {
	return (
		<main className={styles.mainContainer}>
			<Hamburger />
			<Sidebar />
			<Users />
		</main>
	);
}

export default UsersPage;
