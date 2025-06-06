import Redis from "ioredis";
const redis = new Redis({
  port: 6379,
  host: process.env.PRIVATE_REDIS_HOST,
  username: "default",
  password: process.env.PRIVATE_REDIS_PASSWORD,
});

export async function RateLimiter() {
  redis.set("key", "data", "EX", 60);
  console.log("set it");
}
