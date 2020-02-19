import React from 'react';
import { readTodoQuery } from '../../graphql/todo';

const withTodos = WrappedComponent => {
  const TodosProvider = props => {
    const todos = readTodoQuery();

    return (
      <WrappedComponent { ...{ ...props, todos } } />
    );
  };

  return TodosProvider;
};

export default withTodos;
