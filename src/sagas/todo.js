import { takeEvery, takeLatest, take, call, put, fork } from 'redux-saga/effects';

import * as actions from '../actions/todo';
import * as api from '../api/todo';

function* getTodos() {
    try {
        const result = yield call(api.getTodos);
        const { todos } = result.data;
        yield put(actions.getTodoListOk({
            todos
        }));
    } catch (e) {
        console.log(e);
    }
}

function* watchGetTodos() {
    yield takeEvery(actions.Types.LIST_START, getTodos);
}

function* updateTodo({ item }) {
    try {
        const result = yield call(api.putTodoItem, item);
        yield put(actions.updateTodoItemOk({
            item: result.data
        }));
    } catch (e) {
        console.log(e);
    }
}

function* watchUpdateTodo() {
    while (true) {
        const { payload } = yield take(actions.Types.UPDATE_START);
        yield call(updateTodo, payload);
    }}

const sagas = [
    fork(watchGetTodos),
    fork(watchUpdateTodo)
];

export default sagas;
