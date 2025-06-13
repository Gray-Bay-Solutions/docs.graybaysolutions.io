import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'docs')

export interface DocData {
  slug: string[]
  title: string
  content: string
  frontMatter: Record<string, any>
}

export async function getDocBySlug(slug: string[]): Promise<DocData | null> {
  try {
    // Try different file paths
    const possiblePaths = [
      path.join(docsDirectory, ...slug) + '.md',
      path.join(docsDirectory, ...slug, 'index.md'),
    ]

    let fullPath: string | null = null
    let fileContents: string

    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        fullPath = possiblePath
        break
      }
    }

    if (!fullPath) {
      return null
    }

    fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Extract title from frontmatter or first heading
    let title = data.title
    if (!title) {
      const headingMatch = content.match(/^#\s+(.+)$/m)
      title = headingMatch ? headingMatch[1] : slug[slug.length - 1]
    }

    return {
      slug,
      title,
      content,
      frontMatter: data,
    }
  } catch (error) {
    console.error('Error reading doc:', error)
    return null
  }
}

export function getAllDocSlugs(): string[][] {
  function getFilesRecursively(dir: string, basePath: string[] = []): string[][] {
    const files: string[][] = []
    
    if (!fs.existsSync(dir)) {
      return files
    }

    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        files.push(...getFilesRecursively(fullPath, [...basePath, item]))
      } else if (item.endsWith('.md')) {
        const slug = item === 'index.md' 
          ? basePath 
          : [...basePath, item.replace(/\.md$/, '')]
        
        if (slug.length > 0) {
          files.push(slug)
        }
      }
    }

    return files
  }

  return getFilesRecursively(docsDirectory)
} 