import React from "react";
import styles from './MaxInput.module.css'
type InputPropsType = {
    text: string
    addMaxCount: (value: number) => void
    maxCount: number
    error?: boolean
}

export const MaxInput: React.FC<InputPropsType> = (props) => {

    const changeHandler = (value: number) => {
        props.addMaxCount(value)
    }

    return (
        <div className={styles.superInput}>{props.text}
            <input
                className={props.error ? styles.errorMax : ""}
                type="number" onChange={(e) => changeHandler(+e.currentTarget.value)}
                value={props.maxCount}/>
        </div>

    )

}