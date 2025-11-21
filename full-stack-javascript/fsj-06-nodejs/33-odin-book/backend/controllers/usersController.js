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

export default { getUsers };
