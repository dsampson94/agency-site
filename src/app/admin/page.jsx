import { Container } from '@/components/Container'
import AdminLogin from '@/components/AdminLogin'

export const metadata = {
  title: 'Admin Login',
  description: 'Admin portal for SuperStack Development Studio',
}

export default function AdminLoginPage() {
  return (
    <div className="mt-24 sm:mt-32">
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <AdminLogin />
          </div>
        </div>
      </Container>
    </div>
  )
}
