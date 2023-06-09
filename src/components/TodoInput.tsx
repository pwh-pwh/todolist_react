import React, {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import {addAction} from "../store/action";


/*interface IProps {
    // addTodo: (todo:StateProps) => void
}*/

const TodoInput = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const changeTextHandler = (e: React.ChangeEvent) => {
        setText((e.target as HTMLInputElement).value);
    }
    const addTodoHandler = () => {
        console.log(text);
        dispatch(addAction({
            id: new Date().getTime(),
            text: text,
            isFinished: false,
        }));
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