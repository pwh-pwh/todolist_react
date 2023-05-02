import React, {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


export interface StateProps {
    id:number;
    text:String;
    isFinished:boolean;
}

const Todo = () => {
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
        <div className="todo">
            <TodoInput addTodo={addTodo}/>
            <TodoList todoList={todoList} changeTodo={changeTodo}/>
        </div>
    )
}

export default Todo;