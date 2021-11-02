import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

interface TaskPageProps{
    history: any,
    location: any,
    match: any,
    staticContext?: undefined
}


export function TaskPage(props: TaskPageProps): JSX.Element {
    console.log(props);
    
    const { pageTask } = props.location;
    
    if(props.location.pageTask){
        return (
            <div className = 'pagetask'>
                <Link to = '/'>
                    Back to Startpage
                </Link>
                <div className = 'pagetask__info'>
                    <h3 className = 'pagetask__title'>
                        {pageTask.text}
                    </h3>
                    <p className = 'pagetask__text'>
                        Status: 
                        <span style = {{color:pageTask.isComplite?'#027BFF':'#DC4535'}}>
                            {pageTask.isComplite ? ' Complited' : ' Not complited'}
                        </span>
                    </p>
                    <p className = 'pagetask__text'>
                        Task ID:&nbsp;
                        <span className = 'pagetask__text_id'>
                            {pageTask.id}
                        </span>
                    </p>
                </div>
            </div>
        );
    } else {
        return (<Redirect to = '/' />);
    }
}