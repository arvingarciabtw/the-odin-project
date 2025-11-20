import styles from "../styles/ProfilePage.module.css";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";
import { Post } from "./Posts";

function ProfilePage() {
	return (
		<main className={styles.mainContainer}>
			<Hamburger />
			<Sidebar />
			<div className={styles.right}>
				<section className={styles.profile}>
					<div className={styles.profilePicture}>
						<img src="/logo_optimized.webp" alt="Profile picture" />
					</div>
					<h1 className={styles.fullname}>First Last</h1>
					<p className={styles.username}>@username</p>
					<div className={styles.profileDetails}>
						<p>
							<span>10</span> followers
						</p>
						<p>
							<span>10</span> following
						</p>
						<p>
							<span>10</span> posts
						</p>
					</div>
				</section>
				<MyPosts />
			</div>
		</main>
	);
}

function MyPosts() {
	return (
		<section className={styles.myPosts}>
			<Post />
			<Post />
			<Post />
		</section>
	);
}

export default ProfilePage;
