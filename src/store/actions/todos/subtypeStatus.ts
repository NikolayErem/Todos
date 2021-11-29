import { Todo } from "../../../pages/MainContainer/MainContainer"

export enum AppActions{
    SET_REQUEST = 'SET_REQUESTED',
    GET_ERROR = 'GET_ERROR',
    SELECT_TODO = 'SELELCT_TODO'
}

export type SetRequestApp = {
    type: AppActions.SET_REQUEST
}

export type GetErrortApp = {
    type: AppActions.GET_ERROR,
    payload: any
}

export type SelectTodoApp = {
    type: AppActions.SELECT_TODO,
    payload: Todo
}