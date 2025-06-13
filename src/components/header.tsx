'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeaderProps {
  onMobileMenuToggle?: () => void
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDocsPage = pathname.startsWith('/docs')

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            {isDocsPage && (
              <button
                className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
                onClick={onMobileMenuToggle}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </button>
            )}
            
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Gray Bay Solutions" width={32} height={32} />
              <span className="font-semibold text-foreground">Gray Bay Solutions</span>
              <span className="text-sm text-muted-foreground">/ Docs</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </header>
  )
} 