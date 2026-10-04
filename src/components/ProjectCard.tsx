import type { LucideProps } from 'lucide-react'
import { ExternalLink, GitFork, School, Heart, Building2, Sprout, Brain, ShoppingBag, Rocket } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type LucideIcon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>
import type { Project } from '../data/projects'
import { statusMeta } from '../data/projects'

const iconMap: Record<string, LucideIcon> = {
  School, Heart, Building2, Sprout, Brain, ShoppingBag, Rocket,
}

interface Props { project: Project }

export function ProjectCard({ project }: Props) {
  const { name, tagline, description, color, iconName, liveUrl, githubUrl, status, tags } = project
  const Icon = iconMap[iconName] ?? Rocket
  const meta = statusMeta[status]

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* accent bar */}
      <div className="h-1" style={{ backgroundColor: color }} />

      <div className="flex flex-col flex-1 p-6">
        {/* header row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: color + '15' }}
          >
            <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
          </div>
          <span className={`flex items-center gap-1.5 text-xs font-medium ${meta.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
            {meta.label}
          </span>
        </div>

        <h3 className="text-[15px] font-semibold text-slate-900 mb-0.5 tracking-tight">{name}</h3>
        <p className="text-[13px] font-medium mb-3" style={{ color }}>{tagline}</p>
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1">{description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {tags.map(tag => (
            <span key={tag} className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-[13px] font-semibold py-2 rounded-lg text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: color }}
            >
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
              Open App
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center text-[13px] font-medium py-2 rounded-lg bg-slate-50 text-slate-400 border border-slate-100 cursor-default select-none">
              Coming Soon
            </span>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-[13px] font-medium py-2 px-3.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            <GitFork className="w-3.5 h-3.5" strokeWidth={2} />
            Code
          </a>
        </div>
      </div>
    </article>
  )
}
