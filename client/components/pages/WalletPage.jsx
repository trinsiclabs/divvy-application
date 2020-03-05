import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withLayout from '../providers/LayoutProvider';

const WalletPage = props => {
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
          Wallet
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
        >
          Here's a list of all your things.
        </Typography>
      </Grid>
    </Grid>
  );
};

let Page = WalletPage;

Page = withLayout(Page);

export default Page;
