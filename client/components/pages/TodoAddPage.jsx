import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {MESSAGES, PAGES} from '../../constants';
import { addTodoMutation } from '../../graphql/todo';
import withLayout from '../providers/LayoutProvider';
import withTodos from '../providers/TodosProvider';
import TodoForm from '../shared/TodoForm';

const TodoAddPage = props => {
  const [addTodo] = addTodoMutation();

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
          Add todo
        </Typography>
        <TodoForm
          onCancel={() => props.routeTo(PAGES.TODOS.PATH)}
          onSubmit={values => {
            addTodo({ variables: { name: values.Name } })
              .then(() => {
                props.showMessage(MESSAGES.CONTENT.SUCCESS, MESSAGES.TYPES.SUCCESS);
                props.routeTo(PAGES.TODOS.PATH);
              })
              .catch(() => {
                props.showMessage(MESSAGES.CONTENT.ERROR, MESSAGES.TYPES.ERROR);
              });
          }}
        />
      </Grid>
    </Grid>
  );
}

let Page = TodoAddPage;

Page = withLayout(Page);
Page = withTodos(Page);

export default Page;
