import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const READ_TODO = gql`
  query ReadTodo($id: ID) {
    readTodo(ID: $id) {
      ID
      Name
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($name: String!) {
    addTodo(Name: $name) {
      ID
      Name
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $name: String!) {
    updateTodo(ID: $id, Name: $name) {
      ID
      Name
    }
  }
`;

const DELETE_TODO  = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(ID: $id) {
      ID
    }
  }
`;

export const readTodoQuery = options => {
  return useQuery(READ_TODO, { ...options });
};

export const addTodoMutation = options => {
  return useMutation(
    ADD_TODO,
    {
      update(cache, { data: { addTodo } }) {
        const { readTodo } = cache.readQuery({ query: READ_TODO });

        cache.writeQuery({
          query: READ_TODO,
          data: { readTodo: readTodo.concat([addTodo]) },
        });
      },
      ...options,
    }
  );
};

export const updateTodoMutation = options => {
  return useMutation(
    UPDATE_TODO,
    {
      update(cache, { data: { updateTodo } }) {
        const { readTodo } = cache.readQuery({ query: READ_TODO });

        cache.writeQuery({
          query: READ_TODO,
          data: {
            readTodo: readTodo.map(todo => {
              if (todo.ID === updateTodo.ID) {
                return updateTodo;
              }
              return todo;
            }),
          },
        });
      },
      ...options,
    },
  );
};

export const deleteTodoMutation = options => {
  return useMutation(
    DELETE_TODO,
    {
      update(cache, { data: { deleteTodo } }) {
        const { readTodo } = cache.readQuery({ query: READ_TODO });

        cache.writeQuery({
          query: READ_TODO,
          data: {
            readTodo: readTodo.filter(todo => todo.ID !== deleteTodo.ID),
          },
        });
      },
      ...options,
    }
  );
};
