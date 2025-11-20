function CreatePost() {
	return (
		<main
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<form action="POST">
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
				></textarea>
				<button type="submit">Create</button>
			</form>
		</main>
	);
}

export default CreatePost;
