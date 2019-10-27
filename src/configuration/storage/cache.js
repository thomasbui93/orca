const Redis = require('ioredis');

let RedisInstance

module.exports.connectToRedis = () => {
  RedisInstance = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_AUTH
  });
};

module.exports.Redis = () => RedisInstance;
