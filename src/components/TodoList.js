import React from 'react';
import TaskTodo from './TaskTodo';
import TaskStatus from './TaskStatus';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    }

    handleChangeStatus(event, index) {
        this.props.onHandleChangeStatus(event, index);
    }

    handleSubmitStatus(event) {
        this.props.onHandleSubmitStatus(event);
    }

    render() {
        const todoList = [];

        this.props.todos.forEach((todo, index) => {
            todoList.push(
                <li key={ todo.id }>
                    <TaskTodo todoo={ todo.todo } onHandleChangeStatus={ this.handleChangeStatus } onHandleSubmitStatus={ this.handleSubmitStatus } />
                    <TaskStatus name = { todo.todo } index={ this.props.index } onHandleChangeStatus={ this.handleChangeStatus } statusValue={ this.props.statusValue} onHandleSubmitStatus={ this.handleSubmitStatus } />
                </li>
            );
        });

        return(
            <ul>{ todoList }</ul>
        );
    }
}

export default TodoList; 
