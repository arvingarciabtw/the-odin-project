import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function getPosts(_req, res) {
	try {
		const posts = await prisma.post.findMany();

		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function createPost(req, res) {
	const { content, authorId } = req.body;
	try {
		const post = await prisma.post.create({
			data: {
				content,
				author_id: authorId,
			},
		});

		res.status(200).json(post);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getPostLikes(req, res) {
	const { postId } = req.params;

	try {
		const postLikes = await prisma.postLike.findMany({
			where: {
				post_id: +postId,
			},
		});

		res.status(200).json(postLikes);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function createPostLike(req, res) {
	const { userId, postId } = req.body;

	try {
		const postLike = await prisma.postLike.create({
			data: {
				user_id: userId,
				post_id: postId,
			},
		});

		res.status(200).json(postLike);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export default { getPosts, createPost, getPostLikes, createPostLike };
