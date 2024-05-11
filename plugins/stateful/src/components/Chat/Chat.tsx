import { ResponseErrorPanel } from '@backstage/core-components';
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  OutlinedInput,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import SendIcon from '@material-ui/icons/Send';
import React, { useMemo, useState } from 'react';
import { Chat as ChatType } from '../../__generated__/graphql';
import useChat from '../../contexts/ChatContext';
import '../../markdown.css';
import { toMetahash } from '../../utils';
import MarkdownRenderer from './MarkdownRenderer';
import ResponseBoxContent from './ResponseBoxContent';
import TypewriterEmptyState from './TypewriterEmptyState';

const useStyles = makeStyles({
  avatar: {
    display: 'flex',
  },
  question: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
  },
});

const WelcomeBox = () => {
  const { resetTypingKey } = useChat();
  return (
    <Grid item  xs={12} lg={8}>
      <TypewriterEmptyState key={resetTypingKey} />
    </Grid>
  );
};

type QuestionBoxProps = {
  question: ChatType['question'];
  avatar: string;
};

type ResponseBoxProps = {
  response: ChatType['response'];
  question?: ChatType['question'];
  hits: ChatType['hits'];
  done?: boolean;
};

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, avatar }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={12} className={classes.question}>
      <Grid item xs={12} lg={8} className={classes.avatar}>
        <Avatar src={avatar} alt="User" />
        <Box m={1}>{question}</Box>
      </Grid>
    </Grid>
  );
};
const ResponseBox: React.FC<ResponseBoxProps> = ({
  response,
  question,
  hits,
  done = true,
}) => {
  const entry = hits?.[0];
  const metahash = useMemo(() => toMetahash(entry), [entry]);
  const languageId = useMemo(() => {
    return metahash?.languageId;
  }, [metahash]);

  return (
    <Grid item  xs={12} lg={8}>
      {done ? (
        <MarkdownRenderer languageId={languageId}>{response}</MarkdownRenderer>
      ) : (
        <div>{response}</div>
      )}
      <ResponseBoxContent hits={hits} question={question} />
    </Grid>
  );
};

export const Chat = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const {
    clearHistories,
    chatHistory,
    currentQuestion,
    currentMessage,
    submitQuestion,
    subscriptionError,
    currentUser,
  } = useChat();

  const loading = currentQuestion !== null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.persist();
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter' && !loading) {
      e.preventDefault();
      submitQuestion(inputValue);
      setInputValue('');
    }
  };
  if (subscriptionError) {
    return <ResponseErrorPanel error={subscriptionError as Error} />;
  }

  return (
    <Container>
      <Grid container xs={12} lg={12} justifyContent="center" alignItems="center">
        <WelcomeBox />
        {chatHistory.map(chat => (
          <>
            <QuestionBox
              question={chat.question}
              avatar={currentUser?.photoUrl as string}
            />
            <ResponseBox
              response={chat.response}
              question={chat.question}
              hits={chat.hits}
            />
          </>
        ))}
        {currentQuestion && (
          <QuestionBox
            question={currentQuestion}
            avatar={currentUser?.photoUrl  as string}
          />
        )}
        {currentQuestion && !currentMessage && (
          <Grid item  xs={12} lg={8}>
            <LinearProgress />
          </Grid>
        )}
        {currentMessage && (
          <>
            <ResponseBox
              response={currentMessage.message}
              hits={[]}
              done={currentMessage.done}
            />
          </>
        )}
        <Grid item  xs={12} lg={8} className={classes.input}>
          <OutlinedInput
            id=""
            fullWidth
            onKeyDown={handleKeyDown}
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    submitQuestion(inputValue);
                    setInputValue('');
                  }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <IconButton
            onClick={() => {
              clearHistories();
            }}
          >
            <RestoreFromTrashIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
