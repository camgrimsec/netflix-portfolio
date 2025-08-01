import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-red-600 font-bold text-2xl">
              CGRIMBALL
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Information Security Engineer specializing in DevSecOps, penetration testing, and application security
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/cameron-grimball/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:camerongrimball@protonmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:404-953-9205" className="text-gray-400 hover:text-white transition-colors">
              <Phone size={24} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cameron Grimball. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
