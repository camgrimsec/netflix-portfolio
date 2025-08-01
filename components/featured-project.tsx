import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FeaturedProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
}

export default function FeaturedProject({ title, description, image, tags, demoUrl, codeUrl }: FeaturedProjectProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      <div className="w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-red-600/20 text-white border-red-600">
              {tag}
            </Badge>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">{description}</p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={demoUrl}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded flex items-center gap-2 transition-colors"
          >
            Live Demo
            <ExternalLink size={18} />
          </Link>
          <Link
            href={codeUrl}
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded flex items-center gap-2 transition-colors"
          >
            View Code
            <Github size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
