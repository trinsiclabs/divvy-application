import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withLayout from '../providers/LayoutProvider';

const NotFoundPage = () => {
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
          Whoops - we're not sure how you got here...
        </Typography>
      </Grid>
    </Grid>
  );
};

let Page = NotFoundPage;

Page = withLayout(Page);

export default Page;
