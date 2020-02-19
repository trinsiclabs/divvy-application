import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
  },
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: 'white',
  },
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Container fixed>
          <Typography variant='body1'>
            Copyright | Terms of use | Privacy
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
