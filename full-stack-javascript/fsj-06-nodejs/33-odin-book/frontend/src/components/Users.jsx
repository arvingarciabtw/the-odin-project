import styles from "../styles/Users.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../utils/api";

function Users() {
	const { user: loggedUser } = useAuth();

	const [users, setUsers] = useState([]);
	const [key, setKey] = useState(0);

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
	}, [key]);

	function refreshUsers() {
		setKey((prevKey) => prevKey + 1);
	}

	return (
		<section className={styles.users}>
			{users.map((user) => (
				<User key={user.id} user={user} refreshUsers={refreshUsers} />
			))}
		</section>
	);
}

function User({ user, refreshUsers }) {
	const { user: loggedUser } = useAuth();

	const isFollowing = user.following.some(
		(item) => item.follower_id === loggedUser.id && item.status === "ACCEPTED",
	);

	let status;

	if (isFollowing) {
		status = "Unfollow";
	} else {
		status = "Follow";
	}

	async function handleFollow() {
		try {
			if (status === "Follow") {
				await api.post(`/api/users/${user.id}/follow`);
			} else {
				await api.post(`/api/users/${user.id}/unfollow`);
			}
			refreshUsers();
		} catch (err) {
			throw new Error(err.message);
		}
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
			<button className={styles.followButton} onClick={handleFollow}>
				{status}
			</button>
		</div>
	);
}

export default Users;
