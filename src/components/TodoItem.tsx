import React, {useContext} from "react";
import {MyContext, StateProps} from "./MyProvider";

const style = {
    marginTop: '5px',
    padding: '5px 0',
    boxShadow: '0 0 3px #eee',
}

interface IProps {
    todo: StateProps;
    // changeTodo: (id:number) => void;
}
const TodoItem = ({todo}: IProps) => {
    let {changeTodo} = useContext(MyContext);
    const changeHandler = () => {
        changeTodo(todo.id);
    };
    const spanStyle = {
        textDecoration: todo.isFinished ? 'line-through' : 'none'
    }
    return (
        <div className="todo-item" style={style}>
            <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
            <span style={spanStyle}>{todo.text}</span>
        </div>
    )
}

export default TodoItem;