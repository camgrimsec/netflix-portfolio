"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  image: string
  year: string
  category: string
  tags: string[]
}

interface ProjectRowProps {
  title: string
  projects: Project[]
}

export default function ProjectRow({ title, projects }: ProjectRowProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>

      {/* Grid Layout - All projects visible */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-[300px] md:h-[400px] rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors z-10" />
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-medium text-sm md:text-base leading-tight">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <div className="h-[300px] md:h-[400px] relative">
              {selectedProject.title === "Certified DevSecOps Professional" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_office_celebration-7bUES1dG49eqHohvJKMyVYarsmyK3D.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : selectedProject.title === "Snyk Enterprise Implementation" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_video-uiprqn3mwZ5AiI51JYOpReQYLZA7jX.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : selectedProject.title === "Qualys-Jira Integration" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_video_2-m1akHQ7jhmlv64fWQH3dKHnm6WsDmA.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : selectedProject.title === "Web Application Penetration Testing" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_matrix_showdown-VofYX5HDycSRtKbhybWXIjX8nTX9UG.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : selectedProject.title === "MuleSoft API Security" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250801_1252_Ogre%27s%20Cybersecurity%20Adventure_simple_compose_01k1k8rfwveys8fdnnhnwdvrvy-Fcie4bBeYu7Yt6tRQxdrQDQH1oSCiO.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : selectedProject.title === "AI-Powered Security Automation" ? (
                <>
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_soaring_tech_vision-e4XtbhAKVYdDi6vn5xxuDHzmUPYsuD.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : (
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">{selectedProject.year}</span>
                  <span className="text-gray-400">{selectedProject.category}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-800 text-white border-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.title === "Certified DevSecOps Professional"
                  ? "Achieved the Certified DevSecOps Professional certification, demonstrating expertise in integrating security practices throughout the software development lifecycle. This certification validates my knowledge of secure coding practices, automated security testing, infrastructure as code security, and the implementation of security controls in CI/CD pipelines. The certification reinforces my commitment to advancing DevSecOps methodologies and staying current with industry best practices."
                  : selectedProject.title === "Snyk Enterprise Implementation"
                    ? "Integrated Snyk into CI/CD pipelines to identify and remediate vulnerabilities early in the development lifecycle. Advocated and had company to onboard Snyk to ensure teams had appropriate visibility, and aligned security governance policies to support secure software delivery. Also automated the intake and scanning of code repositories and containers in Azure DevOps, and connected Snyk to Jira to streamline vulnerability tracking and remediation. My efforts significantly reduced remediation time and helped developers adopt secure coding practices without disrupting their workflows."
                    : selectedProject.title === "Qualys-Jira Integration"
                      ? "Integrating Qualys with Jira streamlined the vulnerability management process by automatically generating and assigning tickets to development teams. This automation reduced remediation time, ensured critical findings were promptly tracked, and enhanced collaboration between security and engineering, ultimately improving the organization's overall security posture."
                      : selectedProject.title === "Web Application Penetration Testing"
                        ? "Conducted comprehensive security assessments of web applications. Utilized tools like Burp Suite to identify vulnerabilities including SQL injection, cross-site scripting (XSS), authentication bypasses, and authorization flaws. Provided detailed reports with risk assessments and remediation recommendations to development teams and C-Suite. Successfully identified and helped remediate critical security vulnerabilities across multiple enterprise applications."
                        : selectedProject.title === "MuleSoft API Security"
                          ? "Conducted comprehensive security assessments of MuleSoft API implementations and integrations. Performed thorough testing of API endpoints, authentication mechanisms, and data validation processes using tools like Postman and MuleSoft security governance policies. Identified and helped remediate critical vulnerabilities. Worked closely with development teams to implement secure API design patterns and establish proper security controls for enterprise API management platforms."
                          : selectedProject.title === "AI-Powered Security Automation"
                            ? "Developed AI programs to automate internal cybersecurity processes during my internship at McKesson Inc. Created machine learning algorithms to identify patterns in security incidents and automate response workflows using advanced analytics and automation platforms. The automation solutions I built saved the equivalent of one full-time cybersecurity analyst salary through improved efficiency and reduced manual processing time. This project demonstrated the power of combining artificial intelligence with cybersecurity operations to enhance threat detection and response capabilities."
                            : "This is a detailed description of the project. It would include information about the goals, challenges, solutions, and technologies used in the project. This would be customized for each specific project in a real portfolio."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
