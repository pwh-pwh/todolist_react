import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import {MyContext} from "./MyProvider";

const style= {
    marginTop: '20px'
}

/*interface IProps {
    todoList: StateProps[];
    changeTodo: (id:number) => void;
}*/
const TodoList = () => {
    const {todoList} = useContext(MyContext);
    const todoListdom = todoList.map(item => <TodoItem key={item.id} todo={item}/>)
    return (
        <div className="todo-list" style={style}>
            {todoListdom}
        </div>
    )
}

export default TodoList;