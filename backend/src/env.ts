export default {
	port: parseInt(process.env.PORT ?? "4000"),
	logs: { level: process.env.LOG_LEVEL ?? "info" },
	api: { prefix: "/api" },
	jwt: {
		secret: process.env.JWT_SECRET,
		algorithm: process.env.JWT_ALGORITHM,
		expiresIn: process.env.JWT_EXPIRES_IN,
	},
};
