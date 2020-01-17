import React from "react";
import TodoListItem from "../todo-list-item/";

import "./todo-list.css";

const TodoList = ({ todos, onToggleDone }) => {
    const items = todos.map((item) => {
        const { id } = item;
        return (
            <TodoListItem
                key={item.id}
                {...item}
                onToggleDone={() => onToggleDone(id)}
            />
        );
    });

    return (
        <ul className="todo-list">
            { items }
        </ul>
    );
};

export default TodoList;