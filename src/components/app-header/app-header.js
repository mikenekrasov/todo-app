import React from "react";

import { Delete } from '@material-ui/icons';

import "./app-header.css";

const AppHeader = ({onDeleteItem}) => {
    return (
        <div className = "d-flex justify-content-between">
            <h6>TODO List</h6>
            <Delete className="delete-icon" onClick={ onDeleteItem }/>
        </div>
    )
};

export default AppHeader;