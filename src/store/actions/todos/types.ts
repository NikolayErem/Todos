import { GetErrortApp, SelectTodoApp, SetRequestApp } from "./subtypeStatus";
import { ChangeAllTodosActionSuccess, ChangeOneTodoActionSuccess, CreateTodoActionSuccess, DeleteAllTodosActionSuccess, DeleteOneTodoActionSuccess, SaveTodosActionSuccess } from "./subtypeSuccess";

export type TodosActionTypes =
SaveTodosActionSuccess |
CreateTodoActionSuccess |
ChangeOneTodoActionSuccess |
DeleteOneTodoActionSuccess |
DeleteAllTodosActionSuccess |
ChangeAllTodosActionSuccess |
GetErrortApp |
SetRequestApp |
SelectTodoApp;