/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { Box, IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

const ChatCopyLink = ({ commands = '' }: { commands: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Box>
      {' '}
      Copy{' '}
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(commands);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        }}
      >
        {isCopied ? <LibraryAddCheckIcon /> : <FileCopyIcon />}
      </IconButton>
    </Box>
  );
};

export default ChatCopyLink;
