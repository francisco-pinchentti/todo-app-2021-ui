import axios from 'axios';

export const getTodos = () => {
    return axios.get('/todos', {
        params: {
            limit: 1000
        }
    });
};

export const putTodoItem = (item) => {
    return axios.put(`/todos/${item.rowid}`, item);
};
