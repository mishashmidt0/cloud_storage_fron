import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <Link href={'/dashboard/auth'}>
            <button>
                auth
            </button>
        </Link>
    </main>
  )
}
