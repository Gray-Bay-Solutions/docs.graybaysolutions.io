'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const tocItems: TocItem[] = []

    headings.forEach((heading) => {
      if (heading.id) {
        tocItems.push({
          id: heading.id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1)),
        })
      }
    })

    setToc(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80px 0px',
        threshold: 0.1,
      }
    )

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) return null

  return (
    <div className="hidden xl:block xl:w-64 xl:flex-col xl:fixed xl:right-0 xl:top-16 xl:h-[calc(100vh-4rem)] xl:overflow-y-auto">
      <div className="p-4">
        <h4 className="text-sm font-semibold text-foreground mb-4">On This Page</h4>
        <nav className="space-y-1">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'block text-sm leading-5 transition-colors duration-200',
                item.level === 1 && 'font-medium',
                item.level === 2 && 'ml-2',
                item.level === 3 && 'ml-4',
                item.level === 4 && 'ml-6',
                item.level === 5 && 'ml-8',
                item.level === 6 && 'ml-10',
                activeId === item.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
} 