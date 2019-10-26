import React from 'react';
import {connect} from 'react-redux';
import {AppProps} from '../../interfaces/AppProps';
import {addTodo, removeTodo} from '../../redux/ducks/todos';
import {ScreenDefaultProps} from '../../interfaces/ScreenProps';

const withTodos = (WrappedComponent: Function) => {
  const mapStateToProps = (state: AppProps) => {
    return {
      todos: state.todos,
    };
  };
  const mapDispatchToProps = {
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  const TodoComponent = (props: ScreenDefaultProps) => (
    <WrappedComponent {...props} />
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoComponent);
};

export default withTodos;
