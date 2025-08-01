import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-4xl font-bold">Resume</h1>
                <Button className="bg-red-600 hover:bg-red-700">
                  Download PDF
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-900 rounded-lg p-8">
                {/* Header */}
                <div className="border-b border-gray-800 pb-6 mb-6">
                  <h2 className="text-3xl font-bold">Cameron Grimball</h2>
                  <p className="text-xl text-red-600 mt-1">Information Security Engineer</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-gray-400">
                    <p>Atlanta, GA</p>
                    <p>camerongrimball@protonmail.com</p>
                    <p>404-953-9205</p>
                    <p>linkedin.com/in/cameron-grimball/</p>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Specializations</h3>
                  <p className="text-gray-300 mb-4">
                    Web Application Penetration Testing | API Penetration Testing | Container Security | Product
                    Security
                  </p>
                  <p className="text-gray-300 mb-4">
                    <strong>Interests:</strong> DevSecOps | GitLab | Container Security | OWASP
                  </p>
                  <p className="text-gray-300">
                    <strong>Environments:</strong> Azure | AWS | SOC2
                  </p>
                </div>

                {/* Tools */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Tools & Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="bg-gray-800 px-3 py-2 rounded">Burp Suite</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Postman</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Docker</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">OWASP ZAP</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">GitLab</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Azure DevOps</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Snyk</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Qualys</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Python</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Power BI</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Jira</div>
                    <div className="bg-gray-800 px-3 py-2 rounded">Prisma Cloud</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Certified DevSecOps Professional</div>
                        <div className="text-gray-400">Dec 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Azure Fundamentals (AZ-900)</div>
                        <div className="text-gray-400">Microsoft, Feb 2022</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Certified Security Analyst Associate (SC-200)</div>
                        <div className="text-gray-400">Microsoft, Oct 2021</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Security+</div>
                        <div className="text-gray-400">CompTIA, Feb 2021</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium">Project+</div>
                        <div className="text-gray-400">CompTIA, Oct 2019</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Professional Experience</h3>

                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">DevSecOps Engineer</h4>
                      <div className="text-red-600">Jul 2024 - Present</div>
                    </div>
                    <div className="text-gray-300 mb-2">National Philanthropic Trust, Remote</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Designing and building DevSecOps Pipelines with SAST, DAST, and IaC tools</li>
                      <li>Implementing RBAC in Snyk to ensure proper access controls</li>
                      <li>Building integrations to transfer vulnerability information from Qualys to Jira</li>
                      <li>Coordinating with external pen testing teams and monitoring remediation efforts</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Information Security Engineer</h4>
                      <div className="text-red-600">Jul 2022 - Jul 2024</div>
                    </div>
                    <div className="text-gray-300 mb-2">HD Supply, Smyrna, GA</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Led formation of company's DevSecOps program to eliminate vulnerabilities early</li>
                      <li>Performed SAST and DAST scans on applications in .NET, C#, Java and other languages</li>
                      <li>Conducted network security assessments and web application security reviews</li>
                      <li>Worked with Prisma Cloud to establish initial DevSecOps program</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Information Security Analyst</h4>
                      <div className="text-red-600">Jun 2021 - Jul 2022</div>
                    </div>
                    <div className="text-gray-300 mb-2">CommScope, Suwannee, GA</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Analyzed Azure security environment for Government sales</li>
                      <li>Mitigated 10-20 threats per month using Sentinel One and Microsoft Azure tools</li>
                      <li>Updated security team's vulnerability management using Qualys scanning</li>
                      <li>Engineered cloud security rules in Azure to prevent alerts and analyze logs</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Cybersecurity Intern</h4>
                      <div className="text-red-600">Internship Period</div>
                    </div>
                    <div className="text-gray-300 mb-2">McKesson Inc., Alpharetta, GA</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Developed AI programs to automate internal cybersecurity processes</li>
                      <li>Saved expense value equivalent to 1 cybersecurity analyst salary through automation</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Education</h3>

                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Bachelor of Science in Information Technology</h4>
                      <div className="text-red-600">Expected Apr 2025</div>
                    </div>
                    <div className="text-gray-300">Kennesaw State University, Kennesaw, GA</div>
                    <div className="text-gray-400">Concentration in Cyber Security</div>
                  </div>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Associate of Applied Science in Cybersecurity</h4>
                      <div className="text-red-600">Aug 2019 - Dec 2020</div>
                    </div>
                    <div className="text-gray-300">Gwinnett Technical College, Lawrenceville, GA</div>
                  </div>
                </div>

                {/* Additional Experience */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Experience</h3>

                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Team Captain, Competitor</h4>
                      <div className="text-red-600">Competition Period</div>
                    </div>
                    <div className="text-gray-300 mb-2">National Cyber League, Lawrenceville</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Guided a team of 6 individuals to reach 200th place out of 922 teams competing nationally</li>
                    </ul>
                  </div>
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
