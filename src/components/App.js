import { Component } from 'react';
import { connect } from 'react-redux';
import { getTodoList } from '../actions/todo';
import TodoListGroup from './TodoListGroup';

class App extends Component {
  
  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    return (
      <main className="p-4">
        <h1>ToDo ReactSaga</h1>
        <TodoListGroup todos={this.props.todos || []}></TodoListGroup>
      </main>
    );
  }

}

const mapStateToProps = ({ todos }) => {
  return {
    todos: todos.todos
  }
}

export default connect(mapStateToProps, {
  getTodoList
})(App);
