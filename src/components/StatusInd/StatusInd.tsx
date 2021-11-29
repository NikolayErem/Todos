import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TodosStateType } from "../../store/reducers/todosReducer"

export function StatusInd (): JSX.Element {
    
    const state = useSelector((state: TodosStateType)=> {
        return {
            isLoading: state.isLoading,
            isSuccess: state.isSuccess,
            isError: state.isError,
            messageToUser: state.messageToUser
        }
    })

    if(state.isSuccess) {
        return <div style = {{color: 'green'}}>Success</div>
    } else if (state.isLoading) {
        return (
            <div>
                Loading
                <img src = './Spinner.svg' style={{width: '20px'}} />
            </div>
        )
    } else if (state.isError) {
        return <div style = {{color: 'red'}}>{`${state.messageToUser}`}</div>
    } else {
        return <div></div>
    }

}