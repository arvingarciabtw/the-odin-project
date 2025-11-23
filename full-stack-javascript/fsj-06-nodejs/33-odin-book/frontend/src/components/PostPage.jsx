import styles from "../styles/PostPage.module.css";
import Hamburger from "../components/Hamburger";
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
	const [comment, setComment] = useState();

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

	function handleChange(e) {
		setComment(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const response = await api.post("/api/comments", {
				authorId: user.id,
				postId: +postId,
				content: comment,
			});
			const newCommentData = await response.json();

			const newComment = {
				...newCommentData,
				author: {
					id: user.id,
					first_name: user.first_name,
					last_name: user.last_name,
					username: user.username,
				},
				likes: [],
			};

			setPost((prevPost) => ({
				...prevPost,
				comments: [newComment, ...prevPost.comments],
			}));
			setComment("");
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
			<Hamburger />
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
				<form className={styles.createComment} onSubmit={handleSubmit}>
					<input
						type="text"
						name="comment"
						id="comment"
						onChange={handleChange}
						value={comment || ""}
						required
					/>
					<button type="submit">Comment</button>
				</form>
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
