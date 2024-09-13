import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <div className="">
      <h1>Dashboard, {session.user.name}</h1>
    </div>
  )
}
