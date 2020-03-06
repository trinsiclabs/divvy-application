import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { PAGES } from '../../constants';
import { compilePath } from '../../util/path';
import withChannels from '../providers/ChannelsProvider';
import withLayout from '../providers/LayoutProvider';
import Table from '../shared/Table';

const WalletPage = props => {
  const [channels, setChannels] = useState([]);

  props.channels.then(response => {
    setChannels(response.data.channels.items);
  });

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

        {channels.length > 0 &&
          <Table
            head={['Project', 'Equity', 'Value']}
            body={channels.map(channel => {
              return [
                <Link
                  href={compilePath(PAGES.WALLET_ITEM.PATH, { slug: channel.Slug })}
                  variant='body2'
                >
                  {channel.Name}
                </Link>,
                'N/A',
                'N/A',
              ];
            })}
          />
        }
      </Grid>
    </Grid>
  );
};

let Page = WalletPage;

Page = withChannels(Page);
Page = withLayout(Page);

export default Page;
