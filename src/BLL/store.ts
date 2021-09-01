import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../utils/localstorage-utils';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
/*
import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedTodosString  = localStorage.getItem('app-state')
if(persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer,preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
*/
