const initialState = {
    displayValue: 0,
    startCount: 0,
    maxCount: 0
}

type InitialStateType = typeof initialState
type ActionType =
    IncDisplayValueActionType
    | SetDisplayValueFromLocalStorageAC
    | ResetValueActionType
    | SetResetValueFromLocalStorageActionType
    | SetValuesActionType
    | SetValuesFromLocalStorageActionType
    | AddMaxValueActionType
    | SetMaxValueFromLocalStorageActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "DISPLAY-VALUE":
            return {
                ...state, displayValue: state.displayValue + 1
            }
        case "SET-DISPLAY-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, displayValue: action.displayValue
            }
        case "RESET-VALUE":
            return {
                ...state, startCount: state.startCount
            }
        case "SET-RESET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, startCount: action.startCount
            }
        case "SET-VALUES":
            return {
                ...state,
                startCount: action.startCount,
                maxCount: action.maxCount
            }
        case "SET-VALUES-FROM-LOCAL-STORAGE":
            return {
                ...state,
                startCount: action.startCount,
                maxCount: action.maxCount
            }
        case "ADD-MAX-VALUE":
            return {
                ...state,
                maxCount: state.maxCount
            }
        case "SET-MAX-VALUE-LOCAL-STORAGE":
            return {
                ...state,
                maxCount: action.maxCount
            }
        default:
            return state
    }
}

export const incDisplayValueAC = () => ({type: 'DISPLAY-VALUE'} as const)
export const setDisplayValueFromLocalStorageAC = (displayValue: number) => ({
    type: 'SET-DISPLAY-VALUE-FROM-LOCAL-STORAGE',
    displayValue
} as const)

export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setResetValueFromLocalStorageAC = (startCount: number) => ({
    type: 'SET-RESET-VALUE-FROM-LOCAL-STORAGE',
    startCount
} as const)

export const setValuesAC = (maxCount: number, startCount: number) => ({
    type: 'SET-VALUES',
    maxCount,
    startCount
} as const)
export const setValuesFromLocalStorageAC = (startCount: number, maxCount: number) => ({
    type: 'SET-VALUES-FROM-LOCAL-STORAGE',
    startCount,
    maxCount
} as const)

export const addMaxValueAC = (maxCount: number) => ({
    type: 'ADD-MAX-VALUE',
    maxCount,
} as const)
export const setMaxValueFromLocalStorageAC = (maxCount: number) => ({
    type: 'SET-MAX-VALUE-LOCAL-STORAGE',
    maxCount
} as const)


export type IncDisplayValueActionType = ReturnType<typeof incDisplayValueAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type SetValuesActionType = ReturnType<typeof setValuesAC>
export type AddMaxValueActionType = ReturnType<typeof addMaxValueAC>

export type SetDisplayValueFromLocalStorageAC = ReturnType<typeof setDisplayValueFromLocalStorageAC>
export type SetResetValueFromLocalStorageActionType = ReturnType<typeof setResetValueFromLocalStorageAC>
export type SetValuesFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorageAC>
export type SetMaxValueFromLocalStorageActionType = ReturnType<typeof setMaxValueFromLocalStorageAC>


// THUNK
// export const incValuesTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
//     let currentValue = getState().counter.value
//     localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
//     dispatch(incValueAC())
// }
//
//
// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     let valueAsString = localStorage.getItem('counterValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setValueFromLocalStorageAC(newValue))
//     }
// }

