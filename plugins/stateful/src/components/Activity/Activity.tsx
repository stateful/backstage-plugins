import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useGetAllLogs } from '../../hooks/api/activity/useGetAll';
import useGetConfig from '../../hooks/useGetConfig';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export const Activity = () => {
  const { data, isLoading, error } = useGetAllLogs();
  const { appUrl } = useGetConfig();

  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Timestamp', field: 'timestamp' },
    { title: 'User', field: 'user' },
    { title: 'Language', field: 'language' },
    { title: 'File', field: 'file' },
    { title: 'Command', field: 'command' },
    { title: 'Exit', field: 'exit' },
    { title: 'Action', field: 'action' },
    { title: '', field: 'details' },
  ];
  const { logs } = data || {};

  const tableData = (logs?.data || []).map(log => {
    return {
      timestamp: <relative-time datetime={log.createTime} />,
      user: (
        <img
          src={log.user.photoUrl || ''}
          className={classes.avatar}
          alt={log.user.email}
        />
      ),

      language: (log.data as { languageId?: string }).languageId ?? '',
      file:
        (log.data as { fileName?: string }).fileName?.split('/').pop() ?? '',
      command:
        (log.data as { metadata?: { name?: string } }).metadata?.name ?? '',
      exit: (log.data as { exitCode?: number }).exitCode,
      logType: log.logType.name,
      action: log.logType.description,
      details: (
        <a className={classes.details} href={`${appUrl}/activity/${log.id}`}>
          <ArrowForwardIcon />
        </a>
      ),
      id: log.id,
    };
  });

  if (isLoading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error as Error} />;
  }

  return (
    <Table
      components={{
        Toolbar: () => null,
      }}
      options={{ search: false, paging: false }}
      columns={columns}
      data={tableData}
    />
  );
};
