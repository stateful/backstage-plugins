import React from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';
import { useGetMe } from '../../../hooks/api/me/useGetMe';

type Props = {
  children: React.ReactNode;
};

export const SectionWrapper = ({ children }: Props) => {
  const { data, isLoading } = useGetMe();

  if (isLoading) {
    return (
      <Container>
        <LinearProgress />
      </Container>
    );
  }

  if (!data?.statefulToken) {
    return (
      <Container>
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <div>Please go to Integration and connect to Stateful</div>
        </Grid>
      </Container>
    );
  }

  return children;
};
