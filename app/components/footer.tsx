import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2025 MNA Hub, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

