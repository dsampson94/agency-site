const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...\n')
  
  // Create admin user
  console.log('👤 Creating admin user...')
  const hashedPassword = await bcrypt.hash('admin', 10)
  const admin = await prisma.admin.upsert({
    where: { email: 'davesampson15@gmail.com' },
    update: { 
      password: hashedPassword,
      role: 'admin'
    },
    create: {
      email: 'davesampson15@gmail.com',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('✅ Admin created:', admin.email)
  console.log('   📧 Email: davesampson15@gmail.com')
  console.log('   🔑 Password: admin\n')
  
  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
    },
  })

  console.log(`Created user with id: ${user.id}`)
  
  // Create a test enquiry
  const enquiry = await prisma.enquiry.create({
    data: {
      userId: user.id,
      message: 'This is a test enquiry from seed data',
      hasVoiceNote: false,
      status: 'new',
    },
  })

  console.log(`Created enquiry with id: ${enquiry.id}`)
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
