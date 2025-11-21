import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { api } from "../utils/api";

function CreatePost() {
	const navigate = useNavigate();
	const { user } = useAuth();

	const [content, setContent] = useState();

	async function handleChange(e) {
		setContent(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			await api.post("/api/posts", {
				content: content,
				authorId: user.id,
			});

			navigate("/");
		} catch (err) {
			throw new Error(err.message);
		}
	}

	return (
		<main
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form onSubmit={handleSubmit}>
				<h1>Post Content</h1>
				<p className="description">
					Enter your post content here, and submit when done.
				</p>
				<label htmlFor="postContent">Post Content</label>
				<textarea
					name="postContent"
					id="postContent"
					required
					style={{
						height: 200,
					}}
					onChange={handleChange}
				></textarea>
				<button type="submit">Create</button>
			</form>
		</main>
	);
}

export default CreatePost;
