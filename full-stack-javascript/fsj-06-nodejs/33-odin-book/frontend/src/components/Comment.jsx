import styles from "../styles/Comment.module.css";
import { shortenTimeFormat } from "../utils/shortenTimeFormat";
import { useAuth } from "../contexts/AuthContext";

function Comment({ id, author, content, likes, commentedAt }) {
	const { user } = useAuth();

	const isLiked = likes.some((like) => like.user_id === user.id);

	return (
		<div className={styles.comment}>
			<div>
				<img
					className={styles.userProfilePicture}
					src="/logo_optimized.webp"
					alt="Profile picture"
				/>
			</div>
			<div className={styles.commentDetails}>
				<div className={styles.top}>
					<p className={styles.fullname}>
						{author.first_name} {author.last_name}
					</p>
					<p className={styles.username}>@{author.username}</p>
					<div className={styles.separator}></div>
					<p className={styles.datePosted}>{shortenTimeFormat(commentedAt)}</p>
				</div>
				<p>{content}</p>
				<div className={styles.commentInteractions}>
					<button className={styles.likes} onClick={(e) => handleLikeClick(e)}>
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
								transition: "fill 0.3s ease, stroke 0.3s ease",
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
								color: isLiked ? "#ec4899" : "currentColor",
								transition: "color 0.3s ease",
							}}
						>
							{likes.length}
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Comment;
