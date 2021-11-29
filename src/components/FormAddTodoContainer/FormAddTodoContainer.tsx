import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodosActionsRequest } from '../../store/actions/todos/subtypeRequest';
import { FormAddTodo } from './FormAddTodo/FormAddTodo';

export function FormAddTodoContainer(): JSX.Element {
    const [textInput, setTextInput] = useState<string>('');
    const dispatch = useDispatch();

    async function createTodo(): Promise<void> {
        if (textInput.trim()) {
            dispatch({type: TodosActionsRequest.CREATE_TODO_REQUESTED, textInput});
            setTextInput('');
        } else {
            setTextInput('');
        }
    }

    return (
        <div className = 'form'>
            <FormAddTodo
                textInput = {textInput}
                setTextInput = {setTextInput}
                createTodo = {createTodo}
            />
        </div>
    );
}
