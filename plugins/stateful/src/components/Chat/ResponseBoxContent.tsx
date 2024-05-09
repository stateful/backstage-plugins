import React, { ReactNode, useMemo } from 'react';

import { Chat as ChatType } from '../../__generated__/graphql';

import { Box, Button, Grid, Tooltip, makeStyles } from '@material-ui/core';

import LaunchIcon from '@material-ui/icons/Launch';
import LayersIcon from '@material-ui/icons/Layers';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {
  getNumberFromMetadata,
  getRepository,
  getUriHandlerLink,
  toMetahash,
} from '../../utils';
import ChatCopyLink from './ChatCopyLink';
import Code from './Code';

interface FilePathTooltipProps {
  fileNameWithPath: string;
  gitRemote: string;
}

const FilePathTooltip: React.FC<FilePathTooltipProps> = ({
  fileNameWithPath,
  gitRemote,
}) => {
  return (
    <Tooltip title={gitRemote} placement="top">
      <Button>{fileNameWithPath}</Button>
    </Tooltip>
  );
};

interface ButtonWrapperProps {
  link: string;
  children: ReactNode;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ link, children }) => {
  return (
    <a
      href={link}
      style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}
    >
      {children}
    </a>
  );
};

type ResponseBoxContentProps = {
  hits: ChatType['hits'];
  question?: ChatType['question'];
};

const useStyles = makeStyles({
  actions: {
    display: 'flex',
  },
  actionCells: {
    display: 'flex',
    alignItems: 'center',
  },
  actionLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    alignItems: 'center',
  },
});

const ResponseBoxContent: React.FC<ResponseBoxContentProps> = ({ hits }) => {
  const classes = useStyles();
  const entry = hits?.[0];
  const metahash = useMemo(() => toMetahash(entry), [entry]);

  const fileNameWithPath = useMemo(() => {
    return metahash?.file || '';
  }, [metahash]);

  const repositoryInfo = useMemo(() => {
    let repo = '';
    if (metahash && typeof metahash.file === 'string') {
      [repo] = metahash.file.split('/');
    }
    return getRepository(repo, metahash?.gitRemote);
  }, [metahash]);

  const fileName = useMemo(() => {
    return metahash?.file?.split('/')?.slice(1)?.join('/') || '';
  }, [metahash]);

  const cellIndex = useMemo(() => {
    return metahash?.index;
  }, [metahash]);

  const vscodeUri = useMemo(() => {
    if (repositoryInfo && cellIndex) {
      return getUriHandlerLink(repositoryInfo, fileName, cellIndex);
    }
    return '';
  }, [repositoryInfo, cellIndex, fileName]);

  const index = useMemo(() => {
    return getNumberFromMetadata(entry, 'index');
  }, [entry]);

  const total = useMemo(() => {
    return getNumberFromMetadata(entry, 'total');
  }, [entry]);

  const languageId = useMemo(() => {
    return metahash?.languageId;
  }, [metahash]);

  if (!metahash) {
    return <></>;
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <FilePathTooltip
          fileNameWithPath={fileNameWithPath}
          gitRemote={repositoryInfo.gitRemote}
        />
      </Grid>

      <Grid item xs={12}>
        <Code code={metahash.value} languageId={languageId} />
      </Grid>

      <Grid item xs={12} className={classes.actions}>
        <Grid xs={2} className={classes.actionCells}>
          <LayersIcon />
          <Box component="span" m={1}>
            Cell {index + 1} of {total}
          </Box>
        </Grid>

        <Grid xs={10} className={classes.actionLinks}>
          <ChatCopyLink commands={metahash.value} />
          <ButtonWrapper link={vscodeUri!}>
            <Box component="span" m={1}>
              Open
            </Box>
            <LaunchIcon />
          </ButtonWrapper>
          <ButtonWrapper link={vscodeUri!}>
            <Box component="span" m={1}>
              Run
            </Box>
            <PlayArrowIcon />
          </ButtonWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResponseBoxContent;
