import { Light as SyntaxHighlighterOrigin } from 'react-syntax-highlighter';
import cLike from 'react-syntax-highlighter/dist/esm/languages/hljs/c-like';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import lua from 'react-syntax-highlighter/dist/esm/languages/hljs/lua';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
import perl from 'react-syntax-highlighter/dist/esm/languages/hljs/perl';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import ruby from 'react-syntax-highlighter/dist/esm/languages/hljs/ruby';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';

SyntaxHighlighterOrigin.registerLanguage('javascript', javascript);
SyntaxHighlighterOrigin.registerLanguage('typescript', typescript);
SyntaxHighlighterOrigin.registerLanguage('shell', shell);
SyntaxHighlighterOrigin.registerLanguage('lua', lua);
SyntaxHighlighterOrigin.registerLanguage('perl', perl);
SyntaxHighlighterOrigin.registerLanguage('python', python);
SyntaxHighlighterOrigin.registerLanguage('ruby', ruby);
SyntaxHighlighterOrigin.registerLanguage('cLike', cLike);
SyntaxHighlighterOrigin.registerLanguage('markdown', markdown);
SyntaxHighlighterOrigin.registerLanguage('xml', xml);
SyntaxHighlighterOrigin.registerLanguage('json', json);

export const resolveLanguage = (languageId: string): string => {
  switch (languageId) {
    case 'javascript':
    case 'typescript':
    case 'lua':
    case 'perl':
    case 'python':
    case 'ruby':
    case 'markdown':
    case 'xml':
    case 'json':
      return languageId;
    case 'md':
      return 'markdown';
    case 'html':
      return 'xml';
    case 'sh':
    case 'shell':
      // This doesn't actually highlight shell scripts, it just shows them as plain text.
      // Ideally we would use "bash" instead, but the colors highlight the text in a way that
      // makes it hard to read.
      return 'shell';
    default:
      return 'bash';
  }
};

export const SyntaxHighlighter = SyntaxHighlighterOrigin;
