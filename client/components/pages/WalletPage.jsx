import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { PAGES } from '../../constants';
import { compilePath } from '../../util/path';
import withChannels from '../providers/ChannelsProvider';
import withLayout from '../providers/LayoutProvider';
import withShares from '../providers/SharesProvider';
import Table from '../shared/Table';

const WalletPage = props => {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [shares, setShares] = useState({});

  useEffect(() => {
    // Fetch channels.
    props
      .readChannels()
      .then(res => {
        const items = res.data.channels.items;
        setChannels(items);

        // Fetch shares for each channel.
        return Promise.all(items.map(({ Slug }) => {
          return props
            .readShares(Slug)
            .then(res => {
              setShares({ ...shares, [Slug]: res.data.shares.items });
            });
        }));
        // items.forEach(({ Slug }) => {
        //   props
        //     .readShares(Slug)
        //     .then(res => {
        //       setShares({ ...shares, [Slug]: res.data.shares.items });
        //     });
        // });
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
        <Typography
          variant='h2'
          component='h1'
          gutterBottom
        >
          Wallet
        </Typography>

        {loading
          ? <>
              <Skeleton height={54} />
              <Skeleton height={54} />
              <Skeleton height={54} />
            </>
          :
            <Table
              head={['Project', 'Equity', 'Value']}
              body={channels.map(({ Name, Slug }) => {
                const equity = shares[Slug]
                  ? `${shares[Slug].length}%`
                  : '';
                const value = shares[Slug]
                  ? `$${shares[Slug].reduce((result, share) => result + share.faceValue, 0)}`
                  : '';

                return [
                  <Link
                    href={compilePath(PAGES.WALLET_ITEM.PATH, { slug: Slug })}
                    variant='body2'
                  >
                    {Name}
                  </Link>,
                  equity,
                  value,
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
Page = withShares(Page);
Page = withLayout(Page);

export default Page;
