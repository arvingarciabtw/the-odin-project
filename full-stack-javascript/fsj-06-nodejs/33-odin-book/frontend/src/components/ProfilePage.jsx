import styles from "../styles/ProfilePage.module.css";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";
import Post from "./Post";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { api } from "../utils/api";

function ProfilePage() {
	const [user, setUser] = useState(null);

	const { user: loggedUser } = useAuth();

	useEffect(() => {
		try {
			async function fetchUser() {
				const response = await api.get(`/api/users/${loggedUser.id}`);
				const user = await response.json();

				setUser(user);
			}

			fetchUser();
		} catch (err) {
			throw new Error(err.message);
		}
	}, []);

	async function handleLike(userId, postId) {
		try {
			await api.post("/api/posts/likes", {
				userId,
				postId,
			});

			const updatedUser = {
				...user,
				posts: user.posts.map((post) => {
					if (post.id === postId) {
						return {
							...post,
							likes: [...post.likes, { user_id: userId }],
						};
					}
					return post;
				}),
			};
			setUser(updatedUser);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async function handleDislike(userId, postId) {
		try {
			await api.delete("/api/posts/likes", {
				userId,
				postId,
			});

			const updatedUser = {
				...user,
				posts: user.posts.map((post) => {
					if (post.id === postId) {
						return {
							...post,
							likes: post.likes.filter((like) => like.user_id !== userId),
						};
					}
					return post;
				}),
			};
			setUser(updatedUser);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	if (!user) {
		return (
			<main className={styles.mainContainer}>
				<Hamburger />
				<Sidebar />
			</main>
		);
	}

	return (
		<main className={styles.mainContainer}>
			<Hamburger />
			<Sidebar />
			<div className={styles.right}>
				<section className={styles.profile}>
					<div className={styles.profilePicture}>
						<img src="/logo_optimized.webp" alt="Profile picture" />
					</div>
					<h1 className={styles.fullname}>
						{user.first_name} {user.last_name}
					</h1>
					<p className={styles.username}>@{user.username}</p>
					<div className={styles.profileDetails}>
						<p>
							<span>{user.following.length}</span> followers
						</p>
						<p>
							<span>{user.followers.length}</span> following
						</p>
						<p>
							<span>{user.posts.length}</span> posts
						</p>
					</div>
				</section>
				<MyPosts user={user} handleLike={handleLike} handleDislike={handleDislike} />
			</div>
		</main>
	);
}

function MyPosts({ user, handleLike, handleDislike }) {
	return (
		<section className={styles.myPosts}>
			{user.posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					author={post.author}
					content={post.content}
					postedAt={formatDistanceToNow(new Date(post.created_at), {
						addSuffix: false,
					})}
					comments={post.comments}
					likes={post.likes}
					handleLike={handleLike}
					handleDislike={handleDislike}
				/>
			))}
		</section>
	);
}

export default ProfilePage;
