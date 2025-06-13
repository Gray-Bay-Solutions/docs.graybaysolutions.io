import { notFound } from 'next/navigation'
import { getDocBySlug, getAllDocSlugs } from '@/lib/markdown'
import { Markdown } from '@/components/markdown'
import { TableOfContents } from '@/components/table-of-contents'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocBySlug(params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 min-w-0">
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="mb-6 md:mb-8">
          {/* <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            {doc.title}
          </h1> */}
          {doc.frontMatter.description && (
            <p className="text-base md:text-lg text-muted-foreground break-words">
              {doc.frontMatter.description}
            </p>
          )}
        </div>
        
        <Markdown content={doc.content} />
        
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <div>
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <div>
              <a 
                href={`https://github.com/Gray-Bay-Solutions/docs.graybaysolutions.io/edit/master/docs/${params.slug.join('/')}.md`}
                className="hover:text-foreground transition-colors break-words"
                target="_blank"
              >
                Edit on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-20">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: DocPageProps) {
  const doc = await getDocBySlug(params.slug)
  
  if (!doc) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${doc.title} | Documentation`,
    description: doc.frontMatter.description || `Documentation for ${doc.title}`,
  }
} 