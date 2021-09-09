import React from 'react';
import { ListGroup } from 'reactstrap';
import TodoListGroupItem from './TodoListItem';

const TodoListGroup = (props) => {
  return (
    <ListGroup>
      {props.todos.map( t => <TodoListGroupItem key={t.rowid} model={t}></TodoListGroupItem>)}
    </ListGroup>
  );
}

export default TodoListGroup;
