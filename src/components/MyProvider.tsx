import React, {createContext, useState} from "react";


export const MyContext = createContext({} as ContextProps);


export interface StateProps {
    id:number;
    text:String;
    isFinished:boolean;
}

export interface ContextProps {
    todoList: StateProps[];
    changeTodo: (id:number) => void;
    addTodo: (todo:StateProps) => void;
}
const MyProvider = (props: React.PropsWithChildren<{}>) => {

    const [todoList,setTodoList] = useState<StateProps[]>([]);
    const changeTodo = (id:number) => {
        const newTodoList = todoList.map(item => {
            if(item.id === id) {
                item.isFinished = !item.isFinished;
            }
            return item;
        });
        setTodoList(newTodoList);
    };
    const addTodo = (todo:StateProps) => {
        setTodoList([...todoList,todo]);
    };

    return (
        <MyContext.Provider value={
            {
                todoList,changeTodo,addTodo
            }
        }>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider;