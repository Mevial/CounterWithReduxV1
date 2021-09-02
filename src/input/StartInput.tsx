import React from "react";
import styles from './StartInput.module.css'

type InputPropsType = {
    text: string
    startCount: number
    addStartCount: (value: number) => void
    error?: boolean

}

export const StartInput: React.FC<InputPropsType> = (props) => {

    const changeHandler = (value: number) => {
        props.addStartCount(value)
    }


    // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let startValue = e.currentTarget.valueAsNumber
    //     props.addStartCount(startValue)
    // }

    return (
        <div className={styles.superInput}>{props.text}
            <input
                className={props.error ? styles.errorStart : ""}
                type="number" onChange={(e) => changeHandler(+e.currentTarget.value)}
                value={props.startCount}/>
        </div>

    )

}