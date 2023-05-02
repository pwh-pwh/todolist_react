import React, {useState} from "react";
import {StateProps} from "./Todo";

interface IProps {
    addTodo: (todo:StateProps) => void
}

const TodoInput = ({addTodo}:IProps) => {
    const [text,setText] = useState('');
    const changeTextHandler = (e: React.ChangeEvent) => {
        setText((e.target as HTMLInputElement).value);
    }
    const addTodoHandler = () => {
        console.log(text);
        addTodo({
            id: new Date().getTime(),
            text: text,
            isFinished: false,
        });
        setText('');
    };
    return (
        <div className="todo-input">
            <input type="text" placeholder="请输入代办事件" onChange={changeTextHandler} value={text}/>
            <button onClick={addTodoHandler}>添加</button>
        </div>
    )
}

export default TodoInput;