'use client'
import Link from 'next/link'
import { ArrowRight, Code, Users, Settings, BookOpen, Workflow, Database, Shield } from 'lucide-react'
import { Header } from '@/components/header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Documentation Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your central hub for processes, workflows, technical documentation, and team resources. Everything you need to deliver exceptional digital solutions.
            </p>
          </div>

          {/* Main Categories */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <Link 
              href="/docs/development"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Development</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Tech stack, coding standards, deployment guides, and development workflows
              </p>
            </Link>
            
            <Link 
              href="/docs/services"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Services</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Service offerings, templates, pricing, and delivery processes
              </p>
            </Link>
            
            <Link 
              href="/docs/processes"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Workflow className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Processes</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Standard operating procedures, workflows, and business processes
              </p>
            </Link>
            
            <Link 
              href="/docs/sales"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Sales & Marketing</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Sales processes, pricing guides, marketing strategies, and client resources
              </p>
            </Link>
            
            <Link 
              href="/docs/configuration"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Configuration</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                System configurations, environment setups, and infrastructure docs
              </p>
            </Link>
            
            <Link 
              href="/docs/security"
              className="group block p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Security & Compliance</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Security protocols, compliance requirements, and best practices
              </p>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Links</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link 
                href="/docs/getting-started"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Getting Started</span>
              </Link>
              <Link 
                href="/docs/templates"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Code className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Templates</span>
              </Link>
              <Link 
                href="/docs/deployment"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Settings className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Deployment</span>
              </Link>
              <Link 
                href="/docs/support"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Team Support</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>Need to add documentation? Create a new markdown file or contact the dev team</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 