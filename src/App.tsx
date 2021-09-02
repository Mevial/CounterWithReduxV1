import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incDisplayValueAC, incValueAC, resetValueAC, setValuesAC} from "./BLL/counter-reducer";
import styles from './App.module.css'
import {StartInput} from "./input/StartInput";
import {MaxInput} from "./input/MaxInput";
import {Display} from "./display/Display";
import {Button} from "./button/Button";

function App() {
    //-------------------------------------------------------------------------------
    // const [maxCount, setMaxCount] = useState(0)
    // const [startCount, setStartCount] = useState(0)
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<boolean>(false)
    // const [displayValue, setDisplayValue] = useState(0);


    ///---------------------------------------------------------------------------------------------------------------
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const displayValue = useSelector<AppStateType, number>(state => state.counter.displayValue)
    const startCount = useSelector<AppStateType, number>(state => state.counter.startCount)
    const maxCount = useSelector<AppStateType, number>(state => state.counter.maxCount)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }
    //------------------------------------------------------------------------------------------------------------------

    const incValue = () => {
        dispatch(incDisplayValueAC())
        // setDisplayValue(displayValue + 1);
        // console.log(displayValue)
        // if (displayValue >= maxCount) {
        //     setDisplayValue(maxCount)
        // }
    }
    const resetValue = () => {
        dispatch(resetValueAC())
        // setDisplayValue(startCount);
    }

    const setValue = () => {
dispatch(setValuesAC())
        // setMessage(false)
        // setError(false)
        // setDisplayValue(startCount)
    }

    const addStartCount = (value: number) => {
        setMessage(true)
        if (value > maxCount || value < 0 || value === maxCount) {
            setError(true)
        } else {
            setError(false)
        }
        // setStartCount(value)
    }

    const addMaxCount = (value: number) => {
        setMessage(true)
        if (value < 0 || value < startCount || value === startCount) {
            setError(true)
        } else {
            setError(false)
        }
        // setMaxCount(value)
    }
    //-------------------------------------------------------------------------------------------
    return (
        <div className={styles.App}>
            <div className={styles.Block}>
                <div className={styles.display}>
                <StartInput text={'start value:'}
                            addStartCount={addStartCount}
                            startCount={startCount}
                            error={error}
                            // setStartCount={setStartCount}
                />
                <MaxInput text={'max value:'}
                          addMaxCount={addMaxCount}
                          maxCount={maxCount}
                          error={error}/>
                </div>
                <div className={styles.counter}>
                    <Button
                        text={'set'}
                        callback={setValue}
                        disabled={false}
                        // disabled={(maxCount < 0 || startCount === maxCount || startCount < 0 || startCount > maxCount || !message)}
                    />
                    <button onClick={incHandler}>inc</button>
                </div>
            </div>
            <div className={styles.Block}>
                <div className={styles.display}>
                    <Display displayValue={displayValue} maxValue={maxCount} error={error} message={message}/>
                    <h1>{value}</h1>

                </div>
                <div className={styles.counter}>
                    <Button
                        text={'inc'}
                        disabled={false}
                        // disabled={message || maxCount === displayValue}
                        callback={incValue}
                    />
                    <Button
                        text={'res'}
                        callback={resetValue}
                        disabled={false}
                        // disabled={startCount === displayValue || maxCount < 0 || startCount < 0 || startCount > maxCount || startCount > displayValue || message}
                    />
                </div>
            </div>
        </div>

    );
}

export default App;
