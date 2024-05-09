// import 'github-markdown-css/github-markdown.css'
import '../..//markdown.css';

import React, { ReactNode } from 'react';

import ReactMarkdown, { Components } from 'react-markdown';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import {
  resolveLanguage,
  SyntaxHighlighter,
} from '../../utils/syntaxLanguages';

interface MarkdownRendererProps {
  languageId: string;
  children: ReactNode;
}

// TODO: Probably we can reuse Code component here to avoid duplication.
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  children,
  languageId,
}) => {
  const components = {
    p: ({ ...props }) => {
      return <div>{props.children}</div>;
    },
    code: ({ children: codeChildren }: { children: ReactNode }) => (
      <div className="inline">
        <SyntaxHighlighter
          style={solarizedDark}
          language={resolveLanguage(languageId)}
          useInlineStyles
          customStyle={{
            background: 'transparent',
            backgroundColor: 'transparent',
            borderRadius: '0px',
            overflow: 'scroll',
          }}
          lineNumberStyle={{
            color: 'var(--mauve-a10)',
          }}
          className="rt-Code"
        >
          {String(codeChildren).trim() || ''}
        </SyntaxHighlighter>
      </div>
    ),
  } as Components;

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      className="markdown-body"
    >
      {String(children)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
