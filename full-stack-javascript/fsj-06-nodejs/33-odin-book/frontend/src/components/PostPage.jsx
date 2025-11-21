import styles from "../styles/PostPage.module.css";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Comment from "../components/Comment";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { api } from "../utils/api";

function PostPage() {
	const { user } = useAuth();
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		async function fetchPostById() {
			try {
				const response = await api.get(`/api/posts/${postId}`);
				const postData = await response.json();

				setPost(postData);
			} catch (err) {
				console.error(err);
			}
		}

		fetchPostById();
	}, [postId]);

	async function handleLike(userId, postId) {
		try {
			await api.post("/api/posts/likes", {
				userId,
				postId,
			});

			setPost({
				...post,
				likes: [...post.likes, { user_id: userId, post_id: postId }],
			});
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

			setPost({
				...post,
				likes: post.likes.filter((like) => like.user_id !== userId),
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async function handleCommentLike(userId, commentId) {
		try {
			await api.post("/api/comments/likes", {
				userId,
				commentId,
			});

			setPost((prevPost) => {
				const updatedComments = prevPost.comments.map((comment) => {
					if (comment.id === commentId) {
						return {
							...comment,
							likes: [...comment.likes, { user_id: userId }],
						};
					}
					return comment;
				});

				return {
					...prevPost,
					comments: updatedComments,
				};
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async function handleCommentDislike(userId, commentId) {
		try {
			await api.delete("/api/comments/likes", {
				userId,
				commentId,
			});

			setPost((prevPost) => {
				const updatedComments = prevPost.comments.map((comment) => {
					if (comment.id === commentId) {
						return {
							...comment,
							likes: comment.likes.filter((like) => like.user_id !== userId),
						};
					}
					return comment;
				});

				return {
					...prevPost,
					comments: updatedComments,
				};
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	if (!post) {
		return (
			<main className={styles.mainContainer}>
				<Sidebar />
			</main>
		);
	}

	return (
		<main className={styles.mainContainer}>
			<Sidebar />
			<section className={styles.postPage}>
				<Post
					id={post.id}
					author={post.author}
					content={post.content}
					comments={post.comments}
					likes={post.likes}
					handleLike={handleLike}
					handleDislike={handleDislike}
					postedAt={formatDistanceToNow(new Date(post.created_at), {
						addSuffix: false,
					})}
				/>
				{post.comments.map((comment) => (
					<Comment
						key={comment.id}
						id={comment.id}
						author={comment.author}
						content={comment.content}
						likes={comment.likes}
						handleLike={handleCommentLike}
						handleDislike={handleCommentDislike}
						commentedAt={formatDistanceToNow(new Date(comment.created_at), {
							addSuffix: false,
						})}
					/>
				))}
			</section>
		</main>
	);
}

export default PostPage;
