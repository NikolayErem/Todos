import { Todo } from "../../../pages/MainContainer/MainContainer"

export enum TodosActionsSuccess{
    GET_TODOS_SUCCESSED = 'GET_TODOS_SUCCESSED',
    CREATE_TODO_SUCCESSED = 'CREATE_TODO_SUCCESSED',
    DELETE_TODO_SUCCESSED = 'DELETE_TODO_SUCCESSED',
    CHANGE_TODO_SUCCESSED = 'COMPLITE_TODO_SUCCESSED',
    COMPLITE_ALL_TODOS_SUCCESSED = 'COMPLITE_ALL_TODOS_SUCCESSED',
    DELETE_ALL_TODOS_SUCCESSED = 'DELETE_ALL_TODOS_SUCCESSED'
}

export type SaveTodosActionSuccess = {
    type: TodosActionsSuccess.GET_TODOS_SUCCESSED,
    payload: Todo[],
}

export type CreateTodoActionSuccess = {
    type: TodosActionsSuccess.CREATE_TODO_SUCCESSED,
    payload: Todo,
}

export type ChangeOneTodoActionSuccess = {
    type: TodosActionsSuccess.CHANGE_TODO_SUCCESSED,
    payload: Todo,
}

export type DeleteOneTodoActionSuccess = {
    type: TodosActionsSuccess.DELETE_TODO_SUCCESSED,
    payload?: string,
}

export type DeleteAllTodosActionSuccess = {
    type: TodosActionsSuccess.DELETE_ALL_TODOS_SUCCESSED,
    payload?: Todo,
}

export type ChangeAllTodosActionSuccess = {
    type: TodosActionsSuccess.COMPLITE_ALL_TODOS_SUCCESSED,
    payload?: Todo,
}
