import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incValueAC} from "./BLL/counter-reducer";

function App() {
    const value = useSelector<AppStateType, number>(state => state.counter.value)
const dispatch = useDispatch()
    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className="App">
            ТУТ БУДЕТ СЧЕТЧИК

            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
