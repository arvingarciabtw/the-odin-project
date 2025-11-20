import styles from "../styles/Posts.module.css";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { formatDistanceToNow } from "date-fns";
import Post from "./Post";

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const response = await api.get("/api/posts");
				const posts = await response.json();

				setPosts(posts);
			} catch (err) {
				throw new Error(err.message);
			}
		}

		fetchPosts();
	}, []);

	async function handleLike(postId, userId) {
		try {
			await api.post("/api/posts/likes", {
				userId,
				postId,
			});

			setPosts((prevPosts) =>
				prevPosts.map((post) =>
					post.id === postId
						? {
								...post,
								likes: [...post.likes, { user_id: userId, post_id: postId }],
							}
						: post,
				),
			);
		} catch (err) {
			console.error("Failed to like the post:", err.message);
		}
	}

	return (
		<section className={styles.posts}>
			{posts.map((post) => (
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
				/>
			))}
		</section>
	);
}

export default Posts;
