import Link from "next/link"
import { ArrowRight, Shield, Code, Globe, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                <p className="text-xl text-gray-300 mb-6">
                  I'm Cameron, a passionate DevSecOps Engineer with expertise in penetration testing,
                  application security, and security automation.
                </p>
                <p className="text-gray-400 mb-8">
                  My journey in cybersecurity began at Gwinnett Technical College and has evolved through hands-on
                  experience in building secure development pipelines, conducting security assessments, and implementing
                  enterprise security solutions across cloud environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors"
                  >
                    Get In Touch
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-red-600">
                    <img
                      src="/images/cameron-profile.png"
                      alt="Cameron Grimball"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white py-2 px-4 rounded-lg transform rotate-3">
                    <span className="font-bold">DevSecOps Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Specializations</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Application Penetration Testing</h3>
                <p className="text-gray-400">
                  Comprehensive security assessments of web applications using industry-standard tools and
                  methodologies.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mb-4">
                  <Code className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">API Penetration Testing</h3>
                <p className="text-gray-400">
                  Specialized testing of REST and MuleSoft APIs to identify security vulnerabilities and
                  misconfigurations.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Container Security</h3>
                <p className="text-gray-400">
                  Securing containerized applications and orchestration platforms with comprehensive scanning and
                  monitoring.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-red-600/20 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">DevSecOps</h3>
                <p className="text-gray-400">
                  Integrating security into CI/CD pipelines with SAST, DAST, and Infrastructure as Code security
                  scanning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tools & Technologies</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Security Testing</h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 px-3 py-2 rounded">Burp Suite</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Kali Linux</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Postman</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Qualys</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">DevSecOps</h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 px-3 py-2 rounded">GitLab</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Azure DevOps</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Snyk</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">Docker</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Cloud Platforms</h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 px-3 py-2 rounded">Azure</div>
                  <div className="bg-gray-800 px-3 py-2 rounded">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-red-600"></div>

              {/* Timeline Items */}
              <div className="grid gap-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-900 p-6 rounded-lg w-full md:max-w-sm">
                      <h3 className="text-xl font-bold mb-1">DevSecOps Engineer</h3>
                      <p className="text-red-600 mb-3">Enterprise Security Role (2024)</p>
                      <p className="text-gray-400">
                        Designing DevSecOps pipelines and automating vulnerability reporting with enterprise security
                        tools.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 bg-red-600 rounded-full w-5 h-5 z-10 flex items-center justify-center order-1 md:order-2">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-3"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 bg-red-600 rounded-full w-5 h-5 z-10 flex items-center justify-center order-1 md:order-2">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8 order-3">
                    <div className="bg-gray-900 p-6 rounded-lg w-full md:max-w-sm">
                      <h3 className="text-xl font-bold mb-1">Information Security Engineer</h3>
                      <p className="text-red-600 mb-3">HD Supply (Jul 2022 - Jul 2024)</p>
                      <p className="text-gray-400">
                        Consistently performed penetration tests and managed vulnerabilities for multiple developer
                        teams in an enterprise environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-900 p-6 rounded-lg w-full md:max-w-sm">
                      <h3 className="text-xl font-bold mb-1">Information Security Analyst</h3>
                      <p className="text-red-600 mb-3">CommScope (Jun 2021 - Jul 2022)</p>
                      <p className="text-gray-400">
                        Analyzed Azure security environments and mitigated threats using Sentinel One and Microsoft
                        security tools.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 bg-red-600 rounded-full w-5 h-5 z-10 flex items-center justify-center order-1 md:order-2">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
