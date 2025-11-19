import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function getPosts(req, res) {
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

export default { getPosts, createPost };
