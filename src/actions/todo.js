export const Types = {
    LIST_START: 'TODO_LIST_START',
    LIST_OK: 'TODO_LIST_OK',
    UPDATE_START: 'TODO_UPDATE_START',
    UPDATE_OK: 'TODO_UPDATE_OK'
};

export const getTodoList = () => ({
    type: Types.LIST_START
});

export const getTodoListOk = ({ todos }) => ({
    type: Types.LIST_OK,
    payload: {
        todos
    }
});

export const updateTodoItemStart = ({ item }) => ({
    type: Types.UPDATE_START,
    payload: {
        item
    }
});

export const updateTodoItemOk = ({ item }) => ({
    type: Types.UPDATE_OK,
    payload: {
        item
    }
});
