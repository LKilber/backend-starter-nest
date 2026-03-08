import { envSchema } from './env.schema';

export function validateEnv(config: Record<string, unknown>) {
  const { error, value } = envSchema.validate(config, {
    allowUnknown: true,
  });

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
}
