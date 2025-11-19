import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function getComments(req, res) {
	const { postId } = req.params;

	try {
		const comments = await prisma.comment.findMany({
			where: {
				post_id: +postId,
			},
		});

		res.status(200).json(comments);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function createComment(req, res) {
	const { authorId, postId, content } = req.body;

	try {
		const comment = await prisma.comment.create({
			data: {
				author_id: authorId,
				post_id: postId,
				content,
			},
		});

		res.status(200).json(comment);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export default { getComments, createComment };
