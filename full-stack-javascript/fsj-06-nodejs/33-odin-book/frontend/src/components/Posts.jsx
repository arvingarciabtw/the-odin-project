import styles from "../styles/Posts.module.css";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { formatDistanceToNow } from "date-fns";
import { shortenTimeFormat } from "../utils/shortenTimeFormat";
import { useAuth } from "../contexts/AuthContext";

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

	return (
		<section className={styles.posts}>
			{posts.map((post) => (
				<Post
					key={post.id}
					author={post.author}
					content={post.content}
					postedAt={formatDistanceToNow(new Date(post.created_at), {
						addSuffix: false,
					})}
					comments={post.comments}
					likes={post.likes}
				/>
			))}
		</section>
	);
}

function Post({ author, content, postedAt, comments, likes }) {
	const { user } = useAuth();

	const isLiked = likes.some((like) => like.user_id === user.id);

	return (
		<div className={styles.post}>
			<div>
				<img
					className={styles.userProfilePicture}
					src="/logo_optimized.webp"
					alt="Profile picture"
				/>
			</div>
			<div className={styles.postDetails}>
				<div className={styles.top}>
					<p className={styles.fullname}>
						{author.first_name} {author.last_name}
					</p>
					<p className={styles.username}>@{author.username}</p>
					<div className={styles.separator}></div>
					<p className={styles.datePosted}>{shortenTimeFormat(postedAt)}</p>
				</div>
				<p>{content}</p>
				<div className={styles.postInteractions}>
					<div className={styles.comments}>
						<svg
							className={styles.commentIcon}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
							/>
						</svg>
						<p>{comments.length}</p>
					</div>
					<div className={styles.likes}>
						<svg
							className={styles.likeIcon}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							style={{
								fill: isLiked ? "#ec4899" : "none",
								stroke: isLiked ? "#ec4899" : "currentColor",
							}}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
							/>
						</svg>
						<p
							style={{
								color: isLiked ? "#ec4899" : "none",
							}}
						>
							{likes.length}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Posts;
export { Post };
