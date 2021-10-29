import { useState } from "react"
import { Todo } from "../../pages/Main/Main";

interface FormAddTodoProps {
  createTodo(todo: Todo): void
}

export function FormAddTodo({ createTodo }: FormAddTodoProps): JSX.Element {
    const [textInput, setTextInput] = useState<string>('');

    function getInputText(inputText: string): void {
        setTextInput(inputText);
    }

    function createTodoHandler(): void {
        if (textInput.trim()) {
          const newTodo: Todo = {
            text: textInput,
            isComplite: false,
            id: new Date().getTime()
          }

          createTodo(newTodo);
        }

        setTextInput('');
    }

    return (
        <div className = 'form'>
            <h4 className = 'subtitle'>Add a task</h4>
            <div className = 'form__field'>
                <p>Item</p>
                <input 
                    type = "text"
                    className = 'form__input'
                    placeholder = 'What do you want to do?'
                    value = {textInput} 
                    onChange = {(event) => {getInputText (event.target.value)}} 
                />
                <p>Enter what you want to procastinate</p>
                <button onClick={createTodoHandler} className = 'btn_blue'>
                    Submit
                </button>
            </div>
        </div>
    )
}