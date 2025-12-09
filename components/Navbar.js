import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const routes = [
        { href: '/', label: 'Home' },
        { href: '/skills', label: 'Skills' },
        { href: '/projects', label: 'Projects' },
        { href: '/research', label: 'Research' },
        { href: '/certificates', label: 'Certificates' },
        { href: '/education', label: 'Education' },
        { href: '/experience', label: 'Experience' },
        { href: '/contact', label: 'Contact' },
    ]
    const router = useRouter()

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-xl font-semibold">Mahir Uddin</div>

                    <div className="hidden md:flex gap-6">
                        {routes.map(r => (
                            <Link
                                key={r.href}
                                href={r.href}
                                className={`py-2 px-3 rounded-md ${router.pathname === r.href ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
                            >
                                {r.label}
                            </Link>
                        ))}

                    </div>

                </div>
            </div>
        </nav>
    )
}
