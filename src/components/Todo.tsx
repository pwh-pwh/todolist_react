import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import MyProvider from "./MyProvider";


const Todo = () => {
    console.log('todo invo')
    return (
        <MyProvider>
            <div className="todo">
                <TodoInput />
                <TodoList />
            </div>
        </MyProvider>
    )
}

export default Todo;