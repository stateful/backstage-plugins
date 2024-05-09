import React from 'react';

import { Box, makeStyles } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import { useEffect, useRef, useState } from 'react';
import BlinkWrapper from './BlinkWrapper';

const useStyles = makeStyles({
  emptyState: {
    display: 'flex',
    alignItems: 'center',
  },
});

const TypewriterEmptyState = () => {
  const classes = useStyles();
  const message =
    "Hi! I'm here to help. Describe your task below, then press <Enter>.";
  const [text, setText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  const speed = 20;
  const typingDelay = 1000;

  const typeWriter = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - (startTimeRef.current || 0);
    const index = Math.min(Math.floor(elapsed / speed), message.length);

    setText(message.substring(0, index));

    if (index === message.length) {
      setIsDone(true);
    } else {
      requestAnimationFrame(typeWriter);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      requestAnimationFrame(typeWriter);
    }, typingDelay);

    return () => clearTimeout(timerId);
  });

  return (
    <Box className={classes.emptyState}>
      <CloudIcon style={{ marginRight: 10 }} /> {text}{' '}
      {!isDone && <BlinkWrapper> |</BlinkWrapper>}
    </Box>
  );
};

export default TypewriterEmptyState;
