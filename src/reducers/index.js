import { combineReducers } from 'redux';
import TodoReducer from './todo';

export default combineReducers({
    todos: TodoReducer
});
