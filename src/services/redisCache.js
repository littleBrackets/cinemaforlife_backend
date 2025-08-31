const Redis = require("ioredis");
const logger = require("../utils/logger");

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

redis.on("connect", () => logger.info("Connected to Redis"));
redis.on("error", (err) => logger.error("Redis error", { error: err }));

async function get(key) {
  try {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    logger.error("Redis GET error", { key, error: err });
    return null;
  }
}

async function set(key, value, expireSeconds = 3600) {
  try {
    await redis.set(key, JSON.stringify(value), "EX", expireSeconds);
  } catch (err) {
    logger.error("Redis SET error", { key, error: err });
  }
}

async function del(key) {
  try {
    await redis.del(key);
  } catch (err) {
    logger.error("Redis DEL error", { key, error: err });
  }
}

module.exports = { get, set, del };
