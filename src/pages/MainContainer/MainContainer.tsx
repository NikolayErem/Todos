import React, { useEffect, Dispatch, SetStateAction } from 'react';
import {  useDispatch, useSelector} from 'react-redux';
import { Main } from '../../components/Main/Main';
import { TodosActionsRequest } from '../../store/actions/todos/subtypeRequest';

export interface Todo {
    text: string,
    isCheck: boolean,
    id: string,
    _id: string
}

export interface TodosProps {
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export function MainContainer(): JSX.Element {
    const dispatch = useDispatch();


    function getTodos(): void {
        dispatch({type: TodosActionsRequest.GET_TODOS_REQUESTED});
    }

    useEffect((): void => {
        getTodos();
    }, []);

    return (
        <>
            <Main />
        </>
    );
}
