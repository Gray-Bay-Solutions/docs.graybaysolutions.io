'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Authentication', href: '/docs/api-reference/authentication' },
      { title: 'Endpoints', href: '/docs/api-reference/endpoints' },
      { title: 'Rate Limits', href: '/docs/api-reference/rate-limits' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Website Templates', href: '/docs/guides/website-templates' },
      { title: 'AI Chatbots', href: '/docs/guides/ai-chatbots' },
      { title: 'Local SEO', href: '/docs/guides/local-seo' },
    ],
  },
  {
    title: 'Examples',
    items: [
      { title: 'Basic Implementation', href: '/docs/examples/basic-implementation' },
      { title: 'Advanced Usage', href: '/docs/examples/advanced-usage' },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['Getting Started', 'API Reference', 'Guides', 'Examples'])
  )

  const toggleSection = (title: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(title)) {
      newOpenSections.delete(title)
    } else {
      newOpenSections.add(title)
    }
    setOpenSections(newOpenSections)
  }

  const isActive = (href: string) => pathname === href

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-14 md:pt-6">
      <div className="flex-1 flex flex-col min-h-0 bg-background">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="px-3 space-y-2">
            {navigation.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleSection(item.title)}
                  className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                  {openSections.has(item.title) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openSections.has(item.title) && item.items && (
                  <div className="mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href!}
                        className={cn(
                          'block px-4 py-1.5 text-sm transition-colors',
                          isActive(subItem.href!)
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
} 