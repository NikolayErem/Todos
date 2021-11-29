import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Todo } from '../MainContainer/MainContainer';
import { TodosStateType } from '../../store/reducers/todosReducer';
import { Link } from 'react-router-dom';



export function TaskPage(): JSX.Element {
    const todo: Todo | undefined = useSelector((state: TodosStateType) => state.selectedTodo);

    if(todo) {
        return (
            <div className = 'pagetask'>
                <Link to = '/'>
                    Back to Startpage
                </Link>
                <div className = 'pagetask__info'>
                    <h3 className = 'pagetask__title'>
                        {todo.text}
                    </h3>
                    <p className = 'pagetask__text'>
                        Status: 
                        <span style = {{color: todo.isCheck ? '#027BFF' : '#DC4535'}}>
                            {todo.isCheck ? ' Complited' : ' Not complited'}
                        </span>
                    </p>
                    <p className = 'pagetask__text'>
                        Task ID:&nbsp;
                        <span className = 'pagetask__text_id'>
                            {todo.id}
                        </span>
                    </p>
                </div>
            </div>
        );
    } else {
        return (<Navigate to = '/' />);
    }
}






















































// interface TaskPageProps{
//     history: {[key: string]: any},
//     location: {[key: string]: any},
//     match: {[key: string]: any},
//     staticContext: undefined | string
// }

// export function TaskPage(props: TaskPageProps): JSX.Element {
    
//     const pageTask: PageTaskType = props.location.pageTask;
    
//     if(pageTask) {
//         return (
//             <div className = 'pagetask'>
//                 <Link to = '/'>
//                     Back to Startpage
//                 </Link>
//                 <div className = 'pagetask__info'>
//                     <h3 className = 'pagetask__title'>
//                         {pageTask.text}
//                     </h3>
//                     <p className = 'pagetask__text'>
//                         Status: 
//                         <span style = {{color: pageTask.isCheck ? '#027BFF' : '#DC4535'}}>
//                             {pageTask.isCheck ? ' Complited' : ' Not complited'}
//                         </span>
//                     </p>
//                     <p className = 'pagetask__text'>
//                         Task ID:&nbsp;
//                         <span className = 'pagetask__text_id'>
//                             {pageTask.id}
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         );
//     } else {
//         return (<Navigate to = '/' />);
//     }
// }