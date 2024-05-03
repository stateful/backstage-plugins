import '@github/relative-time-element';
import React from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { Activity } from '../Activity';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { CatalogFilterLayout } from '@backstage/plugin-catalog-react';
import { Integration } from '../Integration';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

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
  const [section, setSection] = React.useState('integration');

  const sections = [
    {
      label: 'Integration',
      key: 'integration',
      component: <Integration />,
    },
    {
      label: 'Activity',
      key: 'activity',
      component: <Activity />,
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
