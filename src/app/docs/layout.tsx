'use client'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useState } from 'react'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onMobileMenuToggle={() => setMobileMenuOpen(true)} />
      <div className="flex">
        <Sidebar 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
        <main className="flex-1 md:ml-64 min-w-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 