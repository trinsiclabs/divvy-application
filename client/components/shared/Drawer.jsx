import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import PropTypes from 'prop-types';
import React from 'react';
import {PAGES} from '../../constants';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const handleListItemClick = (routeTo, path) => {
  return () => {
    routeTo(path);
  };
};

const DrawerComponent = props => {
  const classes = useStyles();

  return (
    <Drawer
      open={props.isOpen}
      onClose={props.onClose}
    >
      <div
        className={classes.list}
        onClick={props.onClose}
        onKeyDown={props.onClose}
        role='presentation'
      >
        <List>
          <ListItem
            button
            onClick={handleListItemClick(props.routeTo, PAGES.HOME.PATH)}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>

          <ListItem
            button
            onClick={handleListItemClick(props.routeTo, PAGES.TODOS.PATH)}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary='Todos' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  routeTo: PropTypes.func.isRequired,
};

export default DrawerComponent;
