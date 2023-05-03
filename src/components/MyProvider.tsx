import React, {createContext, useReducer} from "react";
import reducer, {ActionProps} from "../store/reducer";
import {StateProps} from "../store/reducer";

export const MyContext = createContext({} as ContextProps);




export interface ContextProps {
    state: StateProps[];
    dispatch: React.Dispatch<ActionProps>
}
const MyProvider = (props: React.PropsWithChildren<{}>) => {
    const initState:StateProps[] = [];
    const [state,dispatch] = useReducer(reducer,initState);


    return (
        <MyContext.Provider value={
            {
                state,dispatch
            }
        }>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider;