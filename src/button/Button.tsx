import React from 'react';
import styles from './Button.module.css'
type ButtonPropsType = {
    text: string,
    disabled: boolean
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button className={styles.button_counter} disabled={props.disabled}
    onClick={props.callback}>{props.text}
        </button>

        </div>
);
}