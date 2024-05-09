import {
  Content,
  ContentHeader,
  Header,
  Page,
  SupportButton,
} from '@backstage/core-components';
import '@github/relative-time-element';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { Activity } from '../Activity';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ApolloProvider } from '@apollo/client';
import { CatalogFilterLayout } from '@backstage/plugin-catalog-react';
import { initializeClient } from '../../apollo';
import { ChatProvider } from '../../contexts/ChatContext';
import { useGetMe } from '../../hooks/api/me/useGetMe';
import useUrl from '../../hooks/api/useUrl';
import { Chat } from '../Chat';
import { Integration } from '../Integration';
import { SectionWrapper } from '../common/SectionWrapper/SectionWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .11)',
    boxShadow: 'none',
  },
  title: {
    margin: theme.spacing(1, 0, 0, 1),
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listIcon: {
    minWidth: 30,
    color: theme.palette.text.primary,
  },
  menuItem: {
    minHeight: theme.spacing(6),
  },
  groupWrapper: {
    margin: theme.spacing(1, 1, 2, 1),
  },
}));

export const Splash = () => {
  const classes = useStyles();
  const [section, setSection] = React.useState('activity');

  const { getUrl } = useUrl();
  const uri = getUrl('/api/proxy/stateful/graphql');

  const { data: userData } = useGetMe();

  const apolloClient = initializeClient(uri, userData?.statefulToken);

  const sections = [
    {
      label: 'Activity',
      key: 'activity',
      component: (
        <SectionWrapper>
          <Activity />
        </SectionWrapper>
      ),
    },
    {
      label: 'Chat',
      key: 'chat',
      component: (
        <SectionWrapper>
          <ChatProvider>
            <Chat />
          </ChatProvider>
        </SectionWrapper>
      ),
    },
    {
      label: 'Integration',
      key: 'integration',
      component: <Integration />,
    },
  ];

  return (
    <ApolloProvider client={apolloClient}>
      <Page themeId="tool">
        <Header
          title="Welcome to Stateful!"
          pageTitleOverride="Stateful"
          style={{
            background: '#29a383',
          }}
        />
        <Content>
          <ContentHeader title="Stateful">
            <SupportButton>Integrate Stateful with Backstage</SupportButton>
          </ContentHeader>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
              <Card className={classes.root}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.title}
                >
                  Sections
                </Typography>
                <Card className={classes.groupWrapper}>
                  <List disablePadding dense role="menu">
                    {sections.map(s => (
                      <MenuItem
                        key={s.key}
                        role="none presentation"
                        divider
                        onClick={() => setSection(s.key)}
                        selected={section === s.key}
                        className={classes.menuItem}
                        tabIndex={0}
                        ContainerProps={{ role: 'menuitem' }}
                      >
                        <ListItemText>
                          <Typography variant="body1">{s.label}</Typography>
                        </ListItemText>
                      </MenuItem>
                    ))}
                  </List>
                </Card>
              </Card>
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              {sections.find(s => s.key === section)?.component}
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </Content>
      </Page>
    </ApolloProvider>
  );
};
