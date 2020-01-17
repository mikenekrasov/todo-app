import React from "react";
import TodoListItem from "../todo-list-item/";

import "./todo-list.css";

const TodoList = ({ todos, onToggleDone }) => {
    const items = todos.map((item) => {
        const { id } = item;
        return (
            <TodoListItem
                {...item}
                key={item.id}
                onToggleDone={onToggleDone(id)}
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
