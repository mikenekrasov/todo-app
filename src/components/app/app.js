import React, {Component} from "react";

import Alert from "../alert";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import AddListItem from "../add-list-item";

import "./app.css";


export default class App extends Component {
    startId = 50;
    state = {
        todoData: [
            {label: "Покормить собаку", id: 1},
            {label: "Построить дом", id: 2},
            {label: "Помыть машину", id: 3},
            {label: "Купить продукты: молоко, соль, сахар, вода, макароны, мясо, моцарелла", id: 4},
            {label: "Составить список", id: 5}
        ],
        showAlert: false
    };

    AddItem = (text) => {

        const newItem = {
            label: text,
            id: this.startId += 1
        };

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });

    };
    DeleteItem = () => {
        this.setState(({todoData}) => {
            const doneItems = todoData.filter((item) => !item.done);
            return {
                todoData: doneItems
            }
        })
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[index];
            const newItem = {
                ...oldItem, done: !oldItem.done
            };

            const newArray = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newArray
            }
        })
    };
    showAlert = () => {
        this.setState({
            showAlert: true
        })
    };
    removeAlert = () => {
        this.setState({
            showAlert: false
        })
    };

    render() {
        const showAlert = this.state.showAlert;
        return (
            <div className="container d-flex align-items-center flex-column justify-content-center h-100">
                <div className="app">
                    {showAlert ? <Alert/> : null}
                    <AppHeader onDeleteItem={this.DeleteItem}/>
                    <TodoList
                        todos={this.state.todoData}
                        onToggleDone={this.onToggleDone}
                    />
                    <AddListItem
                        onAddItem={this.AddItem}
                        showAlert={this.showAlert}
                        removeAlert={this.removeAlert}
                    />
                </div>
            </div>
        );
    }
};