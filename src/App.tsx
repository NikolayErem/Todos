import React from 'react';
import { Route, Switch } from 'react-router';
import { Main } from './pages/Main/Main';
import { TaskPage } from './pages/TaskPage/TaskPage';
import './App.css'; 

function App(): JSX.Element {
    return (
        <div className='app'>
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route path = '/task' component = {TaskPage} />
            </Switch>
        </div>
    );
}

export default App;
