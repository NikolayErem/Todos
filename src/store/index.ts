import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import todosReducer from './reducers/todosReducer';
import rootSaga from './sagas/sagas';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(todosReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;