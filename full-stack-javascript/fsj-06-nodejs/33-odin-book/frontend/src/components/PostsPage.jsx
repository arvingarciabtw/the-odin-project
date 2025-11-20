import styles from "../styles/PostsPage.module.css";
import Hamburger from "../components/Hamburger";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

function PostsPage() {
	return (
		<>
			<main className={styles.mainContainer}>
				<Hamburger />
				<Sidebar />
				<Posts />
			</main>
		</>
	);
}

export default PostsPage;
