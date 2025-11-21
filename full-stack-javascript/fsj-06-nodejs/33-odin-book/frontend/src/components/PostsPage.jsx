import styles from "../styles/PostsPage.module.css";
import Hamburger from "../components/Hamburger";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { api } from "../utils/api";

function PostsPage() {
	const [user, setUser] = useState();

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
	}, [loggedUser.id]);

	async function handleLike(userId, postId) {
		try {
			await api.post("/api/posts/likes", {
				userId,
				postId,
			});

			const updatePostsArray = (postsList) => {
				return postsList.map((post) => {
					if (post.id === postId) {
						return {
							...post,
							likes: [...post.likes, { user_id: userId }],
						};
					}
					return post;
				});
			};

			const updatedUser = {
				...user,
				posts: updatePostsArray(user.posts),

				followers: user.followers.map((record) => ({
					...record,
					following: {
						...record.following,
						posts: updatePostsArray(record.following.posts),
					},
				})),
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

			const updatePostsArray = (postsList) => {
				return postsList.map((post) => {
					if (post.id === postId) {
						return {
							...post,
							likes: post.likes.filter((like) => like.user_id !== userId),
						};
					}
					return post;
				});
			};

			const updatedUser = {
				...user,
				posts: updatePostsArray(user.posts),

				followers: user.followers.map((record) => ({
					...record,
					following: {
						...record.following,
						posts: updatePostsArray(record.following.posts),
					},
				})),
			};

			setUser(updatedUser);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	if (!user) {
		return (
			<>
				<main className={styles.mainContainer}>
					<Hamburger />
					<Sidebar />
				</main>
			</>
		);
	}

	const myPosts = user.posts || [];
	const followingPosts = user.followers.flatMap((record) => {
		return record.following.posts;
	});

	const allPosts = [...myPosts, ...followingPosts];

	allPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

	return (
		<>
			<main className={styles.mainContainer}>
				<Hamburger />
				<Sidebar />
				<section className={styles.posts}>
					{allPosts.map((post) => (
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
			</main>
		</>
	);
}

export default PostsPage;
