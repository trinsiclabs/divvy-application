import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withLayout from '../providers/LayoutProvider';

const ErrorPage = () => {
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
        >
          Oops - something went wrong.
        </Typography>
      </Grid>
    </Grid>
  );
};

let Page = ErrorPage;

Page = withLayout(Page);

export default Page;
