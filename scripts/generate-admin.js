import bcrypt from 'bcryptjs'

async function generateAdminPassword() {
  const password = 'admin'
  const hashedPassword = await bcrypt.hash(password, 10)
  
  console.log('✅ Admin credentials:')
  console.log('📧 Email: davesampson15@gmail.com')
  console.log('🔑 Password: admin')
  console.log('\n🔐 Hashed password for database:')
  console.log(hashedPassword)
  console.log('\n📝 SQL to insert admin:')
  console.log(`
INSERT INTO admins (id, email, password, role, created_at, updated_at)
VALUES (
  'admin_' || substr(md5(random()::text), 0, 25),
  'davesampson15@gmail.com',
  '${hashedPassword}',
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT (email) 
DO UPDATE SET 
  password = EXCLUDED.password,
  updated_at = NOW();
  `)
}

generateAdminPassword()
