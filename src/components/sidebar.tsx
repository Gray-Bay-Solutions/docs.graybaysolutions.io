'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Code, Users, Settings, BookOpen, Workflow, Database, Shield, X, type LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  icon?: LucideIcon
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    href: '/docs/getting-started',
  },
  {
    title: 'Development',
    icon: Code,
    items: [
      { title: 'Overview', href: '/docs/development' },
      { title: 'Coding Standards', href: '/docs/development/coding-standards' },
      // { title: 'Git Workflow', href: '/docs/development/git-workflow' },
      // { title: 'Code Review Process', href: '/docs/development/code-review' },
      // { title: 'Deployment Guide', href: '/docs/development/deployment' },
      // { title: 'Environment Setup', href: '/docs/development/environment-setup' },
      // { title: 'Testing Guidelines', href: '/docs/development/testing' },
    ],
  },
  {
    title: 'Services',
    icon: Settings,
    items: [
      { title: 'Overview', href: '/docs/services' },
      // { title: 'Website Templates', href: '/docs/services/websites' },
      // { title: 'AI Chatbots', href: '/docs/services/chatbots' },
      // { title: 'Local SEO', href: '/docs/services/seo' },
      // { title: 'Business Dashboards', href: '/docs/services/dashboards' },
      // { title: 'Automation Workflows', href: '/docs/services/automation' },
    ],
  },
  {
    title: 'Processes',
    icon: Workflow,
    items: [
      { title: 'Overview', href: '/docs/processes' },
      // { title: 'Client Onboarding', href: '/docs/processes/client-intake' },
      // { title: 'Project Management', href: '/docs/processes/project-management' },
      // { title: 'Quality Assurance', href: '/docs/processes/quality-assurance' },
      // { title: 'Launch Checklist', href: '/docs/processes/launch-checklist' },
      // { title: 'Monthly Maintenance', href: '/docs/processes/monthly-maintenance' },
    ],
  },
  {
    title: 'Sales & Marketing',
    icon: Users,
    items: [
      { title: 'Overview', href: '/docs/sales' },
      // { title: 'Sales Process', href: '/docs/sales/process' },
      // { title: 'Pricing Strategy', href: '/docs/sales/pricing' },
      // { title: 'Objection Handling', href: '/docs/sales/objections' },
      // { title: 'Email Templates', href: '/docs/sales/email-templates' },
      // { title: 'Case Studies', href: '/docs/sales/case-studies' },
    ],
  },
  {
    title: 'Templates',
    icon: Code,
    items: [
      { title: 'Overview', href: '/docs/templates' },
      // { title: 'Website Templates', href: '/docs/templates/websites' },
      // { title: 'Email Templates', href: '/docs/templates/emails' },
      // { title: 'Process Templates', href: '/docs/templates/processes' },
      // { title: 'Proposal Templates', href: '/docs/templates/proposals' },
    ],
  },
  {
    title: 'Configuration',
    icon: Database,
    items: [
      { title: 'Overview', href: '/docs/configuration' },
      // { title: 'Environment Setup', href: '/docs/configuration/environment' },
      // { title: 'Server Configuration', href: '/docs/configuration/server' },
      // { title: 'Database Setup', href: '/docs/configuration/database' },
      // { title: 'Security Configuration', href: '/docs/configuration/security' },
      // { title: 'Monitoring', href: '/docs/configuration/monitoring' },
    ],
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    items: [
      { title: 'Overview', href: '/docs/security' },
      // { title: 'Security Policies', href: '/docs/security/policies' },
      // { title: 'Compliance Requirements', href: '/docs/security/compliance' },
      // { title: 'Incident Response', href: '/docs/security/incident-response' },
      // { title: 'Security Training', href: '/docs/security/training' },
    ],
  },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  // Auto-expand only the section containing the current page, close all others
  useEffect(() => {
    const newOpenSections = new Set<string>()
    
    // Find which section contains the current page
    navigation.forEach((item) => {
      if (item.items) {
        const hasActivePage = item.items.some(subItem => pathname === subItem.href)
        if (hasActivePage) {
          newOpenSections.add(item.title)
        }
      }
    })
    
    setOpenSections(newOpenSections)
  }, [pathname])

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
  const isInActiveSection = (item: NavItem) => {
    if (item.items) {
      return item.items.some(subItem => pathname === subItem.href)
    }
    return false
  }

  const handleLinkClick = () => {
    if (onClose) onClose()
  }

  const sidebarContent = (
    <div className="flex-1 flex flex-col min-h-0 bg-background border-r border-border">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border">
        <span className="font-semibold text-foreground">Documentation</span>
        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="px-3 py-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            
            if (!item.items) {
              // Single page items
              return (
                <Link
                  key={item.title}
                  href={item.href!}
                  onClick={handleLinkClick}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors rounded-md',
                    isActive(item.href!)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {item.title}
                </Link>
              )
            }

            // Section with sub-items
            return (
            <div key={item.title}>
              <button
                onClick={() => toggleSection(item.title)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors rounded-md",
                    isInActiveSection(item)
                      ? 'text-foreground bg-muted/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
              >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="h-4 w-4" />}
                {item.title}
                  </div>
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
                      onClick={handleLinkClick}
                      className={cn(
                          'block px-9 py-2 text-sm transition-colors rounded-md',
                        isActive(subItem.href!)
                            ? 'text-primary font-medium bg-primary/10 border-l-2 border-primary ml-3 pl-6'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            )
          })}
        </nav>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-14 md:pt-2">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <aside className="relative flex w-80 max-w-[80vw] flex-col">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  )
} 