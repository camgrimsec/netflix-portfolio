import { Mail, MapPin, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl text-gray-300">
                Have a security project in mind or need DevSecOps consulting? Let's discuss how I can help secure your
                applications!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:camg@duck.com" className="text-gray-400 hover:text-white transition-colors">
                  camg@duck.com
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Linkedin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/cameron-grimball/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  cameron-grimball
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-400">Atlanta, GA</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
