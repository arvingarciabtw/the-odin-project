import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function getUsers(req, res) {
	try {
		const users = await prisma.user.findMany({
			include: {
				followers: true,
				following: true,
			},
		});

		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getUserById(req, res) {
	const { userId } = req.params;

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: +userId,
			},
			include: {
				followers: {
					include: {
						following: {
							include: {
								posts: {
									orderBy: {
										created_at: "desc",
									},
									include: {
										author: true,
										comments: true,
										likes: true,
									},
								},
							},
						},
					},
				},
				following: true,
				posts: {
					include: {
						author: true,
						comments: true,
						likes: true,
					},
					orderBy: {
						created_at: "desc",
					},
				},
			},
		});

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function followUser(req, res) {
	const { userId } = req.params;
	const { id: followerId } = req.user;

	try {
		await prisma.follower.create({
			data: {
				follower_id: followerId,
				following_id: +userId,
				status: "ACCEPTED",
			},
		});

		res.status(200).json({ message: "User followed successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function unfollowUser(req, res) {
	const { userId } = req.params;
	const { id: followerId } = req.user;

	try {
		await prisma.follower.delete({
			where: {
				follower_id_following_id: {
					follower_id: followerId,
					following_id: +userId,
				},
			},
		});

		res.status(200).json({ message: "User unfollowed successfully" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export default { getUsers, getUserById, followUser, unfollowUser };
