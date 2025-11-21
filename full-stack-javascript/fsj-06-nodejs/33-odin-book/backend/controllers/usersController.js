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
				followers: true,
				following: true,
				posts: {
					include: {
						author: true,
						comments: true,
						likes: true,
					},
				},
			},
		});

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export default { getUsers, getUserById };
