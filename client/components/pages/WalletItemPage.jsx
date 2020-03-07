import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { PAGES } from '../../constants';
import withChannels from '../providers/ChannelsProvider';
import withLayout from '../providers/LayoutProvider';
import withShares from '../providers/SharesProvider';
import Table from '../shared/Table';

const WalletItemPage = props => {
  const [loading, setLoading] = useState(true);
  const [channel, setChannel] = useState(null);
  const [shares, setShares] = useState({});

  useEffect(() => {
    // Fetch channels.
    props
      .readChannels()
      .then(res => {
        const items = res.data.channels.items;
        const channel = items.find(({ Slug }) => Slug === props.slug);

        // Make sure the requested channel is in the users channel list.
        if (!channel) {
            props.routeTo(PAGES.NOT_FOUND.PATH);
            return;
        }

        setChannel(channel);

        // Fetch shares for each channel.
        return Promise.all(items.map(({ Slug }) => {
          return props
            .readShares(Slug)
            .then(res => {
              setShares({ ...shares, [Slug]: res.data.shares.items });
            });
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        {loading
          ? <Skeleton height={72} width='50%' />
          : <Typography
              variant='h2'
              component='h1'
              gutterBottom
            >
              {channel.Name}
            </Typography>
        }

        {loading
          ? <>
              <Skeleton height={54} />
              <Skeleton height={54} />
              <Skeleton height={54} />
            </>
          :
            <Table
              head={['Share ID', 'Issued', 'Value']}
              body={shares[channel.Slug].map(({ faceValue, issueDateTime, shareNumber }) => {
                const date = new Date(issueDateTime).toLocaleDateString('en-NZ');
                return [
                  shareNumber,
                  date,
                  `$${faceValue}`,
                ];
              })}
              pagination
            />
        }
      </Grid>
    </Grid>
  );
};

let Page = WalletItemPage;

Page = withChannels(Page);
Page = withShares(Page);
Page = withLayout(Page);

export default Page;
