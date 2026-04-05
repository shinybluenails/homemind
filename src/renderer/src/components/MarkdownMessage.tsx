import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

const components: Components = {
  // Headings
  h1: ({ children }) => <h1 className="text-lg font-bold mt-3 mb-1 first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="text-base font-bold mt-3 mb-1 first:mt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-bold mt-2 mb-0.5 first:mt-0">{children}</h3>,

  // Paragraphs
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,

  // Bold / italic
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  // Inline code
  code: ({ children, className }) => {
    const isBlock = !!className // fenced blocks have a language class
    if (isBlock) {
      // Rendered by <pre> below; just return the raw string
      return <code className={className}>{children}</code>
    }
    return (
      <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono text-[0.85em]">
        {children}
      </code>
    )
  },

  // Fenced code blocks
  pre: ({ children }) => (
    <pre className="my-2 p-3 rounded-lg bg-black/10 dark:bg-white/5 overflow-x-auto font-mono text-[0.82em] leading-relaxed">
      {children}
    </pre>
  ),

  // Lists
  ul: ({ children }) => <ul className="list-disc list-outside pl-5 mb-2 space-y-0.5">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-outside pl-5 mb-2 space-y-0.5">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-current opacity-70 pl-3 my-2 italic">
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: () => <hr className="my-3 border-current opacity-20" />,

  // Links — open externally via shell
  a: ({ href, children }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        if (href) window.open(href, '_blank')
      }}
      className="underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  ),

  // Tables (remark-gfm)
  table: ({ children }) => (
    <div className="my-2 overflow-x-auto">
      <table className="text-xs border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-current opacity-50">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-current opacity-20 last:border-0">{children}</tr>,
  th: ({ children }) => <th className="px-2 py-1 text-left font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-2 py-1">{children}</td>,
}

interface MarkdownMessageProps {
  content: string
}

export function MarkdownMessage({ content }: MarkdownMessageProps): JSX.Element {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  )
}
