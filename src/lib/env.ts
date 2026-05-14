const requiredEnvVars = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
} as const;



export const env = requiredEnvVars as Record<keyof typeof requiredEnvVars, string>;