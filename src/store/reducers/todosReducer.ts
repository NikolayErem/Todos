import { Todo } from '../../pages/MainContainer/MainContainer';
import { AppActions } from '../actions/todos/subtypeStatus';
import { TodosActionsSuccess } from '../actions/todos/subtypeSuccess';
import { TodosActionTypes } from '../actions/todos/types';
import { appState, appStateHandler, RequestStatus } from '../appState';

export type TodosStateType = appState & {
    todos: Todo[],
    selectedTodo?: Todo,
    messageToUser?: string
};

const todosInitialState: TodosStateType = {
    todos: [],
    selectedTodo: undefined,
    isLoading: false,
    isSuccess: false,
    isError: false,
    messageToUser: undefined
};

export default function todosReducer(state = todosInitialState, action: TodosActionTypes): TodosStateType {
    switch(action.type) {
        case AppActions.SET_REQUEST:
           return {...state, ...appStateHandler(RequestStatus.Loading)};
        case TodosActionsSuccess.GET_TODOS_SUCCESSED:
            return {...state, todos: [...action.payload], ...appStateHandler(RequestStatus.Success)};
        case TodosActionsSuccess.CREATE_TODO_SUCCESSED:
            return {...state, todos: [...state.todos, action.payload], ...appStateHandler(RequestStatus.Success)};
        case TodosActionsSuccess.CHANGE_TODO_SUCCESSED:
            state.todos.forEach((todo) => {
                if(todo.id === action.payload.id) {
                    todo.isCheck = !todo.isCheck;
                };
            })
            return {...state, todos: [...state.todos], ...appStateHandler(RequestStatus.Success)};
        case TodosActionsSuccess.DELETE_TODO_SUCCESSED:
            const filterTodos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
            return {...state, todos: [...filterTodos], ...appStateHandler(RequestStatus.Success)};
        case TodosActionsSuccess.DELETE_ALL_TODOS_SUCCESSED:
            return {...state, todos: [], ...appStateHandler(RequestStatus.Success)};
        case TodosActionsSuccess.COMPLITE_ALL_TODOS_SUCCESSED:
            state.todos.forEach((todo) => {
                todo.isCheck = true;
            });
            return {...state, todos: [...state.todos], ...appStateHandler(RequestStatus.Success)};
        case AppActions.GET_ERROR:{
            return {...state, ...appStateHandler(RequestStatus.Error), messageToUser: `Sorry, an error has occurred in the app. ${action.payload.message}`};
        }
        case AppActions.SELECT_TODO:
            return {...state, selectedTodo: {...action.payload}};
        default: 
            return state;
    }   
}