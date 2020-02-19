import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock'
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import withLayout from '../providers/LayoutProvider';
import { verifyMemberMutation } from '../../graphql/member';

let SignupConfirmPage = props => {
  const [doneTitle, setDoneTitle] = useState('');
  const [doneMessage, setDoneMessage] = useState('');
  const [verifyMember, { loading } ] = verifyMemberMutation();

  useEffect(() => {
    verifyMember({ variables: { token: props.token } })
      .then(() => {
        setDoneTitle('Success');
        setDoneMessage('We have successfully verified your account. You can now login and get started.');
      })
      .catch(() => {
        setDoneTitle('Failed to verify your account');
        setDoneMessage('We were unable to verify your account. Please click the link in your email to try again.');
      });
  }, []);

  return (
    <Container maxWidth='xs'>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <Avatar>
            <LockIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            gutterBottom
          >
            {loading
              ? 'Confirming your email address...'
              : doneTitle
            }
          </Typography>

          {!loading &&
            <Typography
              component='p'
            >
              {doneMessage}
            </Typography>
          }
        </Grid>
      </Grid>
    </Container>
  );
};

SignupConfirmPage.propTypes = {
  token: PropTypes.string.isRequired,
}

SignupConfirmPage = withLayout(SignupConfirmPage);

export default SignupConfirmPage;
