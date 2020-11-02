import React from 'react';
import TaskTodo from './TaskTodo';


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    }

    handleChangeStatus(event) {
        this.props.onHandleChangeStatus(event);
    }

    handleSubmitStatus(event) {
        this.props.onHandleSubmitStatus(event);
    }

    render() {
        const todoList = [];

        this.props.todos.forEach((todo) => {
            todoList.push(
                <TaskTodo todoo={ todo } key={ todo.id }  onHandleChangeStatus={ this.handleChangeStatus } statusValue={ this.props.statusValue } onHandleSubmitStatus={ this.handleSubmitStatus } />
            );
        });

        

        return(
            <ul>{ todoList }</ul>
        );
    }
}

export default TodoList; 
