export function validateEnv() {
  const requiredEnvVars = ['BLOB_READ_WRITE_TOKEN', 'RESEND_API_KEY']

  const missingEnvVars = requiredEnvVars.filter(envVar => {
    const value = process.env[envVar]
    console.log(`Checking ${envVar}: ${value ? 'Set' : 'Not set'}`)
    return !value
  })

  return {
    isValid: missingEnvVars.length === 0,
    missingEnvVars
  }
}

export function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    console.error(`Environment variable ${key} is not set`)
    throw new Error(`Environment variable ${key} is not set`)
  }
  return value
}
