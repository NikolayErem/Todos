import React from 'react';
import { Route, Routes } from 'react-router';
import { MainContainer } from './pages/MainContainer/MainContainer';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';



function App(): JSX.Element {
    
    return (
        <div className='app'>
            <Provider store = {store}>
                <Routes>
                    <Route  path = '/' element={<MainContainer />} />
                    <Route  path = '/task' element={<TaskPage />} />
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
