import { ExternalLink, GitFork } from 'lucide-react'
import type { Project } from '../data/projects'
import { statusLabel, statusStyle } from '../data/projects'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { name, tagline, description, color, bg, icon, liveUrl, githubUrl, status, tags } = project

  return (
    <article
      className="flex flex-col rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
      style={{ '--accent': color } as React.CSSProperties}
    >
      {/* colour bar */}
      <div className="h-1.5" style={{ backgroundColor: color }} />

      <div className="flex flex-col flex-1 p-6" style={{ backgroundColor: bg }}>
        {/* icon + status */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl leading-none">{icon}</span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[status]}`}>
            {statusLabel[status]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-sm font-medium mb-3" style={{ color }}>{tagline}</p>
        <p className="text-slate-600 text-sm leading-relaxed flex-1">{description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {tags.map(tag => (
            <span key={tag} className="text-xs bg-white/80 border border-slate-200 text-slate-500 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: color }}
            >
              <ExternalLink className="w-4 h-4" />
              Open App
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-slate-100 text-slate-400 cursor-default">
              Coming Soon
            </span>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-colors"
          >
            <GitFork className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </article>
  )
}
