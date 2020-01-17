import React, {Component} from "react";

import {Add as AddIcon} from '@material-ui/icons';

import "./add-list-item.css";

export default class AddListItem extends Component {

    state = {
        typed: ""
    };

    onInputChange = (e) => {
        this.setState({
            typed: e.target.value
        })
    };

    handleSubmit = () => {
        if (this.state.typed.length !== 0 && this.state.typed.length >= 3 ) {
            this.props.removeAlert();
            this.props.onAddItem(this.state.typed);
            this.setState({
                typed:""
            })
        } else {
            this.setState({
                typed:""
            });
            this.props.showAlert()
        }
    };

    onEnterPressed = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    };
    formatInput = (e) => {
        this.setState({
            typed: e.target.value.trim()
        })
    };

    render() {
        return (
            <div className="add-list-item d-flex align-items-center">
                <button className="add-btn">
                    <AddIcon className="add-icon"
                             onClick={this.handleSubmit}/>
                </button>
                <input type="text"
                       className="input-field form-control"
                       onBlur={this.formatInput}
                       onChange={this.onInputChange}
                       onKeyPress={this.onEnterPressed}
                       value={this.state.typed}
                />
            </div>
        )
    }

};
