import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withLayout from '../providers/LayoutProvider';

const HomePage = props => {
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
          Welcome
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
        >
            This simple Todo app can be used to quick-start your prototype.
        </Typography>
      </Grid>
    </Grid>
  );
};

let Page = HomePage;

Page = withLayout(Page);

export default Page;
