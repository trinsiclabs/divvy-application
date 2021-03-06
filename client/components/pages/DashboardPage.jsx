import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withLayout from '../providers/LayoutProvider';

const DashboardPage = props => {
  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          variant='h2'
          component='h1'
          gutterBottom
        >
          Your organisation
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
        >
          Details about your organisation.
        </Typography>
      </Grid>
    </Grid>
  );
};

let Page = DashboardPage;

Page = withLayout(Page);

export default Page;
