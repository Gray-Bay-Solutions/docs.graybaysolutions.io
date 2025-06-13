'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Gray Bay Solutions</span>
            <span className="text-sm text-muted-foreground">/ Docs</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/docs/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Getting Started
              </Link>
              <Link href="/docs/api-reference" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                API Reference
              </Link>
              <Link href="/docs/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </Link>
              <Link href="/docs/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </Link>
            </nav>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md hover:bg-accent transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-2 space-y-1">
              <Link 
                href="/docs/getting-started" 
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Getting Started
              </Link>
              <Link 
                href="/docs/api-reference" 
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                API Reference
              </Link>
              <Link 
                href="/docs/guides" 
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link 
                href="/docs/examples" 
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Examples
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 