import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import Dialog from '../../components/shared/Dialog';
import Loader from '../../components/shared/Loader';
import Table from '../../components/shared/Table';
import {MESSAGES, PAGES} from '../../constants';
import { deleteTodoMutation } from '../../graphql/todo';
import {compilePath} from '../../util/path';
import withLayout from '../providers/LayoutProvider';
import withTodos from '../providers/TodosProvider';

const handleDialogClose = (setDialogIsOpen, setSelectedTodoId) => {
  return () => {
    setDialogIsOpen(false);
    setSelectedTodoId('');
  };
};

const TodosPage = props => {
  const [deleteTodo] = deleteTodoMutation();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState('');

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
        >
          Your todos
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
        >
          Feel free to create, update, or delete your Todos.
        </Typography>
        <Button
          color='primary'
          onClick={() => props.routeTo(PAGES.TODO_ADD.PATH)}
          variant='contained'
        >
          Add todo
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
      >
        {props.todos.loading &&
          <Loader align='center' />
        }

        {!props.todos.loading && props.todos.data.readTodo.length > 0 &&
          <Table
            id='todos'
            head={['Name', 'Actions']}
            body={props.todos.data.readTodo.map(todo => {
              const actions = (
                <React.Fragment>
                  <IconButton
                    aria-label='Edit'
                    color='inherit'
                    edge='start'
                    onClick={() => props.routeTo(compilePath(PAGES.TODO_EDIT.PATH, { todoId: todo.ID }))}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label='Delete'
                    color='inherit'
                    edge='start'
                    onClick={() => {
                      setDialogIsOpen(true);
                      setSelectedTodoId(todo.ID);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </React.Fragment>
              );

              return [todo.Name, actions];
            })}
          />
        }

        <Dialog
          actions={[
            {
              label: 'Cancel',
              props: { onClick: handleDialogClose(setDialogIsOpen, setSelectedTodoId) },
            },
            {
              label: 'Yes, delete',
              props: {
                onClick: () => {
                  deleteTodo({ variables: { id: selectedTodoId } })
                    .then(() => {
                      props.showMessage(MESSAGES.CONTENT.SUCCESS, MESSAGES.TYPES.SUCCESS);
                    })
                    .catch(() => {
                      props.showMessage(MESSAGES.CONTENT.ERROR, MESSAGES.TYPES.ERROR);
                    })
                    .finally(() => {
                      handleDialogClose(setDialogIsOpen, setSelectedTodoId)();
                    });
                },
              },
            },
          ]}
          content='This action cannot be undone.'
          isOpen={dialogIsOpen}
          onClose={handleDialogClose(setDialogIsOpen, setSelectedTodoId)}
          title='Are you sure?'
        />
      </Grid>
    </Grid>
  );
};

let Page = TodosPage;

Page = withLayout(Page);
Page = withTodos(Page);

export default Page;
