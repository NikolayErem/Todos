import { Todo } from "../../../pages/MainContainer/MainContainer";
import { ChangeAllTodosActionSuccess, ChangeOneTodoActionSuccess, CreateTodoActionSuccess, 
    DeleteAllTodosActionSuccess, DeleteOneTodoActionSuccess, SaveTodosActionSuccess, TodosActionsSuccess } from "./subtypeSuccess";

export const saveTodos = (payload: Todo[]): SaveTodosActionSuccess => {
    return {
        type: TodosActionsSuccess.GET_TODOS_SUCCESSED,
        payload,
    };
};

export const createTodo = (payload: Todo): CreateTodoActionSuccess => {
    return {
        type: TodosActionsSuccess.CREATE_TODO_SUCCESSED,
        payload
    };
};

export const changeTodo = (payload: Todo): ChangeOneTodoActionSuccess => {
    return {
        type: TodosActionsSuccess.CHANGE_TODO_SUCCESSED,
        payload,
    };
};

export const deleteTodo = (payload: string): DeleteOneTodoActionSuccess => {
    return {
        type: TodosActionsSuccess.DELETE_TODO_SUCCESSED,
        payload
    };
};

export const compliteAllTodos = (): ChangeAllTodosActionSuccess => {
    return {
        type: TodosActionsSuccess.COMPLITE_ALL_TODOS_SUCCESSED
    };
};

export const deleteAllTodos = (): DeleteAllTodosActionSuccess => {
    return {
        type: TodosActionsSuccess.DELETE_ALL_TODOS_SUCCESSED
    };
};