import React, { useEffect } from 'react';
import '@github/relative-time-element';
import { LinkButton, InfoCard } from '@backstage/core-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useGetMe } from '../../hooks/api/me/useGetMe';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useUpdateMe from '../../hooks/api/me/useUpdateMe';
import useGetConfig from '../../hooks/useGetConfig';

const useStyles = makeStyles(theme => {
  const border = `1px solid ${theme.palette.border}`;

  return {
    textarea: {
      boxSizing: 'border-box',
      width: '100%',
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      padding: '8px 12px',
      borderRadius: '8px',
      color: theme.palette.text.primary,
      background: theme.palette.background.default,
      border: border,
      resize: 'none',

      '&:hover': {
        border: border,
      },

      '&:focus': {
        border: border,
      },

      '&:focus-visible': {
        outline: 0,
      },
    },
    button: {
      width: 'fit-content',
      marginLeft: 'auto',
    },
  };
});

export const Integration = () => {
  const { data } = useGetMe();
  const { mutate, isPending } = useUpdateMe();
  const classes = useStyles();
  const theme = useTheme();
  const [statefulToken, setStatefulToken] = React.useState('');
  const { appUrl } = useGetConfig();

  useEffect(() => {
    if (data?.statefulToken) {
      setStatefulToken(data?.statefulToken);
    }
  }, [data?.statefulToken]);

  const handleSave = () => {
    mutate({ statefulToken });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InfoCard
        title="Integrate Stateful in Backstage"
        subheader="Add your Stateful token to integrate Stateful in Backstage"
        action={
          <LinkButton to={`${appUrl}/token`}>
            Get your Stateful token
          </LinkButton>
        }
      >
        <TextareaAutosize
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
          minRows={5}
          className={classes.textarea}
          maxRows={5}
          value={statefulToken}
          onChange={e => setStatefulToken(e.target.value)}
        />
        <Box
          sx={{
            display: 'flex',
            marginTop: theme.spacing(2),
          }}
        >
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            disabled={isPending || !statefulToken}
            onClick={handleSave}
          >
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </Box>
      </InfoCard>
    </Box>
  );
};
