import React from 'react';
import styles from './Display.module.css'
export type DisplayPropsType = {
    displayValue: number
    maxValue: number
    message?: boolean
    error?: boolean
}
export function Display(props: DisplayPropsType) {
    let messageText = (props.error) ? 'Incorrect value!' : 'enter values and press set'
    return (
        <div className={props.displayValue === props.maxValue ? styles.DisplayNum + '' +  styles.DisplayRed : styles.DisplayNum}>
            {props.message ? messageText : props.displayValue}
        </div>
    );
}

