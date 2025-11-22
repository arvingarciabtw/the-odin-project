import styles from "../styles/Users.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../utils/api";

function Users() {
	const { user: loggedUser } = useAuth();

	const [users, setUsers] = useState([]);

	useEffect(() => {
		try {
			async function fetchUsers() {
				const response = await api.get("/api/users");
				const users = await response.json();

				const filteredUsers = users.filter((user) => user.id !== loggedUser.id);

				setUsers(filteredUsers);
			}

			fetchUsers();
		} catch (err) {
			throw new Error(err.message);
		}
	}, []);

	return (
		<section className={styles.users}>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</section>
	);
}

function User({ user }) {
	const { user: loggedUser } = useAuth();

	const isFollowing = user.following.some(
		(item) => item.follower_id === loggedUser.id && item.status === "ACCEPTED",
	);

	const isPending = user.following.some(
		(item) => item.follower_id === loggedUser.id && item.status === "PENDING",
	);

	let status;

	if (isFollowing) {
		status = "Unfollow";
	} else if (isPending) {
		status = "Pending";
	} else {
		status = "Follow";
	}

	return (
		<div className={styles.user}>
			<img src="/default-profile.jpeg" alt="Profile picture" />
			<div className={styles.userDetails}>
				<p className={styles.fullname}>
					{user.first_name} {user.last_name}
				</p>
				<div className={styles.bottom}>
					<p>@{user.username}</p>
					<div className={styles.separator}></div>
					<p>
						<span>{user.following.length}</span> followers
					</p>
					<div className={styles.separator}></div>
					<p>
						<span>{user.followers.length}</span> following
					</p>
				</div>
			</div>
			<button className={styles.followButton}>{status}</button>
		</div>
	);
}

export default Users;
