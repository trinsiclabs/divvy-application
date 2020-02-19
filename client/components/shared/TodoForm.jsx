import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  Name: Yup
    .string()
    .required(),
});

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
}));

const TodoForm = props => {
  const classes = useStyles();

  return (
    <Formik
      enableReinitialize
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={schema}
      render={({
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              id='Name'
              className={classes.textField}
              label='Name'
              onChange={handleChange}
              value={values.Name}
              variant='outlined'
            />
            <div>
              <Button
                className={classes.button}
                disabled={isSubmitting}
                onClick={props.onCancel}
                variant='contained'
              >
                Cancel
              </Button>
              <Button
                color='primary'
                disabled={isSubmitting}
                type='submit'
                variant='contained'
              >
                Save
              </Button>
            </div>
          </form>
        );
      }}
    />
  );
};

TodoForm.propTypes = {
  initialValues: PropTypes.object,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  initialValues: {
    Name: '',
  },
  onCancel: () => {},
};

export default TodoForm;
