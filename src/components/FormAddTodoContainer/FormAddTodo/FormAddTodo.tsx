interface FormAddTodoProps {
    textInput: string,
    setTextInput(inputText: string): void,
    createTodo(): Promise<void>
}

export function FormAddTodo( { textInput, setTextInput, createTodo}: FormAddTodoProps): JSX.Element {


    return (
        <>
            <h4 className = 'subtitle'>Add a task</h4>
            <div className = 'form__field'>
                <p>Item</p>
                <input 
                    type = "text"
                    className = 'form__input'
                    placeholder = 'What do you want to do?'
                    value = {textInput} 
                    onChange = {(event): void => {setTextInput(event.target.value);}}
                />
                <p>Enter what you want to procastinate</p>
                <button 
                    onClick = {createTodo} 
                    className = 'btn_blue' 
                    disabled = {textInput ? false : true} 
                    style={{backgroundColor: textInput ? '#027BFF' : 'gray'}} 
                >
                    Submit
                </button>
            </div>
        </>
    );
}