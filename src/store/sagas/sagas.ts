import { TodosAPI } from "../../services/API/todosAPI";
import { put, call, takeEvery, all } from 'redux-saga/effects';
import { Todo } from "../../pages/MainContainer/MainContainer";
import { TodosActionsSuccess } from "../actions/todos/subtypeSuccess";
import { TodosActionsRequest } from "../actions/todos/subtypeRequest";
import { AppActions } from "../actions/todos/subtypeStatus";


interface PropsTypeSaga {
    type: string,
    textInput: string,
    todo: Todo,
    todoId: string
}



function* getTodosSaga() {
    try {
        yield put({type: AppActions.SET_REQUEST, });
        const todos: Generator<Todo[]> = yield call(TodosAPI.getTodos);        
        yield put({type: TodosActionsSuccess.GET_TODOS_SUCCESSED, payload: todos});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}

function* createTodoSaga(props: PropsTypeSaga) {
    try{
        yield put({type: AppActions.SET_REQUEST});
        const todo: Generator<Todo> = yield call(TodosAPI.createTodo, props.textInput);
        yield put({type: TodosActionsSuccess.CREATE_TODO_SUCCESSED, payload: todo});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}

function* deleteAllTodoSaga() {
    try {
        yield put({type: AppActions.SET_REQUEST});
        yield call(TodosAPI.deleteAllTodos);
        yield put({type: TodosActionsSuccess.DELETE_ALL_TODOS_SUCCESSED});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}

function* compliteAllTodos() {
    try {
        yield put({type: AppActions.SET_REQUEST});
        yield call(TodosAPI.compliteAllTodos);
        yield put({type: TodosActionsSuccess.COMPLITE_ALL_TODOS_SUCCESSED});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}

function* compliteTodo(props : PropsTypeSaga) {
    const todo: Todo = props.todo;
    try {
        yield put({type: AppActions.SET_REQUEST});
        yield call(TodosAPI.compliteTodo, {...todo, isCheck: !todo.isCheck});
        yield put({type: TodosActionsSuccess.CHANGE_TODO_SUCCESSED, payload: todo});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}

function* deleteTodo(props: PropsTypeSaga) {
    try {
        yield put({type: AppActions.SET_REQUEST});
        yield call(TodosAPI.deleteTodo, props.todoId);
        yield put({type: TodosActionsSuccess.DELETE_TODO_SUCCESSED, payload: props.todoId});
    } catch (error) {
        yield put({type: AppActions.GET_ERROR, payload: error});
    }
}


export default function* rootSaga() { 
    yield all([
        takeEvery(TodosActionsRequest.GET_TODOS_REQUESTED, getTodosSaga),
        takeEvery(TodosActionsRequest.CREATE_TODO_REQUESTED, createTodoSaga),
        takeEvery(TodosActionsRequest.DELETE_ALL_TODOS_REQUESTED, deleteAllTodoSaga),
        takeEvery(TodosActionsRequest.COMPLITE_ALL_TODOS_REQUESTED, compliteAllTodos),
        takeEvery(TodosActionsRequest.CHANGE_TODO_REQUESTED, compliteTodo),
        takeEvery(TodosActionsRequest.DELETE_TODO_REQUESTED, deleteTodo)
    ])
}
