import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock'
import {Formik} from 'formik';
import React, {useState} from 'react';
import {PAGES} from '../../constants';
import withLayout from '../providers/LayoutProvider';
import { addAccountMutation } from '../../graphql/account';
import { addMemberMutation } from '../../graphql/member';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  confirmation: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  status: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  }
}));

const SignupPage = props => {
  const classes = useStyles();
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [addAccount] = addAccountMutation();
  const [addMember] = addMemberMutation();

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
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography
              component='h1'
              variant='h5'
              gutterBottom
            >
              {confirmationSent ? 'Confirm your email address' : 'Sign up'}
            </Typography>
            <Formik
              onSubmit={(formValues, actions) => {
                const { firstName, surname, email, password, organisationName } = formValues;

                addMember({ variables: { firstName, surname, email, password } })
                  .then(({ data }) => {
                    return addAccount({ variables: { organisationName, members: [data.addMember.ID] }});
                  })
                  .then(() => {
                    setConfirmationSent(true);
                  })
                  .catch(error => {
                    console.log(error);
                    actions.setStatus(error.graphQLErrors[0].message);
                  })
                  .finally(() => {
                    actions.setSubmitting(false);
                  });
              }}
              render={({
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
                status,
                values,
              }) => (
                <React.Fragment>
                  {confirmationSent
                    ?
                      <Typography
                        className={classes.confirmation}
                        component='p'
                      >
                        We have sent a confirmation email to {values.email}<br /><br />
                        Click the link in your email to confirm and get started.
                      </Typography>
                    :
                      <form
                        className={classes.form}
                        onSubmit={handleSubmit}
                      >
                        <Grid
                          container
                          spacing={2}
                        >
                          {status &&
                            <Grid item xs={12}>
                              <FormHelperText
                                className={classes.status}
                                error={true}
                              >
                                {status}
                              </FormHelperText>
                            </Grid>
                          }
                          <Grid
                            item
                            xs={12}
                            sm={6}
                          >
                            <TextField
                              id='firstName'
                              label='First Name'
                              onChange={handleChange}
                              variant='outlined'
                              required
                              fullWidth
                              autoComplete='fname'
                              autoFocus
                              error={errors.firstName || undefined}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={6}
                          >
                            <TextField
                              id='surname'
                              label='Surname'
                              onChange={handleChange}
                              variant='outlined'
                              required
                              fullWidth
                              autoComplete='lname'
                              error={errors.surname || undefined}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id='organisationName'
                              label='Organisation (optional)'
                              onChange={handleChange}
                              type='text'
                              variant='outlined'
                              fullWidth
                              error={errors.organisationName || undefined}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id='email'
                              label='Email'
                              onChange={handleChange}
                              type='email'
                              variant='outlined'
                              required
                              fullWidth
                              autoComplete='email'
                              error={errors.email || undefined}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              id='password'
                              label='Password'
                              onChange={handleChange}
                              type='password'
                              variant='outlined'
                              required
                              fullWidth
                              autoComplete='current-password'
                              error={errors.password || undefined}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  id='acceptTerms'
                                  color='primary'
                                  onChange={handleChange}
                                  required
                                  error={errors.acceptTerms || undefined}
                                />
                              }
                              label='I have read and I agree to the terms of use and privacy notice.'
                            />
                          </Grid>
                        </Grid>
                        <Button
                          className={classes.submit}
                          color='primary'
                          disabled={isSubmitting}
                          type='submit'
                          variant='contained'
                          fullWidth
                        >
                          Sign up
                        </Button>
                        <Grid
                          container
                          justify='center'
                        >
                          <Grid item>
                            <Link
                              href={PAGES.LOGIN.PATH}
                              variant='body2'
                            >
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </form>
                  }
                </React.Fragment>
              )}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

let Page = SignupPage;

Page = withLayout(Page);

export default Page;
