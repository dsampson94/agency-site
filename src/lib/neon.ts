import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Connection helper for API routes
export async function connectToNeon() {
  try {
    await prisma.$connect()
    return prisma
  } catch (error) {
    console.error('Failed to connect to Neon database:', error)
    throw new Error('Database connection failed')
  }
}

// Graceful disconnect
export async function disconnectFromNeon() {
  try {
    await prisma.$disconnect()
  } catch (error) {
    console.error('Failed to disconnect from Neon database:', error)
  }
}

export default prisma