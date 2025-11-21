import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function getComments(req, res) {
	const { postId } = req.params;

	try {
		const comments = await prisma.comment.findMany({
			where: {
				post_id: +postId,
			},
			orderBy: {
				created_at: "desc",
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

async function getCommentLikes(req, res) {
	const { commentId } = req.params;

	try {
		const commentLikes = await prisma.commentLike.findMany({
			where: {
				comment_id: +commentId,
			},
		});

		res.status(200).json(commentLikes);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function createCommentLike(req, res) {
	const { userId, commentId } = req.body;

	try {
		const commentLike = await prisma.commentLike.create({
			data: {
				user_id: userId,
				comment_id: commentId,
			},
		});

		res.status(200).json(commentLike);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function deleteCommentLike(req, res) {
	const { userId, commentId } = req.body;

	try {
		const commentLike = await prisma.commentLike.delete({
			where: {
				user_id_comment_id: {
					user_id: userId,
					comment_id: commentId,
				},
			},
		});

		const commentLikes = await prisma.commentLike.findMany();

		res.status(200).json({
			message: "Deleted successfully.",
			deleted: commentLike,
			commentLikes: commentLikes,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export default {
	getComments,
	createComment,
	getCommentLikes,
	createCommentLike,
	deleteCommentLike,
};
