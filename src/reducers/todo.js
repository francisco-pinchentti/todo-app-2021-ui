import { Types  as TodoActionTypes } from '../actions/todo';

const INITIAL_STATE = {
    todos: []
};

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TodoActionTypes.LIST_OK:
            return {
                ...state,
                todos: action.payload.todos
            };
        case TodoActionTypes.UPDATE_OK:
            const idx = state.todos.findIndex(t => t.rowid === action.payload.item.rowid);
            if (idx === -1) {
                return state;
            } else {
                const todos = [...state.todos.slice(0, idx), action.payload.item, ...state.todos.slice(idx+1)];
                return {
                    ...state,
                    todos
                };
            }
        case TodoActionTypes.DELETE_OK:
            const todos = state.todos.filter( t => t.rowid === action.payload.itemId);
            return {
                ...state,
                todos
            }
        default:
            return state;
    }
}

