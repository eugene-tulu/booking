import { Header } from "@/components/nav/admin/header"
import { requireAdmin } from "@/lib/auth-guard"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default async function AdminLayout({
  children,
}: Readonly<AdminLayoutProps>): Promise<JSX.Element> {
  await requireAdmin()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container h-full flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
