import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-slate dark:prose-invert prose-lg max-w-none overflow-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  style={oneDark as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          h1: ({ children }) => (
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 md:mb-6 break-words">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-6 md:mt-8 mb-3 md:mb-4 break-words">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg md:text-xl font-semibold text-foreground mt-4 md:mt-6 mb-2 md:mb-3 break-words">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base md:text-lg font-semibold text-foreground mt-3 md:mt-4 mb-2 break-words">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground leading-6 md:leading-7 mb-3 md:mb-4 break-words">
              {children}
            </p>
          ),
          a: ({ children, href }) => (
            <a 
              href={href} 
              className="text-primary hover:text-primary/80 underline underline-offset-4 break-words"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-3 md:my-4 ml-4 md:ml-6 list-disc [&>li]:mt-1 md:[&>li]:mt-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 md:my-4 ml-4 md:ml-6 list-decimal [&>li]:mt-1 md:[&>li]:mt-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground break-words">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-4 md:mt-6 border-l-2 border-primary pl-4 md:pl-6 italic break-words">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-4 md:my-6 w-full overflow-x-auto">
              <table className="w-full border-collapse border border-border min-w-full">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border px-2 md:px-4 py-1 md:py-2 text-left font-bold bg-muted text-xs md:text-sm">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm break-words">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 