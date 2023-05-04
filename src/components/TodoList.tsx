import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

const style= {
    marginTop: '20px'
}

/*interface IProps {
    todoList: StateProps[];
    changeTodo: (id:number) => void;
}*/
const TodoList = () => {
    console.log('todolist invo');
    const state = useSelector((state:RootState) => state);
    const todoListdom = state.map(item => <TodoItem key={item.id} todo={item}/>)
    return (
        <div className="todo-list" style={style}>
            {todoListdom}
        </div>
    )
}

export default TodoList;