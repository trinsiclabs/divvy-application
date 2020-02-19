import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Loader from '../../components/shared/Loader';
import { MESSAGES, PAGES } from '../../constants';
import { updateTodoMutation } from '../../graphql/todo';
import withLayout from '../providers/LayoutProvider';
import withTodos from '../providers/TodosProvider';
import TodoForm from '../shared/TodoForm';

const TodoEditPage = props => {
  const [updateTodo] = updateTodoMutation();

  let formValues = null;

  if (!props.todos.loading && !props.todos.error && formValues === null) {
    let todo = props.todos.data.readTodo.find(todo => todo.ID === props.todoId);

    if (todo === undefined) {
      props.routeTo(PAGES.NOT_FOUND.PATH);
    } else {
      formValues = { Name: todo.Name };
    }
  }

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
          Edit todo
        </Typography>

        {props.todos.loading
          ?
            <Loader align='center' />
          :
            <TodoForm
              initialValues={formValues}
              onCancel={() => props.routeTo(PAGES.TODOS.PATH)}
              onSubmit={values => {
                updateTodo({ variables: { id: props.todoId, name: values.Name } })
                  .then(() => {
                    props.showMessage(MESSAGES.CONTENT.SUCCESS, MESSAGES.TYPES.SUCCESS);
                    props.routeTo(PAGES.TODOS.PATH);
                  })
                  .catch(() => {
                    props.showMessage(MESSAGES.CONTENT.ERROR, MESSAGES.TYPES.ERROR);
                  });
              }}
            />
        }
      </Grid>
    </Grid>
  );
};

let Page = TodoEditPage;

Page = withLayout(Page);
Page = withTodos(Page);

export default Page;
