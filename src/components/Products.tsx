import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

type Filter = 'all' | 'live' | 'beta' | 'incubating'

const filters: { label: string; value: Filter }[] = [
  { label: 'All',        value: 'all' },
  { label: 'Live',       value: 'live' },
  { label: 'Beta',       value: 'beta' },
  { label: 'Incubating', value: 'incubating' },
]

export function Products() {
  const [active, setActive] = useState<Filter>('all')
  const visible = active === 'all' ? projects : projects.filter(p => p.status === active)

  return (
    <section id="products" className="py-20 bg-[#FDF4E3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1507] mb-3">Our Products</h2>
          <p className="text-[#7C4A22] max-w-xl mx-auto">
            Each product solves a real problem for families. We build in the open and ship iteratively.
          </p>
        </div>

        {/* filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                active === f.value
                  ? 'bg-[#2C1507] text-[#F5EAD0] border-[#2C1507]'
                  : 'bg-white text-[#7C4A22] border-[#D4B896] hover:border-[#D4941A] hover:text-[#D4941A]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
