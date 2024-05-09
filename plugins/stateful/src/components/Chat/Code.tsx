import React from 'react';
import {
  resolveLanguage,
  SyntaxHighlighter,
} from '../../utils/syntaxLanguages';

interface CodeProps {
  code: string;
  languageId?: string;
}

const Code: React.FC<CodeProps> = ({ code, languageId = '' }) => {
  return (
    <div>
      <SyntaxHighlighter
        language={resolveLanguage(languageId)}
        showLineNumbers
        useInlineStyles
        customStyle={{
          background: 'transparent',
          backgroundColor: 'transparent',
          borderRadius: '2px',
          color: 'var(--mauve-a11)',
        }}
        lineNumberStyle={{
          color: 'var(--mauve-a10)',
        }}
        className="thin-scrollbar rt-Code"
      >
        {code.trim() || ''}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
