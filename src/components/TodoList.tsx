import React from "react";
import TodoItem from "./TodoItem";
import {StateProps} from "./Todo";

const style= {
    marginTop: '20px'
}

interface IProps {
    todoList: StateProps[];
    changeTodo: (id:number) => void;
}
const TodoList = ({todoList,changeTodo}:IProps) => {
    const todoListdom = todoList.map(item => <TodoItem key={item.id} todo={item} changeTodo={changeTodo}/>)
    return (
        <div className="todo-list" style={style}>
            {todoListdom}
        </div>
    )
}

export default TodoList;