import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().default('development'),

  PORT: Joi.number().default(3000),

  DATABASE_URL: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),

  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),

  LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'debug').required(),
});
