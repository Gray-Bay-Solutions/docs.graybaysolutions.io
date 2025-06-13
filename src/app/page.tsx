'use client'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate and use Gray Bay Solutions services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link 
              href="/docs/getting-started"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Getting Started</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Quick start guide and overview of our services
              </p>
            </Link>
            
            <Link 
              href="/docs/api-reference"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">API Reference</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Complete API documentation and authentication
              </p>
            </Link>
            
            <Link 
              href="/docs/guides"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Service Guides</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Detailed guides for websites, chatbots, SEO, and automation
              </p>
            </Link>
            
            <Link 
              href="/docs/examples"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">Examples</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Code examples and implementation patterns
              </p>
            </Link>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>Need help? Contact support@graybaysolutions.io</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 