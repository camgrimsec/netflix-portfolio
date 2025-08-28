import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ProjectRow from "@/components/project-row"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />

        {/* Background Video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250731_0327_Cybersecurity_Sentinel_compressed-qSscxWzWd96lRGSVSWWPpUceTeuoj8.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
          />
        </video>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello, I'm <span className="text-red-600">Cameron</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl">DevSecOps Engineer</p>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl">
            Passionate about integrating security into every stage of the development lifecycle. I specialize in
            building robust DevSecOps pipelines, automating vulnerability management, and conducting comprehensive
            security assessments. With expertise in cloud security, container security, and penetration testing, I help
            organizations shift security left and build more secure applications from the ground up.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2 font-medium transition-colors"
            >
              View My Work
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <ProjectRow
            title="Featured Projects"
            projects={[
              {
                id: "1",
                title: "Certified DevSecOps Professional",
                image: "/images/devSecOps-professional-poster.jpg",
                year: "2023",
                category: "Certification",
                tags: ["DevSecOps", "SAST", "Security"],
              },
              {
                id: "3",
                title: "Snyk Enterprise Implementation",
                image: "/images/security-man-poster.png",
                year: "2024",
                category: "DevSecOps",
                tags: ["SAST", "DAST", "SCA"],
              },
              {
                id: "4",
                title: "Qualys-Jira Integration",
                image: "/images/qualys-jira-robot-poster.jpg",
                year: "2024",
                category: "Integration",
                tags: ["Qualys", "Jira", "Automation"],
              },
              {
                id: "5",
                title: "Web Application Penetration Testing",
                image: "/images/matrix-poster.jpg",
                year: "2023",
                category: "Pen Testing",
                tags: ["Burp Suite", "OWASP", "Web Security"],
              },
              {
                id: "6",
                title: "MuleSoft API Security",
                image: "/images/mulesoft-devsecops-poster.png",
                year: "2023",
                category: "API Security",
                tags: ["MuleSoft", "API Testing", "Postman"],
              },
              {
                id: "11",
                title: "AI-Powered Security Automation",
                image: "/images/mckesson-internship-poster.png",
                year: "2020",
                category: "AI Security",
                tags: ["Tines", "Machine Learning", "Automation"],
              },
            ]}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your applications?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to build robust security into your development lifecycle.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
