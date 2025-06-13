import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function DocsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-md mx-auto">
      <div className="mb-8 space-y-4">
        <div className="font-mono text-6xl font-bold text-muted-foreground/60">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            Page not found
          </h1>
          <p className="text-sm text-muted-foreground">
            This documentation page doesn't exist
          </p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="h-4 w-4" />
          Docs home
        </Link>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-md hover:bg-muted/50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </Link>
      </div>

      <div className="text-xs text-muted-foreground font-mono">
        /docs/{'{'}path{'}'} → 404
      </div>
    </div>
  )
} 