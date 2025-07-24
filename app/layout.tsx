// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons, one page at a time.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Nav */}
        <header className="bg-blue-100 border-b py-4 px-6 mb-6">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-800">📘 1-Page School</Link>
            <div className="space-x-4 text-blue-700">
              <Link href="/">Home</Link>
              <Link href="/">Lessons</Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="max-w-2xl mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="mt-10 border-t pt-6 pb-10 text-center text-gray-600 text-sm">
          <p>© 2025 1-Page School. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link> |{' '}
            <Link href="/" className="text-blue-600 hover:underline">Lessons</Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
