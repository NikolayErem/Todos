import axios from './axiosConfig';
import { Todo } from '../../pages/MainContainer/MainContainer';

enum FetchURL {
    GetAllTodos = '/getAllTasks',
    PostTodo = '/createNewTask',
    PatchTodo = '/compliteTask',
    DeleteTodo = '/deleteTask?id=',
    DeleteAllTodos = '/deteteAllTasks', 
    CompliteAllTodos = '/compliteAllTasks'
}

type responseType = {
    [key: string]: {[key: string]: Todo[]}
}

export class TodosAPI {
    static getTodos = async (): Promise<Todo[] | undefined> => {
        try {
            const returnResponse: responseType = await axios.get(FetchURL.GetAllTodos);      
            return returnResponse.data.data;
        } catch (error: any) {
            console.error(`axios request 'Get Todos' finished error: `, error);
            throw new Error(error);
        }
    };

    static deleteAllTodos = async (): Promise<any> => {
        try {
            await axios.delete(FetchURL.DeleteAllTodos);
        } catch (error: any) {
            console.error(`axios request 'Delete all Todos' finished error`)
            throw new Error(error);
        }
    };

    static compliteAllTodos = async (): Promise<void> => {
        try {
            await axios.patch(FetchURL.CompliteAllTodos);   
        } catch (error: any) {
            console.error(`axios request 'Complite all Todos' finished error: `, error);
            throw new Error(error);
        }
    };

    static createTodo = async (textInput: string): Promise<Todo | undefined> => {
        try {
            const res = await axios.post(FetchURL.PostTodo, {text: textInput});
            return res.data;
        } catch (error: any) {
            console.error(`axios request 'Create Todo' finished error: `, error);
            throw new Error(error);
            
        }
    };

    static compliteTodo = async (todo: Todo): Promise<void> => {
        try {
            await axios.patch(FetchURL.PatchTodo, todo);   
        } catch (error: any) {
            console.error(`axios request 'Complite Todo' finished error: `, error);
            throw new Error(error);
        }
    };

    static deleteTodo = async (todoId: string): Promise<void> => {
        try {
            const deleteUrl = FetchURL.DeleteTodo + todoId;
            await axios.delete(deleteUrl);    
        } catch (error: any) {
            console.error(`axios request 'Delete Todo' finished error: `, error);
            throw new Error(error);
            
        }
    };
}
