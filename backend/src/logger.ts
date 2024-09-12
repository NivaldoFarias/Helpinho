import winston from "winston";

import env from "./env";

const logger = winston.createLogger({
	level: env.logs.level,
	levels: winston.config.npm.levels,
	format: winston.format.combine(
		winston.format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		winston.format.errors({ stack: true }),
		winston.format.splat(),
		winston.format.json(),
	),
});

if (process.env.NODE_ENV !== "development") {
	logger.add(new winston.transports.Console());
} else {
	logger.add(
		new winston.transports.Console({
			format: winston.format.combine(winston.format.cli(), winston.format.splat()),
		}),
	);
}

export default logger;
