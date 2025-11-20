import styles from "../styles/Users.module.css";

function Users() {
	return (
		<section className={styles.users}>
			<User />
			<User />
			<User />
			<User />
			<User />
		</section>
	);
}

function User() {
	return (
		<div className={styles.user}>
			<img src="/logo_optimized.webp" alt="Profile picture" />
			<div className={styles.userDetails}>
				<p className={styles.fullname}>First Last</p>
				<div className={styles.bottom}>
					<p>@username</p>
					<div className={styles.separator}></div>
					<p>
						<span>10</span> followers
					</p>
					<div className={styles.separator}></div>
					<p>
						<span>10</span> following
					</p>
				</div>
			</div>
			<button className={styles.followButton}>Follow</button>
		</div>
	);
}

export default Users;
