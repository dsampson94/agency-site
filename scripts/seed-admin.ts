import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding admin user...')

  // Hash the password
  const hashedPassword = await bcrypt.hash('admin', 10)

  // Create or update admin user
  const admin = await prisma.admin.upsert({
    where: { email: 'davesampson15@gmail.com' },
    update: {
      password: hashedPassword,
      role: 'admin',
    },
    create: {
      email: 'davesampson15@gmail.com',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('✅ Admin user created/updated:', admin.email)
  console.log('📧 Email: davesampson15@gmail.com')
  console.log('🔑 Password: admin')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
