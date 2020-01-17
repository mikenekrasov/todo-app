import React from "react";

import { RadioButtonUncheckedOutlined as UncheckedIcon,
         CheckCircleOutline as CheckedIcon}  from '@material-ui/icons/';

import "./todo-list-item.css";

const TodoListItem = (props) => {
    const { label, onToggleDone, done } = props;

    let classNames = "todo-list__item";

    if (done) {
        classNames += ' todo-list__item--done';
    }

    return (
            <li
                className={classNames}
                onClick={ onToggleDone }
            >
                { done ? <CheckedIcon/> : <UncheckedIcon/> }
                <span className="todo-list__text">{ label }</span>
            </li>
        )
};

export default TodoListItem;